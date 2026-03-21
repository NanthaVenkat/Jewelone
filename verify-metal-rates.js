import { getMetalRates } from './src/lib/metalRates.js';

// Mock console.warn to capture output
const originalConsoleWarn = console.warn;
let warnLog = [];
console.warn = (...args) => {
    warnLog.push(args.join(' '));
    originalConsoleWarn(...args);
};

async function verifyFix() {
    console.log("Running verification for metalRates.js... (Expecting WARN log)");

    // We expect the local DB connection to fail (ECONNREFUSED)
    // and the fallback API to work or fail depending on network/availability.
    // The KEY thing we are verifying is the WARN LOG MESSAGE.

    try {
        const rates = await getMetalRates();
        console.log("Result from getMetalRates:", rates);

        const expectedLogPart = "Local DB Error (ECONNREFUSED), falling back to external API";
        const logFound = warnLog.some(log => log.includes("ECONNREFUSED") && log.includes("falling back to external API"));

        if (logFound) {
            console.log("✅ Verification SUCCESS: Found expected WARN log with error code.");
        } else {
            console.log("❌ Verification FAILED: Did not find expected WARN log.");
            console.log("Actual warn logs:", warnLog);
        }

    } catch (e) {
        console.error("Unexpected error during verification:", e);
    }
}

verifyFix();
