import React from 'react'
import SwarnaSakthiSection1 from '../components/SwarnaSakthi/SwarnaSakthiSection1'
import SwarnaSakthiSection2 from '../components/SwarnaSakthi/SwarnaSakthiSection2'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'




export const metadata = {
  title: 'Swarna Sakthi Gold Purchase Plan - Jewel One',
  description: 'Explore Swarna Sakthi, Jewel One’s exclusive gold ornaments purchase plan. Discover flexible options and benefits to invest in gold and fulfill your dreams effortlessly.',
}



const page = () => {
  return (
    <main className='SwarnaSakthi'>
      <Navbar/>
      <SwarnaSakthiSection1/>
      <SwarnaSakthiSection2/>
      <Footer/>
    </main>
  )
}

export default page