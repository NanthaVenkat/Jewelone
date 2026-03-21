"use client";
import { useState } from "react";

export const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tw:pb-2">
      <div
        className="tw:text-lg copperplate-font tw:font-semibold tw:uppercase  tw:text-black tw:flex tw:justify-between tw:items-center tw:lg:cursor-default tw:cursor-pointer tw:lg:pointer-events-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="tw:md:hidden tw:text-2xl">{isOpen ? "−" : "+"}</span>
      </div>

      <div className={`tw:mt-3 ${isOpen ? "tw:block" : "tw:hidden"} tw:md:block`}>
        {children}
      </div>
    </div>
  );
};
