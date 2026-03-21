"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation,Pagination } from "swiper/modules";
import "./Florencia.css"


const FlorenciaSection1 = () => {
  return (
    <section className="main-slider-section">
 <Swiper 
        modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}

    className="home-main-slider">
      <SwiperSlide>
        <a href="#">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/florencia/main-slider/main-slider1.webp"
            />
            <img
              className="img-fluid"
              width={428}
              height={743}
              src="/florencia/main-slider/main-slider1-mobile.webp"
              alt="main banner"
            />
          </picture>
        </a>
      </SwiperSlide>
      
      <SwiperSlide>
        <a href="#">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/florencia/main-slider/main-slider3.webp"
            />
            <img
              className="img-fluid"
              width={428}
              height={743}
              src="/florencia/main-slider/main-slider3-mobile.webp"
              alt="main banner"
            />
          </picture>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/florencia/main-slider/main-slider2.webp"
            />
            <img
              className="img-fluid"
              width={428}
              height={743}
              src="/florencia/main-slider/main-slider2-mobile.webp"
              alt="main banner"
            />
          </picture>
        </a>
      </SwiperSlide>
      
    </Swiper>
    </section>
   
  );
};

export default FlorenciaSection1;
