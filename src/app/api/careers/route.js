import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';
import dbConnect from '@/lib/db';
import CareerSubmission from '@/models/CareerSubmission';

// Local uploads directory (public/uploads/careers)
// In Next.js, 'public' is served statically. 
// Files saved here will be accessible via http://domain.com/uploads/careers/filename
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads', 'careers');

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const position = formData.get('position');
    const city = formData.get('city');
    const resume = formData.get('resume');

    if (!name || !email || !mobile || !position || !city || !resume || !resume.name) {
      return NextResponse.json({ success: false, message: "Missing required fields or file" }, { status: 400 });
    }

    // 1. Prepare File Path
    // Create directory if it doesn't exist
    await fs.mkdir(UPLOADS_DIR, { recursive: true });

    const buffer = Buffer.from(await resume.arrayBuffer());
    const fileExt = path.extname(resume.name);
    // Sanitize filename: remove spaces/special chars, add timestamp
    const safeName = path.basename(resume.name, fileExt).replace(/[^a-zA-Z0-9]/g, "_");
    const fileName = `${safeName}_${Date.now()}${fileExt}`;
    const filePath = path.join(UPLOADS_DIR, fileName);

    // 2. Save File Locally
    await fs.writeFile(filePath, buffer);

    // 3. Save to MongoDB
    await dbConnect();
    await CareerSubmission.create({
      name,
      email,
      mobile,
      position,
      city,
      resume_file_name: fileName,
      resume_path: `/uploads/careers/${fileName}`, // Relative web path
    });

    // 4. Send Email
    // Note: If email fails, we still consider the submission successful (saved to DB)
    // but log the error.
    try {
      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_SMTP_USER,
          pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
        }
      });

      const mailOptions = {
        from: '"JewelOne Careers" <jewelone57@gmail.com>',
        to: 'ravikiran@brightbridgeinfotech.com,vivinrajkumar.r@ejindia.com,hiring@ejindia.com,vivin.emerald@gmail.com,vasanth.t@ejindia.com,e21663@ejindia.com,retail.crm@ejindia.com',
        replyTo: email,
        subject: `New Career Submission - ${position} from ${name}`,
        html: `
            <h2>📩 New Job Application Received</h2>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Mobile:</strong> ${mobile}</p>
            <p><strong>💼 Position:</strong> ${position}</p>
            <p><strong>🏙️ City:</strong> ${city}</p>
            <br/>
            <p>📎 The candidate’s resume is attached.</p>
            <p><em>(Also saved to database and server storage)</em></p>
            <hr/>
            <p style="font-size: 12px; color: #666;">JewelOne Careers Portal</p>
        `,
        attachments: [{ filename: fileName, path: filePath }]
      };
      await transport.sendMail(mailOptions);
    } catch (mailError) {
      console.error("Failed to send email:", mailError);
      // We don't fail the request here, as DB save was successful
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully!" });

  } catch (err) {
    console.error('Career API Error:', err);
    return NextResponse.json({ success: false, message: 'Server error processing application', error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const submissions = await CareerSubmission.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching careers:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch submissions' }, { status: 500 });
  }
}
