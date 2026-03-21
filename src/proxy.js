import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/dashboard",   // protect dashboard pages
  ],
};

export async function proxy(request) {
  const requestHeaders = new Headers(request.headers);



  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("logged_in");

  // If cookie missing → user not authenticated
  if (!isLoggedIn || isLoggedIn.value !== "true") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  

  // Allow request to continue
  return NextResponse.next({
  });
}
