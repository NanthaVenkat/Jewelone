"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CatalogueModal = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    sendMail(data); // Handle form submission
  };

  // Handle WhatsApp number input - only allow digits
  const handleWhatsAppChange = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\D/g, ""); // Replace non-digits
    setValue("whatsapp", onlyDigits);
  };


  const sendMail = (data) => {
    setLoading(true);
    const apiEndpoint = "/api/diamond";
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

  // Send form data to the server
  // const sendMail = (data) => {
  //   setLoading(true);
  //   const apiEndpoint = "https://jewelonestaging.brightbridge.co/wp-json/contact-form-7/v1/contact-forms/193/feedback"; // Replace with the correct API

  //   const formData = new FormData();
  //   formData.append("your-name", data.name);
  //   formData.append("your-whatsapp", data.whatsapp);
  //   formData.append("your-email", data.email);
  //   formData.append("your-city", data.city);
  //   formData.append('_wpcf7_unit_tag', 'wpcf7-f193-p194-o1');

  //   fetch(apiEndpoint, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setLoading(false);
  //       reset();
  //       toast.success('Form submitted successfully!', {
  //         position: "top-right",
  //         autoClose: 8000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //       toast.error('Failed to submit form. Please try again.', {
  //         position: "top-right",
  //         autoClose: 8000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         });
  //     });
  // };

  return (
    <div>
      {/* Button trigger modal */}
      <div className="DiamondSection1_modal-button">
        <button
          type="button"
          className="btn tw:!flex tw:!items-center tw:!justify-center tw:gap-1"
          data-bs-toggle="modal"
          data-bs-target="#catalogueModal"
        >
          Click here to view our Catalogue{" "}
          <svg
            height={14}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade DiamondSection1_modal"
        id="catalogueModal"
        tabIndex={-1}
        aria-labelledby="catalogueModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body position-relative pt-5 pb-0">
              <div className="position-absolute end-0 top-0 pe-2 pt-2">
                <button
                  type="button"
                  className="modal-close-btn"
                  data-bs-dismiss="modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 43 44"
                    fill="none"
                  >
                    <circle
                      cx="21.5256"
                      cy="22.2353"
                      r="21.364"
                      fill="#F4F5F4"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M30.4469 28.321L23.8256 21.6891L30.4469 15.0572C30.935 14.5683 30.935 13.7785 30.4469 13.2895C29.9587 12.8006 29.1702 12.8006 28.682 13.2895L22.0608 19.9215L15.4395 13.2895C14.9514 12.8006 14.1628 12.8006 13.6747 13.2895C13.1866 13.7785 13.1866 14.5683 13.6747 15.0572L20.296 21.6891L13.6747 28.321C13.1866 28.81 13.1866 29.5998 13.6747 30.0887C13.925 30.3394 14.2379 30.4523 14.5634 30.4523C14.8888 30.4523 15.2017 30.3269 15.4521 30.0887L22.0733 23.4568L28.6945 30.0887C28.9449 30.3394 29.2578 30.4523 29.5832 30.4523C29.9087 30.4523 30.2216 30.3269 30.4719 30.0887C30.96 29.5998 30.96 28.81 30.4719 28.321H30.4469Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="modal-grid-items">
                <div className="d-none d-md-block mt-auto">
                  <Image
                    width={388}
                    height={540}
                    className="img-fluid"
                    src="/diamond/modal/banner.webp"
                    alt="model image"
                  />
                </div>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex flex-column gap-3 mb-4">
                      <div>
                        <Image
                          width={180}
                          height={36}
                          className="img-fluid"
                          src="/jewelone-white.svg"
                          alt="jewelone logo"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="Full Name"
                          type="text"
                          {...register("name", { required: true })}
                          className="modal-item-input"
                        />
                        {errors.name && <span className="modal-error-message">Name is required</span>}
                      </div>
                      <div>
                        <input
                          placeholder="Whatsapp Number"
                          type="text"
                          maxLength={10}
                          {...register("whatsapp", { required: true, maxLength: 10, minLength:10 })}
                          onChange={handleWhatsAppChange}
                          className="modal-item-input"
                        />


                        {errors.whatsapp?.type === "required" && (
                    <div className="modal-error-message" role="alert">
                      WhatsApp No is Required
                    </div>
                  )}
                   {errors.whatsapp?.type === "minLength" && (
                    <div className="modal-error-message" role="alert">
                      Enter a Valid 10 Digit Number
                    </div>
                  )}

                      </div>
                      <div>
                        <input
                          placeholder="Email ID"
                          type="text"
                          {...register("email", { required: true })}
                          className="modal-item-input"
                        />
                        {errors.email && <span className="modal-error-message">Email is required</span>}

                       


                      </div>
                      <div>
                        <input
                          placeholder="City"
                          type="text"
                          {...register("city", { required: true })}
                          className="modal-item-input"
                        />
                        {errors.city && <span className="modal-error-message">City is required</span>}
                      </div>
                      <div>
                        <button className="modal-submit-btn" type="submit">
                          {loading ? (
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />

    </div>
  );
};

export default CatalogueModal;
