import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// ✅ Create connection (or use pool for production)
const dbConfig = {
  host: 'localhost',
  user: 'vn55t',
  password: '9r5[u5Wxo)M3ncbw',
  database: 'newsletter',
};



export async function GET() {
    return NextResponse.json({message: "hello world" })
}

export async function POST(NextRequest) {
  try {
    const { email } = await NextRequest.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const connection = await mysql.createConnection(dbConfig);

    // Check if already subscribed
    const [existing] = await connection.execute(
      'SELECT id FROM newsletter WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      await connection.end();
      return NextResponse.json({ message: 'Already subscribed' }, { status: 409 });
    }

    // Insert into DB
    await connection.execute('INSERT INTO newsletter (email) VALUES (?)', [email]);
    await connection.end();

    return NextResponse.json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
