import { NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'fs/promises';

export const runtime = 'nodejs';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const img = searchParams.get('img');

        if (!img) {
            return new NextResponse('Image parameter missing', { status: 400 });
        }

        // Prevent path traversal vulnerabilities
        if (!img.startsWith('banners/') || img.includes('..')) {
            return new NextResponse('Forbidden', { status: 403 });
        }

        const safePath = path.join(process.cwd(), '.app-uploads', img);
        
        try {
            const buffer = await readFile(safePath);
            
            // Determine content type based on extension
            const ext = path.extname(safePath).toLowerCase();
            let contentType = 'image/jpeg';
            if (ext === '.webp') contentType = 'image/webp';
            if (ext === '.png') contentType = 'image/png';
            if (ext === '.gif') contentType = 'image/gif';
            if (ext === '.svg') contentType = 'image/svg+xml';
            
            return new NextResponse(buffer, {
                headers: {
                    'Content-Type': contentType,
                    'Cache-Control': 'public, max-age=31536000, immutable',
                },
            });
        } catch (e) {
            return new NextResponse('Image not found', { status: 404 });
        }
    } catch (error) {
        return new NextResponse('Server error', { status: 500 });
    }
}
