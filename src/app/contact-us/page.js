import React from 'react'
import ContactSection1 from '../components/Contact/ContactSection1'
// import ContactSection2 from '../components/Contact/ContactSection2'
import ContactSection3 from '../components/Contact/ContactSection3'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify'


export const metadata = {
  title: 'Contact Us - Jewel One',
  description: 'Get in touch with Jewel One for inquiries, support, or feedback. Contact us via phone, email, or visit our corporate office for personalized assistance.',
}


const page = () => {
  return (
    <main>
      <Navbar/>
      <ContactSection1/>
      {/* <ContactSection2/> */}
      <ContactSection3/>
      <ToastContainer />
      <Footer/>
    </main>
  )
}

export default page