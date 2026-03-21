import React from 'react'

const CollectionBanner = () => {
  return (
    <section className='position-relative collection-banner'>
        <div>
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet="/collections/banner/collection-banner.webp"
                />
                <img
                    src="/collections/banner/collection-banner-mobile.webp"
                    alt="collection banner"
                    className="img-fluid"
                />
            </picture>
        </div>
        <div className='position-absolute top-0 end-0 pe-3 pe-md-5 d-flex align-items-center justify-content-end h-100  text-center fw-medium banner-overlay-text'>
        Our Collections
        </div>
    </section>
  )
}

export default CollectionBanner