"use client";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ProductMedia = ({ product }) => {
  return (
    <Splide
      options={{
        type: "loop",
        arrows: false,
        pagination: true,
        lazyLoad: "nearby", // Lazy load nearby slides to reduce initial load time
      }}
    >
      {Array.from({ length: product.imagesCount }, (_, index) => index + 1).map((item) => (
        <SplideSlide key={item}>
          <div className="d-flex justify-content-center">
            <Image 
              className="img-fluid rounded-5"
              alt={`product image ${item}`}
              src={`/collections/products/${product.id}/Thumbnail/${item}.jpg`}
              width={600}
              height={600}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductMedia;
