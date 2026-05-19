"use client";
import React, { useRef, useCallback, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const HomeNewSection1 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slidePrev();
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);

  const [banners, setBanners] = useState([]);
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("/api/banner");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setBanners(data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <section className="HomeNewSection1 tw:relative">
      <Swiper
        onSwiper={setSwiperInstance}
        loop={true}
        autoHeight={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".HomeNewSection1 .next-arrow",
          prevEl: ".HomeNewSection1 .prev-arrow",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
      >
        {!imgError && banners.length > 0 ? (
          // Dynamic Banners
          banners.map((banner) => (
            <SwiperSlide key={banner._id}>
              <picture style={{ display: "block", width: "100%", height: "auto" }}>
                <source
                  srcSet={banner.desktopImg}
                  type="image/webp"
                  media="(min-width: 650px)"
                  width={1920}
                  height={1080}
                />
                <Image
                  className="tw:w-full tw:h-auto"
                  alt="Banner Image"
                  src={banner.mobileImg}
                  unoptimized
                  width={600}
                  height={800}
                  sizes="100vw"
                  fetchPriority="high"
                  loading="eager"
                  quality={100}
                  onError={() => {
                    console.warn("Dynamic banner failed to load, falling back to defaults.");
                    setImgError(true);
                  }}
                />
              </picture>
            </SwiperSlide>
          ))
        ) : (
          // Fallback / Hardcoded Banners
          [
            { desk: "/home-new/section1/Banner_1.webp", mob: "/home-new/section1/Banner_1_Mob.webp" },
            { desk: "/home-new/section1/Banner4.webp", mob: "/home-new/section1/Banner4_Mob.webp" },
            { desk: "/home-new/section1/Banner2.webp", mob: "/home-new/section1/Banner2_Mob.webp" },
            { desk: "/home-new/section1/Banner_3_Updated.webp", mob: "/home-new/section1/Banner_3_Mob.webp" }
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <picture style={{ display: "block", width: "100%", height: "auto" }}>
                <source srcSet={img.desk} type="image/webp" media="(min-width: 650px)" width={1920} height={1080} />
                <Image
                  className="tw:w-full tw:h-auto"
                  alt="Secondary Banner Image"
                  src={img.mob}
                  width={600}
                  height={800}
                  sizes="100vw"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={100}
                />
              </picture>
            </SwiperSlide>
          ))
        )}
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

export default HomeNewSection1;
