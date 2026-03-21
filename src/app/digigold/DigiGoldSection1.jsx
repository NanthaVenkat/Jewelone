"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const DigiGoldSection1 = () => {
  return (
    <div className="digigold-section1">
      <Splide
        options={{
          type: "loop",
          autoplay: false,
          interval: 4000,
          lazyLoad: "nearby", // Lazy load nearby slides to reduce initial load time
        }}
      >
        <SplideSlide>
          <picture style={{ display: "block", width: "100%", height: "auto" }}>
            <source
              srcSet="/digigold/section1/banner1.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1640}
              height={803}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Main Banner Image"
              src="/digigold/section1/banner1-mob.webp"
              width={650}
              height={866}
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>

        <SplideSlide>
          <picture style={{ display: "block", width: "100%", height: "auto" }}>
            <source
              srcSet="/digigold/section1/banner2.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={1920}
              height={1080}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Secondary Banner Image"
              src="/digigold/section1/banner2-mob.webp"
              width={600}
              height={800}
              sizes="100vw"
              loading="lazy"
              quality={75} // Reduces image size for faster loading
            />
          </picture>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default DigiGoldSection1;
