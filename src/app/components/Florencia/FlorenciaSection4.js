"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Florencia.css"


const FlorenciaSection4 = () => {
  return (
    <section className="bg-white home-section5">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="text-center">
              <div className="fs-2 secondary-color fw-bold mb-2 text-uppercase">
                Diamond Delights
              </div>
              <div className="main-color fst-italic fs-6 fs-md-5 bg-white home-section5__text">
                Celebrate Life's Special Occasions
              </div>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1.1}
              navigation
              loop={true}
              centeredSlides= {true}
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              breakpoints= {{
                540: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 10,
                },
                1080: {
                  slidesPerView: 1.8,
                  spaceBetween: 10,
                },
        
                1240: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
              }}
              className="home-section5-slider"
            >
              <SwiperSlide>
                <div>
                  <div>
                    <Image
                      className="img-fluid"
                      height={1200}
                      width={870}
                      src="/florencia/home-section5-slider2.webp"
                      alt="Birthdays"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="fs-5 fw-semibold secondary-color">
                      Birthdays
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div>
                    <Image
                      className="img-fluid"
                      height={1200}
                      width={870}
                      src="/florencia/home-section5-slider1.webp"
                      alt="Anniversaries"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="fs-5 fw-semibold secondary-color">
                      Anniversaries
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <div>
                    <Image
                      className="img-fluid"
                      height={1200}
                      width={870}
                      src="/florencia/home-section5-slider4.webp"
                      alt="Engagement"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="fs-5 fw-semibold secondary-color">
                      Engagement
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div>
                    <Image
                      className="img-fluid"
                      height={1200}
                      width={870}
                      src="/florencia/home-section5-slider3.webp"
                      alt="New Beginnings"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="fs-5 fw-semibold secondary-color">
                      New Beginnings
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlorenciaSection4;
