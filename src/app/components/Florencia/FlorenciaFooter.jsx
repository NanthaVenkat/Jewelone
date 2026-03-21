import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const FlorenciaFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  
  return (
    <footer className='florencia-footer'>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-3">
          <div className="mt-4 text-center text-lg-start">
            <Image
              width={265}
              height={46}
              className="img-fluid"
              src="/florencia/logo.svg"
              alt="logo"
            />
            {/* <div className="mt-3 fs-6 fw-semibold">
              Make a statement without saying a{" "}
              <span className="brittany-font fs-4">word</span>
            </div> */}
            <div className="d-flex gap-2 align-items-center justify-content-center  justify-content-lg-start social-links mt-3">
              <div>
                <a  target='_blank' href="https://www.facebook.com/florenciadiamonds?mibextid=LQQJ4d">
                  <Image
                    className="img-fluid"
                    width={32}
                    height={32}
                    src="/florencia/footer/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/florenciadiamonds/"
                >
                  <Image
                    className="img-fluid"
                    width={32}
                    height={32}
                    src="/florencia/footer/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="footer-links mt-4">
            <div>
              <div>
                <div className="secondary-color fw-semibold fs-6">ABOUT</div>
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <a href="#our-story-section" className="nav-link fs-6">
                      Our Story&nbsp;
                    </a>
                  </li>
                  {/* <li className="nav-item">
                <a href="" className="nav-link fs-6  ">Blog</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link fs-6  ">Lab Grown</a>
              </li> */}
                  {/* <li className="nav-item">
                <a href="" className="nav-link fs-6"
                  >About Lab Grown Diamonds</a
                >
              </li> */}
                  {/* <li className="nav-item">
                <a href="" className="nav-link fs-6  ">Visit a Showroom</a>
              </li> */}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <div className="secondary-color fw-semibold fs-6">SUPPORT</div>
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <a href="tel:+919500978088" className="nav-link fs-6">
                      9500978088
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="mailto:florencia.rspuram@ejindia.com"
                      className="nav-link fs-6"
                    >
                      florencia.rspuram@ejindia.com
                    </a>
                  </li>
                  {/* <li className="nav-item">
                <a href="" className="nav-link fs-6">Contact Us</a>
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-3">
          <div>
            <Image
              width={478}
              height={580}
              className="img-fluid"
              style={{
                width: "100%",
                maxHeight: 200,
                objectFit: "cover",
                maxWidth: 350
              }}
              src="/florencia/footer/footer-shop-image.webp"
              alt=""
            />
          </div>
          <div className="mt-3">
            {/* <div className="mb-1 fs-5 secondary-color fw-bold main-font">
        VISIT US
      </div> */}
            {/* <div className="main-color fs-6 fst-italic" style=" font-family:Libre Baskerville; ">
        Our stores are open. Find the one near you.
      </div> */}
            <div className="mt-2 mb-4">
              <a
                target="_blank"
                href="https://maps.app.goo.gl/immn56dRGYE4LBYi6"
                className="btn custom-outline-btn px-4 py-2"
              >
                VISIT US
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 copyright-text">
        <div className="d-flex justify-content-between gap-2 flex-wrap secondary-color">
          <div style={{fontSize:'14px'}}>
            © {year} FLORENCIA. ALL RIGHTS RESERVED
          </div>
          <div>
            <Link
            className=" text-secondary text-decoration-none"
              href="/privacy-policy"
              style={{
                  fontSize: 12,
              }}
            >
              Privacy Policy |
            </Link>
            <Link
            className=" text-secondary text-decoration-none"
              href="/terms-and-conditions"
              style={{
                  fontSize: 12,
              }}
            >
              {" "} Terms of Use |
            </Link>
            <Link
            className=" text-secondary text-decoration-none"
              href="/our-certifications-policies"
              style={{
                  fontSize: 12,
              }}
            >
              {" "} Our Certifications & Policies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FlorenciaFooter