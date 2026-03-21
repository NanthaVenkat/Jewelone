import React from 'react'
// import ZillaraSection1 from './ZillaraSection1'
import ZillaraSection2 from './ZillaraSection2'
import ZillaraSection3 from './ZillaraSection3'
import ZillaraSection5 from './ZillaraSection5'
import ZillaraSection6 from './ZillaraSection6'
import ZillaraBanner from './ZillaraBanner'
import ZilaraFooter from './ZilaraFooter'
import Navbar from '../components/NavBar/NavBar'


export const metadata = {
  title: 'Zilara - Silver Jewelry by JewelOne',
  description: 'Discover exquisite silver jewelry by Zilara, a premier brand by JewelOne. Explore our collection of finely crafted silver pieces that blend elegance and style.'
}


const page = () => {
  return (
    <main className='bg-white zillara-page'>
      <Navbar logo="zilara"/>
      <ZillaraBanner/>
      {/* <ZillaraPdf/> */}
        {/* <ZillaraSection1/> */}
        <ZillaraSection2/>
        <ZillaraSection3/>
        <ZillaraSection5/>
        <ZillaraSection6/>
        <ZilaraFooter/>
    </main>
  )
}

export default page