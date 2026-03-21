"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import "./OurStory.css";

const OurStorySection5 = () => {
  return (
    <div className="our-story-section5 section-padding  pb-5">
      <div className="container">
        <div className="h2 text-red mb-5">Our Team</div>

        <div>
          <Splide
            options={{
              type: "loop",
              gap: "1rem",
              pagination: false,
              autoWidth: true,
              perPage: 4,
              breakpoints: {
                1340: {
                  perPage: 3,
                },
                1040: {
                  perPage: 2,
                },
                840: {
                  perPage: 2,
                },
                460: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div>
                <Image
                  className=" img-fluid"
                  width={330}
                  height={380}
                  src="/our-team.webp"
                  alt="our team"
                />
              </div>

              <div className="mt-3">
                <div className="fs-5 fw-bold">Prem Kumar</div>
                <div className="fs-6">Manager - Pondicherry</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  className=" img-fluid"
                  width={330}
                  height={380}
                  src="/our-team.webp"
                  alt="our team"
                />
              </div>

              <div className="mt-3">
                <div className="fs-5 fw-bold">Prem Kumar</div>
                <div className="fs-6">Manager - Pondicherry</div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div>
                <Image
                  className=" img-fluid"
                  width={330}
                  height={380}
                  src="/our-team.webp"
                  alt="our team"
                />
              </div>

              <div className="mt-3">
                <div className="fs-5 fw-bold">Prem Kumar</div>
                <div className="fs-6">Manager - Pondicherry</div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div>
                <Image
                  className=" img-fluid"
                  width={330}
                  height={380}
                  src="/our-team.webp"
                  alt="our team"
                />
              </div>

              <div className="mt-3">
                <div className="fs-5 fw-bold">Prem Kumar</div>
                <div className="fs-6">Manager - Pondicherry</div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div>
                <Image
                  className=" img-fluid"
                  width={330}
                  height={380}
                  src="/our-team.webp"
                  alt="our team"
                />
              </div>

              <div className="mt-3">
                <div className="fs-5 fw-bold">Prem Kumar</div>
                <div className="fs-6">Manager - Pondicherry</div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection5;
