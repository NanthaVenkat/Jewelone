"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // important to clear cookie
      });

      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="tw:flex tw:w-full">
      <button
        onClick={handleLogout}
        className="tw:w-full tw:flex tw:items-center tw:justify-center tw:gap-2 tw:bg-gray-800 tw:text-gray-300 tw:px-4 tw:py-2.5 tw:rounded-lg hover:tw:bg-red-900/20 hover:tw:text-red-400 tw:transition-all tw:duration-200 tw:border tw:border-gray-700 hover:tw:border-red-900/30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw:size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 2.062-2.062a.75.75 0 0 0 0-1.061L15.75 9" />
        </svg>
        <span className="tw:text-sm tw:font-medium">Sign Out</span>
      </button>
    </div>
  );
}
