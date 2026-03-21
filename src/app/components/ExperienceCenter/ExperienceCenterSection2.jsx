import React from "react";
import "./ExperienceCenter.css";
import Image from "next/image";
import Link from "next/link";

const ExperienceCenterSection2 = () => {
  return (
    <div className="tw:bg-white experience-center-section2">
      <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:md:py-16">
        <div className="tw:flex tw:items-end tw:justify-center tw:gap-4 tw:mb-10">
          <div className="tw:text-xl tw:text-black tw:text-center tw:lg:text-start tw:uppercase tw:font-medium tw:md:whitespace-nowrap">
            About Jewel One Experience Center
          </div>
          <div className="tw:h-0.25 tw:bg-black tw:w-full tw:max-lg:hidden tw:mb-2"></div>
        </div>
        <div className="tw:max-w-4xl tw:mx-auto">
          <div className="text-center tw:text-xl tw:sm:text-2xl tw:md:text-4xl  tw:lg:text-5xl tw:font-medium tw:text-rk-primary alga-font tw:mb-8 tw:space-y-3">
            <div className="tw:flex tw:items-center tw:justify-center tw:gap-3 tw:flex-wrap">
              <div className="tw:h-0.25 tw:w-12 tw:md:w-20 tw:bg-rk-primary"></div>
              <div className="tw:uppercase">EVERY JEWELLERY</div>
            </div>

            <div className="tw:flex tw:items-center tw:justify-center tw:gap-3 tw:flex-wrap">
              <div className="tw:italic">Tell’s a Story,</div>
              <div className="tw:h-0.25 tw:w-12 tw:md:w-20 tw:bg-rk-primary"></div>
              <div className="tw:uppercase">Let yours</div>
            </div>

            <div className="tw:uppercase">Shine bright</div>
          </div>

          <div className="tw:text-center tw:space-y-4 tw:text-sm tw:lg:text-lg tw:mb-12">
            <div>
              Welcome to our Jewelry Experience Center, where beauty meets
              elegance and sophistication. Step into a world of shimmering
              brilliance as you explore our extensive collection of gold,
              silver, diamond and platinum jewelry. 
            </div>
            <div>
              Whether you're seeking a statement piece for a special occasion or
              a daily adornment that reflects your unique style, our experience
              center offers something for everyone.
            </div>
          </div>

          <div className="tw:text-2xl tw:md:text-3xl tw:font-semibold tw:text-rk-primary tw:mb-6 tw:uppercase tw:text-center">
            Distinctive Features
          </div>

          <div className="tw:grid tw:grid-cols-2 tw:lg:grid-cols-4 tw:gap-4 tw:mt-10">
            <div className="tw:bg-[#F2EDE4] tw:p-6 tw:rounded-lg tw:grid tw:grid-cols-1 tw:gap-2 tw:grid-rows-[48x_auto]">
              <div>
                <Image
                  src={"/experience-center/section2/icon1.svg"}
                  width={48}
                  height={48}
                  className="tw:max-h-12"
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  6,00,000+ <br />
                  Designs
                </div>
              </div>
            </div>
            <div className="tw:bg-[#F2EDE4] tw:p-6 tw:rounded-lg tw:grid tw:grid-cols-1 tw:gap-2 tw:grid-rows-[48x_auto]">
              <div>
                <Image
                  src={"/experience-center/section2/icon2.svg"}
                  width={48}
                  height={48}
                  className="tw:max-h-12"
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  Endless
                  <br />
                  Customisation
                </div>
              </div>
            </div>
            <div className="tw:bg-[#F2EDE4] tw:p-6 tw:rounded-lg tw:grid tw:grid-cols-1 tw:gap-2 tw:grid-rows-[48x_auto]">
              <div>
                <Image
                  src={"/experience-center/section2/icon3.svg"}
                  width={48}
                  height={48}
                  className="tw:max-h-12"
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  12,000+ SQ Ft
                  <br />
                  Showroom
                </div>
              </div>
            </div>
            <div className="tw:bg-[#F2EDE4] tw:p-6 tw:rounded-lg tw:grid tw:grid-cols-1 tw:gap-2 tw:grid-rows-[48x_auto]">
              <div>
                <Image
                  src={"/experience-center/section2/icon4.svg"}
                  width={48}
                  height={48}
                  className="tw:max-h-12"
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  Unmatched <br />
                  Finish
                </div>
              </div>
            </div>
          </div>

          {/* <div className="tw:mt-10 tw:text-center tw:flex tw:justify-center tw:items-center">
            <Link
              className="tw:bg-black tw:block tw:whitespace-nowrap tw:!text-white tw:!no-underline tw:uppercase tw:text-sm tw:px-8 tw:py-2 tw:rounded-xs"
              href={"#"}
            >
              Book your slot now
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCenterSection2;
