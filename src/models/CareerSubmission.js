import mongoose from 'mongoose';

const CareerSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    resume_file_name: {
        type: String,
        required: true,
    },
    resume_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.CareerSubmission || mongoose.model('CareerSubmission', CareerSubmissionSchema);
