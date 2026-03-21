import Image from "next/image";
import React from "react";
import SignUpForm from "./SignUpForm";

const DigiGoldSection5 = () => {
  return (
    <div className="bg-white tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:lg:py-16">
      <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-10 tw:max-w-6xl tw:mx-auto">
        <div>
          <Image
            src={"/digigold/section5/banner.webp"}
            width={667}
            height={675}
            alt="banner"
          />
        </div>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default DigiGoldSection5;
