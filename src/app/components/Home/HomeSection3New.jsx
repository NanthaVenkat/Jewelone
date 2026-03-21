"use client";
import { useState } from "react";
import { Splide, SplideSlide ,SplideTrack} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Home.css";
import Image from "next/image";

const Slide = ({
  imageSrc,
  mobileSrc,
  altText,
  initialText,
  title,
  date,
  newlyLanunched,
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <SplideSlide>
      <div className="shadow rounded-5">
        <picture>
          <source
            srcSet={imageSrc}
            type="image/webp"
            media="(min-width: 480px)"
          />
          <Image
            alt={altText}
            src={mobileSrc}
            height={489}
            width={829}
            
          />
        </picture>
      </div>
      <div className="mt-4 home-section-3-slide-content">
        <div className="d-flex align-items-center">
          <div className="home-section-3-slide-date me-2 tw:!flex tw:items-center">
            <span className="me-1">
              <svg
                width={15}
                height={15}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.73855 0.40918C3.56945 0.40918 3.40727 0.478894 3.28769 0.602986C3.16811 0.727077 3.10094 0.895382 3.10094 1.07087V2.07224H2.55046C1.87404 2.07224 1.22532 2.3511 0.747013 2.84746C0.268709 3.34383 0 4.01705 0 4.71902V15.0503C0 15.7522 0.268709 16.4255 0.747013 16.9218C1.22532 17.4182 1.87404 17.6971 2.55046 17.6971H14.7374C15.4138 17.6971 16.0626 17.4182 16.5409 16.9218C17.0192 16.4255 17.2879 15.7522 17.2879 15.0503V4.71902C17.2879 4.01705 17.0192 3.34383 16.5409 2.84746C16.0626 2.3511 15.4138 2.07224 14.7374 2.07224H14.1869V1.07087C14.1869 0.895382 14.1198 0.727077 14.0002 0.602986C13.8806 0.478894 13.7184 0.40918 13.5493 0.40918C13.3802 0.40918 13.218 0.478894 13.0985 0.602986C12.9789 0.727077 12.9117 0.895382 12.9117 1.07087V2.07224H9.28155V1.07087C9.28155 0.895382 9.21438 0.727077 9.0948 0.602986C8.97523 0.478894 8.81305 0.40918 8.64394 0.40918C8.47483 0.40918 8.31265 0.478894 8.19308 0.602986C8.0735 0.727077 8.00632 0.895382 8.00632 1.07087V2.07224H4.37617V1.07087C4.37617 0.895382 4.30899 0.727077 4.18941 0.602986C4.06984 0.478894 3.90766 0.40918 3.73855 0.40918ZM16.0126 15.0503C16.0126 15.4013 15.8783 15.7379 15.6391 15.9861C15.4 16.2342 15.0756 16.3737 14.7374 16.3737H2.55046C2.21225 16.3737 1.88789 16.2342 1.64874 15.9861C1.40958 15.7379 1.27523 15.4013 1.27523 15.0503V7.82898H16.0126V15.0503ZM8.00632 3.39563V4.39699C8.00632 4.57248 8.0735 4.74079 8.19308 4.86488C8.31265 4.98897 8.47483 5.05869 8.64394 5.05869C8.81305 5.05869 8.97523 4.98897 9.0948 4.86488C9.21438 4.74079 9.28155 4.57248 9.28155 4.39699V3.39563H12.9117V4.39699C12.9117 4.57248 12.9789 4.74079 13.0985 4.86488C13.218 4.98897 13.3802 5.05869 13.5493 5.05869C13.7184 5.05869 13.8806 4.98897 14.0002 4.86488C14.1198 4.74079 14.1869 4.57248 14.1869 4.39699V3.39563H14.7374C15.0756 3.39563 15.4 3.53506 15.6391 3.78324C15.8783 4.03142 16.0126 4.36803 16.0126 4.71902V6.50559H1.27523V4.71902C1.27523 4.36803 1.40958 4.03142 1.64874 3.78324C1.88789 3.53506 2.21225 3.39563 2.55046 3.39563H3.10094V4.39699C3.10094 4.57248 3.16811 4.74079 3.28769 4.86488C3.40727 4.98897 3.56945 5.05869 3.73855 5.05869C3.90766 5.05869 4.06984 4.98897 4.18941 4.86488C4.30899 4.74079 4.37617 4.57248 4.37617 4.39699V3.39563H8.00632Z"
                  fill="#A0222C"
                />
              </svg>
            </span>
            <span>{date}</span>
          </div>
          {newlyLanunched === true && (
            <div className="badge-container">
              {/* <div className="badge" style={{ backgroundImage: 'url("/badge.png")' }}>
                NEWLY LAUNCHED
              </div> */}

              <Image
                className="img-fluid"
                width={104}
                height={40}
                src="/new.gif"
                alt="new offer"
                sizes="100vw"
              />
            </div>
          )}
        </div>
        <div className="mt-2 fs-6  fw-medium">{title}</div>

        <span className="home-section-3-slide-item-text">
          {showFullText ? (
            <>{initialText}</>
          ) : (
            <>
              {initialText.slice(0, 100)}{" "}
              <button
                type="button"
                className="home-section-3-slide-item-link"
                onClick={handleReadMoreClick}
              >
                Read More...
              </button>
            </>
          )}
        </span>
      </div>
    </SplideSlide>
  );
};

