import React from 'react'

const HomeVideoAutoPlay = () => {
  return (
    <section className='container-fluid p-0'>
        <div className='col-12'>
            <div className='d-none d-md-block'>
            <video className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              loading="lazy"
               preload="none"
              poster='/home/video-poster-desktop.webp'
              playsInline
              controls
              height={1920}
              width={704}
            >
              <source
                src="/home/home-main-banner-video-desktop.mp4"
                type="video/mp4"
              />
            </video>
            </div>

            <div className='d-block d-md-none'>
            <video className="w-100 h-auto object-fit-cover"
              autoPlay
              loop
              muted
              loading="lazy" preload="none"
                            playsInline
              poster='/home/video-poster-mobile.webp'
              controls
              height={813}
              width={600}
            >
              <source
                src="/home/home-main-banner-video-mobile.mp4"
                type="video/mp4"
              />
            </video>
            </div>


        </div>
    </section>
  )
}

export default HomeVideoAutoPlay