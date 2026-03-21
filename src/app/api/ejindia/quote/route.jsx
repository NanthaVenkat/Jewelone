import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: "Quote Form API" });
}

export async function POST(request) {
  try {
    // Parse form data (from <form> with enctype="multipart/form-data" or JSON)
    let fullName = "", phoneNumber = "", companyName = "";

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      fullName = body.fullName;
      phoneNumber = body.phoneNumber;
      companyName = body.companyName;
    } else {
      const formData = await request.formData();
      fullName = formData.get("fullName");
      phoneNumber = formData.get("phoneNumber");
      companyName = formData.get("companyName");
    }

    // Configure email transport
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "emeraldjewelindustryin@gmail.com",
        pass: "fbqbwbqxcnitvghw", // Use app password
      },
    });

    // Email content
    const mailOptions = {
      from: '"Emerald Jewel Industry" <emeraldjewelindustryin@gmail.com>',
      to: 'vivinrajkumar.r@ejindia.com',
      subject: `Corporate Gifting Quote Request from ${fullName}`,
      html: `
        <h3>New Corporate Gifting Quote Request Submission</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <hr/>
        <p>Submitted via ejIndia Corporate Gifting Page Quote Request Form</p>
      `,
    };

    // Send the email
    await transport.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Quote request sent successfully" });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return NextResponse.json({ success: false, error: "Failed to send quote request" }, { status: 500 });
  }
}
