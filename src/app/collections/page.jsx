import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import CollectionBanner from './CollectionBanner'
import CollectionGrid from './CollectionGrid'
import './collections.css'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: "Explore Exquisite Jewelry Collections | JewelOne",
  description: "Discover JewelOne's stunning jewelry collections featuring timeless designs, premium craftsmanship, and unmatched elegance. Browse our curated selections to find the perfect piece for every occasion.",
  keywords: [
    "JewelOne collections",
    "jewelry collections",
    "gold jewelry",
    "diamond jewelry",
    "bridal jewelry",
    "elegant designs",
    "JewelOne products",
    "premium jewelry"
  ],
}

const page = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <CollectionBanner/>
            <CollectionGrid/>
            <ToastContainer />
        </main>
        <Footer/>
    </div>
  )
}

export default page