"use client"
import Image from 'next/image';
import React from 'react'
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoSection = () => {
  return (
    <section className='video-section'>
    <div className="video-section_wrapper container py-5">
      <div className='col-12 text-center mb-4'>
      <div className='fs-1 primary-text fw-bold font-secondary'>Be the #TrendingNo1 Bride!</div>
      <div className=' tw:flex tw:justify-center tw:items-center'>
      <Image width={250} height={14} className='img-fluid' src="/tvam/heading_design_0207.png" alt="heading underline img" />

      </div>
      </div>


      <div className="row">
       <div className='col-12 video-section_video-wrapper m-auto'>
      


                <LiteYouTubeEmbed
                      id="GBjfDgWDLQc"
                      poster="maxresdefault"
                      params="rel=0"
                      title="Brides Of JewelOne"
                    />
       </div>
      </div>
    </div>
  </section>
  
  )
}

export default VideoSection