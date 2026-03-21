"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import Image from "next/image";
import '../components/Stores/Stores.css'

const stores = [
  {
    name: "Trichy",
    address: "J.S Tower, No: 5/5 A, Karur Bypass Rd, Annamalai Nagar, Tiruchirappalli, Tamil Nadu 620018",
    reviews: 4,
    rating: 4.8,
    pincode: "620018",
    city: "Trichy",
    phone: 7019355705,
    contactPersonName: "Arun",
    mapLink: "https://maps.app.goo.gl/Ptxyhj7Q9q9QBjuP9",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/trichy.webp",
    placeId: "ChIJW_eiLFT1qjsRlSyykx-rAv4",

  },
  {
    name: "Coimbatore",
    address: "No. 284 &, 285, Cross Cut Rd, Gandhipuram, Tamil Nadu 641012",
    reviews: 862,
    rating: 4.4,
    pincode: "641012",
    city: "Coimbatore",
    phone: 8220017613,
    contactPersonName: "Maheshwari / Tamil vendan",
    mapLink: "https://maps.app.goo.gl/gyS45y3B1PdUAVVr7",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/coimbatore.webp",
    placeId: "ChIJA7QLfP9YqDsR_k9amWQXVFQ",
  },
  {
    name: "Experience Center",
    address:
      "SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Tamil Nadu 641017",
    reviews: 437,
    rating: 4.8,
    pincode: "641017",
    city: "Coimbatore",
    phone: 9566419111,
    contactPersonName: "Karthik",
    mapLink: "https://maps.app.goo.gl/c4VfKNGKUGvry49T7",
    storeTiming: "10:00 AM - 8:00 PM",
    image: "stores/coimbatore.webp",
    placeId: "ChIJweZMNhf3qDsRPv54pRO7yLs",
  },
  {
    name: "Chennai",
    address:
      "JewelOne, Near Thirumangalam Metro station, 233-235, 2nd Ave, L Block, Anna Nagar West, Chennai, Tamil Nadu 600040",
    reviews: 358,
    rating: 4.5,
    pincode: "600040",
    city: "Chennai",

    phone: 8220017615,
    contactPersonName: "Ranjith",
    mapLink: "https://maps.app.goo.gl/TBhsUhjcBpsrVNVj6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/anna_nagar_chennai.webp",
    placeId: "ChIJgf34DdNnUjoR18qynFlxQpI",
  },
  {
    name: "Madurai",
    address:
      "123, Netaji Rd, opposite Modern Restaurant, Madurai Main, Madurai, Tamil Nadu 625001",
    reviews: 379,
    rating: 4.5,
    pincode: "625001",
    city: "Madurai",

    phone: 8754807070,
    contactPersonName: "Pradeep",
    mapLink: "https://maps.app.goo.gl/7SpvWFZDYZ9ipVDk6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/madura.webp",
    placeId: "ChIJtc1F-4PFADsRitSYwbIA2DI",
  },
  {
    name: "Vellore",
    address:
      "18/1, Anna Salai, opp. Voorhees College, Vasanthapuram, Kosapet, Vellore, Tamil Nadu 632001",
    reviews: 442,
    rating: 4.6,
    pincode: "632001",
    city: "Vellore",

    phone: 8220017614,
    contactPersonName: "Babu",
    mapLink: "https://maps.app.goo.gl/zaWaCAZJMRBdp3gH9",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/coimbatore.webp",
    placeId: "ChIJxZ1aZ904rTsRx0B3_hpnacQ",
  },
  {
    name: "Ramanathapuram",
    address: "65 Swamy Vivekanda, Salai St, Ramanathapuram, Tamil Nadu 623501",
    reviews: 238,
    rating: 4.6,
    pincode: "623501",
    city: "Ramanathapuram",

    phone: 8220017621,
    contactPersonName: "Udhya Kumar",
    mapLink: "https://maps.app.goo.gl/Pv3b8PEkugvWmepz6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/ramnad.webp",
    placeId: "ChIJHahh_6OiATsRVvzI9ZCqjJ0",
  },
  {
    name: "Salem",
    address:
      "1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri, Salem, Tamil Nadu 636016",
    reviews: 617,
    rating: 4.6,
    pincode: "636016",
    city: "Salem",

    phone: 9952555362,
    contactPersonName: "Sekar",
    mapLink: "https://maps.app.goo.gl/UMJNC8q4NGmPastu6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/salem.webp",
    placeId: "ChIJs5WKl0VvqTsRUJpTYi5JtIg",
  },
  {
    name: "Erode",
    address: "85, RKV Rd, Marapalam, Erode, Tamil Nadu 638001",
    reviews: 346,
    rating: 4.5,
    pincode: "638001",
    city: "Erode",

    phone: 9597806333,
    contactPersonName: "Vignesh / Ram",
    mapLink: "https://maps.app.goo.gl/mAz75axh5inWhQAY6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/erode.webp",
    placeId: "ChIJ9Rj0l0VvqTsRRNwfHfnwFc8",
  },
  {
    name: "Pollachi",
    address:
      "Narasus Coffee Opp, 34, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001",
    reviews: 410,
    rating: 4.3,
    pincode: "642001",
    city: "Pollachi",

    phone: 8754011250,
    contactPersonName: "Jayaprakash",
    mapLink: "https://maps.app.goo.gl/9nobpHSrFU9gvqs36",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/pollachi.webp",
    placeId: "ChIJzZb3e_9YqDsRk0CtorS8Dzc",
  },
  {
    name: "Pondicherry",
    address:
      "88, Kamaraj Salai, Near Jayaram Hotel, Kamaraj Nagar, Puducherry, 605011",
    reviews: 398,
    rating: 4.4,
    pincode: "605011",
    city: "Pondicherry",

    phone: 8220017620,
    contactPersonName: "MohanRajesh",
    mapLink: "https://maps.app.goo.gl/CAtBihoQqHbUuayX7",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/pondy.webp",
    placeId: "ChIJLzkGF35hUzoRqKXTednCqYw",
  },
  {
    name: "Hosur",
    address:
      "NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET, Hosur, Tamil Nadu 635109",
    reviews: 510,
    rating: 4.5,
    pincode: "635109",
    city: "Hosur",

    phone: 8220862444,
    contactPersonName: "Lakshmanan",
    mapLink: "https://maps.app.goo.gl/xomB9TqNP8mdDcHC6",
    storeTiming: "9:45 AM - 8:45 PM",

    image: "stores/hosur.webp",
    placeId: "ChIJERzvKM9wrjsRS8Rd0UciRjQ",
  },
  {
    name: "Udumalaipettai",
    address: "24, Dhali Rd, Udumalaipettai, Tamil Nadu 641126",
    reviews: 558,
    rating: 4.5,
    pincode: "641126",
    city: "Udumalaipettai",
    phone: 9944501010,
    contactPersonName: "Baskar / Ganesh ",
    mapLink: "https://maps.app.goo.gl/ikJoXkzv918Fv1L66",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/udu.webp",
    placeId: "ChIJJdShw6nNqTsR8sLfe-aQcWI",
  },
  {
    name: "Ganapathy",
    address: "1412, 1413, Sathy Rd, Sri Laxmi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006",
    reviews: 4,
    rating: 4,
    pincode: "641006",
    city: "Ganapathy",
    phone: 9790252111,
    contactPersonName: "Arun",
    mapLink: "https://maps.app.goo.gl/EcSiLys3SD4dSCrN8",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/ganapathy.webp",
    placeId: "ChIJa6rvFRBZqDsR339iypRqgvg",

  },
  {
    name: "Madurai Anna Nagar",
    address: "HIG 46, 80 Feet Rd, New LIG Colony, Anna Nagar, Madurai, Tamil Nadu 625020",
    reviews: 4,
    rating: 4,
    pincode: "625020",
    city: "Madurai",
    phone: '9790252111',
    contactPersonName: "Arun",
    mapLink: "https://maps.app.goo.gl/tFjNZ3GPMGCjLztq6",
    storeTiming: "9:45 AM - 8:45 PM",
    image: "stores/anna_nagar_chennai.webp",
    placeId: "ChIJp2esFgDFADsRRz0hUp9SFys",

  },
  
];

const StoreLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [sortedStores, setSortedStores] = useState(stores);
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      setUserLocation(location);
    }
  };

  useEffect(() => {
    if (userLocation) {
      const service = new window.google.maps.DistanceMatrixService();
      const origin = new window.google.maps.LatLng(
        userLocation.lat(),
        userLocation.lng()
      );
      const destinations = stores.map((store) => store.address);

      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: destinations,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            const distances = response.rows[0].elements.map(
              (element, index) => ({
                ...stores[index],
                distance: element.distance.value / 1000, // Convert distance to kilometers
              })
            );

            distances.sort((a, b) => a.distance - b.distance);
            setSortedStores(distances);
          }
        }
      );
    }
  }, [userLocation]);

  return (
    <div>
     
          <div className="stores-section1 position-relative">
            <Image
              className="img-fluid"
              width={1920}
              height={581}
              src="/store-location.png"
              alt="stores location"
            />
            <div className="container">
              <div className="col-12 d-flex justify-content-center">
                <div
                  className="stores-section1_wrapper position-absolute text-center stores-section1-item top-0 d-flex flex-column  justify-content-center align-items-center h-100"
                  style={{ maxWidth: "450px" }}
                >
                  <div className="fs-2 fw-semibold text-white mb-3">
                    FIND US NEAR YOU
                  </div>
                  <div className="fs-6  text-white mb-4">
                    Find a JewelOne store in your locality, the JewelOne family
                    is growing everyday
                  </div>
                  <LoadScript
                    googleMapsApiKey="AIzaSyCLl2XwLcdCro91gX5QQmkzmQgRPwgGIRY"
                    libraries={["places"]}
                  >
                    <Autocomplete
                      onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                      onPlaceChanged={handlePlaceChanged}
                    >
                  <div className="input-group">
                    <button className="btn  btn-light" type="button">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3005 15.5726C15.0025 15.5726 15.5717 15.0035 15.5717 14.3015C15.5717 13.5994 15.0025 13.0303 14.3005 13.0303C13.5984 13.0303 13.0293 13.5994 13.0293 14.3015C13.0293 15.0035 13.5984 15.5726 14.3005 15.5726Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M14.3005 28.6014C14.6376 28.6014 14.9609 28.4675 15.1993 28.2291C15.4377 27.9907 15.5717 27.6673 15.5717 27.3302V20.9743C15.5717 20.6372 15.4377 20.3138 15.1993 20.0754C14.9609 19.8371 14.6376 19.7031 14.3005 19.7031C13.9633 19.7031 13.64 19.8371 13.4016 20.0754C13.1632 20.3138 13.0293 20.6372 13.0293 20.9743V27.3302C13.0293 27.6673 13.1632 27.9907 13.4016 28.2291C13.64 28.4675 13.9633 28.6014 14.3005 28.6014Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M14.3005 8.89826C14.6376 8.89826 14.9609 8.76433 15.1993 8.52594C15.4377 8.28755 15.5717 7.96422 15.5717 7.62708V1.27118C15.5717 0.934042 15.4377 0.610712 15.1993 0.37232C14.9609 0.133927 14.6376 0 14.3005 0C13.9633 0 13.64 0.133927 13.4016 0.37232C13.1632 0.610712 13.0293 0.934042 13.0293 1.27118V7.62708C13.0293 7.96422 13.1632 8.28755 13.4016 8.52594C13.64 8.76433 13.9633 8.89826 14.3005 8.89826Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M1.27118 15.5726H7.62708C7.96422 15.5726 8.28755 15.4387 8.52594 15.2003C8.76433 14.9619 8.89826 14.6386 8.89826 14.3015C8.89826 13.9643 8.76433 13.641 8.52594 13.4026C8.28755 13.1642 7.96422 13.0303 7.62708 13.0303H1.27118C0.934042 13.0303 0.610712 13.1642 0.37232 13.4026C0.133927 13.641 0 13.9643 0 14.3015C0 14.6386 0.133927 14.9619 0.37232 15.2003C0.610712 15.4387 0.934042 15.5726 1.27118 15.5726Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M11.5994 6.07444V3.42969C9.62569 3.92442 7.82329 4.94567 6.38448 6.38448C4.94567 7.82329 3.92442 9.62569 3.42969 11.5994H6.07446C6.50064 10.3114 7.22224 9.1409 8.18157 8.18157C9.14091 7.22223 10.3114 6.50062 11.5994 6.07444Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M22.5269 11.5994H25.1717C24.6769 9.62569 23.6557 7.82329 22.2169 6.38448C20.7781 4.94567 18.9757 3.92442 17.002 3.42969V6.07444C18.29 6.50062 19.4605 7.22223 20.4198 8.18157C21.3791 9.1409 22.1007 10.3114 22.5269 11.5994Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M25.1717 17.002H22.5269C22.1007 18.29 21.3791 19.4605 20.4198 20.4198C19.4605 21.3791 18.29 22.1007 17.002 22.5269V25.1717C18.9757 24.6769 20.7781 23.6557 22.2169 22.2169C23.6557 20.7781 24.6769 18.9757 25.1717 17.002Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M6.07446 17.002H3.42969C3.92442 18.9757 4.94567 20.7781 6.38448 22.2169C7.82329 23.6557 9.62569 24.6769 11.5994 25.1717V22.5269C10.3114 22.1007 9.14091 21.3791 8.18157 20.4198C7.22224 19.4605 6.50064 18.29 6.07446 17.002Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M27.3302 13.0303H20.9743C20.6372 13.0303 20.3138 13.1642 20.0754 13.4026C19.8371 13.641 19.7031 13.9643 19.7031 14.3015C19.7031 14.6386 19.8371 14.9619 20.0754 15.2003C20.3138 15.4387 20.6372 15.5726 20.9743 15.5726H27.3302C27.6673 15.5726 27.9907 15.4387 28.2291 15.2003C28.4675 14.9619 28.6014 14.6386 28.6014 14.3015C28.6014 13.9643 28.4675 13.641 28.2291 13.4026C27.9907 13.1642 27.6673 13.0303 27.3302 13.0303Z"
                          fill="#2D2D2D"
                        />
                      </svg>
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter pincode or city"
                    />
                    {/* <button
                className="btn btn-light "
                type="button"
              >
                Locate Me
              </button> */}
                  </div>
                  </Autocomplete>
                  </LoadScript>

                </div>
              </div>
            </div>
          </div>
        
      <div className="container">
        <div className="col-12 my-5">
          <div className="fs-2 text-center fw-semibold">
            Jewel One Showrooms
          </div>
        </div>
        <div className="row">
          {sortedStores.map((store) => (
            <div className="col-12 col-md-6 col-xl-4 mb-4" key={store.name}>
              <div className="card store-card">
                <div>
                  <Image
                    className="img-fluid"
                    width={520}
                    height={190}
                    src={`/${store.image}`}
                    alt="store image"
                  />
                </div>

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="stores-section2_card-title mb-2">
                        {store.name}
                      </div>
                      {store.distance && <div className="stores-section2_card-red-text-bold my-2">Distance: {store.distance} km</div>}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-1 d-flex align-items-center">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.99978 0L12.7659 6.78068L19.9994 7.345L14.4754 12.1L16.1798 19.2295L9.99978 15.3875L3.81954 19.2295L5.52391 12.1L0 7.345L7.23345 6.78068L9.99978 0Z"
                              fill="#FFAA00"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 0L12.7661 6.78068L19.9996 7.345L14.4757 12.1L16.18 19.2295L10 15.3875V0Z"
                              fill="#FFBD38"
                            />
                          </svg>
                        </div>

                        <div className="me-2 stores-section2_card-text">
                          {store.rating}
                        </div>
                        <div className="stores-section2_card-text text-decoration-underline">
                          {store.reviews} Google Reviews
                        </div>
                      </div>
                      <div>
                        <a
                          className="stores-section2_card-red-text-bold text-decoration-none"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={store.mapLink}
                        >
                          View Store Details
                        </a>
                      </div>
                    </div>

                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={store.mapLink}
                      >
                        <span className="me-1">
                          <svg
                            width={38}
                            height={38}
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="37.1647"
                              height="37.1647"
                              rx="5.74627"
                              fill="#FFAA00"
                            />
                            <path
                              d="M28.699 7.93977L9.58679 16.2815C8.7834 16.5888 8.82569 16.984 9.67136 17.1157L18.5932 19.267C18.6749 19.2882 18.7496 19.3321 18.8091 19.394C18.8687 19.4558 18.911 19.5333 18.9315 19.6182L21.4685 28.6185C21.6799 29.4966 22.0182 29.4966 22.2719 28.6624L29.2487 8.46662C29.3755 8.02758 29.1218 7.76416 28.699 7.93977Z"
                              fill="#060606"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href={`tel:${store.phone}`}>
                        <span>
                          <svg
                            width={38}
                            height={38}
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.833984"
                              width="37.1647"
                              height="37.1647"
                              rx="5.74627"
                              fill="#3DB04B"
                            />
                            <path
                              d="M30.1174 23.0654V26.1188C30.1174 27.2215 29.1885 28.1545 28.0908 28.1545C28.0063 28.1545 27.9219 28.1545 27.9219 28.1545C24.7976 27.8152 21.7577 26.7126 19.14 25.0162C16.6912 23.4894 14.5802 21.369 13.0603 18.9092C11.287 16.2799 10.1893 13.2264 9.85153 10.0881C9.76708 8.90064 10.6115 7.96763 11.7092 7.88281C11.7937 7.88281 11.7937 7.88281 11.8781 7.88281H14.918C15.9313 7.88281 16.7757 8.64618 16.9446 9.664C17.1134 10.6818 17.2823 11.6148 17.6201 12.5478C17.8734 13.3112 17.7045 14.1594 17.1979 14.6683L15.9313 15.9406C17.3668 18.4851 19.4778 20.6056 22.011 22.0475L23.2776 20.7752C23.8687 20.1815 24.7131 20.0119 25.3887 20.3512C26.3175 20.6904 27.2464 20.9449 28.2597 21.0297C29.3574 21.1145 30.1174 22.0475 30.1174 23.0654Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <div className="stores-section2_card-text mb-2">
                      {store.address}
                    </div>
                    <div className="stores-section2_card-text mb-2">
                      Phone-{" "}
                      <span>
                        <a  className="stores-section2_card-yellow-text text-decoration-none" href={`tel:${store.phone}`}> {store.phone}</a>
                      </span>
                    </div>
                    <div className="stores-section2_card-red-text-light mb-2">
                      STORE HOURS: {store.storeTiming}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
