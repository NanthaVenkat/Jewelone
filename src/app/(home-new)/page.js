import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/NavBar"
import HomeAnnouncmentBar from "./HomeAnnouncmentBar"
import HomeNewSection1 from "./HomeNewSection1"
import HomeNewSection2 from "./HomeNewSection2"
import HomeNewSection3 from "./HomeNewSection3"
import HomeNewSection4 from "./HomeNewSection4"
import HomeNewSection5 from "./HomeNewSection5"
import HomeNewSection6 from "./HomeNewSection6"



export const metadata = {
  title: "JewelOne | Finest Gold & Diamond Jewellery Store",
  description: 'Discover JewelOne, your premier destination for gold and diamond jewellery. Explore an extensive collection of over 600,000 exquisite designs in chains, bangles, and more.',
}


export default function Home() {
  return (
  <>
   

   <main className="tw:bg-white pelita-grande-font home">
   {/* <HomeAnnouncmentBar/> */}
    <Navbar/>
    <HomeNewSection1/>
    <HomeNewSection2/>
    <HomeNewSection3/>
    <HomeNewSection4/>
    <HomeNewSection5/>
    <HomeNewSection6/>
    <Footer/>
   </main>
  </>
  )
}
