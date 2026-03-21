import Link from "next/link";
import React from "react";

const DigiGoldSection3 = () => {
  return (
    <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:pt-10 tw:md:pt-16">
      <div className="text-center tw:text-3xl tw:md:text-4xl tw:font-medium tw:text-rk-primary alga-font tw:mb-4 line-below-title">
        How it works
      </div>
      <div className="tw:text-center text-sm">
        Bringing convenience and safety to buying Gold!
      </div>

      <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-3 tw:gap-8 tw:mt-10 tw:max-w-5xl tw:mx-auto">
        <div className="tw:border-1 tw:border-[#C49966] tw:bg-white tw:px-4 tw:py-5 tw:rounded-lg">
          <div className=" tw:ms-auto tw:bg-[#F2EDE4] tw:text-rk-primary tw:font-semibold tw:w-12 tw:h-12 tw:rounded-full tw:text-center tw:flex tw:items-center tw:justify-center tw:text-xl">
            01
          </div>
          <div className="tw:text-rk-primary tw:text-xl tw:font-semibold tw:mb-2">
            Login
          </div>
          <div>
            Login or register with Jewel One digigold. Complete your account
            setup with eKYC.
          </div>
        </div>

        <div className="tw:border-1 tw:border-[#C49966] tw:bg-white tw:px-4 tw:py-5 tw:rounded-lg">
          <div className=" tw:ms-auto tw:bg-[#F2EDE4] tw:text-rk-primary tw:font-semibold tw:w-12 tw:h-12 tw:rounded-full tw:text-center tw:flex tw:items-center tw:justify-center tw:text-xl">
            02
          </div>
          <div className="tw:text-rk-primary tw:text-xl tw:font-semibold tw:mb-2">
            Enter Amount
          </div>
          <div>Enter your amount in rupees or gold in grams to buy.</div>
        </div>

        <div className="tw:border-1 tw:border-[#C49966] tw:bg-white tw:px-4 tw:py-5 tw:rounded-lg">
          <div className=" tw:ms-auto tw:bg-[#F2EDE4] tw:text-rk-primary tw:font-semibold tw:w-12 tw:h-12 tw:rounded-full tw:text-center tw:flex tw:items-center tw:justify-center tw:text-xl">
            03
          </div>
          <div className="tw:text-rk-primary tw:text-xl tw:font-semibold tw:mb-2">
            Payment
          </div>
          <div>
            Choose your preferred payment method - UPI, Credit Card, Debit card
            or Netbanking
          </div>
        </div>
      </div>

      <div className="tw:mt-8 tw:text-center tw:flex tw:justify-center tw:items-center">
        <Link
          className="tw:bg-black tw:block tw:whitespace-nowrap tw:!text-white tw:!no-underline tw:uppercase tw:text-sm tw:px-8 tw:py-2 tw:rounded-full"
          href={"#signUp"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default DigiGoldSection3;
