import React from 'react'
import HomeSection3 from '../components/Home/HomeSection3'
import ExperienceCenterSection2 from '../components/ExperienceCenter/ExperienceCenterSection2'
import ExperienceCenterSection6 from '../components/ExperienceCenter/ExperienceCenterSection6'
import ExperienceCenterSection3 from '../components/ExperienceCenter/ExperienceCenterSection3'
import ExperienceCenterSection1 from '../components/ExperienceCenter/ExperienceCenterSection1'
import ExperienceCenterSection4 from '../components/ExperienceCenter/ExperienceCenterSection4'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'




export const metadata = {
  title: "Experience Center - JewelOne",
  description: 'JewelOne Experience Center',
}




const page = () => {
  return (
   <>
   <Navbar/>
    <main>
       <ExperienceCenterSection1/>
      <ExperienceCenterSection2/>
      <ExperienceCenterSection3/>
      {/* 
      <ExperienceCenterSection4/> */}
      <ExperienceCenterSection6/>
    </main>
    <Footer/>
   </>
  )
}

export default page