import React from "react";
import Link from "next/link";
import Image from 'next/image'
import "./Footer2.css";

const Footer2 = () => {
  const today = new Date();
  const year = today.getFullYear();


  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 mb-4 text-center text-md-start">
            <div style={{ maxWidth: "400px", margin:'auto' }}>
              <div className="mb-4">
                <Image
                  className="img-fluid"
                  width="160"
                  height="120"
                  src="/footer-logo.webp"
                  alt="logo"
                />
              </div>
              {/* <div className="footer-section_text mb-4">
                Subscribe to email alerts. We promise not to spam
              </div>
              <div>
                <div className="input-group newsletter-form-input-group">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Email Address*"
                    required=""
                  />
                  <div className="input-group-append">
                    <span>
                      <button className="btn btn-warning fw-medium">Subscribe</button>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-12 col-md-7 col-lg-8">
            <div className="footer-section_items">
              {/* Information */}
              {/* <div>
                <div className="mb-3 footer-section_links_label">
                  Information
                </div>
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link href="/blog" className="footer-menu-link nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/stores" className="footer-menu-link nav-link">
                      Stores
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/our-story" className="footer-menu-link nav-link">
                      About JewelOne
                    </Link>
                  </li>
                </ul>
              </div> */}

              {/* Contact Us */}
              <div>
                <div className="mb-2 footer-section_links_label">
                  Contact Us
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a target="__blank" href="https://wa.me/message/DVQPGTOCP5MWI1">
                    <span className="me-2">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2727_999)">
                          <path
                            d="M12.2948 9.18442C12.2948 9.91242 11.699 10.5284 10.9948 10.5284H3.30312L0.703125 13.2164V2.57642C0.703125 1.84842 1.29896 1.23242 2.00312 1.23242H11.049C11.7531 1.23242 12.349 1.84842 12.349 2.57642V9.18442H12.2948Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2727_999">
                            <rect width="13" height="14" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Chat with Us</a>
                  </li>
                  <li>
                    <a href="tel:1800 1033916">
                    <span className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2727_996)">
                          <path
                            d="M14.8589 11.9707V14.104C14.8589 14.8744 14.2303 15.5262 13.4874 15.5262C13.4303 15.5262 13.3731 15.5262 13.3731 15.5262C11.2589 15.2892 9.20171 14.5188 7.43028 13.3337C5.77314 12.267 4.34457 10.7855 3.31599 9.06699C2.11599 7.22995 1.37314 5.09661 1.14457 2.90402C1.08742 2.07439 1.65885 1.42254 2.40171 1.36328C2.45885 1.36328 2.45885 1.36328 2.51599 1.36328H4.57314C5.25885 1.36328 5.83028 1.89661 5.94457 2.60773C6.05885 3.31884 6.17314 3.97069 6.40171 4.62254C6.57314 5.15587 6.45885 5.74847 6.11599 6.10402L5.25885 6.99291C6.23028 8.77069 7.65885 10.2522 9.37314 11.2596L10.2303 10.3707C10.6303 9.95587 11.2017 9.83736 11.6589 10.0744C12.2874 10.3114 12.916 10.4892 13.6017 10.5485C14.3446 10.6077 14.8589 11.2596 14.8589 11.9707Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2727_996">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    1800 1033916</a>
                  </li>
                  {/* <li>
                    <span className="me-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2727_988)">
                          <path
                            d="M14.856 2.85742H1.14119C0.983392 2.85742 0.855469 2.98535 0.855469 3.14315V12.8578C0.855469 13.0156 0.983392 13.1435 1.14119 13.1435H14.856C15.0138 13.1435 15.1417 13.0156 15.1417 12.8578V3.14315C15.1417 2.98535 15.0138 2.85742 14.856 2.85742Z"
                            stroke="white"
                          ></path>
                          <path
                            d="M14.9976 3L8.19054 10.3037C8.16717 10.3288 8.13887 10.3489 8.10741 10.3626C8.07595 10.3763 8.042 10.3833 8.00768 10.3833C7.97336 10.3833 7.93941 10.3763 7.90795 10.3626C7.87649 10.3489 7.84819 10.3288 7.82482 10.3037L1 3"
                            stroke="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2727_988">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    customercare@jewelone.in
                  </li> */}
                </ul>
              </div>

              {/* Swarna Shakti App Download */}

            <div>
            <div>
                <div className="mb-2 footer-section_links_label">Follow Us</div>
                <div>
                  <ul className="list-unstyled footer-social-links">
                    <ul className="list-unstyled footer-social-links">
                    <li>
                        <a target="__blank" href="https://www.instagram.com/jewelone_in/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="M11.897 2.14c3.183 0 3.552.01 4.806.073 1.159.053 1.791.242 2.213.411.558.21.948.474 1.37.885.421.422.674.812.885 1.37.158.422.358 1.054.41 2.213.053 1.254.075 1.633.075 4.805 0 3.183-.01 3.552-.074 4.806-.053 1.159-.242 1.791-.411 2.213-.21.558-.474.948-.885 1.37a3.575 3.575 0 01-1.37.885c-.422.158-1.054.358-2.213.41-1.254.053-1.634.075-4.806.075-3.182 0-3.55-.01-4.805-.074-1.16-.053-1.791-.242-2.213-.411a3.702 3.702 0 01-1.37-.885 3.575 3.575 0 01-.885-1.37c-.158-.422-.358-1.054-.411-2.213-.053-1.254-.074-1.634-.074-4.806 0-3.182.01-3.55.074-4.805.053-1.16.242-1.791.411-2.213.21-.558.474-.948.885-1.37a3.575 3.575 0 011.37-.885c.422-.158 1.054-.358 2.213-.411 1.244-.063 1.623-.074 4.805-.074zm0-2.14c-3.235 0-3.635.01-4.91.074-1.265.052-2.129.263-2.888.548a5.856 5.856 0 00-2.107 1.37 5.856 5.856 0 00-1.37 2.107C.327 4.858.126 5.722.074 6.987.01 8.25 0 8.662 0 11.897c0 3.236.01 3.636.074 4.911.052 1.265.263 2.129.548 2.888.305.78.706 1.443 1.37 2.107a5.856 5.856 0 002.107 1.37c.759.295 1.623.495 2.888.559 1.264.052 1.675.073 4.91.073 3.236 0 3.636-.01 4.911-.073 1.265-.053 2.129-.264 2.888-.559a5.856 5.856 0 002.107-1.37 5.858 5.858 0 001.37-2.107c.295-.76.495-1.623.559-2.888.052-1.264.073-1.675.073-4.91 0-3.236-.01-3.636-.073-4.911-.053-1.265-.264-2.129-.559-2.888a5.857 5.857 0 00-1.37-2.107 5.857 5.857 0 00-2.107-1.37c-.76-.295-1.623-.496-2.888-.548C15.533.01 15.133 0 11.898 0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M11.897 5.785a6.116 6.116 0 00-6.112 6.112 6.116 6.116 0 006.112 6.112 6.116 6.116 0 006.112-6.112 6.116 6.116 0 00-6.112-6.112zm0 10.085a3.964 3.964 0 01-3.962-3.962 3.964 3.964 0 013.962-3.963 3.964 3.964 0 013.963 3.963 3.964 3.964 0 01-3.963 3.962zM19.675 5.544c0 .79-.643 1.433-1.433 1.433s-1.433-.643-1.433-1.433.642-1.434 1.433-1.434c.8.01 1.433.643 1.433 1.434z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://www.facebook.com/jewelone916">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="26"
                            fill="none"
                            viewBox="0 0 13 26"
                          >
                            <path
                              fill="#fff"
                              d="M2.953 26h5.668V12.88h3.96L13 8.493H8.621V5.996c0-1.034.227-1.442 1.313-1.442H13V0H9.074c-4.22 0-6.121 1.713-6.121 5.004v3.499H0v4.45h2.953V26z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://www.youtube.com/channel/UCCG6vza_ECtCW9D58F8Xh_Q">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="19"
                            fill="none"
                            viewBox="0 0 27 19"
                          >
                            <path
                              fill="#fff"
                              d="M26.434 2.964A3.39 3.39 0 0024.047.566C21.94 0 13.5 0 13.5 0S5.059 0 2.953.566A3.408 3.408 0 00.566 2.964C0 5.08 0 9.5 0 9.5s0 4.42.566 6.536a3.39 3.39 0 002.387 2.398C5.06 19 13.5 19 13.5 19s8.441 0 10.547-.566a3.407 3.407 0 002.387-2.398C27 13.92 27 9.5 27 9.5s0-4.42-.566-6.536zM10.745 13.512V5.488L17.794 9.5l-7.049 4.012z"
                            ></path>
                          </svg>
                        </a>
                      </li>



                      <li>
                        <a target="__blank" style={{ background: "#1DA1F2" }} href="https://twitter.com/jewelone916">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="19"
                            fill="none"
                            viewBox="0 0 23 19"
                          >
                            <path
                              fill="#fff"
                              d="M0 16.849A13.166 13.166 0 007.23 19c8.76 0 13.706-7.52 13.412-14.271A9.762 9.762 0 0023 2.247a9.349 9.349 0 01-2.714.756A4.825 4.825 0 0022.361.351a9.17 9.17 0 01-2.997 1.161A4.653 4.653 0 0015.917 0c-3.05 0-5.281 2.886-4.6 5.89-3.92-.203-7.398-2.11-9.724-5.017C.356 3.025.953 5.847 3.049 7.274a4.695 4.695 0 01-2.137-.596c-.053 2.226 1.519 4.302 3.782 4.76a4.746 4.746 0 01-2.127.085c.597 1.907 2.347 3.292 4.412 3.334A9.34 9.34 0 010 16.85z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a target="__blank" href="https://www.pinterest.com/JewelOne916/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="26"
                            fill="none"
                            viewBox="0 0 20 26"
                          >
                            <path
                              fill="#fff"
                              d="M3.052 15.037c.338.138.644.01.739-.372.063-.266.232-.925.306-1.201.095-.372.064-.51-.211-.829-.602-.712-.982-1.626-.982-2.933 0-3.772 2.809-7.152 7.307-7.152 3.981 0 6.178 2.455 6.178 5.728 0 4.304-1.89 7.938-4.71 7.938-1.552 0-2.714-1.296-2.344-2.88.443-1.891 1.31-3.931 1.31-5.302 0-1.222-.656-2.243-2.007-2.243-1.584 0-2.862 1.648-2.862 3.869 0 1.413.475 2.359.475 2.359l-1.911 8.14c-.57 2.412-.084 5.377-.042 5.674.02.18.253.223.348.085.148-.191 2.038-2.54 2.682-4.888.18-.659 1.046-4.102 1.046-4.102.517.988 2.027 1.86 3.622 1.86C16.769 18.788 20 14.41 20 8.554 20 4.124 16.272 0 10.602 0 3.548 0 0 5.09 0 9.33c.01 2.572.971 4.857 3.052 5.707z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                     
                      
                    </ul>
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-3 footer-section_links_label">
                  Swarna Shakti App Download
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <div>
                  <a target="__blank" href="https://apps.apple.com/in/app/jewelone/id1507128724">
                      <Image
                        className="img-fluid"
                        width="160"
                        height="50"
                        src="/app-store.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a target="__blank" href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US">
                      <Image
                        className="img-fluid"
                        width="160"
                        height="50"
                        src="/google-play.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>



              
            </div>

            <div
              className="mt-4 d-flex flex-column g-3 flex-md-row justify-content-between flex-wrap"
              style={{ borderTop: "1px solid #84141E", paddingTop: "10px" }}
            >
           

              {/* Copyright */}
              <div className="align-self-md-end mt-3">
                <div className="footer-section_text text-center">
                  &copy; {year} - Jewel One is Trademarked & Registered under Emerald Jewel Industry India Limited.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;