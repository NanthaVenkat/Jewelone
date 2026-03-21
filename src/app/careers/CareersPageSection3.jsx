import Image from 'next/image'
import React from 'react'

const CareersPageSection3 = () => {
  return (
    <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <div className='fs-3 fw-semibold text-center'>Employee Engagement Programs</div>
                </div>

                <div className="col-12">
                    <div className='grid-section'>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-1.png" alt="image" />
                        </div>
                       
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-2.png" alt="image" />
                        </div>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-3.png" alt="image" />
                        </div>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-4.png" alt="image" />
                        </div>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-5.png" alt="image" />
                        </div>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-6.png" alt="image" />
                        </div>
                        <div>
                            <Image width={300} height={300} src="/careers/grid/grid-img-7.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareersPageSection3