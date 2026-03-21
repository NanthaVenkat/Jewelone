"use client"
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const HomeSection9 = () => {
  return (
    <div className="home-section9">
      <div className="container py-5">
        <div className="col-12">
          <div className="mb-5 home-section9-heading">Gallery</div>
        </div>


        <div className="col-12 d-lg-none home-section9-mobile">
        <Splide options={ {
                      type: 'slide',
                      gap: 10,
                      autoWidth: true,
                      arrows: false,
                      autoplay: true,
                      interval: 2000,
                      pagination: false,
                  } }>
             
             <SplideSlide>
              <Image width={300} height={300} src="/gallery1.webp" alt='gallery image' />

              </SplideSlide>

              <SplideSlide>
              <Image width={300} height={300} src="/gallery1.webp" alt='gallery image' />

              </SplideSlide>
              <SplideSlide>
              <Image width={300} height={300} src="/gallery1.webp" alt='gallery image' />

              </SplideSlide>
              <SplideSlide>
              <Image width={300} height={300} src="/gallery1.webp" alt='gallery image' />

              </SplideSlide>
            </Splide>
        </div>

        <div className="col-12 home-section9_grid d-none d-lg-grid">
          <div className="home-section9_grid-item">
            <div className="home-section9_inner-grid">
              <div className="home-section9_grid-item">
                <Image
                  alt="gallery image"
                  className="img-fluid"
                  height={298}
                  width={621}
                  src="/gallery1.webp"
                />
              </div>
              <div className="home-section9_grid-item">
                <Image
                  alt="gallery image"
                  className="img-fluid"
                  height={298}
                  width={621}
                  src="/gallery1.webp"
                />
              </div>
            </div>
            <div className="mt-2">
              <Image
                alt="gallery image"
                className="img-fluid"
                height={298}
                width={621}
                src="/gallery1.webp"
              />
            </div>
          </div>
          <div className="home-section9_grid-item">
            <Image
              alt="gallery image"
              className="img-fluid"
              height={298}
              width={621}
              src="/gallery1.webp"
            />
          </div>
          <div className="home-section9_grid-item">
            
            <div className="mb-2">
              <Image
                alt="gallery image"
                className="img-fluid"
                height={298}
                width={621}
                src="/gallery1.webp"
              />
            </div>
            <div className="home-section9_inner-grid">
              <div className="home-section9_grid-item">
                <Image
                  alt="gallery image"
                  className="img-fluid"
                  height={298}
                  width={621}
                  src="/gallery1.webp"
                />
              </div>
              <div className="home-section9_grid-item">
                <Image
                  alt="gallery image"
                  className="img-fluid"
                  height={298}
                  width={621}
                  src="/gallery1.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection9;
