import Image from "next/image";
import React from "react";
import CatalogueModal from "./CatalogueModal";

const DiamondSection1 = () => {
  return (
    <div className="position-relative">
      <picture style={{ display: "block", width: "100%", height: "auto" }}>
        <source
          srcSet="/diamond/section1/main-banner.webp"
          type="image/webp"
          media="(min-width: 650px)"
          width={1920}
          height={1080}
        />
        <Image
          className="img-fluid w-100 h-auto"
          alt="Main Banner Image"
          src="/diamond/section1/mobile-banner.webp"
          width={600}
          height={800}
          sizes="100vw"
          loading="eager"
          priority
        />
      </picture>

      <CatalogueModal />
    </div>
  );
};

export default DiamondSection1;
