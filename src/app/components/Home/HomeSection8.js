import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeSection8 = () => {
  return (
    <div className='home-section8'>
        <div className='container py-5'>
            <div className='col-12'>
                <div className='mb-5 home-section8-heading'>
                UPCOMING EVENTS
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 position-relative'>
                    <Image className='img-fluid' src="/home-section8-img.webp" width={820}  height={492}  alt='event' />
                    <div className='position-absolute top-0  d-flex align-items-end h-100 p-4 text-start'>
                        <div>
                        <div className='home-section8-title mb-2'>Florencia Showrooms</div>
                        <div className='home-section8-title mb-2'>OUR DOORS ARE OPEN</div>
                        <div>
                            <Link className='btn home-section8-btn' href="#" >Visit our Store</Link>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-4 mt-md-0  position-relative'>
                <Image className='img-fluid' src="/home-section8-img.webp" width={820}  height={492}  alt='event' />
                    <div className='position-absolute top-0  d-flex align-items-end h-100 p-4 text-start'>
                        <div>
                        <div className='home-section8-title mb-2'>Florencia Showrooms</div>
                        <div className='home-section8-title mb-2'>OUR DOORS ARE OPEN</div>
                        <div>
                            <Link className='btn home-section8-btn' href="#" >Visit our Store</Link>
                        </div>
                        </div>
                    </div>                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection8