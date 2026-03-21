import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Sidebar from './Sidebar';
import AdminLogoutButton from './AdminLogoutButton';
import { cookies } from 'next/headers';

export default async function DashboardLayout({ children }) {
    const cookieStore = await cookies();
    const userRole = cookieStore.get('user_role')?.value;

    // Simplified layout for 'admin' role (Legacy Design)
    if (userRole === 'admin') {
        return (
            <div className='dashboard tw:min-h-screen tw:bg-gray-50 tw:relative'>
                {/* Simple Header for Admin */}
                <header className="tw:bg-white tw:shadow-sm tw:py-4 tw:px-8 tw:flex tw:justify-between tw:items-center">
                    <div className="tw:font-bold tw:text-xl tw:text-gray-800">JewelOne Admin</div>
                    <div className="tw:w-auto">
                        {/* We use Sidebar's LogoutButton but maybe better to extract it or import it directly if it was exported separately. 
                            Since LogoutButton is default export, we can import it.
                            Wait, Sidebar.jsx imports LogoutButton. Let's direct import here.
                        */}
                        <AdminLogoutButton />
                    </div>
                </header>

                <main className="tw:flex tw:justify-center tw:items-start tw:pt-10 tw:pb-10 tw:px-4">
                    {children}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className='dashboard tw:min-h-screen tw:flex tw:flex-col'>
            <Navbar />
            <div className="tw:flex tw:flex-1 tw:relative">
                {/* Sidebar for Desktop */}
                <aside className="tw:w-64 tw:block tw:sticky tw:top-0 tw:h-[calc(100vh-theme(spacing.16))] tw:overflow-y-auto">
                    <Sidebar userRole={userRole} />
                </aside>

                {/* Mobile Navigation Placeholder (Simple link list for now, or rely on Navbar if it has links)
            For a better separate mobile experience, we can add a mobile menu toggler here.
            For now, we'll assume the Sidebar is main nav for dashboard.
         */}

                <main className="tw:flex-1 tw:bg-gray-100 tw:p-4 md:tw:p-8">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
