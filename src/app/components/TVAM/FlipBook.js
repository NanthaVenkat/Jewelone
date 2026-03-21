"use client";

import Image from "next/image";
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipBook = () => {
  const book = useRef();

  return (
    <section className="flip-book-section overflow-hidden">
      <div className="container py-5">
        <div className="col-12 text-center mb-5">
          <div className="fs-1 fw-bold font-secondary primary-text">
            Explore the Collection
          </div>
          <Image
            width={250}
            height={14}
            className="img-fluid"
            src="/tvam/heading_design_0207.png"
            alt="heading underline img"
          />
        </div>
        <div className="col-12">
          <HTMLFlipBook
            ref={book}
            width={500}
            height={500}
            size="stretch"
            maxWidth={500}
            maxHeight={500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="m-auto flip-book-section_wrapper"
          >
            <div className="page" >
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-1.jpg"
                alt="image"
              />
            </div>

            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-2.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-3.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-4.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-5.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-6.jpg"
                alt="image"
              />
            </div>
            <div className="page" >
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-1.jpg"
                alt="image"
              />
            </div>

            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-2.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-3.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-4.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-5.jpg"
                alt="image"
              />
            </div>
            <div className="page">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                src="/tvam/slider-6.jpg"
                alt="image"
              />
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
};

export default FlipBook;
