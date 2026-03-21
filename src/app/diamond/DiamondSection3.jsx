"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const DiamondSection3 = () => {
  return (
    <div className='container py-5 DiamondSection3'>
      <div className="col-12 col-lg-11 m-auto">
      <div className='row'>
        <div className='col-12 mb-5'>
          <div className='text-center m-auto' style={{maxWidth: '600px'}}>
            <h3 className='fs-5 DiamondSection3__title'>Explore our Curated VVS Diamond Collection,</h3>
            <div className='text-white fs-2 fw-medium diamond-page_section-title__line-below position-relative'>Perfect for Illuminating Life’s Most
            Significant Moments
            </div>
            </div>
        </div>
        <div className='col-12'>
        <Swiper
        slidesPerView={1}
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
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image className='img-fluid' width={509} height={722} src="/diamond/section3/img-1.webp" alt='image 1' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image className='img-fluid' width={509} height={722} src="/diamond/section3/img-2.webp" alt='image 2' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image className='img-fluid' width={509} height={722} src="/diamond/section3/img-3.webp" alt='image 3' />
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DiamondSection3