"use client"
import React, { useState, useEffect } from 'react';

const StickySection = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
  
        // Adjust the offset value based on your design
        const offset = 1300;
  
        if (scrollY > offset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const stickyClass = isSticky ? 'position-fixed bottom-0' : ''

  return (
    <section className={`sticky-section ${stickyClass}`}>
        <div className='container py-4'>
            <div className='col-12 text-center'>
                <div className='h2 mb-3'>Get in touch to know more about this stunning collection</div>
                <div><a className='btn sticky-section-btn'>Speak To An Expert</a></div>
            </div>

        </div>
    </section>
  )
}

export default StickySection