import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: "Careers Page Form API" });
}

export async function POST(request) {
  const formData = await request.formData(); // Handle form data instead of JSON
  const name = formData.get('name');
  const mobile = formData.get('mobile');
  const city = formData.get('city');
  const resume = formData.get('resume'); // This will be a File object

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "emeraldjewelindustryin@gmail.com",
      pass: "fbqbwbqxcnitvghw",
    },
  });

  // Convert the file to a buffer for the attachment
  const resumeBuffer = await resume.arrayBuffer();
  const attachment = {
    filename: resume.name,
    content: Buffer.from(resumeBuffer),
    contentType: resume.type,
  };

  const mailOptions = {
    from: '"Emerald Jewel Industry" <emeraldjewelindustryin@gmail.com>',
    to: 'ravikiran@brightbridgeinfotech.com,vignesh.s@ejindia.com,sanjay.m@ejindia.com,k.karthikeyan@ejindia.com,recruitment@ejindia.com,vivinrajkumar@ejindia.com',
    subject: `New Job Application from ${name}`,
    html: `
      <p>You have a new job application submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>City:</strong> ${city}</p>
    `,
    attachments: [attachment], // Attach the resume
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
