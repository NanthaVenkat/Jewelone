import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import dbConnect from '@/lib/db';
import Banner from '@/models/Banner';

// Local uploads directory (public/uploads/banners)
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads', 'banners');

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

        // Ensure uploads directory exists
        await fs.mkdir(UPLOADS_DIR, { recursive: true });

        // Helper to save file
        const saveFile = async (file, prefix) => {
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileExt = path.extname(file.name);
            const safeName = path.basename(file.name, fileExt).replace(/[^a-zA-Z0-9]/g, "_");
            const fileName = `${prefix}_${safeName}_${Date.now()}${fileExt}`;
            const filePath = path.join(UPLOADS_DIR, fileName);
            await fs.writeFile(filePath, buffer);
            return `/uploads/banners/${fileName}`;
        };

        const desktopPath = await saveFile(desktopImg, 'desktop');
        const mobilePath = await saveFile(mobileImg, 'mobile');

        await dbConnect();

        // Get current max order to append to end
        const lastBanner = await Banner.findOne().sort({ order: -1 });
        const newOrder = lastBanner && lastBanner.order !== undefined ? lastBanner.order + 1 : 0;

        const newBanner = await Banner.create({
            desktopImg: desktopPath,
            mobileImg: mobilePath,
            order: newOrder
        });

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

        // Helper to save file (Same as POST)
        const saveFile = async (file, prefix) => {
            await fs.mkdir(UPLOADS_DIR, { recursive: true });
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileExt = path.extname(file.name);
            const safeName = path.basename(file.name, fileExt).replace(/[^a-zA-Z0-9]/g, "_");
            const fileName = `${prefix}_${safeName}_${Date.now()}${fileExt}`;
            const filePath = path.join(UPLOADS_DIR, fileName);
            await fs.writeFile(filePath, buffer);
            return `/uploads/banners/${fileName}`;
        };

        // Helper to delete old file
        const deleteFile = async (webPath) => {
            try {
                if (!webPath) return;
                const filePath = path.join(process.cwd(), 'public', webPath);
                await fs.unlink(filePath);
            } catch (e) {
                console.warn(`Failed to delete old file: ${webPath}`);
            }
        };

        const updateData = {};

        if (desktopImg && desktopImg instanceof File) {
            await deleteFile(banner.desktopImg);
            updateData.desktopImg = await saveFile(desktopImg, 'desktop');
        }

        if (mobileImg && mobileImg instanceof File) {
            await deleteFile(banner.mobileImg);
            updateData.mobileImg = await saveFile(mobileImg, 'mobile');
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

        // Attempt to delete files
        const deleteFile = async (webPath) => {
            try {
                const filePath = path.join(process.cwd(), 'public', webPath);
                await fs.unlink(filePath);
            } catch (e) {
                console.warn(`Failed to delete file: ${webPath}`, e.message);
            }
        };

        await deleteFile(banner.desktopImg);
        await deleteFile(banner.mobileImg);

        await Banner.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Banner deleted successfully" });

    } catch (err) {
        console.error("Banner Delete Error:", err);
        return NextResponse.json({ message: 'Error deleting banner', error: err.message }, { status: 500 });
    }
}
