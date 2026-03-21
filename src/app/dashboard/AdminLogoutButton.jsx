"use client";

import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            router.push("/login");
            router.refresh();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="tw:bg-red-600 hover:tw:bg-red-700 tw:text-white tw:px-4 tw:py-2 tw:rounded tw:text-sm tw:font-medium tw:transition-colors"
        >
            Logout
        </button>
    );
}
