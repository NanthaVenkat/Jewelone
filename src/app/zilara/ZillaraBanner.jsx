import React from 'react'

const ZillaraBanner = () => {
  return (
    <div className='col-12 px-0'>
         <picture>
            <source
              media="(min-width:768px)"
              srcSet="/zillara/zillara-main-slider-img1.webp"
              />
            <img
              className="img-fluid"
              width={768}
              height={1024}
              src="/zillara/zillara-main-slider-img1-mobile.webp"
              alt="main banner"
            />
          </picture>
    </div>
  )
}

export default ZillaraBanner