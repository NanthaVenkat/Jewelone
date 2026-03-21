"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Image from "next/image";
// import { Toast } from "react-bootstrap";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactSection1 = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const {
    register,
    handleSubmit,
    clearErrors, // Add this to clear errors

    reset,
    formState: { errors },setValue 
  } = useForm();

  const onSubmit = (data) => {
    sendMail(data);
    console.log(data);
  };



  const handleMobileChange = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\D/g, '');
    setValue('mobile', onlyDigits);
    if (onlyDigits.length >= 10) {
      clearErrors('mobile'); // Clear error when valid
    }
  };
  
  const sendMail = (data) => {
    setLoading(true);
    const apiEndpoint = "/api/contact";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
        reset();
        toast.success('Form submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        reset();
        toast.error('Failed to submit form. Please try again later', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };


  // const sendMail = (data) => {
  //   setLoading(true);
  //   const apiEndpoint = "https://jewelonestaging.brightbridge.co/wp-json/contact-form-7/v1/contact-forms/6/feedback";
    
  //   const formData = new FormData();
  //   formData.append('your-name', data.name);
  //   formData.append('your-email', data.email);
  //   formData.append('your-mobile', data.mobile);
  //   formData.append('your-message', data.message);
  //   formData.append('_wpcf7_unit_tag', 'wpcf7-f6-p7-o1');
  
  //   fetch(apiEndpoint, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setLoading(false);
  //       reset();
  //       // setToastMessage("Form submitted successfully!");
  //       // setShowToast(true);

  //       toast.success('Form submitted successfully!', {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //         });
          
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //       reset();
  //       // setToastMessage("Failed to submit form. Please try again later.");
  //       // setShowToast(true);
  //       toast.error('Failed to submit form. Please try again later.', {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //         });
  //     });
  // };

  
  
  return (
    <div className="contact-section1 section-padding pb-3" style={{
      width: '100%',
      height: '100%',
      background: 'url("/contact-page-bg.webp") center/cover no-repeat',
      position: 'relative',
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div>
              <div className="contact-section-label mb-2">CONTACT</div>
              <div className="contact-section-title mb-4">Get in touch</div>
              <p className="contact-section-text">
              Have a question or want to connect with us? We're here to help! Fill out the form, will get back you shortly....
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="contact-section1_form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    {...register("name", { required: true })}
                    className="form-control"
                    placeholder="Name"
                    type="text"
                  />
                  {errors.name?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Name is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                  {errors.email?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Email is Required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    {...register("mobile", { required: true, maxLength: 10, minLength:10 })}
                    className="form-control"
                    placeholder="Mobile Number"
                    maxLength={10}
                    type="tel"
                    onChange={handleMobileChange}
                  />

                  {errors.mobile?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Mobile No is Required
                    </div>
                  )}
                   {errors.mobile?.type === "minLength" && (
                    <div className="text-danger contact-required" role="alert">
                      Enter a Valid 10 Digit Mobile Number
                    </div>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message", { required: false })}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn">
                    {loading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : <span>SUBMIT</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 section1-info-cards">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body d-flex  align-items-center">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/email.png"
                    alt="email icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Email</div>
                  <div className="card-text">retail.crm@ejindia.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body d-flex  align-items-center">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/phone.png"
                    alt="phone icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Phone</div>
                  <div className="card-text">1800 1033916</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 ">
            <div className="card">
              <div className="card-body d-flex align-items-center ">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/address.png"
                    alt="address icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Jewel One Corporate Office</div>
                  <div className="card-text">
                    230, E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu
                    641002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* React Bootstrap Toast */}
        {/* <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={5000}
          autohide
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "#A0222C",
            color: "#ffffff"
          }}
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">Contact Form</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast> */}
      </div>
    </div>
  );
};

export default ContactSection1;
