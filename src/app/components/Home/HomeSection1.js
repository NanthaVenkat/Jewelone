import React from "react";
import Image from "next/image";
// import mobileImage1 from '../../../../public/home/jone-banner1mob.webp'
// import desktopImage1 from '../../../../public/home/jone-banner1.webp'

const HomeSection1 = () => {
  return (
    <div className="home-section1">
  <picture>
  <source
    srcSet="/home/jone-banner1.webp"
    type="image/webp"
    media="(min-width: 650px)"
    width="1940" // Desktop width
    height="691" // Desktop height
  />
  <Image
    className="img-fluid"
    alt="Home Main Banner"
    src="/home/jone-banner1mob.webp"
    height={800} // Mobile image height
    width={600}  // Mobile image width
    placeholder="blur"
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    priority={true}
    sizes="100vw"
    loading="eager"
    style={{
      width: '100%',
      height: 'auto', // Maintain aspect ratio
    }}
  />
</picture>


      {/* <Image className='img-fluid w-100 h-auto d-block d-md-none' src={mobileImage1} alt="Home Main Banner" placeholder='blur' loading='eager' priority />
          <Image className='img-fluid w-100 h-auto d-none d-md-block' src={desktopImage1} alt="Home Main Banner" placeholder='blur' loading='eager' priority /> */}
    </div>
  );
};

export default HomeSection1;
