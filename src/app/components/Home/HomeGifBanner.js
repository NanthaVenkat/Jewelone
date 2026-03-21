import React from 'react'
import Image from 'next/image'

const HomeGifBanner = () => {
  return (
    <div className='container'>
    <picture>
          <source
              srcSet="/gif-banner.gif"
              type="image/webp"
              media="(min-width: 650px)"
          />
          <Image
              loading='lazy'
              alt="main banner"
              src="/mobile-gif-banner.gif"
              height={550}
              width={1519 }
              className='img-fluid'  
              unoptimized             />
          </picture>
</div>
  )
}

export default HomeGifBanner