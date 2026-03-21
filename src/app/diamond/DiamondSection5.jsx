import Image from 'next/image'
import React from 'react'

const DiamondSection5 = () => {
  return (
    <div className='DiamondSection5'>
    <div className='container py-5'>
      <div className='col-12 col-lg-11 m-auto'>
      <div className='row'>
       <div className='col-12 col-lg-4 d-flex justify-content-center align-items-center'>
          <div className='m-auto text-center text-lg-start'>
          <div className='fs-5 mb-4 DiamondSection5__main-title' style={{color: '#67C7FF'}}>At Jewel One, every Diamond is a
            Masterpiece of Precision and Radiance</div>
            <div className='text-uppercase text-white fs-2 fw-medium DiamondSection5__sub-title'>
            no compromise, <br />
            only brilliance.
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-8'>
        <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
          <source
              srcSet="/diamond/section5/banner.webp"
              type="image/webp"
              media="(min-width: 650px)"
              width={963}
              height={730}
            />
            <Image
              className="img-fluid w-100 h-auto"
              alt="Main Banner Image"
              src="/diamond/section5/mobile-banner.webp"
              width={600}
              height={521}
              sizes="100vw"
              loading="eager"
              priority
            />
          </picture>
          
        </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default DiamondSection5