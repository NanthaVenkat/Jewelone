import React from "react";
import Image from "next/image";
// import BannerImage from '../../../../public/home/section2-img1.webp'
import "./Home.css";
import HomeSection2LogoSlider from "./HomeSection2LogoSlider";

const HomeSection2 = () => {
  return (
    <section className="home-section2 section-padding">
      <div className="container">

        <div className="col-12 mb-4">
        <div className="fs-1 brittany-font text-red">Indha</div>
              <div className="fs-2 optima-font text-uppercase">
                  <span className="fw-bold">Nagaipol</span> Parthadhilai
                </div>
        </div>

          <div className="row g-3">
            <div className="col-12 col-lg-6">
            {/* <Image
                  className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                  src={BannerImage}
                  placeholder="blur"
                  sizes="(max-width:600px) 100vw, 50vw"
                  alt="banner"
                /> */}
              
                <Image
                  width={703}
                  height={408}
                  className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                  src="/home/section2-img1.webp"
                  alt="banner"
                  sizes="(max-width: 600px) 100vw, 768px"
                />
              
            </div>

            <div className="col-12 col-lg-6">
              <div className="px-lg-5">
                <div className="home-section2_text mb-3">
                  <span className="item-text-red">Welcome to Jewel One, </span>
                  where Beautiful Jewellery meets Beautiful You. From the house
                  of Emerald Jewel Industry, one of Asia's largest jewellery
                  makers, We have over 6,00,000+ designs in chains, bangles and
                  any & every jewellery article you need.
                </div>

                <div className="home-section2_text">
                  With timeless masterpieces and endless customisation
                  possibilities - We stand by our tagline{" "}
                  <span className="item-text-dark">
                    “Jewellery that understands women - Penn Manadhai Purintha
                    Pon”.
                  </span>
                </div>
              </div>

              <HomeSection2LogoSlider/>

            </div>
          </div>
       
       
      </div>
    </section>
  );
};

export default HomeSection2;
