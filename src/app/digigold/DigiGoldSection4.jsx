import Image from "next/image";
import React from "react";

const DigiGoldSection4 = () => {
  return (
    <div className="tw:px-4 tw:md:px-10 tw:lg:px-16  tw:py-10 tw:lg:py-16">
      <div className="tw:max-lg:hidden">
        <div className="tw:text-3xl tw:md:text-4xl tw:font-medium tw:text-rk-primary alga-font tw:flex tw:gap-5 tw:items-end">
          <div className="tw:whitespace-nowrap"> DigiGold Benefits</div>
          <div className="section5-title-line tw:mb-3"></div>
        </div>
      </div>

      <div className="tw:lg:hidden">
        <div className="tw:text-3xl tw:md:text-4xl tw:font-medium tw:text-rk-primary alga-font">
          <div className="line-below-title tw:text-center">
            {" "}
            DigiGold Benefits
          </div>
        </div>
      </div>

      <div className="tw:bg-rk-primary tw:rounded-3xl tw:grid tw:grid-cols-1 tw:lg:grid-cols-[45%_55%] tw:mt-10">
        <div className="tw:order-1 tw:lg:order-first">
          <div className="tw:flex tw:items-end tw:h-full tw:relative">
            <Image
              className="tw:absolute tw:top-0 tw:left-4 tw:max-lg:hidden"
              src={"/digigold/section4/overlay.webp"}
              width={144}
              height={272}
              alt="overlay image"
            />
            <Image
              src={"/digigold/section4/banner.webp"}
              width={500}
              height={500}
              alt="benefits"
            />
          </div>
        </div>
        <div className="tw:text-white tw:p-6">
          <div className="tw:text-2xl tw:md:text-4xl tw:text-center tw:lg:text-left tw:font-medium alga-font tw:mb-8 digigold-benefits-title">
            DigiGold Benefits
          </div>

          <div className="tw:space-y-4 tw:text-sm tw:md:text-base">
            <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
              <div>
                <Image
                  src={"/digigold/check.svg"}
                  width={20}
                  height={20}
                  className="tw:h-5"
                  alt="check"
                />
              </div>
              <div>Minimum saving of ₹100/- or any amount above.</div>
            </div>
            <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
              <div>
                <Image
                  src={"/digigold/check.svg"}
                  width={20}
                  height={20}
                  className="tw:h-5"
                  alt="check"
                />
              </div>
              <div>
                Pay anytime and any amount - any number of times to save at
                prevailing Gold Rate.
              </div>
            </div>

            <div className="tw:bg-[#783B1D] tw:px-6 tw:py-4 tw:rounded-2xl tw:space-y-3">
              <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
                <div>
                  <Image
                    src={"/digigold/check.svg"}
                    width={20}
                    height={20}
                    className="tw:h-5"
                    alt="check"
                  />
                </div>
                <div>
                  Get 5% benefit for payments are made during first 75 days
                </div>
              </div>
              <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
                <div>
                  <Image
                    src={"/digigold/check.svg"}
                    width={20}
                    height={20}
                    className="tw:h-5"
                    alt="check"
                  />
                </div>
                <div>
                  Get 3.75% benefit for payments made during 76th to 150th day
                </div>
              </div>
              <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
                <div>
                  <Image
                    src={"/digigold/check.svg"}
                    width={20}
                    height={20}
                    className="tw:h-5"
                    alt="check"
                  />
                </div>
                <div>
                  Get 2% benefit for payments made during next 151st to 225th
                  day
                </div>
              </div>
              <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
                <div>
                  <Image
                    src={"/digigold/check.svg"}
                    width={20}
                    height={20}
                    className="tw:h-5"
                    alt="check"
                  />
                </div>
                <div>
                  Get 0.75% benefit for payments made during 226th to 300th day
                </div>
              </div>
            </div>

            <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
              <div>
                <Image
                  src={"/digigold/check.svg"}
                  width={20}
                  height={20}
                  className="tw:h-5"
                  alt="check"
                />
              </div>
              <div>
                Buy gold jewellery for entire saved weight including benefits
                accrued after 330 days
              </div>
            </div>
            <div className="tw:grid tw:grid-cols-[20px_auto] tw:gap-2">
              <div>
                <Image
                  src={"/digigold/check.svg"}
                  width={20}
                  height={20}
                  className="tw:h-5"
                  alt="check"
                />
              </div>
              <div>
                Wastage, Making, Hallmark Charges and GST are applicable on
                redemption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiGoldSection4;
