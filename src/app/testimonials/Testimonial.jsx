'use client';

import React from "react";
import Image from "next/image"
import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: "ARAVIND GANESAN",
        location: "COIMBATORE",
        review: "One of the best jewelers in Coimbatore for innovative design, excellent value for money, courteous staff and great buying experience. Prominent access and easy parking facilities",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 2,
        name: "MUKIL BARATH",
        location: "COIMBATORE",
        review: "We had a very good experience today at jewel one. Staffs have showcased and politely explained on the jewel and it's characteristics. The rates where comparatively lesser on the making charges",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 3,
        name: "REVATHI RAJENDHRAN",
        location: "TRICHY",
        review: "Jewel one collections were very new and awesome. Mandala art work shop experience was very new to me, had a stressfree feeling and happy mode. Thank you jewel one for giving me this experience.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 4,
        name: "REVATHI RAJENDHRAN",
        location: "TRICHY",
        review: "Recently visited and purchased gold jewels from jewel one , they are having enormous collections and all are unique in it's own.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 5,
        name: "SIVA KALAI",
        location: "PONDICHERRY",
        review: "The sales representatives provided exceptional service, and their professionalism was commendable. The establishment features an exclusive collection of gold items.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 6,
        name: "MURALI",
        location: "CHENNAI",
        review: "It was a wonderful experience buying jewellery from *jewelone*. The customer service is excellent. Also, designs are very unique and beautiful. We are more than satisfied with designs and customer service they have provided beverages too. I would definitely recommend *jewelone* for the quality of jwellery.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 7,
        name: "NATHIYA SENTHILKUMAR",
        location: "MADURAI",
        review: "We loved soooo much!! Myself&my daughter,we made our beautiful&lovely potrait💓The experience was soo good! Thank you jewelone for your best workshop🫶🏼 …",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 8,
        name: "SRINATH R",
        location: "COIMBATORE",
        review: "Recently visited this jewel one and had a great experience. The staff were friendly and helpful, and the collection was beautiful. The prices were reasonable, and the quality of the jewellery was very good. I’m happy with my purchase and would definitely recommend this shop.☺️",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 9,
        name: "CLOUD COPIERS",
        location: "COIMBATORE",
        review: "Very nice ambience and more collection in antique jewelry, executives are very jewellery purchase",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 10,
        name: "KARUNAKARAN KADHIRVELU",
        location: "TRICHY",
        review: "Collections are unique & exquisite. Ambience was good. Customer service and staff approach was commendable. Management's attention towards providing proper parking facility will be highly appreciated.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 11,
        name: "PRABHAVATHY RAMACHANDRAN",
        location: "HOSUR",
        review: "The collection in this shop is very good. I have been purchasing here for the past 15 years. They treat their customers very well and with great care.",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 12,
        name: "KAVI BHARATHI",
        location: "CHENNAI",
        review: "Great Customer Service: The staff at Jewelone were incredibly helpful and friendly. They guided me through the entire process, ensuring I found the perfect piece(Chinna Thambi) is Friendly to us",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 13,
        name: "DEEKSHA",
        location: "HOSUR",
        review: "Hi, 👋🏻 😊 I visited JewelOne shop today and was impressed with the beautiful collection of weightless jewelry. The designs were stunning and the customer service was excellent. The staff were knowledgeable and helpful. Keep up the great work! ✨ ",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 14,
        name: "RAJESHWARI VENKATESHAN",
        location: "SALEM",
        review: "Jewel One is a well-organized shop with a good collection and a pleasant shopping environment. The staff are attentive, and the overall experience was smooth and satisfying. Highly recommended!",
        avatar: "",
        // ratingImage: "/Review.png"
    },
    {
        id: 15,
        name: "CHANDAN THREEDEV",
        location: "HOSUR",
        review: "Just wanted to take a moment to thank you for the wonderful experience at Jewel One. Your assistance was genuinely helpful, and your approach made the whole process smooth and pleasant. Appreciate your patience and the way you explained everything in detail. Looking forward to visiting again — keep up the great work!",
        avatar: "",
        // ratingImage: "/Review.png"
    },
];

export default function Testimonials() {

    const reviewCount = testimonials.length;

    const [visibleCount, setVisibleCount] = useState(6);

    const showMoreReviews = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };
    return (
        <>
            <main className="overflow-hidden" style={{ background: "#fff" }}>
                <section className="section-padding">
                    <div class="container">
                        <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:mb-4 tw:text-center">
                            <span>What our </span>
                            <span className="tw:italic">Customer Says.</span>
                        </div>

                        <div className="tw:text-md tw:lg:text-lg tw:text-[#3B4443] tw:mb-10 tw:text-center tw:max-w-[620px] tw:mx-auto">
                            <p>Real Experiences from real customers who have made Jewel One part of their precious moments.</p>
                        </div>


                        <div className="tw:text-center">
                            <div className="tw:text-3xl tw:lg:text-5xl tw:font-medium tw:text-black alga-font tw:mb-4 tw:text-center">Testimonials </div>
                            <div class="tw:grid tw:gap-5 tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:my-8 tw:text-left" >
                                {testimonials.slice(0, visibleCount).map((item) => (

                                    <div key={item.id} class="testimonials-wrr tw:flex tw:flex-col tw:p-8 tw:rounded-sm tw:bg-[#F2EDE4]">
                                        {/* <p className="tw:!mb-8">
                                            <Image
                                                src={item.ratingImage}
                                                alt=""
                                                class="img-fluid rounded-top"
                                                width={120}
                                                height={20}
                                            />
                                        </p> */}
                                        <p className="tw:text-md tw:lg:text-lg tw:!mb-8">"{item.review}"</p>
                                        <div class="tw:flex tw:items-start tw:gap-3 tw:mt-auto">
                                            {item.avatar ?

                                                (<Image
                                                    src={item.avatar}
                                                    alt=""
                                                    class="tw:rounded-full"
                                                    width={60}
                                                    height={60}
                                                />)

                                                : (<span className="tw:flex tw:items-center tw:justify-center tw:text-2xl tw:font-medium tw:text-[#ecbe62] tw:w-[50px] tw:h-[50px] tw:rounded-full tw:bg-[#964A26]">{item.name.charAt(0)}</span>)
                                            }

                                            <div>
                                                <p className="tw:!mb-0 tw:font-bold">{item.name}</p>
                                                <p className="tw:text-[#303030]">{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {reviewCount > 6 ? (
                                <button onClick={showMoreReviews} className="tw:bg-[#964A26] tw:text-white tw:px-5 tw:py-2 tw:!uppercase">Explore all testimonials</button>
                            ) : null}
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}
