"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MetalRateForm = () => {
  const router = useRouter();

  const [gold22, setGold22] = useState("");
  const [gold18, setGold18] = useState("");
  const [gold14, setGold14] = useState("");
  const [platinum, setPlatinum] = useState("");
  const [silver, setSilver] = useState("");

  const [updatedTime, setUpdatedTime] = useState(new Date()); // MUST be Date object
  const [isVisible, setIsVisible] = useState(true);

  const [message, setMessage] = useState("");

  // Convert "2025-12-25T03:57" OR ISO string -> Date object
  const convertToDate = (str) => {
    if (!str) return new Date();
    // Check if it's already a valid ISO string or similar
    const d = new Date(str);
    if (!isNaN(d.getTime())) return d;

    // Fallback for legacy "YYYY-MM-DDTHH:mm" format if needed
    return new Date(str + ":00");
  };

  // ----------------------------------
  // FETCH CURRENT DATA
  // ----------------------------------
  const fetchMetalRates = async () => {
    try {
      const res = await fetch("/api/metal", { cache: "no-store" });
      const data = await res.json();

      if (res.ok && data) {
        setGold22(data.gold_22);
        setGold18(data.gold_18);
        setGold14(data.gold_14);
        setPlatinum(data.platinum);
        setSilver(data.silver);

        // Updated time from DB → Convert to Date
        // Updated time from DB → Convert to Date
        if (data.updated_manual) {
          setUpdatedTime(convertToDate(data.updated_manual));
        }

        if (data.isVisible !== undefined) {
          setIsVisible(data.isVisible);
        }

        router.refresh();
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  useEffect(() => {
    fetchMetalRates();
  }, []);

  // Convert JS Date object -> "YYYY-MM-DDTHH:mm"
  const formatForDB = (date) => {
    const pad = (n) => (n < 10 ? "0" + n : n);
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes())
    );
  };

  // ----------------------------------
  // HANDLE SUBMIT
  // ----------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const updatedString = formatForDB(updatedTime);

    try {
      const response = await fetch("/api/metal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gold_22: gold22,
          gold_18: gold18,
          gold_14: gold14,
          platinum,
          silver,
          updated: updatedString, // ← Send as string
          isVisible,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to update metal rates");
        return;
      }

      setMessage("✔ Metal rates updated successfully!");
      fetchMetalRates();
    } catch (error) {
      console.error("Submit error:", error);
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="tw:py-10 tw:px-4 tw:flex tw:justify-center">
      <div className="tw:bg-white tw:shadow-xl tw:rounded-2xl tw:p-8 tw:w-full tw:max-w-lg tw:border tw:border-gray-100">
        <div className="tw:text-center tw:mb-8">
          <h2 className="tw:text-3xl tw:font-medium tw:text-gray-900 tw:mb-2">Metal Rates</h2>
          <p className="tw:text-gray-500 tw:text-sm">Update the daily market rates below</p>
        </div>

        <form onSubmit={handleSubmit} className="tw:space-y-5">
          <div className="tw:grid tw:grid-cols-2 tw:gap-5">
            {/* Gold 22K */}
            <div>
              <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Gold 22K <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(per gm)</span></label>
              <div className="tw:flex tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus-within:tw:ring-2 focus-within:tw:ring-[#964A26]/20 focus-within:tw:border-[#964A26] tw:transition-all">
                <span className="tw:text-gray-400 tw:mr-3 tw:font-medium">₹</span>
                <input
                  type="number"
                  value={gold22}
                  onChange={(e) => setGold22(e.target.value)}
                  className="tw:bg-transparent tw:outline-none tw:w-full tw:font-medium tw:text-gray-900 placeholder:tw:text-gray-400"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* Gold 18K */}
            <div>
              <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Gold 18K <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(per gm)</span></label>
              <div className="tw:flex tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus-within:tw:ring-2 focus-within:tw:ring-[#964A26]/20 focus-within:tw:border-[#964A26] tw:transition-all">
                <span className="tw:text-gray-400 tw:mr-3 tw:font-medium">₹</span>
                <input
                  type="number"
                  value={gold18}
                  onChange={(e) => setGold18(e.target.value)}
                  className="tw:bg-transparent tw:outline-none tw:w-full tw:font-medium tw:text-gray-900 placeholder:tw:text-gray-400"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* Gold 14K */}
            <div>
              <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Gold 14K <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(per gm)</span></label>
              <div className="tw:flex tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus-within:tw:ring-2 focus-within:tw:ring-[#964A26]/20 focus-within:tw:border-[#964A26] tw:transition-all">
                <span className="tw:text-gray-400 tw:mr-3 tw:font-medium">₹</span>
                <input
                  type="number"
                  value={gold14}
                  onChange={(e) => setGold14(e.target.value)}
                  className="tw:bg-transparent tw:outline-none tw:w-full tw:font-medium tw:text-gray-900 placeholder:tw:text-gray-400"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Platinum */}
            <div>
              <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Platinum <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(per gm)</span></label>
              <div className="tw:flex tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus-within:tw:ring-2 focus-within:tw:ring-[#964A26]/20 focus-within:tw:border-[#964A26] tw:transition-all">
                <span className="tw:text-gray-400 tw:mr-3 tw:font-medium">₹</span>
                <input
                  type="number"
                  value={platinum}
                  onChange={(e) => setPlatinum(e.target.value)}
                  className="tw:bg-transparent tw:outline-none tw:w-full tw:font-medium tw:text-gray-900 placeholder:tw:text-gray-400"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* Silver */}
            <div>
              <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Silver <span className="tw:text-gray-400 tw:lowercase tw:font-normal">(per gm)</span></label>
              <div className="tw:flex tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus-within:tw:ring-2 focus-within:tw:ring-[#964A26]/20 focus-within:tw:border-[#964A26] tw:transition-all">
                <span className="tw:text-gray-400 tw:mr-3 tw:font-medium">₹</span>
                <input
                  type="number"
                  value={silver}
                  onChange={(e) => setSilver(e.target.value)}
                  className="tw:bg-transparent tw:outline-none tw:w-full tw:font-medium tw:text-gray-900 placeholder:tw:text-gray-400"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="tw:block tw:text-xs tw:font-semibold tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">Updated Date & Time</label>
            <DatePicker
              timeIntervals={10}
              selected={updatedTime}
              onChange={(date) => setUpdatedTime(date)}
              showTimeSelect
              maxDate={new Date()}
              dateFormat="dd MMM yyyy, h:mm aa"
              className="tw:w-full tw:px-4 tw:py-3 tw:bg-gray-50 tw:border tw:border-gray-200 tw:rounded-xl focus:tw:ring-2 focus:tw:ring-[#964A26]/20 focus:tw:border-[#964A26] tw:transition-all tw:outline-none tw:font-medium tw:text-gray-900 tw:cursor-pointer"
              wrapperClassName="tw:w-full"
            />
          </div>

          {/* Visibility */}
          <div className="tw:flex tw:items-center tw:p-4 tw:bg-gray-50 tw:rounded-xl tw:border tw:border-gray-100">
            <div className="tw:relative tw:flex tw:items-center">
              <input
                type="checkbox"
                id="isVisible"
                checked={isVisible}
                onChange={(e) => setIsVisible(e.target.checked)}
                className="tw:peer tw:h-5 tw:w-5 tw:cursor-pointer tw:accent-[#964A26] tw:rounded tw:border-gray-300 tw:text-[#964A26] focus:tw:ring-[#964A26]"
              />
              <label htmlFor="isVisible" className="tw:ml-3 tw:text-sm tw:font-medium tw:text-gray-700 tw:cursor-pointer tw:select-none">
                Show Metal Rates on Website Header
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="tw:w-full tw:bg-gradient-to-r tw:from-[#964A26] tw:to-[#b05830] hover:tw:from-[#7a3c1f] hover:tw:to-[#964A26] tw:text-white tw:py-3.5 tw:rounded-xl tw:font-semibold tw:shadow-lg tw:shadow-orange-900/20 tw:transition-all tw:transform hover:-tw:translate-y-0.5"
          >
            Update Rates
          </button>

          {message && (
            <div className={`tw:p-3 tw:rounded-lg tw:text-sm tw:font-medium tw:text-center ${message.includes('success') ? 'tw:bg-green-50 tw:text-green-700' : 'tw:bg-red-50 tw:text-red-700'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MetalRateForm;
