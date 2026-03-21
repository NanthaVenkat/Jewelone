"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import "./OurStory.css";

const OurStorySection3 = () => {
  return (
    <section className="our-story-section3 section-padding">
      <div className='container'>
        <div className='col-12'>
          <div className='our-story-title'>Our Leaders Speak</div>
        </div>



        <div className="mt-5 col-12">

        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            pagination: false,
            perPage: 1,
          }}
        >
         <SplideSlide>
           <div className="row">
           <div className="col-12 col-lg-7">
              <Image
                className=" img-fluid"
                width={1000}
                height={529}
                src="/leader-speak-img1.webp"
                alt="Chairman & Managing Director"
              />
            </div>

            <div  className="col-12 col-lg-5 mt-4 mt-lg-0">
              <div className="fs-3">Chairman & Managing Director</div>
              <hr/>
              <div className="fs-6">To improve and enrich life every where by offering extraordinary lifestyle solutions backend by incomparable value addition and innovation, adhering to globally approved process and norms and creating a successful value-chain for our associates .</div>
            </div>
           </div>
          </SplideSlide>
          <SplideSlide>
           <div className="row mb-5">
           <div className="col-12 col-lg-7">
              <Image
                className=" img-fluid"
                width={1000}
                height={529}
                src="/leader-speak-img1.webp"
                alt="Chairman & Managing Director"
              />
            </div>

            <div  className="col-12 col-lg-5 mt-4 mt-lg-0">
              <div className="fs-3">Chairman & Managing Director</div>
              <hr/>
              <div className="fs-6">To improve and enrich life every where by offering extraordinary lifestyle solutions backend by incomparable value addition and innovation, adhering to globally approved process and norms and creating a successful value-chain for our associates .</div>
            </div>
           </div>
          </SplideSlide>

          


        </Splide>
        </div>

        

      </div>
    </section>
  )
}

export default OurStorySection3