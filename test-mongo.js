
const mongoose = require('mongoose');

// Using the Atlas URI provided by the user
const MONGODB_URI = "mongodb+srv://ravikiran_db_user:JFp1qZNH43J9WY5B@cluster0.akovddu.mongodb.net/jewelone?appName=Cluster0";

async function testMongo() {
    console.log("Connecting to MongoDB Atlas...");
    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 10000, // 10s for Atlas
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true,
            }
        });
        console.log("✅ Connected to MongoDB Atlas");

        const MetalRateSchema = new mongoose.Schema({
            gold_22: Number,
            gold_18: Number,
            platinum: Number,
            silver: Number,
            updated_manual: Date,
            updated: { type: Date, default: Date.now }
        }, { timestamps: true });

        const MetalRate = mongoose.models.MetalRate || mongoose.model('MetalRate', MetalRateSchema);

        console.log("Fetching latest rate from Atlas...");
        const latest = await MetalRate.findOne().sort({ createdAt: -1 });
        console.log("Latest Rate:", latest);

        if (!latest) {
            console.log("No data found. Creating initial seed data...");
            const newRate = await MetalRate.create({
                gold_22: 6800,
                gold_18: 5600,
                platinum: 3400,
                silver: 90,
                updated_manual: new Date(),
            });
            console.log("✅ Created seed rate:", newRate._id);
        }

    } catch (error) {
        console.error("❌ Error:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected.");
    }
}

testMongo();
