import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
    desktopImg: {
        type: String, // Relative path to image
        required: true,
    },
    mobileImg: {
        type: String, // Relative path to image
        required: true,
    },
    order: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
