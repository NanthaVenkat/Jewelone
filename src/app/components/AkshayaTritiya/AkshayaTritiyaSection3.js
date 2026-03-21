"use client";
import { React, useRef, useEffect } from "react";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import "./AkshayaTritiya.css";

const AkshayaTritiyaSection3 = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section className="AkshayaTritiyaSection3">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-5 order-1 mt-5 mt-lg-0 order-lg-0 d-none d-lg-block">
            <Splide
              className="AkshayaTritiyaSection3_main-img-slider"
              options={{
                type: "slide",
                pagination: false,
                arrows: false,
                cover: true,
                height: 500,
                gap: 10,
              }}
              ref={thumbsRef}
            >
              
              {/* <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/at-collection-img1.png"
                  alt="Image 1"
                />
              </SplideSlide> */}
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/at-collection-img2.png"
                  alt="Image 2"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/at-collection-img3.png"
                  alt="Image 3"
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  width={576}
                  height={577}
                  className="img-fluid"
                  src="/AkshayaTritiya/at-collection-img4.jpg"
                  alt="Image 4"
                />
              </SplideSlide>

            </Splide>
          </div>
          <div className="col-12 col-lg-7 order-0 order-lg-1 m-auto p-4">
            <div className="mb-5 text-center text-lg-start">
              <div className="fs-5">Jewellery that brings you</div>
              <div className="fs-1 fw-bold">Prosperity & Joy</div>
              <div className="fs-6 mt-3 w-75 mx-auto mx-lg-0">
                This Akshaya Tritiya, Enjoy the launch of our latest collections
                with the newest designs you can ever see!
              </div>
            </div>

            <Splide
              className="AkshayaTritiyaSection3__thumb-slider"
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
                    src="/AkshayaTritiya/at-collection-img2.png"
                    alt="Image 2"
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    width={274}
                    height={270}
                    className="img-fluid"
                    src="/AkshayaTritiya/at-collection-img3.png"
                    alt="Image 3"
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image
                    width={274}
                    height={270}
                    className="img-fluid"
                    src="/AkshayaTritiya/at-collection-img4.jpg"
                    alt="Image 4"
                  />
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

export default AkshayaTritiyaSection3;
