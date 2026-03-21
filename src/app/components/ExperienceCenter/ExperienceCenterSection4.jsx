"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import "./ExperienceCenter.css";

const ExperienceCenterSection4 = () => {
  return (
    <div className="experience-center-section4 container pb-5">
      <div className="h6 text-gold">A Piece of Jewellery</div>

      <div className="h3 text-red mb-5">for all your Wedding Moments</div>

      <div>
        <Splide
          options={{
            rewind: true,
            gap: "1rem",

            perPage: 1,
            breakpoints: {
              1340: {
                perPage: 4,
              },
              1040: {
                perPage: 3,
              },
              840: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="position-relative">
              <Image
                className=" img-fluid  rounded-5"
                width={310}
                height={390}
                src="/experience-center-slider-img1.webp"
                alt="instagram banner"
              />
              <div className="h4 text-white position-absolute p-4 experience-center-section4_item-text text-center">
                Sparkling Engagement
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="position-relative">
              <Image
                className=" img-fluid  rounded-5"
                width={310}
                height={390}
                src="/experience-center-slider-img2.webp"
                alt="instagram banner"
              />
              <div className="h4 text-white position-absolute p-4 experience-center-section4_item-text text-center">
                Vibrant Haldi
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="position-relative">
              <Image
                className=" img-fluid  rounded-5"
                width={310}
                height={390}
                src="/experience-center-slider-img3.webp"
                alt="instagram banner"
              />
              <div className="h4 text-white position-absolute p-4 experience-center-section4_item-text  text-center">
                Exquisite Mehendi{" "}
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="position-relative">
              <Image
                className=" img-fluid  rounded-5"
                width={310}
                height={390}
                src="/experience-center-slider-img4.webp"
                alt="instagram banner"
              />
              <div className="h4 text-white position-absolute p-4 experience-center-section4_item-text text-center">
                Enchanting Sangeet
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="position-relative">
              <Image
                className=" img-fluid  rounded-5"
                width={310}
                height={390}
                src="/experience-center-slider-img5.webp"
                alt="instagram banner"
              />
              <div className="h4 text-white position-absolute p-4 experience-center-section4_item-text text-center">
                Momentous Muhurtham
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default ExperienceCenterSection4;
