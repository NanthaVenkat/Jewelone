import Image from 'next/image'
import React from 'react'

const ExperienceCenterSection3 = () => {
  return (
    <div className='tw:bg-[#F2EDE4]'>
      <div className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-10 tw:md:py-16">
          <div className='tw:space-y-2'>
            <div className='tw:text-rk-primary tw:uppercase tw:font-medium tw:text-sm'>A Piece of Jewellery for all your</div>
            <div className='tw:text-2xl tw:md:text-3xl tw:lg:text-4xl tw:text-black alga-font'>Wedding Moments</div>
          </div>

          <div className='tw:mt-10 tw:grid tw:grid-cols-2 tw:lg:grid-cols-4 tw:gap-4'>
            <div>
              <Image src="/experience-center/section3/image_1.webp" width={415} height={613} alt='Image 1' />
            </div>
            <div>
            <Image src="/experience-center/section3/image_2.webp" width={415} height={613} alt='Image 2' />
            </div>
            <div>
            <Image src="/experience-center/section3/image_3.webp" width={415} height={613} alt='Image 3' />
            </div>
            <div>
            <Image src="/experience-center/section3/image_4.webp" width={415} height={613} alt='Image 4' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ExperienceCenterSection3