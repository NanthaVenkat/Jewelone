"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MetalPricesClient = () => {
  const [metalPrice, setMetalPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://ejindia.com/wp-json/metal/v1/rates");
        if (!response.ok) {
          throw new Error("Failed to fetch rates");
        }
        const data = await response.json();

        // Process date similar to server-side logic if needed
        let formattedDate = data.updated;
        if (data.updated && data.updated.includes("/")) {
          try {
            const parts = data.updated.split(" ");
            const datePart = parts[0];
            const timePart = parts[1];
            const modifier = parts.length > 2 ? parts[2] : null;

            const [day, month, year] = datePart.split("/");
            let [hours, minutes] = timePart.split(":");

            if (modifier) {
              const lowerModifier = modifier.toLowerCase();
              if (lowerModifier === 'pm' && hours !== '12') {
                hours = parseInt(hours, 10) + 12;
              } else if (lowerModifier === 'am' && hours === '12') {
                hours = '00';
              }
            }
            formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
          } catch (e) {
            console.error("Client date parse error", e);
          }
        }

        setMetalPrice({
          ...data,
          updated_manual: formattedDate
        });
      } catch (err) {
        console.error("Client-side fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading || !metalPrice) {
    // Optional: Render loading state or null
    return null;
  }

  // Helper date functions (duplicated from original component for consistency)
  const TodayDate = () => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = today
      .toLocaleDateString("en-GB", options)
      .replace(" ", " ")
      .replace(" ", ", ");
    return <span>{formattedDate}</span>;
  };

  function formatUserDate(input) {
    if (!input) return null;
    const [datePart, timePart] = input.split("T");
    if (!datePart || !timePart) return null;
    const [year, month, day] = datePart.split("-");
    const [hour, minute] = timePart.split(":");
    if (!year || !month || !day || !hour || !minute) return null;
    const date = new Date(year, month - 1, day, hour, minute);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).replace(/\b(am|pm)\b/g, match => match.toUpperCase());;
  }

  return (
    <div className="tw:bg-[#964A26] tw:py-2 tw:text-xs tw:font-medium font-inter metal-rates-bar tw:overflow-hidden">

      <Marquee autoFill={true} speed={40}>
        <div className="tw:flex tw:items-center tw:gap-4 tw:mr-4">
          <div className="tw:bg-white tw:text-black tw:px-2 tw:py-1 tw:rounded-sm tw:flex tw:items-center tw:gap-1">
            <span>Todays Rate:</span>
            <Image width={16} height={16} className="size-4" alt="date" src="/icons/calander.svg" />
            <TodayDate />
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:text-white tw:flex tw:items-center">
            1 GRM (22KT) Gold : <span className="tw:text-[#F4D86C] tw:ml-1">₹{metalPrice.gold_22}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:text-white tw:flex tw:items-center">
            1 GRM (18KT) Gold : <span className="tw:text-[#F4D86C] tw:ml-1">₹{metalPrice.gold_18}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:text-white tw:flex tw:items-center">
            1 GRM (14KT) Gold : <span className="tw:text-[#F4D86C] tw:ml-1">₹{metalPrice.gold_14 || "-"}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:bg-white tw:text-black tw:px-2 tw:py-1 tw:rounded-sm tw:flex tw:items-center tw:gap-1">
            <span>1 GRM Platinum :</span> <span>₹{metalPrice.platinum}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:bg-white tw:text-black tw:px-2 tw:py-1 tw:rounded-sm tw:flex tw:items-center tw:gap-1">
            <span>1 GRM Silver :</span> <span>₹{metalPrice.silver}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50"></div>
          <div className="tw:bg-[#ECBE62] tw:text-black tw:px-2 tw:py-1 tw:rounded-sm tw:flex tw:items-center tw:gap-1">
            Updated Date & Time : <span>{formatUserDate(metalPrice.updated_manual)}</span>
          </div>
          <div className="tw:w-1.5 tw:h-1.5 tw:rounded-full tw:bg-[#F4D86C] tw:opacity-50 tw:ml-0 tw:mr-0"></div>
        </div>
      </Marquee>

    </div>
  );
};

export default MetalPricesClient;
