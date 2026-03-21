import React from 'react'
import Link from 'next/link';
import MetalRateForm from './MetalRateForm';
import { cookies } from 'next/headers'

export const metadata = {
  title: "Admin Dashboard | JewelOne"
};

const page = async () => {
  // Current date formatting
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const cookieStore = await cookies();
  const userRole = cookieStore.get('user_role')?.value;

  // If Admin, show Metal Rate Form directly (Legacy Design)
  if (userRole === 'admin') {
    return <MetalRateForm />;
  }

  const isSuperAdmin = userRole === 'superadmin';

  return (
    <div className='tw:max-w-6xl tw:mx-auto'>
      {/* Header Section */}
      <div className="tw:mb-10">
        <h1 className="tw:text-3xl tw:font-medium tw:text-gray-900 tw:mb-2">
          Good Afternoon, {userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'Admin'}
        </h1>
        <p className="tw:text-gray-500 tw:font-sans">{today}</p>
      </div>

      <div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 tw:gap-8">

        {/* Metal Rates Widget - Visible to All */}
        <Link href="/dashboard/metal-rates" className="tw:block tw:no-underline tw:group">
          <div className="tw:bg-white tw:rounded-2xl tw:p-8 tw:shadow-sm tw:border tw:border-gray-100 tw:transition-all tw:duration-300 group-hover:tw:shadow-xl group-hover:tw:border-orange-100 group-hover:-tw:translate-y-1 tw:relative tw:overflow-hidden">
            <div className="tw:absolute tw:top-0 tw:right-0 tw:w-32 tw:h-32 tw:bg-orange-50 tw:rounded-full tw:-mr-16 tw:-mt-16 tw:transition-transform group-hover:tw:scale-150"></div>

            <div className="tw:relative tw:z-10">
              <div className="tw:w-12 tw:h-12 tw:bg-orange-100 tw:text-[#964A26] tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>

              <h3 className="tw:text-2xl tw:font-medium tw:text-gray-900 tw:mb-2">Metal Rates</h3>
              <p className="tw:text-gray-500 tw:mb-6 tw:line-clamp-2">Update the daily gold, silver, and platinum rates displayed on the website header.</p>

              <span className="tw:inline-flex tw:items-center tw:text-[#964A26] tw:font-medium tw:border-b-2 tw:border-transparent group-hover:tw:border-[#964A26] tw:transition-colors">
                Manage Rates
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="tw:size-4 tw:ml-2 group-hover:tw:translate-x-1 tw:transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Banners Widget - SuperAdmin Only */}
        {isSuperAdmin && (
          <Link href="/dashboard/banners" className="tw:block tw:no-underline tw:group">
            <div className="tw:bg-white tw:rounded-2xl tw:p-8 tw:shadow-sm tw:border tw:border-gray-100 tw:transition-all tw:duration-300 group-hover:tw:shadow-xl group-hover:tw:border-green-100 group-hover:-tw:translate-y-1 tw:relative tw:overflow-hidden">
              <div className="tw:absolute tw:top-0 tw:right-0 tw:w-32 tw:h-32 tw:bg-green-50 tw:rounded-full tw:-mr-16 tw:-mt-16 tw:transition-transform group-hover:tw:scale-150"></div>

              <div className="tw:relative tw:z-10">
                <div className="tw:w-12 tw:h-12 tw:bg-green-50 tw:text-green-700 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>

                <h3 className="tw:text-2xl tw:font-medium tw:text-gray-900 tw:mb-2">Home Banners</h3>
                <p className="tw:text-gray-500 tw:mb-6 tw:line-clamp-2">Manage homepage slider images. Upload new banners separately for desktop and mobile.</p>

                <span className="tw:inline-flex tw:items-center tw:text-green-700 tw:font-medium tw:border-b-2 tw:border-transparent group-hover:tw:border-green-700 tw:transition-colors">
                  Manage Banners
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="tw:size-4 tw:ml-2 group-hover:tw:translate-x-1 tw:transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Careers Widget - SuperAdmin Only */}
        {isSuperAdmin && (
          <Link href="/dashboard/careers" className="tw:block tw:no-underline tw:group">
            <div className="tw:bg-white tw:rounded-2xl tw:p-8 tw:shadow-sm tw:border tw:border-gray-100 tw:transition-all tw:duration-300 group-hover:tw:shadow-xl group-hover:tw:border-blue-100 group-hover:-tw:translate-y-1 tw:relative tw:overflow-hidden">
              <div className="tw:absolute tw:top-0 tw:right-0 tw:w-32 tw:h-32 tw:bg-blue-50 tw:rounded-full tw:-mr-16 tw:-mt-16 tw:transition-transform group-hover:tw:scale-150"></div>

              <div className="tw:relative tw:z-10">
                <div className="tw:w-12 tw:h-12 tw:bg-blue-50 tw:text-blue-700 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.053c-.255-.009-.515-.05-.75-.12m-13.5 0c.235.07.495.11.75.12m0 0a48.11 48.11 0 0 1 3.413-.387m7.5 0V5.25a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>

                <h3 className="tw:text-2xl tw:font-medium tw:text-gray-900 tw:mb-2">Careers</h3>
                <p className="tw:text-gray-500 tw:mb-6 tw:line-clamp-2">View and manage job applications, resumes, and candidate details.</p>

                <span className="tw:inline-flex tw:items-center tw:text-blue-700 tw:font-medium tw:border-b-2 tw:border-transparent group-hover:tw:border-blue-700 tw:transition-colors">
                  View Applications
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="tw:size-4 tw:ml-2 group-hover:tw:translate-x-1 tw:transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

      </div>
    </div>
  )
}

export default page