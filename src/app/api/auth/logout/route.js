import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Remove cookie by setting Max-Age=0
  response.headers.append(
    "Set-Cookie",
    "logged_in=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax"
  );

  return response;
}
