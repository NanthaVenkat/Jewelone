"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'



export default class SliderSection extends Component {
    render() {
      const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
      };
      return (

        <section className='slider-section'>
        <div className='container py-5'>
            <div className='col-12 mb-4 text-center slider-section_content m-auto'>
                <div className='fs-2 fw-bold mb-3'>
                    When legendary designs meet iconic craftsmanship
                </div>
                <div>
                    Discover how Tarun Tahiliani's modern interpretations of Indian heritage intertwine flawlessly with Tanishq's masterfully crafted jewels.
                </div>
            </div>


            <div className='row'>
                <div className='col-12'>
                <Slider {...settings}>


                    <div className="slider-section_item-bg">
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item">
                                <Image width={546} height={372} className="img-fluid slider-section-grid-item-img1" src="/tvam/slider-1.jpg" alt="" />
                            </div>
                            <div className="slider-section-grid-item m-auto text-center">
                                <div className='fs-1 fw-bold'>Kashida</div>
                                <div className='fs-4 mb-4 mb-md-0'>Kashida, an exuberant embroidery style hailing from Jammu and Kashmir, merges
                                    vivid colors and nature-inspired motifs.
                                    </div>       
                             </div>
                        </div>
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item m-auto text-center ">
                                <div className='fs-4'>Now translated into enchanting jewelry, the collection features three-dimensional
                                    hand-painted enamel pieces outlined in gold, catering to lively modern brides.
                                </div>
                            </div>
                            <div className="slider-section-grid-item">
                            <Image width={546} height={372} className="img-fluid slider-section-grid-item-img2" src="/tvam/slider-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="slider-section_item-bg">
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item">
                                <Image width={546} height={372} className="img-fluid slider-section-grid-item-img1" src="/tvam/slider-1.jpg" alt="" />
                            </div>
                            <div className="slider-section-grid-item m-auto text-center">
                                <div className='fs-1 fw-bold'>Kashida</div>
                                <div className='fs-4 mb-4 mb-md-0'>Kashida, an exuberant embroidery style hailing from Jammu and Kashmir, merges
                                    vivid colors and nature-inspired motifs.
                                    </div>       
                             </div>
                        </div>
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item m-auto text-center ">
                                <div className='fs-4'>Now translated into enchanting jewelry, the collection features three-dimensional
                                    hand-painted enamel pieces outlined in gold, catering to lively modern brides.
                                </div>
                            </div>
                            <div className="slider-section-grid-item">
                            <Image width={546} height={372} className="img-fluid slider-section-grid-item-img2" src="/tvam/slider-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="slider-section_item-bg">
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item">
                                <Image width={546} height={372} className="img-fluid slider-section-grid-item-img1" src="/tvam/slider-1.jpg" alt="" />
                            </div>
                            <div className="slider-section-grid-item m-auto text-center">
                                <div className='fs-1 fw-bold'>Kashida</div>
                                <div className='fs-4 mb-4 mb-md-0'>Kashida, an exuberant embroidery style hailing from Jammu and Kashmir, merges
                                    vivid colors and nature-inspired motifs.
                                    </div>       
                             </div>
                        </div>
                        <div className="slider-section-grid">
                            <div className="slider-section-grid-item m-auto text-center ">
                                <div className='fs-4'>Now translated into enchanting jewelry, the collection features three-dimensional
                                    hand-painted enamel pieces outlined in gold, catering to lively modern brides.
                                </div>
                            </div>
                            <div className="slider-section-grid-item">
                            <Image width={546} height={372} className="img-fluid slider-section-grid-item-img2" src="/tvam/slider-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    </Slider>



                </div>

            </div>
        </div>
    </section>
      );
    }
  }

