import {  NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function GET(request) {
  return NextResponse.json({message: "Contact API" })
}

export async function POST(request) {
  const { email, name,mobile, message } = await request.json();

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
    from: `JewelOne <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
    to: 'ravikiran@brightbridgeinfotech.com,vivinrajkumar.r@ejindia.com,gavya.emerald@gmail.com,subhasri@brightbridgeinfotech.com,vivin.emerald@gmail.com,zilara.marketing@ejindia.com,retail.crm@ejindia.com',
    replyTo: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `New Message from ${name} (${email})`,
    text: message,
    html: `<p>You have a form submission</p><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mobile Number: </strong> ${mobile}</p>
        <p><strong>Message: </strong> ${message}</p>`
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