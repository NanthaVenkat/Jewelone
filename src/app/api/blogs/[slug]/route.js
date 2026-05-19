import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(req, { params }) {
    try {
        await dbConnect();
        
        const resolvedParams = await params;
        const { slug } = resolvedParams;
        
        const blog = await Blog.findOne({ slug, isActive: true });
        
        if (!blog) {
            return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ success: false, message: 'Failed to fetch blog' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        await dbConnect();
        
        const resolvedParams = await params;
        const { slug } = resolvedParams;
        const contentType = req.headers.get('content-type') || '';
        let body = {};
        
        if (contentType.includes('multipart/form-data')) {
            const formData = await req.formData();
            for (const [key, value] of formData.entries()) {
                // If it's a file, convert to base64, otherwise string
                if (value instanceof File) {
                    // Only process file if it actually has content
                    if (value.size > 0) {
                        const buffer = Buffer.from(await value.arrayBuffer());
                        const mimeType = value.type || 'image/jpeg';
                        body[key] = `data:${mimeType};base64,${buffer.toString('base64')}`;
                    }
                } else if (key === 'genres') {
                    body[key] = JSON.parse(value);
                } else {
                    body[key] = value;
                }
            }
        } else {
            body = await req.json();
        }
        
        const updatedBlog = await Blog.findOneAndUpdate({ slug }, body, { new: true });
        
        if (!updatedBlog) {
            return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true, blog: updatedBlog }, { status: 200 });
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ success: false, message: 'Failed to update blog', error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await dbConnect();
        
        const resolvedParams = await params;
        const { slug } = resolvedParams;
        
        const deletedBlog = await Blog.findOneAndDelete({ slug });
        
        if (!deletedBlog) {
            return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true, message: 'Blog deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ success: false, message: 'Failed to delete blog', error: error.message }, { status: 500 });
    }
}
