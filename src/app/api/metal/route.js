import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import MetalRate from "@/models/MetalRate";

// Force refresh: 2026-02-15T12:45:00
// ----------------------------------
// GET → return the most recent metal rates from MongoDB
// ----------------------------------
export async function GET() {
  try {
    await dbConnect();

    // Fetch the latest record, sorted by creation date descending
    const latest = await MetalRate.findOne().sort({ createdAt: -1 });

    if (!latest) {
      // Fallback if collection is empty or DB error
      console.warn("No metal rates found in MongoDB. Using fallback data.");
      const fallbackData = {
        gold_22: 6800,
        gold_18: 5600,
        gold_14: 4500,
        platinum: 3400,
        silver: 90,
        updated_manual: new Date().toISOString().slice(0, 16), // YYYY-MM-DDTHH:mm
        updated: new Date().toISOString().slice(0, 16),
        isVisible: true
      };
      // Return plain object, not Mongoose document
      return NextResponse.json(fallbackData);
    }

    // Convert Mongoose doc to plain object
    const data = latest.toObject();

    // Map `updated_manual` (Date) to `updated` (Date) for frontend consistency
    // Frontend expects `updated` field. 
    data.updated = data.updated_manual;

    return NextResponse.json(data);

  } catch (error) {
    console.error("GET Error (MongoDB):", error);

    // Fallback data when DB connection fails
    const fallbackData = {
      gold_22: 6800,
      gold_18: 5600,
      gold_14: 4500,
      platinum: 3400,
      silver: 90,
      updated_manual: new Date().toISOString().slice(0, 16),
      updated: new Date().toISOString().slice(0, 16),
      isVisible: true
    };

    return NextResponse.json(fallbackData);
  }
}


// ----------------------------------
// POST → update metal rates in MongoDB
// ----------------------------------
export async function POST(req) {
  try {

    // ✅ Check login cookie
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.get("logged_in")?.value;

    if (isLoggedIn !== "true") {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse JSON body
    const body = await req.json();
    const { gold_22, gold_18, gold_14, platinum, silver, updated, isVisible } = body;

    // Basic Validation
    if (!gold_22 || !gold_18 || !platinum || !silver || !updated) {
      return NextResponse.json(
        { message: "All fields including updated time are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Create a new document in MongoDB
    // 'updated' from frontend is 'YYYY-MM-DDTHH:mm' string.
    // We store it in 'updated_manual'. 
    await MetalRate.create({
      gold_22,
      gold_18,
      gold_14,
      platinum,
      silver,
      updated_manual: new Date(updated), // Convert string to Date
      updated: new Date(), // System timestamp
      isVisible: isVisible !== undefined ? isVisible : true
    });

    return NextResponse.json({
      message: "Metal rates updated successfully (MongoDB)!",
      success: true,
    });

  } catch (error) {
    console.error("POST Error (MongoDB):", error);
    return NextResponse.json(
      { message: "Failed to update metal rates" },
      { status: 500 }
    );
  }
}
