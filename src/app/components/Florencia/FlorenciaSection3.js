"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Florencia.css"


const FlorenciaSection3 = () => {
  return (
    <section className="home-section3">
      <div className="container py-5">
        <div
          className="col-12 text-center"
        >
          <div className="fs-3 fs-lg-2 secondary-color fw-semibold main-font mb-3">
            WHAT <span className="highlight-text">MAKES US STAND OUT</span>
          </div>
          <p className="fs-6" style={{maxWidth:'750px',margin:'auto'}}>
            Florencia's commitment to personalised craftsmanship ensures that
            each piece is a reflection of your distinctive style, passion, and
            personality.
          </p>
        </div>
        <div className="col-12 mt-5 swiper home-section3-logo-items d-flex">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={'auto'}
            
            // navigation
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}

        

            className="home-section3-slider"
          >
            <SwiperSlide>
              {" "}
              <div className="text-center home-section3-logo-item">
                <div className="home-section3-logo-item--img_wrapper mb-3">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/florencia/icons/home-section3-img1.png"
                    alt="Innovation in Craftmanship"
                  />
                </div>
                <div className="fs-6 fw-medium secondary-color">
                  Innovation in Craftmanship
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="text-center home-section3-logo-item">
                <div className="home-section3-logo-item--img_wrapper mb-3">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/florencia/icons/home-section3-img2.png"
                    alt="Ethical Manufacturing Practices"
                  />
                </div>
                <div className="fs-6 fw-medium secondary-color">
                  Ethical Manufacturing Practices
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="text-center home-section3-logo-item">
                <div className="home-section3-logo-item--img_wrapper mb-3">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/florencia/icons/home-section3-img3.png"
                    alt="Assured Quality"
                  />
                </div>
                <div className="fs-6 fw-medium secondary-color">
                  Assured Quality
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="text-center home-section3-logo-item">
                <div className="home-section3-logo-item--img_wrapper mb-3">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/florencia/icons/home-section3-img4.png"
                    alt="Commitment to Exclusivity in Design"
                  />
                </div>
                <div className="fs-6 fw-medium secondary-color">
                  Commitment to Exclusivity in Design
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center home-section3-logo-item">
                <div className="home-section3-logo-item--img_wrapper mb-3">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/florencia/icons/home-section3-img5.png"
                    alt="Endless Posssibilities in Customisation"
                  />
                </div>
                <div className="fs-6 fw-medium secondary-color">
                  Endless Posssibilities in Customisation
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FlorenciaSection3;
