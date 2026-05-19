"use client";
import React, { useRef, useCallback, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

const HomeNewSection5 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slidePrev();
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);
  return (
    <section className="HomeNewSection5 tw:relative">
      <Swiper
        onSwiper={setSwiperInstance}
        loop={true}
        autoHeight={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: ".HomeNewSection5 .next-arrow",
          prevEl: ".HomeNewSection5 .prev-arrow",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Link href="/swarna-sakthi">
            <picture
              style={{ display: "block", width: "100%", height: "auto" }}
            >
              <source
                srcSet="/home-new/section5/slide-1.webp"
                type="image/webp"
                media="(min-width: 650px)"
                width={1920}
                height={1080}
              />
              <Image
                className="img-fluid w-100 h-auto"
                alt="Secondary Banner Image"
                src="/home-new/section5/slide-1-mob.webp"
                width={600}
                height={800}
                sizes="100vw"
                loading="lazy"
                quality={75} // Reduces image size for faster loading
              />
            </picture>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/digigold">
            <picture
              style={{ display: "block", width: "100%", height: "auto" }}
            >
              <source
                srcSet="/home-new/section5/slide-2.webp"
                type="image/webp"
                media="(min-width: 650px)"
                width={1920}
                height={1080}
              />
              <Image
                className="img-fluid w-100 h-auto"
                alt="Secondary Banner Image"
                src="/home-new/section5/slide-2-mob.webp"
                width={600}
                height={800}
                loading="lazy"
                quality={75} // Reduces image size for faster loading
              />
            </picture>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div>
        <div className="swiper-arrows">
          <button
            className="prev-arrow tw:absolute tw:top-1/2 tw:-translate-y-1/2 tw:left-1 tw:z-10 tw:cursor-pointer tw:border tw:border-black tw:bg-black tw:text-white tw:disabled:text-gray-400 tw:disabled:bg-white tw:!rounded-sm"
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
            className="next-arrow tw:absolute tw:top-1/2 tw:-translate-y-1/2 tw:right-1 tw:z-10 tw:cursor-pointer tw:border tw:border-black tw:bg-black tw:text-white tw:disabled:text-gray-400 tw:disabled:bg-white tw:!rounded-sm"
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
    </section>
  );
};

export default HomeNewSection5;
