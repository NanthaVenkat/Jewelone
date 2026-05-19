import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Testimonial from "./Testimonial";

export const metadata = {
    title: "Testimonials - JewelOne",
    description: "JewelOne Testimonials Page",
};

export default function page() {
    return (
        <>
            <Navbar />
            <Testimonial />
            <Footer />
        </>
    );
}
