"use client";
import React, { useState, useEffect, useRef } from "react";

const ScrollableSections = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const blockRefs = useRef([]);
  const videos = [
    "/diamond/videos/color.mp4",
    "/diamond/videos/clarity.mp4",
    "/diamond/videos/cut.mp4",
    "/diamond/videos/carat.mp4",
  ];
  const posters = [
    "/diamond/videos/posters/Color-Square.webp",
    "/diamond/videos/posters/Clarity-Square.webp",
    "/diamond/videos/posters/Cut-Square.webp",
    "/diamond/videos/posters/Carat-Square.webp",
  ];

  const descriptions = [
    {
      title: "Color",
      caption: "Brilliant Hue:",
      description: "EF-standard diamonds, showcasing exceptional color purity.",
    },
    {
      title: "Clarity",
      caption: "Crystal Clarity:",
      description:
        "Handpicked VVS diamonds for flawless transparency and brilliance.",
    },
    {
      title: "Cut",
      caption: "Masterful Shape:",
      description:
        "Expertly crafted cuts for perfect symmetry and dazzling light reflection.",
    },
    {
      title: "Carat",
      caption: "Signature Size:",
      description:
        "Thoughtfully selected carat weights, balancing elegance and impact.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen is mobile (width <= 992px)
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // No need for scroll observer on mobile

    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the block is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const blockIndex = blockRefs.current.indexOf(entry.target);
          setCurrentVideo(blockIndex);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    blockRefs.current.forEach((block) => {
      if (block) observer.observe(block);
    });
  }, [isMobile]);

  return (
    <div className="ScrollableSections">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="text-white fs-1 fw-medium ScrollableSections__title text-center position-relative diamond-page_section-title__line-below">
              Our Promise of Perfection
            </div>
          </div>

          {isMobile ? (
            // Mobile View
            <div className="col-12 mt-5">
              {videos.map((video, index) => (
                <div key={index} className="mobile-block mb-5">
                  <div className="text-white mb-3">
                    <h2>{descriptions[index].title}</h2>
                    <h4>
                      <i>{descriptions[index].caption}</i>{" "}
                      {descriptions[index].description}
                    </h4>
                  </div>
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    poster={posters[index]}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Desktop View (with scrolling and dynamic video change)
            <div className="col-12 d-none d-lg-block">
              <div className="grid-container">
                <div>
                  <div
                    className="block"
                    ref={(el) => (blockRefs.current[0] = el)}
                  >
                    <div className="position-sticky" style={{ top: "140px" }}>
                      <h2>{descriptions[0].title}</h2>
                      <h4>
                        <i>{descriptions[0].caption}</i>{" "}
                        {descriptions[0].description}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="block"
                    ref={(el) => (blockRefs.current[1] = el)}
                  >
                    <div className="position-sticky" style={{ top: "140px" }}>
                      <h2>{descriptions[1].title}</h2>
                      <h4>
                        <i>{descriptions[1].caption}</i>{" "}
                        {descriptions[1].description}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="block"
                    ref={(el) => (blockRefs.current[2] = el)}
                  >
                    <div className="position-sticky" style={{ top: "140px" }}>
                      <h2>{descriptions[2].title}</h2>
                      <h4>
                        <i>{descriptions[2].caption}</i>{" "}
                        {descriptions[2].description}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="block"
                    ref={(el) => (blockRefs.current[3] = el)}
                  >
                    <div className="position-sticky" style={{ top: "140px" }}>
                      <h2>{descriptions[3].title}</h2>
                      <h4>
                        <i>{descriptions[3].caption}</i>{" "}
                        {descriptions[3].description}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="video-container">
                  <video
                    src={videos[currentVideo]}
                    poster={posters[currentVideo]}
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollableSections;
