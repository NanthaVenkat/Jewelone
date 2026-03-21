"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const ZillaraSection2 = () => {
  var settings = {
    className: "center",
    centerMode: false,
    centerPadding: "0px",
    infinite: true,
    dots: false,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,

    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container ZillaraSection2 overflow-hidden">
      <div className="pt-5">
        <div className="col-12 text-center">
          <div
            className="fs-2 ZillaraSection2__title fw-semibold mb-5"
            style={{ maxWidth: "550px", margin: "auto" }}
          >
            Beauty and uniqueness in every piece of jewellery
          </div>
        </div>
        <div className="col-12">
          <Slider {...settings}>
            <div>
              <video
                height={867}
                width={650}
                autoPlay
                loop
                muted
                playsInline
                className="w-100 h-auto"
              >
                <source src="/zillara/section2/v1.mp4" type="video/mp4" />
              </video>
            </div>

            <div>
              <Image width={400} height={600} className="img-fluid" src="/zillara/section2/zillara-banner-img1.webp" alt="" />
            </div>

            <div>
              <video
                height={867}
                width={650}
                autoPlay
                loop
                muted
                playsInline
                className="w-100 h-auto"
                poster="/zillara/section2/poster2.jpg"
              >
                <source src="/zillara/section2/Video_2.mp4" type="video/mp4" />
              </video>
            </div>

            <div>
              <Image width={400} height={600} className="img-fluid" src="/zillara/section2/zillara-banner-img2.webp" alt="" />
            </div>

            <div>
              <video
                height={867}
                width={650}
                autoPlay
                loop
                muted
                playsInline
                className="w-100 h-auto"
              >
                <source src="/zillara/section2/v2.mp4" type="video/mp4" />
              </video>
            </div>

      
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ZillaraSection2;
