"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductMedia from "../product/[id]/ProductMedia";
import { BsWhatsapp } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetEstimate = ({product}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    showroom: "",
  });
  const [errors, setErrors] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Ensure only digits are allowed and truncate to 10 digits if exceeded
      if (!/^\d*$/.test(value)) return; // Reject non-digit characters
      if (value.length > 10) return; // Reject input longer than 10 digits
    }

    // Clear the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fullName
    if (!formData.fullName) newErrors.fullName = "Full name is required.";

    // Validate city
    if (!formData.city) newErrors.city = "City is required.";

    // Validate phone number length
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Validate showroom
    if (!formData.showroom) newErrors.showroom = "Please select a showroom.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log form data
    console.log("Form Submitted:", formData);
    sendMail(formData);
    // Close the modal after submission
    handleClose();
  };


  const sendMail = (data) => {
    setLoading(true);
    const apiEndpoint = "/api/get-estimate";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setLoading(false);

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

  return (
    <div>
      <Button onClick={handleShow}><BsWhatsapp />
      Get full estimate</Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="getEstimateModal modal-lg"
        style={{ zIndex: "9999", backdropFilter: "brightness(0.5)" }}
      >
        <Modal.Body>
          <Button
            className="bg-transparent text-black border-0 position-absolute top-0 end-0"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={24}
              height={24}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          <div className="row">
            <div className="col-12 col-lg-6 d-none d-lg-block m-auto">
              <ProductMedia  product={product}/>
            </div>
            <div className="col-12 col-lg-6">
            <form onSubmit={handleFormSubmit}>
            <div className="d-flex flex-column gap-2 py-4">
              <div>
                <label className="form-label">
                  Full Name<span className="text-red">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <small className="text-danger">{errors.fullName}</small>
                )}
              </div>

              <div>
                <label className="form-label">
                  City<span className="text-red">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={formData.city}
                  placeholder="Enter your city"
                  onChange={handleInputChange}
                />
                {errors.city && (
                  <small className="text-danger">{errors.city}</small>
                )}
              </div>

              <div>
                <label className="form-label">
                  Phone Number<span className="text-red">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>

              <div>
                <label className="form-label">
                  Nearest Showroom<span className="text-red">*</span>
                </label>
                <select
                  name="showroom"
                  className="form-select"
                  value={formData.showroom}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select a showroom
                  </option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Erode">Erode</option>
                  <option value="Pollachi">Pollachi</option>
                  <option value="Udumalpet">Udumalpet</option>
                  <option value="Salem">Salem</option>
                  <option value="Hosur">Hosur</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Anna Nagar">Anna Nagar</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Ramnad">Ramnad</option>
                  <option value="Madurai">Madurai</option>
                </select>
                {errors.showroom && (
                  <small className="text-danger">{errors.showroom}</small>
                )}
              </div>

              <div>
                <button className="btn submit-button w-100 mt-3" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </div>
  );
};

export default GetEstimate;
