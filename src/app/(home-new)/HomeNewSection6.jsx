import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNewSection6 = () => {
  return (
    <section className="tw:bg-white">
      <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:lg:py-16">
        <div className="tw:text-center tw:space-y-3">
          <div className="tw:text-2xl tw:lg:text-3xl tw:font-medium alga-font tw:text-black alga-font">
            About Our Store
          </div>
          <div className="text-[#3B4443] tw:text-base tw:lg:text-lg tw:max-lg:max-w-[320px] tw:mx-auto">
            Get in touch with us for a complete jewellery shopping experience!
          </div>
        </div>

        <div className="tw:grid tw:grid-cols-1 tw:xl:grid-cols-2 tw:gap-4 tw:mt-10">
          <div className="tw:rounded-xl">
            <Link href="/stores">
              <Image
                src="/home-new/section6/banner.webp"
                className="tw:w-full tw:h-auto tw:rounded-xl"
                width={897}
                height={499}
                alt="14+ Showrooms in India"
              />
            </Link>
          </div>
          <div className="tw:grid tw:grid-cols-1 tw:gap-y-4">
            <div className="tw:bg-[#F2EDE4] tw:py-5 tw:px-4 tw:rounded-xl tw:col-span-2 tw:flex tw:gap-1 tw:flex-col tw:text-center tw:justify-center tw:items-center ">
              <div>
                <Link className="tw:!text-[#964A26] tw:!no-underline tw:!font-semibold tw:!text-xl tw:md:!text-2xl copperplate-font" href="tel:18001033916">1800 1033916</Link>
              </div>
              <div className="tw:text-[#3B4443] tw:text-sm tw:lg:text-lg">
                For store queries and schemes
              </div>
            </div>

            <div className="tw:flex tw:gap-4 tw:flex-wrap">
              <div className="tw:bg-[#F2EDE4] tw:grow tw:py-5 tw:px-4 tw:rounded-xl tw:flex tw:gap-2 tw:flex-col tw:text-center tw:justify-center tw:items-center ">
                <div className="tw:text-black tw:font-semibold tw:text-sm tw:lg:text-xl tw:uppercase copperplate-font">
                  Need help to find
                </div>
                <div className="tw:text-[#3B4443] tw:text-sm tw:lg:text-lg">
                  the best jewellery for you
                </div>
                <div>
                  <a
                    className="tw:bg-[#20CA11] tw:!text-white tw:!no-underline tw:p-2 tw:text-base tw:md:text-lg tw:font-semibold tw:flex tw:gap-1 tw:items-center tw:rounded-full"
                    href="https://wa.me/919952321895?text=I%20have%20an%20enquiry%20regarding%20Jewel%20One"
                  >
                    <Image
                      src="/home-new/section6/whatsapp.svg"
                      width={20}
                      height={20}
                      className="h-5"
                      alt="whatsapp"
                    />{" "}
                    {/* +91 8220017619 */}
                  </a>
                </div>
              </div>
              <div className="tw:bg-[#F2EDE4] tw:grow tw:py-5 tw:px-4 tw:rounded-xl tw:flex tw:gap-1 tw:flex-col tw:text-center tw:justify-center tw:items-center ">
                <div className="tw:text-black tw:font-semibold tw:text-sm tw:lg:text-xl tw:uppercase copperplate-font">
                  Email
                </div>
                <div className="tw:text-sm tw:lg:text-lg">
                  <a
                    className="tw:block tw:!text-[#3B4443] tw:!no-underline"
                    href="mailto:customercare@jewelone.in"
                  >
                    retail.crm@ejindia.com
                  </a>
                  {/* <a
                    className="tw:block tw:!text-[#3B4443] tw:!no-underline"
                    href="mailto:info@ejindia.in"
                  >
                    info@ejindia.in
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewSection6;
