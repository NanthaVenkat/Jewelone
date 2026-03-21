"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const CollectionModal = ({ title, image, mobileImg, images }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="p-0 border-0 bg-transparent" onClick={handleShow}>
        <div className="position-relative">
          <picture>
            <source srcSet={mobileImg} media="(max-width:600px)" />
            <img
              className="img-fluid w-100"
              width={1022}
              height={570}
              src={image}
              alt="collection banner"
            />
          </picture>

          <div className=" position-absolute end-0 bottom-0 p-2 small">
            <div className="bg-white text-dark p-1 rounded-3 fw-semibold px-2">
              Click To View
            </div>
          </div>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="p-0">
          <Splide
            options={{
              type: "loop",
              autoplay: false,
              interval: 4000,
            }}
          >
            {images.map(image =>(<SplideSlide key={image.id}>
            <picture>
                        <source srcSet={image.mobileImage} media='(max-width:600px)' />
                        <img className="img-fluid w-100"
                        width={1022}
                        height={570}
                        src={image.desktopImage}
                        alt="collection banner" />
                      </picture>
            </SplideSlide>))}

            
          </Splide>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CollectionModal;