const HomeSection3New = () => {
  return (
    <section className="home-section-3_new section-padding">
      <div className="container">
        <div className="col-12  mb-4 text-center">
        <div className="home-section-3_caption">Latest Collections</div>
        <div className="fs-4 fw-semibold">Our New Launches</div>
        </div>

        <div className="col-12">
        <Splide
                      hasTrack={false}

          options={{
            type: "loop",
            gap: "1.25rem",
            perPage: 1,
            padding: '25rem',
            arrows: true,
            autoplay: false,
            pagination: false,
            perMove:1,
            breakpoints: {
              1440: {
                perPage: 1,
                padding: '20rem',
                gap: "1rem",

              },
              1240: {
                perPage: 1,
                padding: '15rem',
                gap: ".8rem",
              },
              1040: {
                perPage: 1,
                padding: '6rem',
                gap: ".7rem",

              },
              768: {
                perPage: 1,
                padding: '2rem',
                gap: ".5rem",
              },
              480: {
                padding: '0rem',
                perPage: 1,
                gap: ".5rem",

              },
            },
          }}
        >
          <SplideTrack>
          <Slide
            newlyLanunched={true}
            date="April 21st 2024"
            imageSrc="/j-one-collection-img.webp"
            mobileSrc="/j-one-collection-img-mob.webp"
            altText="Akshaya-Tritiya Collection"
            title="Akshaya-Tritiya Collection"
            initialText={
              'Celebrate Akshaya Tritiya with our all-new collection! Unveiling trending & modern jewellery that reflects your timeless style.'
            }
          />
           <Slide
            newlyLanunched={true}
            date="January 13th 2024"
            imageSrc="/home-section3-img-new.webp"
            mobileSrc="/home-section3-img-mobile-new.webp"
            altText="TVAM 2.0"
            title="TVAM 2.0"
            initialText={
              'A Wedding creates memories for a lifetime! Make every moment special with TVAM 2.0 - A collection launched with Jewellery for every Bridal Moment. Explore the countless collections of designer wedding collections made to the trend!'
            }
          />
          <Slide
            newlyLanunched={false}
            date="October 7th 2023"
            imageSrc="/home-section3-img1.webp"
            mobileSrc="/home-section3mobile-img1.webp"
            altText="Parambariya Collection"
            title="Parambariya Collection"
            initialText={
              '"Parambariya," a jewellery collection that beautifully bridges the rich tapestry of heritage with the contemporary allure of modern design. Our tagline, "Where tradition meets modernity & history meets future," encapsulates the essence of this collection.'
            }
          />

          <Slide
            date="August 3rd 2023"
            newlyLanunched={false}
            imageSrc="/home-section3-img2.webp"
            mobileSrc="/home-section3mobile-img2.webp"
            altText="Katha Collection 3"
            title="Katha Collection"
            initialText='Introducing "Katha," a jewellery collection where every piece is a masterpiece, reflecting the stories of valour, love, and timeless beauty. Each creation in this collection is more than adornment; it&apos;s a narrative woven with craftsmanship and passion.'
          />
          <Slide
            date="August 3rd 2023"
            newlyLanunched={false}
            imageSrc="/home-section3-img3.webp"
            mobileSrc="/home-section3mobile-img3.webp"
            altText="Amara Collection"
            title="Amara Collection"
            initialText="Whether you're looking for a striking statement piece for a special occasion or a subtle touch of everyday elegance, our Amara Collection is designed to complement every mood and moment. Each piece is a celebration of color, allowing you to express your unique style and add a vivid touch to your personal ensemble."
          />

          <Slide
            date="September 5th 2023"
            newlyLanunched={false}
            imageSrc="/home-section3-img4.webp"
            mobileSrc="/home-section3mobile-img4.webp"
            altText="Miraya Collection"
            title="Miraya Collection"
            initialText="Introducing 'Miraya'... Miraya is more than just jewellery; it's a statement of individuality and style. Whether you seek a bold and contemporary look or a subtle touch of sophistication, this collection offers a diverse range of pieces to complement every personality and occasion."
          />

      </SplideTrack>

      <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <Image
                    width={42}
                    height={42}
                    alt="arrow"
                    src="/arrow-prev.png"
                  />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <Image
                    width={42}
                    height={42}
                    alt="arrow"
                    src="/arrow-next.png"
                  />
                </button>
              </div>
        </Splide>
 
      </div>

      </div>
    </section>
  );
};

export default HomeSection3New