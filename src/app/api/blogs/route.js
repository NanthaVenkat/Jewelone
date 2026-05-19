import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET() {
    try {
        await dbConnect();
        
        // Fetch all active blogs
        const blogs = await Blog.find({ isActive: true }).sort({ createdAt: -1 });
        
        return NextResponse.json({ success: true, blogs }, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        
        const contentType = req.headers.get('content-type') || '';
        let body = {};
        
        if (contentType.includes('multipart/form-data')) {
            const formData = await req.formData();
            for (const [key, value] of formData.entries()) {
                if (value instanceof File) {
                    const buffer = Buffer.from(await value.arrayBuffer());
                    const mimeType = value.type || 'image/jpeg';
                    body[key] = `data:${mimeType};base64,${buffer.toString('base64')}`;
                } else if (key === 'genres') {
                    body[key] = JSON.parse(value);
                } else {
                    body[key] = value;
                }
            }
        } else {
            body = await req.json();
        }
        
        // Ensure slug is unique, or just let Mongoose handle unique constraint
        const newBlog = new Blog(body);
        await newBlog.save();
        
        return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ success: false, message: 'Failed to create blog', error: error.message }, { status: 500 });
    }
}
