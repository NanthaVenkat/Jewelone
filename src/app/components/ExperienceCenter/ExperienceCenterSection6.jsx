import React from 'react'
import "./ExperienceCenter.css"

const ExperienceCenterSection6 = () => {
  return (
    <div className='tw:bg-white'>
        <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:md:py-16">
            <div className='tws:mb-10'>
                <div className='tw:text-center tw:text-3xl tw:md:text-4xl tw:italic tw:font-medium tw:black alga-font tw:mb-8'>Locate Us</div>
            </div>
            <div>
                <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15660.548013102045!2d76.9342088!3d11.1031656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f717364ce6c1%3A0xbbc8bb13a578fe3e!2sJewelOne%20Experience%20Centre!5e0!3m2!1sen!2sin!4v1702381862005!5m2!1sen!2sin"
                    width={600}
                    className='tw:w-full'
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCenterSection6