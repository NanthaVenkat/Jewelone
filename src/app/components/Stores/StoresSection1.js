"use client";

import React, { useState } from "react";
import "./Stores.css";
import Image from "next/image";
import { useStoreContext } from "./StoreContext";

const StoresSection1 = () => {
  const { stores } = useStoreContext();

  const { updateFilteredStores } = useStoreContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    updateFilteredStores(searchTerm);
  };

  const searchInput = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Generate suggestions based on your stores data
    // const storeSuggestions = generateStoreSuggestions(newSearchTerm);
    // setSuggestions(storeSuggestions);

    if (newSearchTerm.length > 1) {
      updateFilteredStores(newSearchTerm);
    } else {
      updateFilteredStores("");
    }
  };

  // const generateStoreSuggestions = (partialTerm) => {
  //   // Implement your logic to generate suggestions based on the stores data
  //   const uniqueSuggestions = [...new Set(
  //     stores
  //       .map((store) => [store.city, store.pincode])
  //       .flat()
  //       .filter((value) =>
  //         value.toLowerCase().includes(partialTerm.toLowerCase())
  //       )
  //   )];
  //   return uniqueSuggestions;
  // };

  return (
    <div className="stores-section1 position-relative">
      <Image
        className="img-fluid"
        width={1920}
        height={581}
        src="/store-location.png"
        alt="stores location"
      />
      <div className="container">
        <div className="col-12 d-flex justify-content-center">
          <div className="stores-section1_wrapper position-absolute text-center stores-section1-item top-0 d-flex flex-column  justify-content-center align-items-center h-100" style={{maxWidth:'450px'}}>
            <div className="fs-2 fw-semibold text-white mb-3">FIND US NEAR YOU</div>
            <div className="fs-6  text-white mb-4">
              Find a JewelOne store in your locality, the JewelOne family is
              growing everyday
            </div>

            <div className="input-group">
              <button className="btn  btn-light" type="button">
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3005 15.5726C15.0025 15.5726 15.5717 15.0035 15.5717 14.3015C15.5717 13.5994 15.0025 13.0303 14.3005 13.0303C13.5984 13.0303 13.0293 13.5994 13.0293 14.3015C13.0293 15.0035 13.5984 15.5726 14.3005 15.5726Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M14.3005 28.6014C14.6376 28.6014 14.9609 28.4675 15.1993 28.2291C15.4377 27.9907 15.5717 27.6673 15.5717 27.3302V20.9743C15.5717 20.6372 15.4377 20.3138 15.1993 20.0754C14.9609 19.8371 14.6376 19.7031 14.3005 19.7031C13.9633 19.7031 13.64 19.8371 13.4016 20.0754C13.1632 20.3138 13.0293 20.6372 13.0293 20.9743V27.3302C13.0293 27.6673 13.1632 27.9907 13.4016 28.2291C13.64 28.4675 13.9633 28.6014 14.3005 28.6014Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M14.3005 8.89826C14.6376 8.89826 14.9609 8.76433 15.1993 8.52594C15.4377 8.28755 15.5717 7.96422 15.5717 7.62708V1.27118C15.5717 0.934042 15.4377 0.610712 15.1993 0.37232C14.9609 0.133927 14.6376 0 14.3005 0C13.9633 0 13.64 0.133927 13.4016 0.37232C13.1632 0.610712 13.0293 0.934042 13.0293 1.27118V7.62708C13.0293 7.96422 13.1632 8.28755 13.4016 8.52594C13.64 8.76433 13.9633 8.89826 14.3005 8.89826Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M1.27118 15.5726H7.62708C7.96422 15.5726 8.28755 15.4387 8.52594 15.2003C8.76433 14.9619 8.89826 14.6386 8.89826 14.3015C8.89826 13.9643 8.76433 13.641 8.52594 13.4026C8.28755 13.1642 7.96422 13.0303 7.62708 13.0303H1.27118C0.934042 13.0303 0.610712 13.1642 0.37232 13.4026C0.133927 13.641 0 13.9643 0 14.3015C0 14.6386 0.133927 14.9619 0.37232 15.2003C0.610712 15.4387 0.934042 15.5726 1.27118 15.5726Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M11.5994 6.07444V3.42969C9.62569 3.92442 7.82329 4.94567 6.38448 6.38448C4.94567 7.82329 3.92442 9.62569 3.42969 11.5994H6.07446C6.50064 10.3114 7.22224 9.1409 8.18157 8.18157C9.14091 7.22223 10.3114 6.50062 11.5994 6.07444Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M22.5269 11.5994H25.1717C24.6769 9.62569 23.6557 7.82329 22.2169 6.38448C20.7781 4.94567 18.9757 3.92442 17.002 3.42969V6.07444C18.29 6.50062 19.4605 7.22223 20.4198 8.18157C21.3791 9.1409 22.1007 10.3114 22.5269 11.5994Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M25.1717 17.002H22.5269C22.1007 18.29 21.3791 19.4605 20.4198 20.4198C19.4605 21.3791 18.29 22.1007 17.002 22.5269V25.1717C18.9757 24.6769 20.7781 23.6557 22.2169 22.2169C23.6557 20.7781 24.6769 18.9757 25.1717 17.002Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M6.07446 17.002H3.42969C3.92442 18.9757 4.94567 20.7781 6.38448 22.2169C7.82329 23.6557 9.62569 24.6769 11.5994 25.1717V22.5269C10.3114 22.1007 9.14091 21.3791 8.18157 20.4198C7.22224 19.4605 6.50064 18.29 6.07446 17.002Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M27.3302 13.0303H20.9743C20.6372 13.0303 20.3138 13.1642 20.0754 13.4026C19.8371 13.641 19.7031 13.9643 19.7031 14.3015C19.7031 14.6386 19.8371 14.9619 20.0754 15.2003C20.3138 15.4387 20.6372 15.5726 20.9743 15.5726H27.3302C27.6673 15.5726 27.9907 15.4387 28.2291 15.2003C28.4675 14.9619 28.6014 14.6386 28.6014 14.3015C28.6014 13.9643 28.4675 13.641 28.2291 13.4026C27.9907 13.1642 27.6673 13.0303 27.3302 13.0303Z"
                    fill="#2D2D2D"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pincode or City"
                onChange={searchInput}
              />

              <button
                className="btn btn-light "
                onClick={handleSearch}
                type="button"
              >
                Locate Me
              </button>
            </div>

            {/* <div className="input-group mb-3">
              <span className="input-group-text">
                
              </span>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pincode or City"
                  onChange={searchInput}
                />
              </div>
              <span className="input-group-text">
                <button
                  className="border-0 bg-transparent"
                  onClick={handleSearch}
                >
                  Locate Me
                </button>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresSection1;
