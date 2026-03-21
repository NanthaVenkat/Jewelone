"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./MainBanner.css";
import Image from "next/image";

export const MainBanner = () => {
  return (
    <section className="main-banner-section home-section1">
      <Splide
        options={{
          type: "loop",
          autoplay: false,
          interval: 4000,
          lazyLoad: 'nearby', // Lazy load nearby slides to reduce initial load time
        }}
      >
          <SplideSlide>
          <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
            <source
              srcSet="/home/JO_Anniversary.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/home/JO_Anniversary_Mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              fetchPriority="high"
              loading="eager"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>

        {/* <SplideSlide>
          <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
            <source
              srcSet="/home/jone-banner1.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/home/jone-banner1-mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              loading="lazy"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide> */}


        <SplideSlide>
          <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
            <source
              srcSet="/home/jone-banner4.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/home/jone-banner4mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              loading="lazy"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>
        
        <SplideSlide>
          <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
            <source
              srcSet="/home/jone-banner2.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/home/jone-banner2mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              loading="lazy"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>

        <SplideSlide>
          <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
            <source
              srcSet="/home/jone-banner3.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/home/jone-banner3mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              loading="lazy"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>
      </Splide>
    </section>
  );
};
