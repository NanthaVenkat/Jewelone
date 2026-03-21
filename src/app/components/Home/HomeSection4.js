import React from 'react'
import Image from 'next/image'
import "./Home.css";

const HomeSection4 = () => {
  return (
    <section className="home-section4">
  <div className="col-12 position-relative">
    <picture>
      <source
        srcSet="/home/home-section4-img-mobile.webp"
        type="image/webp"
        media="(max-width: 650px)"
        width={600}
        height={800}
      />
      <Image
      className='img-fluid w-100 h-auto'
        width={1920}
        height={786}
        src="/home/home-section4-img.webp"
        alt="swarna sakthi banner"
        sizes="100vw"
      />
    </picture>
    {/* <div className="home-section4_app-links">
      <div className="text-center border-top border-black">
        <div className="home-section4_app-links-title py-2">
          Download Swarna Sakthi App
        </div>
        <div>
        <a target="__blank" href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US">
            <Image
              width={146}
              height={43}
              className="img-fluid"
              src="/google-play.webp"
              alt="google play"
            />
          </a>
          <a target="__blank" href="https://apps.apple.com/in/app/jewelone/id1507128724">
            <Image
              width={146}
              height={43}
              className="img-fluid"
              src="/app-store.webp"
              alt="app store"
            />
          </a>
        </div>
      </div>
    </div> */}

    <div>
      <a className='home-section3-google-play-link' target="__blank" href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US">play store</a>
      <a className='home-section3-app-store-link' target="__blank" href="https://apps.apple.com/in/app/jewelone/id1507128724">app store</a>
    </div>
  </div>
</section>

  )
}

export default HomeSection4