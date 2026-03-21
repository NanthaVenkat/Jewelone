import React from "react";
import Image from "next/image";
import "./OurStory.css";

const OurStorySection2 = () => {
  return (
    <div className="our-story-section2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <div>
              <div className="our-story-title mb-3">Our Mission</div>
              <div className="our-story-text">
                To improve and enrich life every where by offering extraordinary
                lifestyle solutions backend by incomparable value addition and
                innovation, adhering to globally approved process and norms and
                creating a successful value-chain for our associates .
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-5 mb-lg-0">
              <div>
                <Image
                  className="img-fluid"
                  src="/ourstory-section2-img1.webp"
                  height={670}
                  width={469}
                  alt="image"
                />
              </div>
          </div>

          <div className="col-12  col-sm-6 col-lg-4 mb-5 mb-lg-0">
            <div>
              


              <div className="d-flex mb-4">
              

                <div className="our-story-title mb-3">Vision
                To Ornament
                the World</div>

                <div>
                <Image
                  className="img-fluid our-story-section2_stars"
                  src="/stars.png"
                  height={250}
                  width={250}
                  alt="image"
                />
                </div>

              </div>

              <div>
                <Image
                  className="img-fluid"
                  src="/our-story-section2-img2.webp"
                  height={333}
                  width={288}
                  alt="image"
                />
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default OurStorySection2;
