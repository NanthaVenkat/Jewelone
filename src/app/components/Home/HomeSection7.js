import Image from 'next/image'
import React from 'react'

const HomeSection7 = () => {
  return (
    <div className='home-section7 p-md-5'>
        <div className='home-section7_wrapper container p-5 '>
        <div className='row'>
            <div className='col-12 col-md-5 m-auto'>
                <div className='home-section7_title mb-3'>Completed Events</div>
                <div className='home-section7_text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>


            </div>
            <div className='col-12 col-md-7 mt-5 mt-md-0'>
            <picture>
                <source
                    srcSet="/section7-desktop-img.webp"
                    type="image/webp"
                    media="(min-width: 650px)"
                />
                <Image
                    alt="main banner"
                    src="/section7-mobile-img.webp"
                    height={635}
                    width={713 }
                     
                    className='img-fluid'   />
                </picture>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default HomeSection7