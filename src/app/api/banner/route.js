import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Banner from '@/models/Banner';
import path from 'path';
import { mkdir, writeFile } from 'fs/promises';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET: Fetch all banners
export async function GET() {
    try {
        await dbConnect();
        // Sort by order (ascending), then by creation date (newest first)
        const banners = await Banner.find().sort({ order: 1, createdAt: -1 });
        return NextResponse.json(banners);
    } catch (err) {
        return NextResponse.json({ message: 'Error fetching banners', error: err.message }, { status: 500 });
    }
}

// POST: Upload new banner
export async function POST(request) {
    try {
        const formData = await request.formData();
        const desktopImg = formData.get('desktopImg');
        const mobileImg = formData.get('mobileImg');

        if (!desktopImg || !mobileImg) {
            return NextResponse.json({ message: "Both Desktop and Mobile images are required" }, { status: 400 });
        }

        const saveFile = async (file) => {
            if (typeof file === 'string') {
                return file;
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            const mimeType = file.type || 'image/jpeg';
            return `data:${mimeType};base64,${buffer.toString('base64')}`;
        };

        const desktopPath = await saveFile(desktopImg);
        const mobilePath = await saveFile(mobileImg);

        await dbConnect();

        // Get current max order to append to end
        const lastBanner = await Banner.findOne().sort({ order: -1 });
        const newOrder = lastBanner && lastBanner.order !== undefined ? lastBanner.order + 1 : 0;

        const newBanner = await Banner.create({ desktopImg: desktopPath, mobileImg: mobilePath, order: newOrder });

        return NextResponse.json({ success: true, banner: newBanner });

    } catch (err) {
        console.error("Banner Upload Error:", err);
        return NextResponse.json({ message: 'Error uploading banner', error: err.message }, { status: 500 });
    }
}

// PUT: Update or Reorder
export async function PUT(request) {
    try {
        const contentType = request.headers.get('content-type') || '';

        await dbConnect();

        // 1. REORDER: If JSON content, assume reordering
        if (contentType.includes('application/json')) {
            const { banners } = await request.json();

            if (!Array.isArray(banners)) {
                return NextResponse.json({ message: "Invalid data format" }, { status: 400 });
            }

            // Bulk write to update orders
            const bulkOps = banners.map((banner, index) => ({
                updateOne: {
                    filter: { _id: banner._id },
                    update: { $set: { order: index } }
                }
            }));

            if (bulkOps.length > 0) {
                await Banner.bulkWrite(bulkOps);
            }

            return NextResponse.json({ success: true, message: "Order updated" });
        }

        // 2. UPDATE: If FormData, update specific banner
        const formData = await request.formData();
        const id = formData.get('id');
        const desktopImg = formData.get('desktopImg');
        const mobileImg = formData.get('mobileImg');

        if (!id) {
            return NextResponse.json({ message: "Banner ID is required" }, { status: 400 });
        }

        const banner = await Banner.findById(id);
        if (!banner) {
            return NextResponse.json({ message: "Banner not found" }, { status: 404 });
        }

        const saveFile = async (file) => {
            if (typeof file === 'string') {
                return file;
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            const mimeType = file.type || 'image/jpeg';
            return `data:${mimeType};base64,${buffer.toString('base64')}`;
        };

        const updateData = {};

        if (desktopImg && desktopImg instanceof File) {
            updateData.desktopImg = await saveFile(desktopImg);
        }

        if (mobileImg && mobileImg instanceof File) {
            updateData.mobileImg = await saveFile(mobileImg);
        }

        const updatedBanner = await Banner.findByIdAndUpdate(id, { $set: updateData }, { new: true });

        return NextResponse.json({ success: true, banner: updatedBanner });

    } catch (err) {
        console.error("Banner Update Error:", err);
        return NextResponse.json({ message: 'Error updating banner', error: err.message }, { status: 500 });
    }
}

// DELETE: Remove banner
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ message: "Banner ID is required" }, { status: 400 });
        }

        await dbConnect();
        const banner = await Banner.findById(id);

        if (!banner) {
            return NextResponse.json({ message: "Banner not found" }, { status: 404 });
        }

        // Only URLs are stored
        await Banner.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Banner deleted successfully" });

    } catch (err) {
        console.error("Banner Delete Error:", err);
        return NextResponse.json({ message: 'Error deleting banner', error: err.message }, { status: 500 });
    }
}
