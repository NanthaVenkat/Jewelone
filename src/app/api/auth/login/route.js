import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// User Credentials
const USERS = {
  superadmin: {
    password: "Rk@9F!pL2#Qx7", // Same password for now
    role: "superadmin"
  },
  admin: {
    password: "Rk@9F!pL2#Qx7",
    role: "admin"
  }
};

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password required" },
        { status: 400 }
      );
    }

    const user = USERS[username];

    // Validate login
    if (user && user.password === password) {

      // Create response
      const response = NextResponse.json({ success: true, role: user.role });

      // Set auth cookie
      response.cookies.set("logged_in", "true", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 86400 // 1 day
      });

      // Set role cookie
      response.cookies.set("user_role", user.role, {
        path: "/",
        httpOnly: false, // Accessable by client for UI logic
        sameSite: "lax",
        maxAge: 86400
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid username or password" },
      { status: 401 }
    );

  } catch (err) {
    console.error("Login API Error:", err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
