"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider-section">
      <div className="container py-5">
        <div className="col-12 mb-4 text-center slider-section_content m-auto">
          <div className="fs-2 fw-bold mb-3">
              Ready to make your wedding day the most #TrendingNo1 ever?
          </div>
          <div>
          TVAM is all about you, the bride who rewrites the rules. You're rooted in tradition, but you shine bright with your own kind of sparkle.

          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="slider-section_item-bg m-0 p-3 p-md-4">
              <div className="slider-section-grid">
                <div className="slider-section-grid-item">
                  <div>
                  <Image
                          width={546}
                          height={372}
                          className="img-fluid w-100 d-block rounded-4"
                          src="/tvam/image-banner-1.webp"
                          alt=""
                        />
                  </div>
                </div>
                <div className="slider-section-grid-item mt-4  m-md-auto  text-center">
                  <div className="fs-1 mb-3 fw-bold">TVAM 2.0</div>
                  <div className="fs-6 mb-4 mb-md-0 max-w-500">
                  Embrace your timeless beauty with Jewel One's TVAM collection where modern elegance meets classic charm, making you the trendsetting bride.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
