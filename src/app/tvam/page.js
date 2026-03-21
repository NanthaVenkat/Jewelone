import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import BrideGrid from "../components/TVAM/BrideGrid";
import ImageBanner from "../components/TVAM/ImageBanner";
import ImageCarousel from "../components/TVAM/ImageCarousel";
import SliderCards from "../components/TVAM/SliderCards";
import VideoSection from "../components/TVAM/VideoSection";
import './tvam.css'


export const metadata = {
    title: 'TVAM | New Bridal Collection | JewelOne',
    description: 'TVAM is the new bridal collection from JewelOne. Embrace your timeless beauty with JewelOne TVAM collection where modern elegance meets classic charm, making you the trendsetting bride.',
  }
  


export default function Home() {
  return (
   <main className="tvam">
    <Navbar/>
    <ImageBanner/>
    <ImageCarousel/>
    <BrideGrid/>
    <VideoSection/>
    <SliderCards/>
    <Footer/>
   </main>
  )
}