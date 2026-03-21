import Image from "next/image";
import Link from "next/link";
import React from "react";

const DigiGoldFooter = () => {
  return (
    <footer>
      <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-4">
        <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-4">
          <div>
            <Image
              src={"/digigold/logo.svg"}
              className="tw:h-10 tw:md:h-16"
              width={"250"}
              height={62}
              alt="logo"
            />
          </div>
          <div className="tw:grid tw:gap-4 tw:grid-cols-1 tw:lg:grid-cols-2 tw:place-items-center">
            <div className="tw:text-[#18181B] tw:font-medium tw:flex tw:flex-col tw:justify-center tw:items-center tw:lg:flex-row tw:lg:justify-end tw:lg:items-end tw:w-full gap-1">
              <div>To Download</div>
              <div>DIGI GOLD App</div>
            </div>
            <div className="tw:flex tw:gap-4 tw:items-center tw:justify-center">
              <Link href={"https://apps.apple.com/in/app/jewelone/id1507128724"}>
                <Image
                  src={"/digigold/app-store.svg"}
                  className="tw:h-16"
                  width={158}
                  height={64}
                  alt="logo"
                />
              </Link>
              <Link  href={"https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US"}>
                <Image
                  src={"/digigold/play-store.svg"}
                  className="tw:h-16"
                  width={158}
                  height={64}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="tw:bg-rk-primary tw:text-white tw:text-center tw:py-2 text-sm">
        © {new Date().getFullYear()} Jewel One DigiGold. All Rights Reserved.
      </div>
    </footer>
  );
};

export default DigiGoldFooter;
