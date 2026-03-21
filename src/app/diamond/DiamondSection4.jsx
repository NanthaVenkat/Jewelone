"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const DiamondSection4 = () => {
  const swiperRef = useRef();

  return (
    <div className="DiamondSection4">
      <div className="container py-5">
        <div className="col-12 col-lg-11 m-auto">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="text-md-center m-auto" style={{ maxWidth: "600px" }}>
              <h3 className="fs-5 mb-2 DiamondSection4__title ">
                Masters in VVS Diamonds, Crafting Timeless Treasures with
              </h3>
              <h3 className="fs-4 DiamondSection4__title">
                Ef Colour and Flawless Precision
              </h3>

              <div>
              <svg
                width={132}
                height={2}
                viewBox="0 0 144 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H144" stroke="white" />
              </svg>
              </div>

              <div className="d-flex justify-content-md-center align-items-center gap-3 mb-3">
                <div className="text-white fs-1 fw-medium DiamondSection4__caption">
                  Product Catalouge
                </div>

                <div className="d-flex d-md-none gap-1 align-items-center">
                  <button
                    className="bg-transparent border-0 p-0"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <circle
                        cx="24.1736"
                        cy="24.1736"
                        r="23.6736"
                        transform="matrix(-1 0 0 1 48.3472 0)"
                        fill="#67C7FF"
                        stroke="white"
                      />
                      <path
                        d="M24.3607 30.4967L23.059 31.7984L15.0631 23.8025L23.059 15.8066L24.3607 17.1083L18.5962 22.8728H32.5425V24.7323H18.5962L24.3607 30.4967Z"
                        fill="#112A47"
                      />
                    </svg>
                  </button>
                  <button
                     className="bg-transparent border-0 p-0"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <circle
                        cx="24.1736"
                        cy="24.1736"
                        r="23.6736"
                        fill="#67C7FF"
                        stroke="white"
                      />
                      <path
                        d="M23.9865 30.4967L25.2882 31.7984L33.284 23.8025L25.2882 15.8066L23.9865 17.1083L29.751 22.8728H15.8047V24.7323H29.751L23.9865 30.4967Z"
                        fill="#112A47"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 position-relative">
            <Swiper
              loop
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1.2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mb-3">
                  <Image
                    className="img-fluid"
                    width={493}
                    height={349}
                    src="/diamond/section4/1.webp"
                    alt="image 1"
                  />
                </div>
                <div>
                  <Image
                    className="img-fluid"
                    width={493}
                    height={349}
                    src="/diamond/section4/2.webp"
                    alt="image 1"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-3 center-slide-item">
                  <Image
                    className="img-fluid h-100 object-fit-cover"
                    width={493}
                    height={900}
                    src="/diamond/section4/3.webp"
                    alt="image 1"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-3">
                  <Image
                    className="img-fluid"
                    width={493}
                    height={349}
                    src="/diamond/section4/4.webp"
                    alt="image 1"
                  />
                </div>
                <div>
                  <Image
                    className="img-fluid"
                    width={493}
                    height={349}
                    src="/diamond/section4/5.webp"
                    alt="image 1"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-3 center-slide-item">
                  <Image
                    className="img-fluid h-100 object-fit-cover"
                    width={493}
                    height={900}
                    src="/diamond/section4/3.webp"
                    alt="image 1"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="d-none d-md-block gap-1 align-items-center">
                  <button
                    className="bg-transparent border-0 p-0 left-arrow"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <circle
                        cx="24.1736"
                        cy="24.1736"
                        r="23.6736"
                        transform="matrix(-1 0 0 1 48.3472 0)"
                        fill="#67C7FF"
                        stroke="white"
                      />
                      <path
                        d="M24.3607 30.4967L23.059 31.7984L15.0631 23.8025L23.059 15.8066L24.3607 17.1083L18.5962 22.8728H32.5425V24.7323H18.5962L24.3607 30.4967Z"
                        fill="#112A47"
                      />
                    </svg>
                  </button>
                  <button
                     className="bg-transparent border-0 p-0 right-arrow"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <circle
                        cx="24.1736"
                        cy="24.1736"
                        r="23.6736"
                        fill="#67C7FF"
                        stroke="white"
                      />
                      <path
                        d="M23.9865 30.4967L25.2882 31.7984L33.284 23.8025L25.2882 15.8066L23.9865 17.1083L29.751 22.8728H15.8047V24.7323H29.751L23.9865 30.4967Z"
                        fill="#112A47"
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

export default DiamondSection4;
