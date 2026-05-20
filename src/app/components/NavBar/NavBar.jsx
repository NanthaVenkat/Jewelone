"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RenderLogo from "../Logo/RenderLogo"

const Navbar = ({ logo }) => {
  const [show, setShow] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = [
    { label: 'SS - Gold Scheme', href: '/swarna-sakthi' },
    { label: 'Digi Gold', href: '/digigold' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Reviews', href: '/testimonials' },
    { label: 'Stores', href: '/stores' },
    { label: 'Certifications', href: '/our-certifications-policies' }
  ];

  const visibleMenus = menuItems.slice(0, 4);
  const hiddenMenus = menuItems.slice(4);

  return (
    <header className="tw:bg-white tw:shadow tw:sticky tw:top-0 tw:z-[9999]">
      <nav className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-2.5">
        {/* Desktop */}
        <div className="tw:hidden tw:xl:block">
          <div className="tw:grid tw:gap-10 tw:grid-cols-[auto_1fr_auto] tw:items-center">
            <div>
              <RenderLogo logo={logo} />
            </div>

            <div className="tw:flex tw:flex-wrap tw:gap-6 tw:items-center">
              {visibleMenus.map((menuItem, index) => (
                <Link key={index} className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium" href={menuItem.href} >
                  {menuItem.label}
                </Link>
              ))}

              {hiddenMenus.length > 0 && (
                <div className="tw:relative">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="copperplate-font tw:text-sm tw:font-medium tw:uppercase hover:tw:text-gray-600 focus:tw:outline-none"
                  >
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="tw:rounded-full tw:bg-black tw:inline-block tw:w-1.5 tw:h-1.5 tw:mx-0.5"
                      ></span>
                    ))}
                  </button>

                  {showMore && (
                    <>
                      {/* Backdrop to close the dropdown when clicking outside */}
                      <div className="tw:fixed tw:inset-0 tw:z-40" onClick={() => setShowMore(false)} />

                      <div className="tw:absolute tw:right-0 tw:top-full tw:mt-2 tw:w-[180px] tw:bg-[#1A1A1A] tw:rounded-md tw:py-3 tw:shadow-xl tw:z-50">
                        {hiddenMenus.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setShowMore(false)}
                            className="tw:block tw:px-5 tw:py-2 tw:text-sm tw:!text-white tw:!no-underline hover:tw:bg-white/10 copperplate-font tw:uppercase"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
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

      {/* Overlay */}
      {show && (
        <div onClick={handleClose} className="tw:fixed tw:inset-0 tw:bg-black/50 tw:z-40 tw:transition-opacity"></div>
      )}

      {/* Sidebar */}
      <div className={`tw:fixed tw:top-0 tw:left-0 tw:h-full tw:w-full tw:max-w-sm tw:bg-white tw:z-50 tw:shadow-lg tw:transform tw:transition-transform tw:duration-300 ${show ? "tw:translate-x-0" : "tw:-translate-x-full"}`}>
        {/* Header */}
        <div className="tw:flex tw:justify-center tw:items-center tw:p-4 tw:border-b tw:border-gray-300">
          <RenderLogo logo={logo} />
          <button onClick={handleClose} className="tw:absolute tw:left-4">
            <Image className="tw:size-4" src="/icons/close.svg" width={24} height={24} alt="close" />
          </button>
        </div>

        {/* Mobile Sidebar Menu Items */}
        <div className="tw:flex tw:flex-col tw:gap-4 tw:p-4 tw:divide-y tw:divide-gray-200">
          {menuItems.map((menuItem, index) => (
            <Link key={index} onClick={handleClose} className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4" href={menuItem.href}>
              {menuItem.label}
            </Link>
          ))}

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
        </div>
      </div>
    </header >
  );
};

export default Navbar;