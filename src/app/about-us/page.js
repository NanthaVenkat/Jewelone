import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AboutUsPage from "./AboutUsPage";

export const metadata = {
  title: "About Us - JewelOne",
  description: "JewelOne About Us Page",
};

export default function page() {
  return (
    <>
      <Navbar />
      <AboutUsPage />
      <Footer />
    </>
  );
}
