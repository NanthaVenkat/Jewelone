import Navbar from "../components/NavBar/NavBar"
import DigiGoldFooter from "./DigiGoldFooter"
import DigiGoldHeader from "./DigiGoldHeader"
import DigiGoldSection1 from "./DigiGoldSection1"
import DigiGoldSection2 from "./DigiGoldSection2"
import DigiGoldSection3 from "./DigiGoldSection3"
import DigiGoldSection4 from "./DigiGoldSection4"
import DigiGoldSection5 from "./DigiGoldSection5"
import './digigold.css'
import { ToastContainer } from 'react-toastify'


export const metadata = {
  title: 'Digi Gold by Jewel One | Buy, Save & Invest in Digital Gold Online',
  description: 'Start your smart gold savings journey with Digi Gold by Jewel One. Buy, save, and invest in 24K digital gold anytime, anywhere with complete safety and transparency. Build your wealth effortlessly through secure online gold savings powered by Jewel One.',
}



const page = () => {
  return (
    <div className='digi-gold dm-sans'>
      <Navbar logo={"digigold"}/>
    {/* <DigiGoldHeader/> */}
        <main>
            <DigiGoldSection1/>
            <DigiGoldSection2/>
            <DigiGoldSection3/>
            <DigiGoldSection4/>
            <DigiGoldSection5/>
        </main>
        <ToastContainer />
    <DigiGoldFooter/>
    </div>
  )
}

export default page