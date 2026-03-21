"use client"
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import "./Florencia.css"
import Image from "next/image";


const FlorenciaSection2 = () => {


    
  return (
    <section className="home-section2" id="our-story-section">
  <div className="container py-5">
    <div className="col-12 text-center">
      <div className="fs-3 secondary-color fs-md-2 fw-semibold mb-3 main-font">
        <div>Meet the Florencia in you!</div>
        <div className="home-section2-title_wrapper">
          <div className='d-flex flex-wrap gap-2 justify-content-center'>
            <span>Florencia Women: </span>
            <span className="typed-text main-color">
            <Typewriter
                options={{
                    strings: ["Fiercely Independent", "Fashion Forward", "Distinct Style", "Self Obsessed…"],
                    autoStart: true,
                    loop: true,
                    pauseFor:1000
                }}
                />
            </span>
          </div>

          

        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12 col-md-6 col-lg-7 mb-4 mb-md-0">
        <Image
          width={1055}
          height={754}
          className="img-fluid w-100 h-100 object-fit-cover"
          src="/florencia/home-section2-banner.webp"
          alt="Florencia Model"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-5 m-auto text-center text-md-start">
        <div className="mb-3 fs-3 fs-lg-2 secondary-color  main-font text-uppercase">
          Our Story
        </div>
        <div className="fs-6 fs-md-5">
          <p>
            Welcome to Florencia, where we love to break the rules of
            traditional design!
          </p>
          <p>
            We believe real beauty comes when you're true to yourself. Our
            pieces are like an open invitation to express your innermost
            desires, dreams, and passions through beautiful, wearable art.
          </p>
          <p>
            So, let's celebrate you and your individuality. Florencia is more
            than just jewelry it's a way to tell your story. Come, explore, and
            let your style shine with us!
          </p>
          <div className="fw-semibold secondary-font color-dark">
            Pressure Shapes Me Heat Ignites Me,
          </div>
          <div className="fs-2 mt-3 brittany-font">I am a Diamond</div>
        </div>
       
      </div>
    </div>
  </div>
</section>

  )
}

export default FlorenciaSection2