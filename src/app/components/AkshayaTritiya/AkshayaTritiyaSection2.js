"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./AkshayaTritiya.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const AkshayaTritiyaSection2 = () => {
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const videoRefs = useRef([
  //   React.createRef(),
  //   React.createRef(),
  //   React.createRef(),
  // ]);

  const videos = [
    {
      src: "/AkshayaTritiya/section2-v1.mp4",
      poster: "/AkshayaTritiya/section2-p1.jpg",
    },
    {
      src: "/AkshayaTritiya/section2-v2.mp4",
      poster: "/AkshayaTritiya/section2-p2.jpg",
    },
    {
      src: "/AkshayaTritiya/section2-v3.mp4",
      poster: "/AkshayaTritiya/section2-p3.jpg",
    },
  ];

  // useEffect(() => {
  //   videoRefs.current[currentVideoIndex].current.play();
  //   videoRefs.current[currentVideoIndex].current.addEventListener(
  //     "ended",
  //     playNextVideo
  //   );
  // }, [currentVideoIndex]);

  // const playNextVideo = () => {
  //   const nextIndex = (currentVideoIndex + 1) % videos.length;
  //   videoRefs.current[currentVideoIndex].current.pause();
  //   videoRefs.current[currentVideoIndex].current.currentTime = 0;
  //   setCurrentVideoIndex(nextIndex);
  // };

  return (
    <section className="akshatritiyasection2">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4 m-auto">
            <div className="d-block d-md-none text-center">
              <div className="fs-5">Aishwaryam Tharum</div>
              <div className="fs-1 fw-bold">Akshaya Tritiya</div>

            </div>

            <div className="d-none d-md-block">
              <Image
                className="img-fluid"
                alt="banner"
                width={309}
                height={337}
                src="/AkshayaTritiya/section-2-banner.webp"
              />
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5 mt-md-0">
            <div className="akshatritiyasection2__img-grid-items">
              <Swiper
                // install Swiper modules
                modules={[Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1.2}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  360: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  468: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {videos.map((video, index) => (
                  <SwiperSlide className="col-12 col-lg-4" key={index}>
                    <video
                      preload="none"
                      // ref={videoRefs.current[index]}
                      src={video.src}
                      // autoPlay={index === 0}
                      autoPlay
                      loop
                      muted
                      poster={video.poster}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection2;
