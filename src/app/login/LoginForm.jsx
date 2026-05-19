"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // 🔥 THIS LINE IS REQUIRED FOR BROWSER TO SAVE THE COOKIE
        credentials: "include",

        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Invalid credentials");
        return;
      }

      // Redirect after login
      // Force a hard navigation to bypass Next.js client-side cache of middleware redirects
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong...");
    }
  };

  return (
    <div className="tw:flex tw:min-h-3/4 tw:py-24 tw:items-center tw:justify-center tw:bg-gray-100 tw:p-4">
      <form
        onSubmit={handleLogin}
        className="tw:bg-white tw:shadow-lg tw:rounded-lg tw:p-6 tw:w-full tw:max-w-sm"
      >
        <div className="tw:text-2xl tw:font-semibold tw:mb-5 tw:text-center">
          Login
        </div>
        <label className="tw:block tw:font-medium tw:mb-1 tw:text-sm">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="tw:w-full tw:p-3 tw:border tw:rounded tw:!mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

<label className="tw:block tw:font-medium tw:mb-1 tw:text-sm">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="tw:w-full tw:p-3 tw:border tw:rounded tw:!mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="tw:w-full tw:bg-[#964A26] tw:text-white tw:p-3 tw:!rounded"
        >
          Login
        </button>

        {error && (
          <p className="tw:!mt-2 tw:text-center tw:text-red-600 tw:text-sm tw:font-medium">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
