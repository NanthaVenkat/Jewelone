import {  NextRequest, NextResponse } from 'next/server';

import { google } from 'googleapis';

const SHEET_ID = '1UEkRQAB3wQmJ4hwGf_dhk6-HgEug22vux2A0Iq-4qm8';


const glAuth = await google.auth.getClient({
    projectId: "florencia-424914",
    credentials: {
    "type": "service_account",
    "project_id": "florencia-424914",
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": process.env.client_email,  
    "universe_domain": "googleapis.com"
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const glSheets = google.sheets({ version: "v4", auth: glAuth });

export async function GET() {
    return Response.json({message: "hello world" })
  }

export async function POST(request) {
    const body = await request.json();
    console.log(body);

    try {
        // Object to Sheets
        const rows = Object.values(body);
        console.log("hi",rows);
    
  
        const response = await glSheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'A1:L1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    rows
                ]
            }
        });

       return NextResponse.json({ message: 'Data added successfully' });
      } catch (error) {hone, body.message
        {
         return NextResponse.json({ message: 'Error' });
        }
      }
  }