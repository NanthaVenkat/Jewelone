import mysql from "mysql2/promise";

// MySQL Connection Settings
const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || 'vn55t',
    password: process.env.DB_PASSWORD || '9r5[u5Wxo)M3ncbw',
    database: process.env.DB_NAME || "jewelone",
};

import dbConnect from "./db.js";
import MetalRate from "@/models/MetalRate.js";
import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from 'next/cache';

/**
 * Get current metal rate with fallback logic
 * 1. Try DB (MongoDB)
 * 2. Try JSON file (local fallback)
 * 3. Try External API (last resort)
 */

export async function getMetalRates() {

    noStore(); // Opt out of static caching for this data function
    try {
        const connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute(
            "SELECT * FROM metal_rates ORDER BY id DESC LIMIT 1"
        );

        await connection.end();

        if (rows.length > 0) {
            const latest = rows[0];
            // 🔥 Return raw datetime (no timezone conversion!)
            latest.updated = latest.updated_manual;
            return latest;
        }

    } catch (error) {
        // Log the error code if available, otherwise the message
        const errorDetail = error.code || error.message || "Unknown Error";
        console.warn(`Local DB Error (${errorDetail}), falling back to external API`);
    }

    // 2. Fallback to external API
    try {
        const fallbackUrl = "https://ejindia.com/wp-json/metal/v1/rates";
        await dbConnect();

        // 1. Try MongoDB
        const latest = await MetalRate.findOne().sort({ createdAt: -1 }).lean();

        if (latest) {
            // Mongoose results are plain JS objects if using lean(), otherwise documents.
            // We want to return something shaped like:
            // { gold_22, gold_18, gold_14, platinum, silver, updated_manual, updated }

            // Ensure updated is set correctly for display logic
            // The existing display logic might expect `updated` as the main date string.
            // In the original code it did: latest.updated = latest.updated_manual;
            // Let's preserve that behavior.

            const formatted = {
                ...latest,
                updated: latest.updated_manual || latest.updated,
                isVisible: latest.isVisible !== undefined ? latest.isVisible : true,
            };

            console.log("✅ Metal rates fetched from MongoDB:", formatted);
            return formatted;
        } else {
            console.warn("⚠️ No metal rates found in MongoDB, falling back to JSON file");
        }

    } catch (error) {
        console.error("❌ MongoDB Error Details:", error); // Log the full error
        console.error("❌ MongoDB Error Message:", error.message);
        console.error("❌ MongoDB Error Stack:", error.stack);

        console.error("❌ MongoDB Error Summary:", {
            message: error.message || "No error message",
            fallback: "Using JSON file or external API"
        });
    }

    // 2. Try to load from JSON file (fallback)
    try {
        const projectRoot = process.cwd();
        const metalRatesFile = path.join(projectRoot, "metal-rates.json");

        if (fs.existsSync(metalRatesFile)) {
            const fileData = fs.readFileSync(metalRatesFile, "utf-8");
            const data = JSON.parse(fileData);
            console.log("✅ Metal rates loaded from JSON file:", data);
            return data;
        }
    } catch (fileError) {
        // Log the error code if available, otherwise the message
        const errorDetail = fileError.code || fileError.message || "Unknown Error";
        console.warn(`File Error (${errorDetail}), falling back to external API`);
    }

    // 3. Fallback to external API
    try {
        const fallbackUrl = "https://ejindia.com/wp-json/metal/v1/rates";

        console.log("🔄 Fetching from external API:", fallbackUrl);

        // standard node fetch doesn't support 'next' options unless in component/route context, 
        // but in Next.js 13+ it might be polyfilled. 
        // For safety in a lib function, we can just fetch.

        const response = await fetch(fallbackUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            },
            next: { revalidate: 60 } // Cache for 1 minute
        });

        if (!response.ok) {
            throw new Error(`External API error: ${response.status}`);
        }

        const data = await response.json();

        // Validate data - if critical fields are missing, throw error to trigger mock fallback
        if (!data || !data.gold_22 || !data.gold_18) {
            throw new Error("External API returned invalid data (missing gold rates)");
        }

        let formattedDate = data.updated;
        if (data.updated && data.updated.includes("/")) {
            try {
                // Parse "13/02/2026 10:50 am"
                const parts = data.updated.split(" ");
                const datePart = parts[0];
                const timePart = parts[1];
                const modifier = parts.length > 2 ? parts[2] : null; // handle am/pm

                const [day, month, year] = datePart.split("/");
                let [hours, minutes] = timePart.split(":");

                if (modifier) {
                    const lowerModifier = modifier.toLowerCase();
                    if (lowerModifier === 'pm' && hours !== '12') {
                        hours = parseInt(hours, 10) + 12;
                    } else if (lowerModifier === 'am' && hours === '12') {
                        hours = '00';
                    }
                }

                formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
            } catch (e) {
                console.error("Date parsing error", e);
            }
        }

        return {
            ...data,
            updated_manual: formattedDate,
            isVisible: data.isVisible !== undefined ? data.isVisible : true
        };

    } catch (externalError) {
        console.error("Failed to fetch metal rates from any source:", externalError.message);
        return null;
    }


    // Last resort: Return mock data with latest prices
    console.log("📋 Using mock fallback data");
    const mockData = {
        gold_22: "14280",
        gold_18: "11689",
        gold_14: "9100",
        platinum: "7481",
        silver: "280",
        platinum: "7481",
        silver: "280",
        updated_manual: new Date().toISOString().slice(0, 16),
        isVisible: true
    };
    return mockData;
}
