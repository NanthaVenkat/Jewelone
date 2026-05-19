"use client";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnnouncmentBar from "../ExperienceCenter/AnnouncmentBar";
import RenderLogo from "../Logo/RenderLogo";

const TransparentNavBar = ({ logo, stickyLogo }) => {
  const currentRoute = usePathname();
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 992);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Set initial value
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 992) {
        // Apply sticky behavior only on larger screens
        if (window.scrollY > 1) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        setIsSticky(false); // No sticky behavior on smaller screens
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={isSticky ? "position-sticky" : "fixed"}>
      {currentRoute === "/experience-center" && <AnnouncmentBar />}
      <nav className="navbar navbar-expand-xl bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <div className="container d-flex align-items-center navbar_wrapper">
          <div className="d-block d-lg-none">
            <Button
              variant="light"
              className="bg-transparent border-0 z-1 nav-trigger-btn"
              onClick={handleShow}
            >
              <svg
                width={29}
                height={20}
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H28"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M1 19H28"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="M1 10H19"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>

          {/* Render black logo on mobile, toggle on large screens */}
          <RenderLogo
            logo={isLargeScreen ? (isSticky ? 'jewelone-black' : 'jewelone-white') : 'jewelone-black'}
          />

          <ul className="d-none d-lg-flex align-items-center flex-row gap-4 navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/swarna-sakthi"
                className={
                  currentRoute === "/swarna-sakthi"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                SWARNA SAKTHI
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                OUR BRANDS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/zilara">
                    Zilara
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/florencia">
                    Florencia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/tvam">
                    TVAM 2.0
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                href="/stores"
                className={
                  currentRoute === "/stores"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Stores
              </a>
            </li>

            <li className="nav-item">
              <Link
                href="/blog"
                className={
                  currentRoute === "/blog"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/contact-us"
                className={
                  currentRoute === "/contact-us"
                    ? "active main-menu-link nav-link"
                    : "main-menu-link nav-link"
                }
                onClick={handleClose}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Image
                  className="img-fluid"
                  width="160"
                  height="77"
                  src="/footer-logo.svg"
                  alt="logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav gap-2 mobile-menu">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={
                      currentRoute === "/"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    href="/stores"
                    className={
                      currentRoute === "/stores"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Stores
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    href="/blog"
                    className={
                      currentRoute === "/blog"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/swarna-sakthi"
                    className={
                      currentRoute === "/swarna-sakthi"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    SWARNA SAKTHI
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    OUR BRANDS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/zilara"
                        onClick={handleClose}
                      >
                        Zilara
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/florencia"
                        onClick={handleClose}
                      >
                        Florencia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/tvam"
                        onClick={handleClose}
                      >
                        TVAM 2.0
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact-us"
                    className={
                      currentRoute === "/contact-us"
                        ? "active main-menu-link nav-link"
                        : "main-menu-link nav-link"
                    }
                    onClick={handleClose}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </header>
  );
};

export default TransparentNavBar;
