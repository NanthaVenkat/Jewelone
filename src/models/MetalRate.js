
import mongoose from 'mongoose';

const MetalRateSchema = new mongoose.Schema({
    gold_22: {
        type: Number,
        required: true,
    },
    gold_18: {
        type: Number,
        required: true,
    },
    gold_14: {
        type: Number,
        required: false, // Make it false to support legacy data gracefully
    },
    platinum: {
        type: Number,
        required: true,
    },
    silver: {
        type: Number,
        required: true,
    },
    updated_manual: {
        type: Date, // Stores the manual date selected by user
        required: false,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    isVisible: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
});

// Clear cached model to prevent dropped fields during hot-reload
delete mongoose.models.MetalRate;

export default mongoose.model('MetalRate', MetalRateSchema);
