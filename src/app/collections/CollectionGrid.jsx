"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Offcanvas from "react-bootstrap/Offcanvas";
import { productsData } from "@/lib/data/products";

const CollectionGrid = () => {
  const totalProducts = productsData.length; // Total number of product cards
  const productsPerPage = 36; // Products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage); // Calculate total pages

  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [showLgFilter, setShowLgFilter] = useState(false);
  const [showSmFilter, setShowSmFilter] = useState(false);

  const handleSmFilterClose = () => setShowSmFilter(false);
  const handleSmFilterShow = () => setShowSmFilter(true);

  console.log(productsData,"products");

  // Generate product cards
  const products = productsData.map((product) => (
    <ProductCard
      product={product}
      key={product.id}
      id={product.id}
      title={`Product ${product.id}`}
      slug={`/product/${product.id}`}
    />
  ))
    


  // Get products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setIsLoading(true); // Show loader
      setTimeout(() => {
        setCurrentPage(page); // Update current page
        setIsLoading(false); // Hide loader
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      }, 500); // Simulate loading delay (adjust if needed)
    }
  };

  const handleLgFilterClose = () => setShowLgFilter(false);

  return (
    <section className="container py-5 collection-section">
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap gap-2 align-items-center">
          <div>
            <div>
              <ul className="d-flex gap-2 align-items-center list-unstyled breadcrumbs">
                <li>
                  <Link href="/" className="text-black text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={10}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="text-red fw-semibold">Our Collections</li>
              </ul>
            </div>
            <div className="fs-5 fw-medium">
              Total {totalProducts} Results Found
            </div>
          </div>

          <div className="collection-filter-btn_wrapper ms-auto">
            {/* Filter Button */}
            <div className="collection-filter__small-devices d-block d-lg-none">
              <Button
                className="collection-filter-btn"
                onClick={handleSmFilterShow}
              >
                Filter
              </Button>

              <Offcanvas
                show={showSmFilter}
                onHide={handleSmFilterClose}
                className="collection-filter__small-devices-offcanvas"
              >
                <Offcanvas.Body>
                  <Tab.Container defaultActiveKey="sm-jewellery-type">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "110px auto",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <Nav className="flex-column gap-2 p-2 py-3 filter-items_Wrapper">
                          <Nav.Item>
                            <Nav.Link eventKey="sm-jewellery-type">
                              Jewellery Type
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="sm-is-customizable">
                              Customizable
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="sm-availability">
                              Availability
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div>
                        <Tab.Content>
                          {/* Jewellery Type Tab */}
                          <Tab.Pane eventKey="sm-jewellery-type">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-jewellery-diamond">
                                  Diamond Jewellery <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-jewellery-diamond"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-jewellery-category"
                                    value="diamond"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-jewellery-gold">
                                  Gold Jewellery <span>(54)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-jewellery-gold"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-jewellery-category"
                                    value="gold"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-jewellery-gemstone">
                                  Jewellery with Gemstones <span>(31)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-jewellery-gemstone"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-jewellery-category"
                                    value="gemstone"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-jewellery-silver">
                                  Silver Jewellery <span>(67)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-jewellery-silver"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-jewellery-category"
                                    value="silver"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>

                          {/* Customizable Tab */}
                          <Tab.Pane eventKey="sm-is-customizable">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-customizable-true">
                                  Yes <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-customizable-true"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-is-customizable"
                                    value="true"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-customizable-false">
                                  No <span>(32)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-customizable-false"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-is-customizable"
                                    value="false"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>

                          {/* Availability Tab */}
                          <Tab.Pane eventKey="sm-availability">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="sm-availability-instock">
                                  Instock <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="sm-availability-instock"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="sm-availability-status"
                                    value="instock"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </Tab.Container>

                  <div className="m-auto">
                    <div className="filter-close-btn_wrapper">
                      <button className="filter-close-btn btn px-4" onClick={handleSmFilterClose}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width={16}
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Close
                      </button>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div className="collection-filter__large-devices d-none d-lg-block">
              <Button
                onClick={() => setShowLgFilter(true)}
                className="collection-filter-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
                <span className="fw-semibold">Filters</span>
              </Button>

              <Modal
                show={showLgFilter}
                onHide={() => setShowLgFilter(false)}
                className="filter-modal"
                centered
                style={{ zIndex: "9999", backdropFilter: "brightness(0.5)" }}
              >
                <Modal.Body className="p-0">
                  <Button
                    className="bg-transparent text-black border-0 position-absolute top-0 end-0 p-1"
                    onClick={handleLgFilterClose}
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

                  <Tab.Container defaultActiveKey="lg-jewellery-type">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "120px auto",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <Nav
                          variant="pills"
                          className="flex-column gap-2 p-2 py-5"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="lg-jewellery-type">
                              Jewellery Type
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="lg-is-customizable">
                              Customizable
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="lg-availability">
                              Availability
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div>
                        <Tab.Content className="pe-2 pt-5">
                          {/* Jewellery Type Tab */}
                          <Tab.Pane eventKey="lg-jewellery-type">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-jewellery-diamond">
                                  Diamond Jewellery <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-jewellery-diamond"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-jewellery-category"
                                    value="diamond"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-jewellery-gold">
                                  Gold Jewellery <span>(54)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-jewellery-gold"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-jewellery-category"
                                    value="gold"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-jewellery-gemstone">
                                  Jewellery with Gemstones <span>(31)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-jewellery-gemstone"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-jewellery-category"
                                    value="gemstone"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-jewellery-silver">
                                  Silver Jewellery <span>(67)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-jewellery-silver"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-jewellery-category"
                                    value="silver"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>

                          {/* Customizable Tab */}
                          <Tab.Pane eventKey="lg-is-customizable">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-customizable-true">
                                  Yes <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-customizable-true"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-is-customizable"
                                    value="true"
                                  />
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-customizable-false">
                                  No <span>(32)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-customizable-false"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-is-customizable"
                                    value="false"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>

                          {/* Availability Tab */}
                          <Tab.Pane eventKey="lg-availability">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                              <li className="d-flex justify-content-between align-items-center gap-1">
                                <label htmlFor="lg-availability-instock">
                                  Instock <span>(302)</span>
                                </label>
                                <div>
                                  <input
                                    id="lg-availability-instock"
                                    className="form-check mb-0"
                                    style={{ height: "14px", width: "14px" }}
                                    type="radio"
                                    name="lg-availability-status"
                                    value="instock"
                                  />
                                </div>
                              </li>
                            </ul>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </Tab.Container>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>

        <div className="py-1 col-12">
          <hr style={{ color: "#DEDEDE", opacity: ".8" }} />
        </div>

        <div className="col-12">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-red" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="product-items">{currentProducts}</div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="col-12 d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  <a className="page-link" href="#!">
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
