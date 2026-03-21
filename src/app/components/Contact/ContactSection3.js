import React from "react";
import "./Contact.css";
import FaqAccordion from "../FaqAccordion";

const faqs = [
  {
    question: "Does Jewelone offer jewellery repair services?",
    answer: "Yes, we offer a full range of repair services, including resizing, stone replacement, and cleaning."
  },
  {
    question: "Does Jewelone provide engraving services?",
    answer: "Yes, we offer custom engraving on many of our jewellery pieces."
  },
  {
    question: "Do you offer jewellery for special occasions?",
    answer: "Yes, JewelOne has various collections tailored for special occasions such as weddings, festivals, and more. They frequently launch new collections to suit different events and tastes."
  },
  {
    question: "What is your return policy?",
    answer: "JewelOne has a customer-friendly return policy. Details about the return policy can be obtained directly from the store or their customer service."
  },
  {
    question: "Can I customize my jewellery at JewelOne?",
    answer: "Yes, JewelOne offers customization options for your jewellery. You can bring in your designs, and if possible, they will take your order and deliver it to the nearest showroom."
  },
  {
    question: "What certifications do your diamonds come with?",
    answer: "All diamonds at JewelOne are certified by reputable gemological laboratories, ensuring their authenticity and quality. Certifications typically cover the 4 Cs: Carat, Cut, Clarity, and Color."
  }
];
const ContactSection3 = () => {
  return (
    <div className="contact-section3 section-padding">
      <div className="container">
        <div className="col-12 mb-4">
          <div className="contact-section-label text-red mb-2">FAQ</div>
          <div className="contact-section-title text-black">
            Frequently Asked Questions
          </div>
        </div>

        <div className="row">
          <FaqAccordion faqs={faqs}/>

          {/* <div className="col-12 col-md-6">
            <div className="contact-section3_form">
              <div className="contact-section3_form-title mb-4">Ask a different question</div>

              <div>
                <form>
                  <div>
                    <input className="form-control" type="text" placeholder="Name" />
                  </div>

                  <div>
                    <input className="form-control" type="email" placeholder="Email Address" />
                  </div>


                  <div>
                    <input className="form-control" type="tel" placeholder="Phone Number" />
                  </div>


                 

                  <div>
                    <textarea className="form-control" placeholder="Message" />
                  </div>

                  <div className="text-end"><button type="submit" className="btn">SUBMIT</button></div>

                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection3;
