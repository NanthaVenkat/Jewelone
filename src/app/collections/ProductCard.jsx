"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import GetEstimate from "../components/GetEstimate";

const ProductCard = ({product}) => {
  const random = Math.random().toString(36).substring(7);
  return (
    <div className="product-item">
      <div className="card border-0 rounded-4 overflow-hidden">
        <div>
          <Splide
            options={{
              type: "loop",

              pagination: false,
              lazyLoad: "nearby", // Lazy load nearby slides to reduce initial load time
            }}
          >
            {Array.from({ length: product.imagesCount }, (_, index) => index + 1).map((item) => (
              <SplideSlide key={item}>
              <Link href={product.slug}>
                <Image
                  className="img-fluid"
                  src={`/collections/products/${product.id}/Thumbnail/${item}.jpg`}
                  width={400}
                  height={400}
                  alt="product"
                />
              </Link>
            </SplideSlide>
            ))}
          
          </Splide>
        </div>
        <div className="card-body px-2 py-3 px-md-3 d-flex flex-column gap-2">
          <div className="fw-medium">
            <Link
              href={product.slug}
              className="text-decoration-none text-black"
            >
             <span>IMCSHS1172-{product.id}</span>
            </Link>
          </div>
          <div className="fw-semibold text-red">Product {product.id}</div>

          <div className="d-flex flex-column flex-sm-row gap-2">
            <div className="product-card-border">
              <div className="fw-medium text-black">Weight</div>

              <div>
                Net wt: <span>{product.netWeight}</span>
              </div>
              <div>
                Gross wt: <span>{product.grossWeight}</span>
              </div>
            </div>
            <div>
              <div className="fw-medium text-black">Purity</div>
              <div>22K</div>
            </div>
          </div>

          <div>
            <div className="fw-medium text-black">Product Customisable</div>

            <div className="d-flex gap-2 align-items-center mt-1 mb-2">
              <div>
                <label className="d-flex gap-1 align-items-center">
                  {" "}
                  <input
                    type="checkbox"
                    name="customisable"
                    readOnly

                    checked={product.customization==="Yes"}
                    style={{
                      width: "15px",
                      height: "15px",
                      accentColor: "#40D06C",
                      
                    }}
                  />
                  Yes
                </label>
              </div>

              <div>
                <label className="d-flex gap-1 align-items-center">
                  <input
                    type="checkbox"
                    checked={product.customization==="No"}
                    readOnly
                    name="customisable"
                    style={{
                      width: "15px",
                      height: "15px",
                      accentColor: "#CE0D1B",
                    }}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <GetEstimate random={random} productID={product.id} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
