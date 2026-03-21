import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Check if user is logged in
    const isLoggedIn = request.cookies.has('logged_in');
    const userRole = request.cookies.get('user_role')?.value;

    // Define protected routes
    const isDashboard = pathname.startsWith('/dashboard');
    const isLoginPage = pathname === '/login';

    // Redirect unauthenticated users to login
    if (isDashboard && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Redirect authenticated users away from login page
    if (isLoginPage && isLoggedIn) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 2. Role-Based Access Control
    // Restrict 'admin' from accessing specific routes
    if (isLoggedIn && userRole === 'admin') {
        const restrictedRoutes = [
            '/dashboard/careers',
            '/dashboard/banners',
        ];

        // Check if current path matches any restricted route
        if (restrictedRoutes.some(route => pathname.startsWith(route))) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
