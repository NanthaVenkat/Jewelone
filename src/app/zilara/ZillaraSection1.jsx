"use client";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./zillara.css";

const ZillaraSection1 = () => {
  return (
    <section className="ZillaraSection1">
      <div className="col-12">
        <Splide
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
            perPage: 1,
            perMove: 1,
          }}
          aria-label="Image Slider"
        >
          <SplideTrack>
            <SplideSlide>
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet="/zillara/zillara-main-slider-img1.webp"
                />
                <img
                  className="img-fluid"
                  width={768}
                  height={1024}
                  src="/zillara/zillara-main-slider-img1-mobile.webp"
                  alt="main banner"
                />
              </picture>

              {/* <Image
                    width={1920}
                    height={720}
                    className="img-fluid"
                    src="/zillara/zillara-main-slider-img1.webp"
                    alt="Image 1"
                  /> */}
            </SplideSlide>
            <SplideSlide>
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet="/zillara/zillara-main-slider-img1.webp"
                />
                <img
                  className="img-fluid"
                  width={768}
                  height={1024}
                  src="/zillara/zillara-main-slider-img1-mobile.webp"
                  alt="main banner"
                />
              </picture>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev bg-transparent">
              <Image
                width={42}
                height={42}
                alt="arrow"
                src="/zillara/left-arrow-img.png"
              />
            </button>
            <button className="splide__arrow splide__arrow--next bg-transparent">
              <Image
                width={42}
                height={42}
                alt="arrow"
                src="/zillara/right-arrow-img.png"
              />
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default ZillaraSection1;
