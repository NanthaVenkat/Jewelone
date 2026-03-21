import Image from "next/image";
import React from "react";
import CareerForm from "./CareerForm";

const CareersPageSection1 = () => {
  return (
    <div className="bg-red">
      <div className="position-relative d-none d-lg-block" >
        <div>
          <Image
            className="img-fluid"
            src="/careers/section1-banner.webp"
            width={1920}
            height={860}
            alt="image"
          />
        </div>

        <div className="position-absolute start-50 w-50 top-0 d-flex justify-content-center align-items-center h-100">
          <div className="p-4">
            <CareerForm />
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="container py-4">
          <div className="col-12 col-md-6 m-auto">
          <CareerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPageSection1;
