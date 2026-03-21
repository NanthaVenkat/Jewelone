import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

// ========== MySQL Pool ==========
const pool = mysql.createPool({
  host: "localhost",
  user: "vn55t",
  password: "9r5[u5Wxo)M3ncbw",
  database: "vn55t",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

// ========== Upload folder ==========
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "resumes");

export async function GET() {
  return NextResponse.json({ message: "Careers Page Form API" });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('fullName');
    const mobile = formData.get('contactNumber');
    const city = formData.get('city');
    const resume = formData.get('resume');


    if (!name || !mobile || !city || !resume) {
      return NextResponse.json({ success: false, message: "Missing fields or file" }, { status: 400 });
    }

    // ========== Save resume file ==========
    const fileExt = path.extname(resume.name);
    const safeName = path.basename(resume.name, fileExt)
      .replace(/\s+/g, "_")
      .replace(/[^\w\-_.]/g, "");
    const fileName = `${safeName}_${Date.now()}${fileExt}`;
    const filePath = path.join(UPLOADS_DIR, fileName);


    // Ensure directory exists
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Relative path for DB and email reference
    const relativePath = `/uploads/resumes/${fileName}`;

    // ========== Save to DB ==========
    const conn = await pool.getConnection();
    const [result] = await conn.execute(
      `INSERT INTO career_submissions (full_name, contact_number, city, resume_path, resume_name) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, mobile, city, relativePath, resume.name]
    );
    conn.release();

    // ========== Send Email ==========
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "emeraldjewelindustryin@gmail.com",
        pass: "fbqbwbqxcnitvghw",
      },
    });

    const mailOptions = {
      from: '"Emerald Jewel Industry" <emeraldjewelindustryin@gmail.com>',
      to: 'ravikiran@brightbridgeinfotech.com,vignesh.s@ejindia.com,sanjay.m@ejindia.com,k.karthikeyan@ejindia.com,recruitment@ejindia.com,vivinrajkumar@ejindia.com',
      subject: `New Job Application from ${name}`,
      html: `
        <p>You have a new job application submission:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Resume:</strong> Attached with this email</p>
      `,
      attachments: [
        {
          filename: resume.name,
          path: filePath,
        },
      ],
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Saved in DB, file uploaded & email sent successfully',
      id: result.insertId,
      resume_path: relativePath,
    });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ success: false, message: 'Server error', error: err.message }, { status: 500 });
  }
}
