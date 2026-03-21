import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CareersPageSection2 from "./CareersPageSection2";
import CareersPageSection1 from "./CareersPageSection1";
import './careers.css'
import { ToastContainer } from "react-toastify";
import CareersPageSection3 from "./CareersPageSection3";


export const metadata = {
    title: "Careers at JewelOne | Join Our Team of Jewellery Experts",
    description: 'Explore exciting career opportunities at JewelOne, a leading name in the jewellery industry. Join our dynamic team and contribute to creating timeless masterpieces. Discover roles in sales, marketing, back office, and more. Shape your future with us!',
  }
  

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="careers-page">
        <CareersPageSection1/>
        <CareersPageSection2/>
        {/* <CareersPageSection3/> */}
      </main>
      <ToastContainer/>
      <Footer />
    </div>
  );
};

export default page;
