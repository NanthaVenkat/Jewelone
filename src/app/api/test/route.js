import { NextResponse } from "next/server"

export async function GET(request) {
    const url = request.nextUrl
    const pathname = url.pathname
    return NextResponse.json({ pathname })
  }