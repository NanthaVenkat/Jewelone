"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const initialFormData = {
    name: "",
    phone: "",
    city: "",
    showroom: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // allow only numbers for phone
    if (name === "phone" && !/^\d*$/.test(value)) return;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Remove error for this field if value is present
    setErrors((prevErrors) => {
      if (name === "terms" && fieldValue) {
        const { terms, ...rest } = prevErrors;
        return rest;
      } else if (fieldValue && prevErrors[name]) {
        const { [name]: removed, ...rest } = prevErrors;
        return rest;
      }
      return prevErrors;
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (formData.phone.length !== 10)
      newErrors.phone = "Mobile number must be 10 digits";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.showroom) newErrors.showroom = "Please select a showroom";
    if (!formData.terms)
      newErrors.terms = "You must agree to the terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/digigold", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Form submitted successfully:", data);

      resetForm();
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } catch (err) {
      console.error("Form submission error:", err);

      toast.error("Failed to submit form. Please try again later", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <form className="tw:my-auto" id="signUp" onSubmit={handleSubmit}>
      <div className="tw:text-rk-primary alga-font tw:text-2xl tw:font-semibold tw:mb-3 tw:max-lg:text-center">
        Sign Up
      </div>
      <div className="section5-line tw:max-lg:text-center">
        Bringing convenience and safety to buying Gold!
      </div>

      <div className="tw:mt-6 tw:text-sm tw:space-y-4">
        {/* Full Name */}
        <div className="tw:space-y-1">
          <label className="tw:text-black tw:font-medium">
            Full Name<span className="tw:text-rk-primary">*</span>
          </label>
          <input
            name="name"
            className="tw:border tw:h-10 tw:rounded-sm tw:w-full tw:pl-2 tw:border-[#E0DACF] tw:outline-0"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="tw:mt-1 tw:text-red-500 tw:text-xs">
              {errors.name}
            </div>
          )}
        </div>

        {/* Mobile Number */}
        <div className="tw:space-y-1">
          <label className="tw:text-black tw:font-medium">
            Mobile Number<span className="tw:text-rk-primary">*</span>
          </label>
          <input
            name="phone"
            className="tw:border tw:h-10 tw:rounded-sm tw:w-full tw:pl-2 tw:border-[#E0DACF] tw:outline-0"
            type="text"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
          />
          {errors.phone && (
            <div className="tw:mt-1 tw:text-red-500 tw:text-xs">
              {errors.phone}
            </div>
          )}
        </div>

        {/* City */}
        <div className="tw:space-y-1">
          <label className="tw:text-black tw:font-medium">
            City<span className="tw:text-rk-primary">*</span>
          </label>
          <input
            name="city"
            className="tw:border tw:h-10 tw:rounded-sm tw:w-full tw:pl-2 tw:border-[#E0DACF] tw:outline-0"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <div className="tw:mt-1 tw:text-red-500 tw:text-xs">
              {errors.city}
            </div>
          )}
        </div>

        {/* Nearest Showroom */}
        <div className="tw:space-y-1">
          <label className="tw:text-black tw:font-medium">
            Nearest Showroom<span className="tw:text-rk-primary">*</span>
          </label>
          <select
            name="showroom"
            className="tw:border tw:h-10 tw:rounded-sm tw:w-full tw:pl-2 tw:border-[#E0DACF] tw:outline-0"
            value={formData.showroom}
            onChange={handleChange}
          >
            <option value="">Select Location</option>
            <option value="Cross Cut Rd, CBE">Cross Cut Rd, CBE</option>
            <option value="Ganapathy">Ganapathy</option>
            <option value="Experience Center - Thudiyalur">
              Experience Center - Thudiyalur
            </option>
            <option value="Pollachi">Pollachi</option>
            <option value="Udumalpet">Udumalpet</option>
            <option value="Madurai - Kamraj Road">Madurai - Kamraj Road</option>
            <option value="Madurai - Anna Nagar">Madurai - Anna Nagar</option>
            <option value="Ramnad">Ramnad</option>
            <option value="Erode">Erode</option>
            <option value="Salem">Salem</option>
            <option value="Trichy">Trichy</option>
            <option value="Vellore">Vellore</option>
            <option value="Anna Nagar, Chennai">Anna Nagar, Chennai</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Hosur">Hosur</option>
          </select>
          {errors.showroom && (
            <div className="tw:mt-1 tw:text-red-500 tw:text-xs">
              {errors.showroom}
            </div>
          )}
        </div>

        <div>
          {/* Terms Checkbox */}
          <div className="tw:flex tw:items-center tw:gap-1">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="tw:h-5 tw:w-5"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms" className="tw:text-sm tw:ms-1">
              I agree with the terms & conditions
            </label>
          </div>
          {errors.terms && (
            <div className="tw:mt-1 tw:text-red-500 tw:text-xs">
              {errors.terms}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="tw:text-white tw:bg-black tw:px-10 tw:py-2 tw:!rounded-full tw:uppercase" 
          >
           {loading ? 'Submitting...' : 'Submit'} 
          </button>
        </div>
      </div>
    </form>
  );
}
