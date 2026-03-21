"use client";
import { React, useRef, useEffect } from "react";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const FlorenciaSection3New = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section className="FlorenciaSection3New">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-5 order-1 mt-5 mt-lg-0 order-lg-0 d-none d-lg-block">
            <Splide
              className="FlorenciaSection3New_main-img-slider"
              options={{
                type: "slide",
                pagination: false,
                arrows: false,
                // cover: true,
                height: 550,
                gap: 10,
              }}
              ref={thumbsRef}
            >
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/florencia/slide-img1.webp"
                  alt="Image 1"
                />
                {/* <div className="fs-2 fw-semibold text-center mt-3 FlorenciaSection3New_main-img-slider__text">
                  Jewellery 1
                </div> */}
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/florencia/slide-img2.webp"
                  alt="Image 2"
                />
                {/* <div className="fs-2 fw-semibold text-center mt-3 FlorenciaSection3New_main-img-slider__text">
                  Jewellery 2
                </div> */}
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/florencia/slide-img3.webp"
                  alt="Image 3"
                />
                {/* <div className="fs-2 fw-semibold text-center mt-3 FlorenciaSection3New_main-img-slider__text">
                  Jewellery 3
                </div> */}
              </SplideSlide>

            
            </Splide>
          </div>
          <div className="col-12 col-lg-7 order-0 order-lg-1 m-auto p-4">
            <div className="mb-5 text-center text-lg-start">
              <div className="fs-2 secondary-color fw-bold mb-2 text-uppercase">PRODUCT CATEGORY</div>
              <div className="main-color italic-font fs-5 mb-3">So that you don’t run out of options to choose from!</div>
              <div className="fs-6">
              Explore Our Show-Stopping Diamond Statement Pieces
              </div>
            </div>

            <Splide
              className="FlorenciaSection3New__thumb-slider"
              hasTrack={false}
              options={{
                type: "slide",
                rewind: true,
                pagination: false,
                // cover: true,
                focus: "center",
                isNavigation: true,
                gap: 5,
                autoWidth: false,
                autoHeight: true,
                arrows: true,
                perPage: 3,
                perMove: 1,
                breakpoints: {
                  1440: {
                    perPage: 3,
                  },
                  1240: {
                    perPage: 2,
                  },
                  992: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1.4,
                  },
                  680: {
                    perPage: 1.1,
                  },
                },
              }}
              ref={mainRef}
              aria-label="Image Slider"
            >
              <SplideTrack>
                <SplideSlide>
                  <Image
                    width={274}
                    height={270}
                    className="img-fluid"
                    src="/florencia/slide-img1.webp"
                    alt="Image 1"
                  />
                  {/* <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 1
                </div> */}
                </SplideSlide>
                <SplideSlide>
                  <Image
                    width={274}
                    height={270}
                    className="img-fluid"
                    src="/florencia/slide-img2.webp"
                    alt="Image 2"
                  />
                  {/* <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 2
                </div> */}
                </SplideSlide>
                <SplideSlide>
                  <Image
                    width={274}
                    height={270}
                    className="img-fluid"
                    src="/florencia/slide-img3.webp"
                    alt="Image 3"
                  />
                  {/* <div className="fs-6 fw-semibold text-center mt-3">
                  Jewellery 3
                </div> */}
                </SplideSlide>
                
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <Image
                    width={42}
                    height={42}
                    alt="arrow"
                    src="/arrow-prev.png"
                  />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <Image
                    width={42}
                    height={42}
                    alt="arrow"
                    src="/arrow-next.png"
                  />
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlorenciaSection3New;
