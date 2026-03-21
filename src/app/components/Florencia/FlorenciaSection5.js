import React from 'react'
import Image from "next/image";

import "./Florencia.css"

const FlorenciaSection5 = () => {
  return (
    <section className="container">
  <div className="py-5">
    <div className="instgram-grid d-none d-md-grid">
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={600} height={600}
            className="img-fluid"
            src="/florencia/instgram-grid-img1.webp"
            alt="instgram image 1"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={600} height={600}
            className="img-fluid"
            src="/florencia/instgram-grid-img2.webp"
            alt="instgram image 2"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={600} height={918}
            className="img-fluid"
            src="/florencia/instgram-grid-img3.webp"
            alt="instgram image 3"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={600} height={600}
            className="img-fluid"
            src="/florencia/instgram-grid-img4.webp"
            alt="instgram image 4"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={833} height={400}
            className="img-fluid"
            src="/florencia/instgram-grid-img5.webp"
            alt="instgram image 5"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={600} height={600}
            className="img-fluid"
            src="/florencia/instgram-grid-img6.webp"
            alt="instgram image 6"
          />
        </a>
      </div>
    </div>
    <div className="instgram-grid d-grid  d-md-none">
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image width={546} height={225}
            className="img-fluid"
            src="/florencia/instgram-grid-mob-img1.webp"
            alt="instgram image 6"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image  width={546} height={225}
            className="img-fluid"
            src="/florencia/instgram-grid-mob-img2.webp"
            alt="instgram image 6"
          />
        </a>
      </div>
      <div className="instgram-grid_item">
        <a target="_blank" href="https://www.instagram.com/florenciadiamonds/">
          <Image  width={546} height={225}
            className="img-fluid"
            src="/florencia/instgram-grid-mob-img3.webp"
            alt="instgram image 6"
          />
        </a>
      </div>
    </div>
    <div className="text-center mt-4">
      <a
        target="_blank"
        href="https://www.instagram.com/florenciadiamonds/"
        className="btn custom-outline-btn px-5 py-2"
      >
        Explore More
      </a>
    </div>
  </div>
</section>

  )
}

export default FlorenciaSection5