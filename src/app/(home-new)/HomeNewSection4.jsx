"use client";
import React, { useRef, useCallback, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import "./home-new.css";
import Image from "next/image";

const HomeNewSection4 = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:lg:py-16 HomeNewSection4">
      <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-[35%_65%] tw:gap-10">
        <div className="tw:hidden tw:lg:block">
          <Image
            src="/home-new/section4/banner.webp"
            className="tw:w-full tw:h-auto"
            width={658}
            height={499}
            alt="Jewel One Promises"
          />
        </div>
        <div className="tw:text-center tw:lg:text-start tw:space-y-3">
          <div className="tw:text-2xl tw:lg:text-3xl tw:font-medium alga-font tw:text-black alga-font">
            Jewel One Promises
          </div>
          <div className="text-[#3B4443] tw:text-base tw:lg:text-lg tw:max-lg:max-w-[320px] tw:mx-auto">
            The promises that we’ll never break
          </div>

          <div className="tw:mt-10">
            <Swiper
              ref={sliderRef}
              slidesPerView={2}
              loop={true}
              spaceBetween={10}
              navigation={{
                nextEl: ".HomeNewSection4 .next-arrow",
                prevEl: ".HomeNewSection4 .prev-arrow",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3.5,
                },
                1024: {
                  slidesPerView: 3,
                },
                1240: {
                  slidesPerView: 3.5,
                },
              }}
              className="section4-swiper"
            >
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon1.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Refined, Radiant, and Real -</b> Just like you
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon2.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Artistry that never fades</b> With Time
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon3.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Luxury that’s kind to</b> the planet
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon4.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    Designed for <b>the woman who shines every day</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon5.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>The art of tradition,</b> Reborn in every MasterPiece
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon6.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Florencia - Made to move with you, Made</b> to shine on
                    you
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon7.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Zilara - Premium Silver Jewellery</b> for the modern
                    bride
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon8.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>A touch of diamond - for moments that deserve</b> more
                    than words
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon9.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    A Jewel One piece,
                    <b> forever yours to treasure.</b>{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon10.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>Sacred silver forms made too grace your</b> moments of
                    prayer
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tw:border tw:border-[#D4D4D4] tw:bg-[#FBFBFB] tw:text-sm tw:text-start tw:lg:text-lg tw:px-5 tw:py-8 tw:rounded-lg tw:space-y-3 tw:h-full">
                  <div>
                    <Image
                      className="tw:h-10 tw:w-auto tw:object-contain"
                      src="/home-new/section4/icon11.svg"
                      alt="icon 1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <b>The diamond edit - for women who define</b> their own
                    glow
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="tw:!relative tw:!mt-10 tw:flex gap-2">
              <div className="tw:border-b tw:border-[#D4D4D4] tw:w-full"></div>
              <div className="swiper-arrows tw:flex tw:gap-2 tw:items-center tw:justify-end">
                <button
                  className="prev-arrow  tw:cursor-auto tw:border tw:border-black tw:bg-black tw:text-white tw:disabled:text-gray-400 tw:disabled:bg-white tw:!rounded-sm"
                  onClick={handlePrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="tw:size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  className="next-arrow tw:cursor-auto tw:border tw:border-black tw:bg-black tw:text-white tw:disabled:text-gray-400 tw:disabled:bg-white tw:!rounded-sm"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="tw:size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewSection4;
