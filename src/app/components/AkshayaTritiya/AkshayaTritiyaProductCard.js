import React from 'react'
import Image from "next/image";

const AkshayaTritiyaProductCard = ({ product }) => {
    const { title, weight, image } = product;
    return (
    <div className="card product-card">
              <div className="text-center card-img-top ">
                    <Image width={180} height={180} className="img-fluid" src={image} alt={`${title} ${weight}`} />
                  </div>
                <div className="card-body">
                  

                  <div className="text-center">
                    <div className="fw-semibold fs-6 text-red">{weight}</div>
                    <div className="fs-6 fw-medium">{title}</div>
                    <div className="mt-2">
                    <a href="#" className="btn btn-outline buy-now-btn">Buy Now</a>
                    </div>

                  </div>


                </div>
              </div>
  )
}

export default AkshayaTritiyaProductCard