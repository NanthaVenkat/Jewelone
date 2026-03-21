"use client";

import React, { useState, useEffect } from "react";
import "./AkshayaTritiya.css";
import Image from "next/image";

const storesData = [
  {"id": 1, "name": "Dhali Road, Udumalaipettai"},
  {"id": 2, "name": "Anna Nagar, Chennai"},
  {"id": 3, "name": "Experience Center, Coimbatore"},
  {"id": 4, "name": "Kamaraj Salai, Puducherry"},
  {"id": 5, "name": "Bazaar Street, Pollachi"},
  {"id": 6, "name": "RKV Road, Erode"},
  {"id": 7, "name": "Anna Salai, Vellore"},
  {"id": 8, "name": "Netaji Road, Madurai"},
  {"id": 9, "name": "Kenikarai, Ramanathapuram"},
  {"id": 10, "name": "Opp. Hosur Bus Stand, Hosur"},
  {"id": 11, "name": "Swarnapuri, Salem"}
]

const AkshayaTritiyaSection4 = ({ goldPrice }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [grams, setGrams] = useState("");
  const [goldRate, setGoldRate] = useState(goldPrice); // Initial gold rate
  const [location, setLocation] = useState("");
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   getGoldRate()
  // },[])

  // const getGoldRate= async()=>{
  //    const response = await fetch("http://jewelone-new.local/wp-json/acf/v3/options/option");
  //    if(response.ok){
  //     const data = await response.json();
  //     console.log(data.acf.todays_gold_price_per_gram)
  //     setGoldRate(data.acf.todays_gold_price_per_gram);
  //    }

  // }

  // Functions to handle changes in input fields
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Function to handle change in amount input
  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setAmount(inputAmount);
    const calculatedGrams = parseFloat(inputAmount) / goldRate;
    if (!isNaN(calculatedGrams)) {
      setGrams(calculatedGrams.toFixed(3));
    } else {
      setGrams("");
    }
  };

  // Function to handle change in grams input
  const handleGramsChange = (event) => {
    const inputGrams = event.target.value;
    setGrams(inputGrams);
    const calculatedAmount = parseFloat(inputGrams) * goldRate;
    if (!isNaN(calculatedAmount)) {
      setAmount(calculatedAmount.toFixed(2));
    } else {
      setAmount("");
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Check if all fields are filled
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !amount ||
      !grams ||
      !location ||
      !agreed
    ) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    console.log("form submitted");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="prebookFormSection" className="AkshayaTritiyaSection4">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text-center">
              <Image
                width={600}
                height={450}
                className="img-fluid"
                alt="Akshaya Tritiya"
                src="/AkshayaTritiya/Akshaya-Tritiya1.webp"
              />
              {/* <div className="fs-3 mt-3" style={{color:"#FFD2A9"}}>
            Minimum 10% Advance
            </div> */}
            </div>

            <div className="d-none d-lg-block">
              <div className="mt-3 mb-2 fs-3  text-warning">
                Terms & Conditions
              </div>
              <ul className="text-light">
                <li>
                  A Minimum 30% advance amount of your total purchase value
                  should be paid for fixing price of your gold to the payment
                  date
                </li>
                <li>
                  Gold rate protection booking is applicable to the total
                  booking value done prior. Additional purchases on the purchase
                  date will not be applicable for the pre-booked gold rate.
                </li>
                <li>
                  Purchases should be made within the Akshaya Tritiya offer
                  dates. Or else it will be treated as a normal booking amount
                  (Gold rate protection will not be applicable)
                </li>
                <li>
                  PAN Card and Aadhar card should be submitted for purchases
                  above Rs.2,00,000
                </li>
                <li>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    For enquiries, please call us on:
                    <span className="text-warning fs-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle cx={10} cy={10} r={10} fill="#EEB64F" />
                        <path
                          d="M13.2865 15.384C12.9278 15.384 12.5582 15.3172 12.1995 15.1813C8.79338 13.8964 6.10262 11.2061 4.81809 7.80006C4.50344 6.96811 4.55788 6.07393 4.96323 5.40846C5.26026 4.92069 5.70345 4.61953 6.21197 4.56096L7.01853 4.43293C7.53585 4.35725 8.03866 4.72631 8.1641 5.27161C8.26518 5.71273 8.40152 6.14866 8.56843 6.56748C8.71823 6.94432 8.65447 7.36211 8.40152 7.6581C8.27089 7.80945 8.14286 7.96548 8.02 8.12254C7.93499 8.22932 7.9153 8.45066 8.04177 8.6554C8.86701 9.9906 10.0084 11.1321 11.3432 11.9573C11.5485 12.0848 11.7698 12.0651 11.874 11.9822C12.0332 11.8578 12.1892 11.7298 12.3395 11.5996L12.3411 11.5981C12.6376 11.3451 13.0548 11.2819 13.4312 11.4312C13.85 11.5991 14.2859 11.7349 14.7271 11.8355C15.2734 11.9615 15.6425 12.4627 15.5673 12.9769L15.4362 13.8052C15.3797 14.2961 15.0785 14.7398 14.5912 15.0368C14.2123 15.2675 13.7593 15.3846 13.286 15.3846L13.2865 15.384Z"
                          fill="#9F212C"
                        />
                      </svg> 1800 1033916
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-12 col-lg-6 pt-5">
            <div className="card AkshayaTritiyaSection4__form">
              <form onSubmit={handleSubmit}>
                <div className="card-body py-4">
                  <div className="text-center">
                    <div className="mb-2">
                      <Image
                        alt="jewelone logo"
                        className="img-fluid"
                        src="/main-logo.svg"
                        width={200}
                        height={60}
                      />
                    </div>
                    <div className="mb-2 fs-3 fw-semibold text-red">
                      Advance Booking Open
                    </div>

                    <div className="mb-3 fs-6 fw-medium current-gold-rate">
                      Current Gold Rate :{" "}
                      <span className="fw-bold">₹{goldRate}</span> per gram
                    </div>

                    <div className="mb-2 fw-semibold AkshayaTritiyaSection4__prebook-text">
                      Pre-book your Jewellery
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">
                      Full Name<span>*</span>
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={handleFullNameChange}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-6 mb-2">
                      <label className="form-label">
                        Email<span>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-lg-6 mb-2">
                      <label className="form-label">
                        Phone Number<span>*</span>
                      </label>
                      <input
                        name="phoneNumber"
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">
                      Pre-Book Amount<span>*</span>
                    </label>
                    <div>
                      <input
                        name="amount"
                        type="number"
                        className="form-control"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">
                      Total Grams<span>*</span>
                    </label>
                    <div>
                      <input
                        name="grams"
                        type="number"
                        className="form-control"
                        placeholder="0.000"
                        value={grams}
                        onChange={handleGramsChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">
                      Nearest Store Location<span>*</span>
                    </label>
                    <div>
                      <select
                        name="location"
                        value={location}
                        onChange={handleLocationChange}
                        required // Added required attribute
                        className="form-select"
                      >
                        <option disabled value="">
                          Enter your location
                        </option>
                        {storesData.map((store) => (
                          <option value={store.name} key={store.id}>
                            {store.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      id="accept-terms"
                      type="checkbox"
                      checked={agreed}
                      onChange={handleCheckboxChange}
                      required
                      className="form-check-input"
                    />
                    <label htmlFor="accept-terms" className="form-check-label">
                      I agree with the terms & conditions
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn AkshayaTritiyaSection4__prebook-btn"
                    >
                      {loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span>PRE-BOOK NOW</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="d-block d-lg-none">
              <div className="mt-3 mb-2 fs-3  text-warning">
                Terms & Conditions
              </div>
              <ul className="text-light">
                <li>
                  A Minimum 30% advance amount of your total purchase value
                  should be paid for fixing price of your gold to the payment
                  date
                </li>
                <li>
                  Gold rate protection booking is applicable to the total
                  booking value done prior. Additional purchases on the purchase
                  date will not be applicable for the pre-booked gold rate.
                </li>
                <li>
                  Purchases should be made within the Akshaya Tritiya offer
                  dates. Or else it will be treated as a normal booking amount
                  (Gold rate protection will not be applicable)
                </li>
                <li>
                  PAN Card and Aadhar card should be submitted for purchases
                  above Rs.2,00,000
                </li>
                <li>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    For enquiries, please call us on:
                    <span className="text-warning fs-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle cx={10} cy={10} r={10} fill="#EEB64F" />
                        <path
                          d="M13.2865 15.384C12.9278 15.384 12.5582 15.3172 12.1995 15.1813C8.79338 13.8964 6.10262 11.2061 4.81809 7.80006C4.50344 6.96811 4.55788 6.07393 4.96323 5.40846C5.26026 4.92069 5.70345 4.61953 6.21197 4.56096L7.01853 4.43293C7.53585 4.35725 8.03866 4.72631 8.1641 5.27161C8.26518 5.71273 8.40152 6.14866 8.56843 6.56748C8.71823 6.94432 8.65447 7.36211 8.40152 7.6581C8.27089 7.80945 8.14286 7.96548 8.02 8.12254C7.93499 8.22932 7.9153 8.45066 8.04177 8.6554C8.86701 9.9906 10.0084 11.1321 11.3432 11.9573C11.5485 12.0848 11.7698 12.0651 11.874 11.9822C12.0332 11.8578 12.1892 11.7298 12.3395 11.5996L12.3411 11.5981C12.6376 11.3451 13.0548 11.2819 13.4312 11.4312C13.85 11.5991 14.2859 11.7349 14.7271 11.8355C15.2734 11.9615 15.6425 12.4627 15.5673 12.9769L15.4362 13.8052C15.3797 14.2961 15.0785 14.7398 14.5912 15.0368C14.2123 15.2675 13.7593 15.3846 13.286 15.3846L13.2865 15.384Z"
                          fill="#9F212C"
                        />
                      </svg> 1800 1033916
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection4;
