import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    subtitle: {
        type: String,
    },
    heroImg: {
        type: String, // Store image path or base64
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    authorAvatar: {
        type: String,
    },
    genres: {
        type: [String], // Array of genres e.g., ["Art", "UI"]
        default: [],
    },
    shortBio: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0,
    },
    content: {
        type: String, // Store rich text / HTML content
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
