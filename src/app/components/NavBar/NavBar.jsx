"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RenderLogo from "../Logo/RenderLogo";

const Navbar = ({ logo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="tw:bg-white tw:shadow tw:sticky tw:top-0 tw:z-[9999]">
      <nav className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-2.5">
        {/* Desktop */}
        <div className="tw:hidden tw:xl:block">
          <div className="tw:grid tw:gap-10 tw:grid-cols-[auto_1fr_auto]">
            <div>
              <RenderLogo logo={logo} />
            </div>

            <div className="tw:flex tw:flex-wrap tw:gap-6 tw:items-center">
              <Link className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/swarna-sakthi">
                SS - Gold Scheme
              </Link>
              <Link className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/digigold">
                Digi Gold
              </Link>
              <Link className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/careers">
                Careers
              </Link>
              <Link className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/contact-us">
                Contact Us
              </Link>
            </div>

            <div className="tw:flex tw:gap-4 tw:items-center">
              <div className="copperplate-font tw:text-sm tw:uppercase">our brands</div>

              <Link className="tw:!text-black tw:border tw:border-black px-4 tw:py-2 tw:rounded-sm tw:hover:bg-[#964A26] tw:hover:border-[#964A26] tw:hover:!text-white copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/zilara">
                Zilara
              </Link>

              <Link className="tw:!text-black tw:border tw:border-black px-4 tw:py-2 tw:rounded-sm tw:hover:bg-[#AD5389] tw:hover:border-[#AD5389] tw:hover:!text-white copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href="/florencia">
                Florencia
              </Link>

              <Link href="/stores">
                <Image className="tw:size-6" src="/icons/store.svg" width={32} height={32} alt="stores" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="tw:block tw:xl:hidden">
          <div className="tw:grid tw:gap-4 tw:grid-cols-[auto_1fr_auto]">
            <div className="tw:flex tw:items-center">
              <button onClick={handleShow}>
                <Image className="tw:size-6" src="/icons/menu.svg" width={32} height={32} alt="menu" />
              </button>
            </div>

            <div className="tw:flex tw:items-center tw:justify-center">
              <RenderLogo logo={logo} />
            </div>

            <div className="tw:flex tw:justify-end tw:items-center">
              <Link href="/stores">
                <Image className="tw:size-6" src="/icons/store.svg" width={32} height={32} alt="stores" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------------- */}
      {/* ⭐ CUSTOM TAILWIND MOBILE OFFCANVAS MENU */}
      {/* ------------------------------------------------------- */}

      {/* Overlay */}
      {show && (
        <div
          onClick={handleClose}
          className="tw:fixed tw:inset-0 tw:bg-black/50 tw:z-40 tw:transition-opacity"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`tw:fixed tw:top-0 tw:left-0 tw:h-full tw:w-full tw:max-w-sm tw:bg-white tw:z-50 tw:shadow-lg tw:transform tw:transition-transform tw:duration-300 ${
          show ? "tw:translate-x-0" : "tw:-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="tw:flex tw:justify-center tw:items-center tw:p-4 tw:border-b tw:border-gray-300">
          <RenderLogo logo={logo} />
          <button onClick={handleClose} className="tw:absolute tw:left-4">
            <Image className="tw:size-4" src="/icons/close.svg" width={24} height={24} alt="close" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="tw:flex tw:flex-col tw:gap-4 tw:p-4 tw:divide-y tw:divide-gray-200">
          <Link onClick={handleClose} href="/swarna-sakthi" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            SS - Gold Scheme
          </Link>

          <Link onClick={handleClose} href="/digigold" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            Digi Gold
          </Link>

          <Link onClick={handleClose} href="/careers" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            Careers
          </Link>

          <div className="tw:pb-4">
            <div className="tw:text-sm tw:uppercase tw:font-medium tw:text-[#964A26] tw:pb-4">
              Our Brands
            </div>

            <div className="tw:mb-4">
              <Link onClick={handleClose} href="/zilara" className="tw:!text-black tw:flex tw:items-center tw:gap-2 tw:ms-4 tw:text-sm tw:uppercase tw:!no-underline">
                <Image src={"/icons/dot.svg"} width={8} height={8} alt="dot" /> <span>Zilara</span>
              </Link>
            </div>

            <div>
              <Link onClick={handleClose} href="/florencia" className="tw:!text-black tw:flex tw:items-center tw:gap-2 tw:ms-4 tw:text-sm tw:uppercase tw:!no-underline">
              <Image src={"/icons/dot.svg"} width={8} height={8} alt="dot" /> <span>Florencia</span> 
              </Link>
            </div>
          </div>

          <Link onClick={handleClose} href="/contact-us" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            Contact Us
          </Link>

          <Link onClick={handleClose} href="/stores" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            Stores
          </Link>

          <Link onClick={handleClose} href="/our-certifications-policies" className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4">
            Certificates
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------------- */}
    </header>
  );
};

export default Navbar;
