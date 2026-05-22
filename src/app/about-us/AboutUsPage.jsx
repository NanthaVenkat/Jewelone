"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useRef, useState } from "react";

const advantages = [
  { icon: "../../AboutUs/advantage (1).svg", label: "<b class='tw:text-2xl'>50+</b> <br>Stores" },
  { icon: "../../AboutUs/advantage (3).svg", label: "<b class='tw:text-2xl'>40+</b> <br>Years Legacy" },
  { icon: "../../AboutUs/advantage (2).svg", label: "Endless Customisation" },
  { icon: "../../AboutUs/advantage (1).png", label: "BIS <br>Hallmark" },
];

// const awards = [
//   "/JO-Awards1.png",
//   "/JO-Awards2.png",
//   "/JO-Awards3.png",
//   "/JO-Awards4.png",
// ];

const awardSlides = [
  {
    image: '/AboutUs/awards-recognition.png',
    title: "Dare To Dream Awards",
    description:
      "Emerald was recognised for strong business performance and export excellence, reflecting the group's continued growth, credibility, and industry leadership.",
  },
  {
    image: '/AboutUs/about-us.jpg',
    title: "Retail Excellence Recognition",
    description:
      "Jewel One continues to be appreciated for customer trust, design-led collections, and a retail experience that blends warmth, quality, and consistency.",
  },
  {
    image: '/AboutUs/awards-recognition.png',
    title: "Craftsmanship & Innovation",
    description:
      "These recognitions celebrate the standards behind every collection - precision manufacturing, evolving design language, and jewellery made to feel meaningful.",
  },
  {
    image: '/AboutUs/about-us.jpg',
    title: "Retail Excellence Recognition",
    description:
      "Jewel One continues to be appreciated for customer trust, design-led collections, and a retail experience that blends warmth, quality, and consistency.",
  },
];

const voices = [
  {
    media: "/AboutUs/Testimonial-1.mp4",
    mediaType: "video",
    name: "Priya S",
    role: "Bride Collection Customer",
  },
  {
    media: "/AboutUs/Testimonial-2.mp4",
    mediaType: "image",
    name: "Sujatha R",
    role: "Gold Jewellery Customer",
  },
  {
    media: "/AboutUs/Testimonial-3.mp4",
    mediaType: "image",
    name: "Sushmitha K",
    role: "Diamond Jewellery Customer",
  },
];

const sectionTitleStyle = {
  color: "#111111",
  fontSize: "clamp(2.25rem, 4vw, 4rem)",
  lineHeight: 1,
};

const bodyTextStyle = {
  color: "#4C5459",
  // fontSize: "clamp(1rem, 1.25vw, 1.55rem)",
  lineHeight: 1.7,
};

export default function AboutUsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    videoRefs.current[index]?.play().catch(() => { });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex((current) => (current === index ? null : current));
    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <main className="overflow-hidden" style={{ background: "#F2EDE4" }}>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-2">
            <div className="">
              <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:mb-4">
                <span>About </span>
                <span className="tw:italic">Jewel One</span>
              </div>

              <div className="tw:text-md tw:lg:text-lg tw:text-[#3B4443] tw:mb-10">
                <p className="tw:mb-4">
                  Jewel One is the retail expression of Emerald Jewel Industry
                  India Limited, a manufacturing powerhouse known for scale,
                  craftsmanship, and innovation. Built on decades of jewellery
                  making expertise, we bring that manufacturing strength
                  directly to customers through thoughtfully curated retail
                  experiences.
                </p>

                <p className="tw:mb-4">
                  With a vast catalogue shaped by artistic vision and precision
                  manufacturing, Jewel One creates jewellery that balances
                  heritage with contemporary relevance. Our design-to-retail
                  process helps us respond quickly to evolving tastes while
                  preserving the quality and finish customers trust.
                </p>

                <p className="tw:mb-0">
                  At the heart of the brand is a celebration of individuality.
                  From timeless bridal statements to versatile everyday pieces,
                  every collection is crafted to feel personal, elegant, and
                  enduring.
                </p>
              </div>

              <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:text-center tw:mb-5">
                <span className="tw:italic">Jewel One </span>
                <span>Advantage</span>
              </div>
              <div className="tw:grid tw:grid-cols-2 tw:sm:grid-cols-4 tw:md:grid-cols-2 tw:xl:grid-cols-4 tw:text-center">
                {advantages.map((item) => (
                  <div className="" key={item.label}>

                    <div
                      className="h-100 text-center tw:py-4 tw:px-2"
                    >
                      <div className="tw:mx-auto tw:mb-4" style={{ width: 50, height: 50 }}>
                        <img src={item.icon} alt="" style={{ width: '100%', height: '100%' }} />
                      </div>
                      <div
                        className="tw:mt-2 tw:text-xl"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tw:h-full">
              <div className="tw:h-full" style={{ backgroundPosition: 'top center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: 'url("../../AboutUs/about-us.jpg")', minHeight: '420px' }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design */}
      <section className="tw:pb-20">
        <div className="container">
          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-10">
            <div className="">
              <div>
                <Image
                  src="/AboutUs/design-philosophy.gif"
                  alt="Jewel One design craftsmanship"
                  width={1200}
                  height={1500}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="tw:flex tw:justify-center tw:flex-col">
              <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:mb-4">
                <span>Our Design </span>
                <span className="tw:italic">Philosophy</span>
              </div>

              <div className="tw:text-md tw:lg:text-lg tw:text-[#3B4443]" style={bodyTextStyle}>
                <p className="mb-4">
                  At Jewel One, design is driven by a balance of craftsmanship, innovation, and individuality. Every piece is thoughtfully created to reflect evolving style preferences while staying rooted in cultural heritage.
                </p>

                <p className="mb-0">
                  Our design teams draw inspiration from everyday life, global trends, and timeless traditions to create jewellery that feels both relevant and meaningful. This approach allows us to offer a diverse range of designs that adapt to different occasions, styles, and personal expressions ensuring every piece resonates with the woman who wears it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section
        className="section-padding"
        style={{ background: "#964A26", color: "#FFFFFF" }}
      >
        <div className="container">

          <div
            className="tw:p-4 tw:lg:p-7 tw:relative"
            style={{
              border: "1px solid #F2EDE4",
              position: "relative",
              borderRadius: "4px"
            }}
          >
            <h2
              className="alga-font tw:!text-3xl tw:lg:!text-5xl tw:font-medium tw:!mb-5 tw:md:absolute tw:md:top-8 tw:md:left-1/2"
            >
              Awards & Recognition
            </h2>
            <Swiper
              modules={[Autoplay, Navigation, EffectFade]}
              // autoplay={false}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={800}
              navigation={{
                prevEl: ".awards-prev",
                nextEl: ".awards-next",
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
            // style={{ paddingBottom: "5rem" }}
            >
              {awardSlides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-10">

                    <div className="tw:h-full" style={{ minHeight: "420px", position: "relative", borderRadius: 30, overflow: 'hidden' }}>
                      <Image
                        src={slide.image}
                        alt="Jewel One awards and team"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div>

                      <h3
                        className="dm-sans tw:mb-3 tw:md:!mt-20"
                        style={{
                          fontSize: "clamp(1.4rem, 1.8vw, 1.5rem)",
                          fontWeight: 700,
                          lineHeight: 1.3,
                        }}
                      >
                        {slide.title}
                      </h3>

                      <p
                        className="dm-sans mb-0"
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                          lineHeight: 1.8,
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Navigation */}
            <div
              className="tw:flex tw:items-center tw:gap-3 tw:mt-5 tw:md:mt-0 tw:md:absolute tw:left-1/2 tw:bottom-[40px]"
              style={{
                // position: "absolute",
                // left: "51%",
                // bottom: "clamp(2rem, 4vw, 4rem)",
                // bottom: 0,
                zIndex: 2,
              }}
            >
              <button
                type="button"
                className="awards-prev"
                aria-label="Previous award"
              >
                ‹
              </button>

              <button
                type="button"
                className="awards-next"
                aria-label="Next award"
              >
                ›
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Voice of Customers */}
      <section className="section-padding">
        <div className="container">
          <div className="tw:text-center tw:mb-8">
            <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:mb-4">
              <span>Voice of </span>
              <span className="tw:italic">Customers</span>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
            style={{
              paddingBottom: "3.5rem",
              overflow: "visible",
              ["--swiper-pagination-color"]: "#964A26",
              ["--swiper-pagination-bullet-inactive-color"]: "#C8B7A6",
              ["--swiper-pagination-bullet-inactive-opacity"]: "1",
            }}
          >
            {voices.map((item, index) => (
              <SwiperSlide key={item.name}>
                <div
                  className="tw:relative tw:h-full tw:rounded-2xl tw:overflow-hidden tw:pb-0"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="tw:relative tw:aspect-[9/16]">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      // muted
                      playsInline
                      preload="metadata"
                      className="tw:h-full tw:w-full tw:object-cover"
                    >
                      <source src={item.media} type="video/mp4" />
                    </video>
                  </div>

                  <div className="tw:absolute tw:bottom-5 tw:left-5 tw:w-[90%]">
                    <div className="tw:flex tw:items-end tw:justify-between">
                      <div>
                        <div
                          className="tw:mb-1"
                          style={{
                            color: "#fff",
                            fontSize: "1.35rem",
                            fontWeight: 700,
                          }}
                        >
                          {item.name}
                        </div>
                        <p className="tw:text-white tw:opacity-85">{item.role}</p>
                      </div>

                      {/* <i className="fa-regular fa-play"></i> */}

                      <Image
                        src={hoveredIndex === index ? "/AboutUs/paush.png" : "/AboutUs/play.png"}
                        alt={hoveredIndex === index ? "Pause video" : "Play video"}
                        width={70}
                        height={70}
                      className="tw:p-3"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main >
  );
}
