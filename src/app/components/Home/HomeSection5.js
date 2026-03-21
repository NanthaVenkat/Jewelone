"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Home.css";

const HomeSection5 = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section className="home-section5">
      <div
        className="home-section5_wrapper section-padding"
        style={{
          backgroundImage: 'url("/home-section5-bg.webp")',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="col-12">
            <div className="mb-5 text-center">
              <div className="fs-3 fw-semibold">
                Hear the Joyful Experiences with Jewel One
              </div>
            </div>

            <Splide
              className="home-section5-thubnials_wrapper mb-5"
              options={{
                type: "slide",
                rewind: false,
                pagination: false,
                perPage:4,
                cover: true,
                focus: "center",
                isNavigation: true,
                breakpoints: {
                  680: {
                    perPage: 4,
                  },
                  340: {
                    perPage: 3,
                  },
                },
              }}
              ref={mainRef}
            >
              <SplideSlide>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Image
                        className="img-fluid"
                        width={139}
                        height={80}
                        src="/sushmitha.webp"
                        alt="video thumbnail 2"
                      />
                    </div>
                    <div className="thumbnail-title">Sushmita </div>
                    <div className="thumbnail-text">Customer</div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Image
                        className="img-fluid"
                        width={139}
                        height={80}
                        src="/sujatha.webp"
                        alt="video thumbnail 3"
                      />
                    </div>
                    <div className="thumbnail-title">Sujatha</div>
                    <div className="thumbnail-text">Siddha Doctor</div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Image
                        className="img-fluid"
                        width={139}
                        height={80}
                        src="/video-thumbnail1.webp"
                        alt="video thumbnail 4"
                      />
                    </div>
                    <div className="thumbnail-title">Nandini</div>
                    <div className="thumbnail-text">Makeup Artist</div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Image
                        className="img-fluid"
                        width={139}
                        height={80}
                        src="/thumb2.webp"
                        alt="video thumbnail 2"
                      />
                    </div>
                    <div className="thumbnail-title">Srinivasan</div>
                    <div className="thumbnail-text">Loyal Customer</div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="card">
                  <div className="card-body">
                    <div>
                      <Image
                        className="img-fluid"
                        width={139}
                        height={80}
                        src="/customers.webp"
                        alt="video thumbnail 5"
                      />
                    </div>
                    <div className="thumbnail-title">Customers</div>
                    <div className="thumbnail-text">Ramnanathapuram</div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>

            <Splide
              ref={thumbsRef}
              className="home-section5-main-videos"
              options={{
                type: "slide",
                pagination: false,
                arrows: false,
                cover: true,
                gap: 10,
              }}
            >
              <SplideSlide>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex">
                  <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/8Q4eiTmy0b0?si=ruX4e94JoFu5tp_H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                  </div>
                  <div className="col-12 col-md-6 m-auto">
                    <div className="mb-4 home-section5_slide-item-text">
                      Sushmita , a bride from Pollachi, shares her happiest
                      moment of customising her entire bridal jewellery with
                      Jewel One. Join her as she narrates the story of how her
                      dream jewellery became a reality, making her special day
                      even more magical.
                    </div>
                    <div>
                      <div className="home-section5_slide-item-footer--title">
                        Sushmita
                      </div>
                      <div className="home-section5_slide-item-footer--text">
                        Pollachi
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex">
                  <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/TXlGcMOUGp0?si=tglXou5Wm0luu5KK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                  </div>
                  <div className="col-12 col-md-6 m-auto">
                    <div className="mb-4 home-section5_slide-item-text">
                      Meet Sujatha, a Siddha Doctor from Ramanathapuram, who
                      designed her own jewellery with Jewel One. Hear her
                      feedback as she shares the joy of crafting her unique
                      pieces and choosing Jewel One to be part of her precious
                      moments every time
                    </div>
                    <div>
                      <div className="home-section5_slide-item-footer--title">
                        Sujatha - Siddha Doctor
                      </div>
                      <div className="home-section5_slide-item-footer--text">
                        Ramanathapuram
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex">
                  <iframe loading="lazy" width="315" height="560"
                      src="https://www.youtube.com/embed/-UaIoygsBD4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
                  </div>
                  <div className="col-12 col-md-6 m-auto">
                    <div className="mb-4 home-section5_slide-item-text">
                      Meet Nandhini, a talented Makeup Artist from Coimbatore.
                      She fell in love with Jewel One at her sister&apos;s
                      wedding and wants to share her thoughts. Listen to
                      Nandhini as she tells us how much she adores Jewel One and
                      how it has added a special touch to her work and personal
                      style.
                    </div>
                    <div>
                      <div className="home-section5_slide-item-footer--title">
                        Nandini - Makeup Artist
                      </div>
                      <div className="home-section5_slide-item-footer--text">
                        Coimbatore
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex">
                  <iframe loading="lazy" width="315" height="560"
                      src="https://www.youtube.com/embed/49wgYi_FUsk"
                      title="YouTube video player"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
                  </div>
                  <div className="col-12 col-md-6 m-auto">
                    <div className="mb-4 home-section5_slide-item-text">
                      Say hello to Srinivasan, a happy Jewel One customer for
                      more than 7 years. Join us as he talks about why he loves
                      Jewel One and how it has been a part of his joyous moments
                      over the years.
                    </div>
                    <div>
                      <div className="home-section5_slide-item-footer--title">
                        Srinivasan - Loyal Customer for 7 Years
                      </div>
                      <div className="home-section5_slide-item-footer--text">
                        Coimbatore
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="row">
                  <div className="col-12 col-md-6 d-flex">
                       <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/NwhLojRAfAM?si=SIocnxtJDhjSSgwG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                  </div>
                  <div className="col-12 col-md-6 m-auto">
                    <div className="mb-4 home-section5_slide-item-text">
                      Get to know the wonderful customers from Ramnanathapuram
                      who chose Jewel One for all their jewellery moments. See
                      how they are benefitting from investing monthly in their
                      Jewellery Schemes.
                    </div>
                    <div>
                      <div className="home-section5_slide-item-footer--title">
                        Customers
                      </div>
                      <div className="home-section5_slide-item-footer--text">
                        Ramnanathapuram
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;