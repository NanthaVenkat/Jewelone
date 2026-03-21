import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
import BootstrapClient from "./components/BootstrapClient";
// import GsapBall from './components/GsapBall';
// import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from "@next/third-parties/google";
import MetalPrices from "./components/MetalPrices";
import ScrollToTop from "./components/ScrollToTop";
import FacebookPixel from "./components/FacebookPixel";
import GoogleAdsTag from "./components/GoogleAdsTag";
import WhatsAppWidget from "./components/WhatsAppWidget";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  display: "swap",
  variable: "--font-inter",
});
const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "JewelOne",
  description: "JewelOne Website",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${great_vibes.variable}`}>
        <MetalPrices />
        {/* <Navbar/> */}
        <ScrollToTop />
        {children}
        {/* <Footer/> */}
        <BootstrapClient />
        <GoogleTagManager gtmId="GTM-KRZSB3WW" />
        <GoogleAdsTag />
        <FacebookPixel />
        <WhatsAppWidget />

      </body>
    </html>
  );
}
