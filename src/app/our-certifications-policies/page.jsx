import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/NavBar/NavBar'
import Image from 'next/image'
import React from 'react'
import './certifications.css'
import Certificates from './Certificates'



export const metadata = {
  title: "Our Certifications & Policies | JewelOne",
  description: 'Discover the assurance of authenticity with Jewel One’s certified jewelry. Explore our certifications for gold, diamonds, and precious gems, ensuring quality and trust in every piece.',
}

const page = () => {
  return (
    <div>
        <Navbar/>
        <main className='cerifications'>
          <section>
            <div className='position-relative'>
              <Image className='img-fluid' src="/certifications/banner.webp" alt="certifications" width={1920} height={168}  style={{minHeight: "60px"}} />
              <div>
                <div className='banner-title position-absolute top-50 start-50 translate-middle text-center'>Our Certifications & Policies</div>
              </div>
            </div>
          </section>
          <Certificates/>
        </main>
        <Footer/>
    </div>
  )
}

export default page