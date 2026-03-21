"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerForm = () => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState(""); // To display selected file name
  const resumeRef = useRef(null);

  const shortenFileName = (name, maxLength = 18) => {
    if (name.length <= maxLength) return name;
    const ext = name.substring(name.lastIndexOf("."));
    const prefix = name.substring(0, 12);
    const suffix = name.substring(name.length - 8);
    return `${prefix}...${suffix}`;
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  // Clean digits from mobile and clear error if valid
  const handleMobileChange = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\D/g, "");
    if (onlyDigits.length <= 10) {
      e.target.value = onlyDigits; // force only digits in input
    }
    clearErrors("mobile");
  };

  const onSubmit = (data) => {
    // Validate resume file manually because react-hook-form's file validation can be tricky
    const file = resumeRef.current?.files?.[0];
    if (!file) {
      setError("resume", { type: "required", message: "Resume file is required" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("resume", { type: "maxSize", message: "File size must be under 5MB" });
      return;
    }
    sendMail({ ...data, resume: file });
  };

  const sendMail = (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("position", data.position);
    formData.append("city", data.city);
    formData.append("resume", data.resume);

    fetch("/api/careers", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        if (response.success === false) {
          toast.error(response.message || "Failed to submit form");
        } else {
          toast.success("Form submitted successfully!");
          reset();
          setResumeName("");
          if (resumeRef.current) resumeRef.current.value = ""; // reset file input
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to submit form. Please try again later.");
      });
  };

  return (
    <div>
      <div className="careers-form">
        <div className="card bg-transparent border-0">
          <div className="card-body">
            <div className="fs-4 fw-semibold text-white mb-3">Submit your profile</div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2" noValidate>
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="form-control"
                  placeholder="Enter your full name"
                  type="text"
                />
                {errors.name && <div className="contact-required mt-1">{errors.name.message}</div>}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="form-control"
                  placeholder="Enter your email"
                  type="email"
                />
                {errors.email && <div className="contact-required mt-1">{errors.email.message}</div>}
              </div>

              <div>
                <input
                  {...register("mobile", {
                    required: "Mobile number is required",
                    minLength: { value: 10, message: "Enter a valid 10 digit number" },
                    maxLength: { value: 10, message: "Mobile number can be max 10 digits" },
                    pattern: { value: /^\d+$/, message: "Mobile must contain only digits" },
                  })}
                  className="form-control"
                  placeholder="Enter your contact number"
                  maxLength={10}
                  type="tel"
                  onChange={handleMobileChange}
                />
                {errors.mobile && <div className="contact-required mt-1">{errors.mobile.message}</div>}
              </div>

              <div>
                <input
                  {...register("city", { required: "City is required" })}
                  className="form-control"
                  placeholder="Enter your city"
                  type="text"
                />
                {errors.city && <div className="contact-required mt-1">{errors.city.message}</div>}
              </div>

              <div>
                <div className="mb-1" style={{ color: "#F4D86C" }}>
                  Upload Your Resume
                </div>
                <div className="mb-1 text-white">Resume</div>
                <div>
                  <label htmlFor="resume" className="upload-resume-input btn btn-secondary">
                    Browse
                  </label>
                </div>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  ref={resumeRef}
                  className="form-control d-none"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      const fullName = e.target.files[0].name;
                      setResumeName(shortenFileName(fullName));
                      clearErrors("resume");
                    } else {
                      setResumeName("");
                    }
                  }}
                />
                {resumeName && (
                  <div className="mt-1 text-white" style={{ maxWidth: "300px" }}>
                    Selected File: <strong>{resumeName}</strong>
                  </div>
                )}
                {errors.resume && <div className="contact-required mt-1">{errors.resume.message}</div>}
                <div
                  className="d-flex align-items-center gap-1 mt-1 text-white"
                  style={{ fontSize: "12px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  JPG and PDF files up to 5MB
                </div>
              </div>

              <div>
                <select
                  {...register("position", { required: "Position is required" })}
                  className="form-select"
                >
                  <option value="">Select Position</option>
                  <option value="Sales & Marketing Role (Showroom)">
                    Sales & Marketing Role (Showroom)
                  </option>
                  <option value="Backoffice Role (Office in Coimbatore)">
                    Backoffice Role (Office in Coimbatore)
                  </option>
                  <option value="Other">Other</option>
                </select>
                {errors.position && <div className="contact-required mt-1">{errors.position.message}</div>}
              </div>

              <div>
                <button type="submit" className="btn btn-warning px-4 mt-2" disabled={loading}>
                  {loading ? (
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
