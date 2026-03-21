"use client";
import { useState } from "react";

const DigiGoldSection2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useState(null);

  const handlePlay = () => {
    const video = document.getElementById("myVideo");
    video.play();
    setIsPlaying(true);
  };


  return (
    <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:pt-10 tw:md:pt-16">
      <div className="text-center tw:text-3xl tw:md:text-4xl tw:font-medium tw:text-rk-primary alga-font tw:mb-8">
        DigiGold Scheme Video
      </div>

      <div className="tw:max-w-4xl tw:mx-auto tw:relative tw:rounded-2xl tw:overflow-hidden">
        <video
          id="myVideo"
          poster="digigold/poster.webp" // 👈 your poster image
          className="tw:w-full tw:h-auto tw:rounded-2xl tw:aspect-video tw:object-cover"
          controls={isPlaying}
          loading="lazy"
          preload="none"
        >
          <source src="digigold/video.mp4" type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center"
          >
            <svg
              className="tw:w-16 tw:h-16 tw:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default DigiGoldSection2;
