"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";

const GsapBall = () => {

    useEffect(() => {
        gsap.set(".ball", { xPercent: -50, yPercent: -50 })
        let targets = gsap.utils.toArray(".ball");
        window.addEventListener("mousemove", (e) => {
          gsap.to(targets, {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out",
            overwrite: "auto",
          });
        });
      }, 
    []
    );

    
  return (
    <div className="ball position-fixed fixed top-0 left-0 rounded-5"></div>  
  )
}

export default GsapBall