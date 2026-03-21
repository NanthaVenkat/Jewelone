
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MetalPricesClient from "./MetalPricesClient";

// https://ejindia.com/wp-json/metal/v1/rates

import { getMetalRates } from "@/lib/metalRates";

const getMetalPrices = async () => {
  const data = await getMetalRates();
  // console.log("Metal prices fetched:", data);
  return data;
};



const MetalPrices = async () => {
  const metalPrice = await getMetalPrices();

  // ⛔ Hide section if explicitly set to hidden
  if (metalPrice?.isVisible === false) {
    return null;
  }

  // ⛔ Hide section if API failed or data missing
  if (
    !metalPrice ||
    metalPrice.gold_22 == null ||
    metalPrice.gold_18 == null ||
    metalPrice.platinum == null ||
    metalPrice.silver == null
  ) {
    // Fallback to Client Component (Browser Fetch) if server failed
    console.warn("Server-side metal rates fetch failed or returned incomplete data:", metalPrice);
    console.warn("Falling back to client-side fetch.");
    return <MetalPricesClient />;
  }


  const TodayDate = () => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };

    // Format: 27 Nov, 2025
    const formattedDate = today
      .toLocaleDateString("en-GB", options)
      .replace(" ", " ")
      .replace(" ", ", ");

    return <span>{formattedDate}</span>;
  };


  function formatUserDate(input) {
    if (!input) return null;

    const date = new Date(input);
    if (isNaN(date.getTime())) return null;

    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).replace(/\b(am|pm)\b/g, match => match.toUpperCase());
  }


  // console.log(metalPrice.gold_22,"metalPrice.gold_22");

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

export default MetalPrices;
