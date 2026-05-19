const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://ravikiran_db_user:JFp1qZNH43J9WY5B@cluster0.akovddu.mongodb.net/jewelone?appName=Cluster0";

async function queryBanners() {
    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            serverApi: { version: '1', strict: true, deprecationErrors: true }
        });

        const BannerSchema = new mongoose.Schema({
            desktopImg: String,
            mobileImg: String,
            order: Number,
            createdAt: Date,
        });

        const Banner = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);

        const latest = await Banner.find({}).sort({ createdAt: -1 }).limit(1);
        if (latest.length > 0) {
            console.log("Most recent upload ID:", latest[0]._id);
            console.log("Desktop Str Length:", latest[0].desktopImg ? latest[0].desktopImg.length : 'MISSING');
            console.log("Desktop Start:", latest[0].desktopImg ? latest[0].desktopImg.substring(0, 50) : '');
            console.log("Desktop End:", latest[0].desktopImg ? latest[0].desktopImg.substring(latest[0].desktopImg.length - 50) : '');
            
            console.log("Mobile Str Length:", latest[0].mobileImg ? latest[0].mobileImg.length : 'MISSING');
            console.log("Mobile Start:", latest[0].mobileImg ? latest[0].mobileImg.substring(0, 50) : '');
        } else {
            console.log("No banners found.");
        }

    } catch (error) {
        console.error("❌ Error:", error);
    } finally {
        await mongoose.disconnect();
    }
}

queryBanners();
