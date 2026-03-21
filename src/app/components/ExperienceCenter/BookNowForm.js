"use client";

import Image from "next/image";
import React from "react";
import "./ExperienceCenter.css";
import { useForm } from "react-hook-form";

const BookNowForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendMail(data);
    console.log(data);
    reset();
  };

  const sendMail = (data) => {
    const apiEndpoint = "/api/book-slot";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="book-now-form d-none d-lg-block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="text-center">
            <div className="mb-3">
              <Image
                alt="jewelone logo"
                className="img-fluid"
                src="/jewelone-logo.webp"
                width={200}
                height={60}
              />
            </div>

            <div className="h4 text-gold mb-3">Book Your Slot</div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">
                First Name<span className="text-red">*</span>
              </label>
              <div>
                <input
                  {...register("firstName", { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter first name"
                />

                {errors.firstName?.type === "required" && (
                  <div className="text-danger form-required" role="alert">
                    First Name is Required
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">
                Last Name<span className="text-red">*</span>
              </label>
              <div>
                <input
                  {...register("lastName", { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter last name"
                />
                {errors.lastName?.type === "required" && (
                  <div className="text-danger form-required" role="alert">
                    Last Name is Required
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">
                City<span className="text-red">*</span>
              </label>
              <div>
                <input
                  {...register("city", { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter your city"
                />
                {errors.city?.type === "required" && (
                  <div className="text-danger form-required" role="alert">
                    City is Required
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">
                Phone number<span className="text-red">*</span>
              </label>
              <div>
                <input
                  {...register("phone", { required: true })}
                  className="form-control"
                  type="tel"
                  placeholder="Enter Mobile number"
                />

                {errors.phone?.type === "required" && (
                  <div className="text-danger form-required" role="alert">
                    Phone is Required
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 mb-2">
              <label className="book-now-form_labels mb-1">
                Email address<span className="text-red">*</span>
              </label>
              <div>
                <input
                  {...register("email", { required: true })}
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                />

                {errors.email?.type === "required" && (
                  <div className="text-danger form-required" role="alert">
                    email is Required
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <div className="book-now-form_labels mb-1">Factory Visit:</div>
              <div className="d-flex gap-2">
                <div className="d-flex gap-2 align-items-center">
                  <label
                    className="book-now-form_labels"
                    htmlFor="factory-visit-yes"
                  >
                    Yes
                  </label>
                  <div>
                    <input
                      id="factory-visit-yes"
                      type="radio"
                      value="yes"
                      {...register("factoryVisit")}

                    />
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <label
                    className="book-now-form_labels"
                    htmlFor="factory-visit-no"
                  >
                    No
                  </label>
                  <div>
                    <input
                      id="factory-visit-no"
                      type="radio"
                      value="no"
                      {...register("factoryVisit")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 mb-3 m-auto">
              <div>
                <button
                  type="submit"
                  className="btn form-control bg-red text-white"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
