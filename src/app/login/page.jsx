import React from 'react'
import LoginForm from './LoginForm'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'


export const metadata = {
  title: "Admin Login | JewelOne"
};


const page = () => {
  return (
    <main>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </main>
  )
}

export default page