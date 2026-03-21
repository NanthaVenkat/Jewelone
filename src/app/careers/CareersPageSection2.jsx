import Image from 'next/image'
import React from 'react'

const CareersPageSection2 = () => {
  return (
    <div className='py-5'>
        <div className='container'>
            <div className="row">
            <div className="col-12 mb-4">
                <div className='fs-3 fw-semibold text-center'>Why to join with us</div>
            </div>
            </div>
            <div className='row g-2'>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img1.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>A Legacy of Excellence</div>
                                <div>Be a part of a trusted brand with decades of experience in creating memorable customer experiences for more than 8 lakh+ customers</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img2.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>Innovative Work Environment</div>
                                <div>Work in a dynamic, creative environment that fosters innovation, encouraging fresh ideas and rewarding out-of-the-box thinking.</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img3.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>Opportunities for Growth</div>
                                <div>Unlock your potential with structured career paths, skill development programs, and learning opportunities from industry leaders.</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img4.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>Celebrating Creativity</div>
                                <div>Join a team that values individuality and leadership while providing a platform for creative minds to thrive.</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img5.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>Employee-Centric Culture</div>
                                <div>Experience a supportive and inclusive workplace that prioritises employee well-being, work-life balance, and a sense of belonging.</div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body text-center d-flex flex-column align-items-center gap-3">
                            <div>
                                <Image className='img-fluid rounded-circle' src="/careers/section2-img6.png" width={70} height={70} alt="image" /> 
                            </div>
                            <div>
                                <div className='fs-6 fw-semibold mb-2'>Impactful Contributions</div>
                                <div>Be part of a journey where your work contributes to empowering customers, celebrating life’s moments, and leaving a sparkling legacy.</div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareersPageSection2