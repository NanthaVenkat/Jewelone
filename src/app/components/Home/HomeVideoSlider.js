"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Scrollbar, A11y } from "swiper/modules";
const videos = [
  {
    src: "/AkshayaTritiya/section2-v1.mp4",
    poster: "/AkshayaTritiya/section2-p1.jpg",
  },
  {
    src: "/AkshayaTritiya/section2-v2.mp4",
    poster: "/AkshayaTritiya/section2-p2.jpg",
  },
  {
    src: "/AkshayaTritiya/section2-v3.mp4",
    poster: "/AkshayaTritiya/section2-p3.jpg",
  },
];

const HomeVideoSlider = () => {
  return (
    <section className="bg-white home-video-slider">
      <div className="container py-5">
      <div className="row g-4 my-4">
        <div className="col-12 col-lg-4 col-xl-3 order-lg-1 m-auto">
          <div className="fs-1 brittany-font text-red">Idhu dhan</div>
          <div>
            <div className="fs-2 optima-font text-uppercase">
              <span className="fw-bold">LATEST</span> Adhudhan
            </div>
            <div className="fs-2 fw-bold optima-font text-uppercase">
              Jewelone{" "}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 col-xl-9 order-lg-0">
          <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1.2}
            scrollbar={{ draggable: true }}
            breakpoints={{
              360: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              468: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide className="col-12 col-lg-4" key={index}>
                <video
                style={{maxHeight:'600px', maxWidth:'400px'}}
                className="img-fluid object-fit-cover"
                height={502}
                width={310}
                  preload="none"
                  // ref={videoRefs.current[index]}
                  src={video.src}
                  // autoPlay={index === 0}
                  autoPlay
                  loop
                  muted
                  poster={video.poster}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeVideoSlider;
