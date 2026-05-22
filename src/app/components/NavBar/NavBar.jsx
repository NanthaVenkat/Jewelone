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

  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const menuItems = [
    // Home
    { label: "Home", href: "/" },

    // About
    {
      label: "About",
      href: "#",
      submenu: [
        // { label: "About Us", href: "/about-us" },
        // { label: "Stores", href: "/stores" },
        { label: "Certifications", href: "/our-certifications-policies" },
        { label: "Blog", href: "/blog" },
        { label: "Reviews", href: "/testimonials" },
      ],
    },

    // Our Schemes
    {
      label: "Our Schemes",
      href: "#",
      submenu: [
        { label: "SS - Gold Scheme", href: "/swarna-sakthi" },
        { label: "Digi Gold", href: "/digigold" },
      ],
    },

    // career
    { label: "Careers", href: "/careers" },

    // Contact us
    { label: "Contact Us", href: "/contact-us" },
  ];

  const ourBrands = [
    {
      label: 'Our Brands', submenu: [
        { label: 'Zilara', href: '/zilara' },
        { label: 'Florencia', href: '/florencia' }
      ]
    }
  ]

  return (
    <header className="tw:bg-white tw:shadow tw:sticky tw:top-0 tw:z-[9999]">
      <nav className="tw:px-4 tw:md:px-10 tw:lg:px-16 tw:py-2.5">
        {/* Desktop */}
        <div className="tw:hidden tw:xl:block">
          <div className="tw:grid tw:gap-10 tw:grid-cols-[auto_1fr_auto] tw:items-center">
            <div>
              <RenderLogo logo={logo} />
            </div>

            <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-6">
              {menuItems.map((menuItem, index) => (
                <div key={index} className="tw:relative">
                  {/* Main Menu */}
                  {menuItem.submenu ? (
                    <button
                      onClick={() => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)}
                      className="tw:flex tw:items-center tw:gap-1 tw:gap-0 tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium"
                    >
                      {menuItem.label}

                      <img src='../../down-arrow.png' width={12} className={`tw:transition-all ${openSubmenuIndex === index ? 'tw:-rotate-180' : 'tw:rotate-0'}`} />
                    </button>
                  ) : (
                    <Link
                      href={menuItem.href || "#"}
                      className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium"
                    >
                      {menuItem.label}
                    </Link>
                  )}

                  {/* Submenu */}
                  {menuItem.submenu && openSubmenuIndex === index && (
                    <div className="tw:absolute tw:left-0 tw:top-[150%] tw:min-w-[240px] tw:rounded-xl tw:bg-[#F2EDE4] tw:p-2 tw:text-[#3B4443] tw:shadow-xl tw:z-50">
                      {menuItem.submenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.href}
                          className="tw:block tw:py-2 tw:px-2 tw:rounded-sm tw:!text-[#3B4443] tw:hover:!text-white tw:hover:bg-[#964A26] tw:transition-all tw:!no-underline hover:tw:text-orange-400"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="tw:flex tw:gap-4 tw:items-center">
              {/* <div className="copperplate-font tw:text-sm tw:uppercase">our brands</div> */}

              {ourBrands.map((menuItem, index) => (
                <div key={index} className="tw:relative">
                  {/* Main Menu */}
                  {menuItem.submenu ? (
                    <button
                      onClick={() => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)}
                      className="copperplate-font tw:flex tw:items-center tw:gap-1 tw:text-sm tw:!uppercase tw:border tw:!rounded-sm tw:px-4 tw:py-2"
                    >
                      {menuItem.label}
                      <img src='../../down-arrow.png' width={12} className={`tw:transition-all ${openSubmenuIndex === index ? 'tw:-rotate-180' : 'tw:rotate-0'}`} />
                    </button>
                  ) : (
                    <Link
                      href={menuItem.href || "#"}
                      className="tw:!text-black copperplate-font tw:!no-underline tw:uppercase tw:text-sm tw:font-medium"
                    >
                      {menuItem.label}
                    </Link>
                  )}

                  {/* Submenu */}
                  {menuItem.submenu && openSubmenuIndex === index && (
                    <div className="tw:absolute tw:left-0 tw:top-[150%] tw:min-w-[240px] tw:rounded-xl tw:bg-[#F2EDE4] tw:p-2 tw:text-[#3B4443] tw:shadow-xl tw:z-50">
                      {menuItem.submenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.href}
                          className="tw:block tw:py-2 tw:px-2 tw:rounded-sm tw:!text-[#3B4443] tw:hover:!text-white tw:hover:bg-[#964A26] tw:!no-underline hover:tw:text-orange-400"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

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
        <div className="tw:relative tw:flex tw:justify-center tw:items-center tw:p-4 tw:border-b tw:border-gray-300">
          <button onClick={handleClose} className="tw:absolute tw:left-4">
            <Image className="tw:size-4" src="/icons/close.svg" width={24} height={24} alt="close" />
          </button>
          <RenderLogo logo={logo} />
        </div>

        {/* Mobile Sidebar Menu Items */}
        <div className="tw:flex tw:flex-col tw:gap-4 tw:p-4 tw:divide-y tw:divide-gray-200">
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              {menuItem.submenu ? (
                <>
                  <button
                    onClick={() => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)}
                    className="tw:!text-black tw:flex tw:items-center tw:gap-2 tw:text-sm tw:uppercase tw:!no-underline tw:pb-4 tw:w-full tw:text-left copperplate-font"
                  >
                    {menuItem.label}
                    <img src='../../down-arrow.png' width={12} className={`tw:transition-all ${openSubmenuIndex === index ? 'tw:-rotate-180' : 'tw:rotate-0'}`} />
                  </button>
                  {openSubmenuIndex === index && (
                    <div className="tw:ml-4 tw:mt-2 tw:space-y-2">
                      {menuItem.submenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          onClick={handleClose}
                          href={item.href}
                          className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:block tw:pb-2"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  onClick={handleClose}
                  className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4 tw:block"
                  href={menuItem.href}
                >
                  {menuItem.label}
                </Link>
              )}
            </div>
          ))}

          <div className="tw:pt-4 tw:pb-4">
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

          <Link
            onClick={handleClose}
            className="tw:!text-black tw:text-sm tw:uppercase tw:!no-underline tw:pb-4 tw:block"
            href='/store'
          >
            Store
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;