"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutButton from './LogoutButton';

// Icons (Using SVGs for no extra dependencies)
const Icons = {
    Dashboard: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
    ),
    Metal: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
    ),
    Careers: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.053c-.255-.009-.515-.05-.75-.12m-13.5 0c.235.07.495.11.75.12m0 0a48.11 48.11 0 0 1 3.413-.387m7.5 0V5.25a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    ),
    Banner: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    )
};

const Sidebar = ({ userRole }) => {
    const pathname = usePathname();

    const allLinks = [
        { name: 'Dashboard Overview', href: '/dashboard', icon: Icons.Dashboard, roles: ['superadmin', 'admin'] },
        { name: 'Metal Rates', href: '/dashboard/metal-rates', icon: Icons.Metal, roles: ['superadmin', 'admin'] },
        { name: 'Careers', href: '/dashboard/careers', icon: Icons.Careers, roles: ['superadmin'] },
        { name: 'Home Banners', href: '/dashboard/banners', icon: Icons.Banner, roles: ['superadmin'] },
    ];

    const links = allLinks.filter(link => link.roles.includes(userRole));

    return (
        <div className="tw:h-full tw:flex tw:flex-col tw:bg-[#1a1a1a] tw:text-white tw:border-r tw:border-gray-800">
            {/* Header / Brand */}
            <div className="tw:p-8 tw:border-b tw:border-gray-800 tw:flex tw:items-center tw:gap-3">
                <div className="tw:w-8 tw:h-8 tw:rounded tw:bg-gradient-to-br tw:from-[#964A26] tw:to-[#c0832b] tw:flex tw:items-center tw:justify-center tw:text-white tw:font-bold">
                    J
                </div>
                <h2 className="tw:text-lg tw:tracking-wide tw:text-gray-100">JewelOne <span className="tw:text-[#c0832b] tw:text-xs tw:uppercase tw:tracking-widest tw:block">Admin Panel</span></h2>
            </div>

            {/* Navigation */}
            <nav className="tw:flex-1 tw:p-4 tw:space-y-2 tw:mt-4">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`tw:flex tw:items-center tw:gap-3 tw:px-4 tw:py-3 tw:rounded-lg tw:transition-all tw:duration-200 tw:group !tw:no-underline ${isActive
                                ? 'tw:bg-gradient-to-r tw:from-[#964A26] tw:to-[#b05830] tw:text-white tw:shadow-lg tw:shadow-orange-900/20'
                                : 'tw:text-gray-400 hover:tw:bg-gray-800 hover:tw:text-white'
                                }`}
                        >
                            <span className={`${isActive ? 'tw:text-white' : 'tw:text-gray-500 group-hover:tw:text-white'} tw:transition-colors`}>
                                <Icon />
                            </span>
                            <span className="tw:font-medium tw:text-sm tw:tracking-wide">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Logout */}
            <div className="tw:p-4 tw:border-t tw:border-gray-800 tw:bg-[#151515]">
                <LogoutButton />
            </div>
        </div>
    );
};

export default Sidebar;
