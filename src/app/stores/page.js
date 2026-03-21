

import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'
import StoreLocator from './StoreLocator'


export const metadata = {
  title: 'Our Stores - JewelOne | Find a Store Near You',
  description: 'Locate your nearest JewelOne store by entering your city or pin code. Explore our extensive network of stores and experience exquisite gold and diamond jewellery collections in person. Discover timeless elegance near you!',
}


const page = () => {
  return (
  
    <main>
      <Navbar/>
      <StoreLocator/>
      <Footer/>
    </main>
  )
}

export default page