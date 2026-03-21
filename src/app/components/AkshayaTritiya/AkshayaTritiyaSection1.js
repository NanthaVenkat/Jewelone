"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const AkshayaTritiyaSection1 = () => {
  return (
    <section className="AkshayaTritiyaSection1 container-fluid p-0">
      <Splide
        options={{
          type: "slide",
          // autoplay: true,
          // interval: 4000,
        }}
      >
        {/* <SplideSlide>
          <div className="AkshayaTritiyaSection1-mob-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="/AkshayaTritiya/AkshayaTritiyaSection1-mob-video-poster.jpg"
              height={867}
              width={650}
            >
              <source
                src="/AkshayaTritiya/main-slider-video1-mob.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="AkshayaTritiyaSection1-large-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="/AkshayaTritiya/AkshayaTritiyaSection1-video-poster.jpg"
              height={691}
              width={1940}
            >
              <source
                src="/AkshayaTritiya/main-slider-video1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SplideSlide> */}

        <SplideSlide>
          <Link href="#prebookFormSection">
            <picture>
              <source
                srcSet="/AkshayaTritiya/at-main-banner1.webp"
                type="image/webp"
                media="(min-width: 650px)"
              />
              <Image
                priority="true"
                alt="main banner"
                src="/AkshayaTritiya/at-main-banner1-mob.jpg"
                height={691}
                width={1940}
              />
            </picture>
          </Link>
        </SplideSlide>
      </Splide>

      {/* <div className='col-12'>
           <Link href="#prebookFormSection">
                        <picture>
                            <source
                                srcSet="/AkshayaTritiya/main-banner-img1.webp"
                                type="image/webp"
                                media="(min-width: 650px)"
                            />
                            <Image
                                className='img-fluid'
                                priority="true"
                                alt="main banner"
                                src="/AkshayaTritiya/main-banner-mob-img1.webp"
                                height={750}
                                width={562}
                            />
                        </picture>
            </Link>
           </div> */}
    </section>
  );
};

export default AkshayaTritiyaSection1;
