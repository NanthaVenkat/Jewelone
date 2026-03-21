import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ message: "Signup API" });
}

export async function POST(request) {
  try {
    const { name, phone, city, showroom, terms } = await request.json();

    if (!name || !phone || !city || !showroom || !terms) {
      return NextResponse.json(
        { error: "All fields are required and terms must be accepted" },
        { status: 400 }
      );
    }

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `JewelOne <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: "ravikiran@brightbridgeinfotech.com,vivinrajkumar.r@ejindia.com,retail.crm@ejindia.com",
      subject: `Digi Gold Form Submission - ${name}`,
      html: `
        <p>You have a new signup submission</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Showroom:</strong> ${showroom}</p>
        <p><strong>Agreed to Terms:</strong> ${terms ? "Yes" : "No"}</p>
      `,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: "Signup email sent successfully" });
  } catch (err) {
    console.error("Signup API error:", err);
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
  }
}
