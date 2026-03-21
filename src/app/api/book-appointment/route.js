import {  NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request) {
  const { name, phone,email,city,date,time,language,jewelType,details } = await request.json();

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

  let mailList=[
    'ravi.kiran8844@gmail.com',
    'retail.crm@ejindia.com'
  ]
  const mailOptions = {
    from: `JewelOne <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
    to: mailList,
    replyTo: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Book Appointment form Submission - ${name} (${email})`,
    html: `<p>You have a new form submission</p><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Phone: </strong> ${phone}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>City: </strong> ${city}</p>
        <p><strong>jewel Type: </strong> ${jewelType}</p>
        <p><strong>Language: </strong> ${language}</p>
        <p><strong>Date: </strong> ${date}</p>
        <p><strong>Time: </strong> ${time}</p>
        <p><strong>More Details: </strong> ${details}</p>`
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