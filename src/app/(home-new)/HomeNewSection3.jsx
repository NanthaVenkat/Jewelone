"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./home-new.css";
// import required modules
import { EffectCoverflow, Pagination ,Navigation} from "swiper/modules";
const HomeNewSection3 = () => {
  return (
    <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:pt-10 tw:lg:pt-16 HomeNewSection3">
      <div className="tw:text-center tw:mb-10 tw:space-y-3">
        <div className="tw:text-2xl tw:lg:text-3xl tw:font-medium alga-font tw:text-black alga-font">
          Styling 101 with Gold
        </div>
        <div className="text-[#3B4443] tw:text-base tw:lg:text-lg tw:max-lg:max-w-[320px] tw:mx-auto">
          Trendsetting gold jewelllery suited for every occassions
        </div>
      </div>

      <div>
        <Swiper
          effect={"coverflow"}
          // centeredSlides={true}
          slidesPerView={"1"}
          loop={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 70,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination,Navigation]}
          onSlideChange={() => {
            const videos = document.querySelectorAll(".section3-video");
            videos.forEach((v) => {
              v.pause();
              v.currentTime = 0; // optional: resets video
            });
          }}
          onTransitionStart={() => {
            const videos = document.querySelectorAll(".section3-video");
            videos.forEach((v) => {
              v.pause();
            });
          }}
          
        >
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video1-poster.webp">
              <source
                src="/home-new/section3/video1.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video2-poster.webp">
              <source
                src="/home-new/section3/video2.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video3-poster.webp">
              <source
                src="/home-new/section3/video3.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video4-poster.webp">
              <source
                src="/home-new/section3/video4.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video5-poster.webp">
              <source
                src="/home-new/section3/video5.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video6-poster.webp">
              <source
                src="/home-new/section3/video6.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video7-poster.webp">
              <source
                src="/home-new/section3/video7.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video className="section3-video"  loading="lazy"  preload="none" playsInline controls height={867} width={650} poster="/home-new/section3/posters/video8-poster.webp">
              <source
                src="/home-new/section3/video8.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeNewSection3;
