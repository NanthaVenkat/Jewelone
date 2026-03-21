import {  NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function GET(request) {
  return NextResponse.json({message: "Diamond API" })
}

export async function POST(request) {
    const { name, whatsapp, email, city } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
    }

    // host: 'smtp.ethereal.email',
    // port: 587,
    // auth: {
    //     user: 'janice74@ethereal.email',
    //     pass: 'wt8uxrdQU7erYVyfxa'
    // }
  });

  const mailOptions = {
    from: `JewelOne <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
    to: 'ravikiran@brightbridgeinfotech.com',
    subject: `New Catalogue Request from ${name}`,
    text: `You have received a new request:\n\nName: ${name}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nCity: ${city}`,
    html: `
      <h3>New Catalogue Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>City:</strong> ${city}</p>
    `,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}