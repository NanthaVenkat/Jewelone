"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import './InstagramGrid.css'
import Image from 'next/image'



export const InstagramGrid = () => {


  return (
    <div className='instagram-grid-section home-section6 section-padding'>
        <div className='container'>
            <div className='col-12 text-center mb-3'>
                <div className='fs-4 fw-semibold text-red  text-uppercase tw:flex tw:justify-center tw:items-center'>
                <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 39 39" fill="none">
                        <path d="M19.2364 0C21.8364 0 24.4364 0 27.0364 0C29.2764 0 31.4264 0.4 33.3464 1.6C36.4864 3.56 38.0764 6.46 38.3864 10.11C38.4464 10.81 38.4464 11.51 38.4464 12.21C38.4464 17.13 38.4464 22.05 38.4464 26.96C38.4464 29.21 38.0664 31.37 36.8864 33.33C35.1964 36.15 32.6364 37.69 29.4464 38.22C28.6164 38.36 27.7664 38.4 26.9264 38.4C21.7264 38.42 16.5164 38.41 11.3164 38.41C8.54638 38.41 6.00638 37.69 3.83638 35.9C1.63638 34.08 0.476379 31.69 0.126379 28.88C0.0363793 28.17 0.0163793 27.45 0.0163793 26.74C0.0063793 21.41 -0.0236207 16.07 0.0363793 10.74C0.0763793 7.53 1.17638 4.72 3.65638 2.57C5.48638 0.99 7.65638 0.15 10.0364 0.07C13.0864 -0.03 16.1564 0.04 19.2064 0.04C19.2364 0.04 19.2364 0.02 19.2364 0ZM19.2064 34.87C21.6364 34.87 24.0664 34.87 26.4964 34.87C27.0864 34.87 27.6664 34.87 28.2464 34.8C31.0864 34.49 33.2364 33.17 34.4064 30.48C34.8864 29.38 35.0364 28.2 35.0364 27.01C35.0364 21.91 35.0364 16.8 35.0364 11.7C35.0364 11.16 35.0264 10.61 34.9564 10.08C34.6464 7.84 33.7164 5.96 31.7464 4.72C30.4664 3.91 29.0364 3.59 27.5464 3.58C22.1064 3.57 16.6564 3.57 11.2164 3.58C10.7764 3.58 10.3264 3.61 9.89638 3.67C7.15638 4.06 5.13638 5.39 4.12638 8.04C3.71638 9.11 3.58638 10.23 3.58638 11.36C3.58638 16.56 3.57638 21.77 3.59638 26.97C3.59638 27.64 3.64638 28.32 3.75638 28.97C4.21638 31.54 5.58638 33.39 8.08638 34.32C9.15638 34.72 10.2764 34.87 11.4064 34.87C14.0064 34.88 16.6064 34.87 19.2064 34.87Z" fill="#A0222C" />
                        <path d="M29.1464 19.1505C29.1464 24.6205 24.6864 29.0705 19.2064 29.0605C13.7364 29.0505 9.32641 24.6305 9.31641 19.1505C9.31641 13.6805 13.7764 9.22049 19.2464 9.23049C24.6864 9.25049 29.1464 13.7205 29.1464 19.1505ZM19.2164 25.4905C22.7064 25.5005 25.5864 22.6505 25.5964 19.1605C25.6064 15.6905 22.7164 12.7905 19.2464 12.7905C15.7764 12.7905 12.9264 15.6405 12.9064 19.1105C12.8764 22.6105 15.7164 25.4705 19.2164 25.4905Z" fill="#A0222C" />
                        <path d="M29.5369 11.2301C28.2869 11.2301 27.3069 10.2501 27.2969 9.00007C27.2869 7.74007 28.2969 6.74007 29.5569 6.75007C30.7869 6.76007 31.7869 7.77007 31.7769 9.00007C31.7769 10.2401 30.7769 11.2301 29.5369 11.2301Z" fill="#A0222C" />
                    </svg></span>#jewelone jewellery</div>
            </div>

            <div className='text-center mb-5 fs-6'>Follow <b>JEWELONE</b> on Instagram and be part of the movement</div>

            <div className='instagram-grid-items'>
            <Splide options={ {
                      type: 'slide',
                      gap: 10,
                      autoWidth: false,
                      arrows: false,
                      autoplay: true,
                      interval: 2000,
                      perPage: 5,
                      perMove:1,
                      pagination: false,
                      breakpoints: {
                        1040: {
                          perPage: 3,
                        },
                        768: {
                          perPage: 2,
                        },
                        480: {
                          perPage: 1,
                        },
                      },
                  } }>
             
             <SplideSlide>
              <a target='__blank' href='https://www.instagram.com/p/C_yFGiQyKy-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'>
              <Image width={316} height={316} src="/home/home-insta-img1.webp" alt='instagram banner' />
              </a>

              </SplideSlide>
              <SplideSlide>
              <a target='__blank' href='https://www.instagram.com/p/C9C80WvyvU0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1'>
              <Image width={316} height={316} src="/home/home-insta-img2.webp"  alt='instagram banner' />
              </a>

              </SplideSlide>
              <SplideSlide>
              <a target='__blank' href='https://www.instagram.com/p/C9RU3b0ygjF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1'>
              <Image width={316} height={316} src="/home/home-insta-img3.webp" alt='instagram banner' />
              </a>

              </SplideSlide>
              <SplideSlide>
              <a target='__blank' href='https://www.instagram.com/p/C7Ew7OsyEo5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'>
              <Image width={316} height={316} src="/home/home-insta-img4.webp" alt='instagram banner' />
              </a>

              </SplideSlide>
              <SplideSlide>
              <a target='__blank' href='https://www.instagram.com/p/C7OuTWSR8dg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'>
              <Image width={316} height={316} src="/home/home-insta-img5.webp" alt='instagram banner' />
              </a>

              </SplideSlide>
            </Splide>
               
            </div>


   
        </div>
    </div>
  )
}
