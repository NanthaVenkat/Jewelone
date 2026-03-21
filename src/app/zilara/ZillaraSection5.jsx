"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import CollectionModal from "./CollectionModal";

const ZillaraSection5 = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const items = [
    {
      image: "/zillara/Kids-Collection.webp",
      title: "Kids Collection",
      mobileImage: "/zillara/Kids-Collection-mob.webp",
      images: [
        {
          id: "KidsCollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-01.webp",
        },
        {
          id: "KidsCollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-02.webp",
        },
        {
          id: "KidsCollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-03.webp",
        },
        {
          id: "KidsCollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-04.webp",
        },
        {
          id: "KidsCollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-05.webp",
        },
        {
          id: "KidsCollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-06.webp",
        },
        {
          id: "KidsCollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-07.webp",
        },
        {
          id: "KidsCollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-08.webp",
        },
        {
          id: "KidsCollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-09.webp",
        },
        {
          id: "KidsCollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-10.webp",
        },
        {
          id: "KidsCollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-11.webp",
        },
        {
          id: "KidsCollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-12.webp",
        },
        {
          id: "KidsCollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-13.webp",
        },
        {
          id: "KidsCollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-14.webp",
        },
        {
          id: "KidsCollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-15.webp",
        },
        {
          id: "KidsCollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-16.webp",
        },
        {
          id: "KidsCollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-17.webp",
        },
        {
          id: "KidsCollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-18.webp",
        },
        {
          id: "KidsCollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-19.webp",
        },
        {
          id: "KidsCollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-20.webp",
        },
        {
          id: "KidsCollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-21.webp",
        },
        {
          id: "KidsCollection-22",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-22.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-22.webp",
        },
        {
          id: "KidsCollection-23",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-23.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-23.webp",
        },
        {
          id: "KidsCollection-24",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-24.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-24.webp",
        },
        {
          id: "KidsCollection-25",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-25.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-25.webp",
        },
        {
          id: "KidsCollection-26",
          desktopImage:
            "/zillara/Collection/Desktop/KidsCollection/KidsCollection-26.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Kidscollection/Kidscollection-26.webp",
        },
      ],
    },
    {
      image: "/zillara/The-Zodiac-Affair-Collection.webp",
      title: "Zodiac Collection",
      mobileImage: "/zillara/The-Zodiac-Affair-Collection-mob.webp",
      images: [
        {
          id: "Zodiaccollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-01.webp",
        },
        {
          id: "Zodiaccollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-02.webp",
        },
        {
          id: "Zodiaccollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-03.webp",
        },
        {
          id: "Zodiaccollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-04.webp",
        },
        {
          id: "Zodiaccollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-05.webp",
        },
        {
          id: "Zodiaccollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-06.webp",
        },
        {
          id: "Zodiaccollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-07.webp",
        },
        {
          id: "Zodiaccollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-08.webp",
        },
        {
          id: "Zodiaccollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-09.webp",
        },
        {
          id: "Zodiaccollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-10.webp",
        },
        {
          id: "Zodiaccollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-11.webp",
        },
        {
          id: "Zodiaccollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-12.webp",
        },
        {
          id: "Zodiaccollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/Zodiaccollection/Zodiaccollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Zodiaccollection/Zodiaccollection-13.webp",
        },
      ],
    },
    {
      image: "/zillara/Heart-Collection.webp",
      title: "Heart Collection",
      mobileImage: "/zillara/Heart-Collection-mob.webp",
      images: [
        {
          id: "HeartCollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-01.webp",
        },
        {
          id: "HeartCollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-02.webp",
        },
        {
          id: "HeartCollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-03.webp",
        },
        {
          id: "HeartCollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-04.webp",
        },
        {
          id: "HeartCollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-05.webp",
        },
        {
          id: "HeartCollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-06.webp",
        },
        {
          id: "HeartCollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-07.webp",
        },
        {
          id: "HeartCollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-08.webp",
        },
        {
          id: "HeartCollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-09.webp",
        },
        {
          id: "HeartCollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-10.webp",
        },
        {
          id: "HeartCollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-11.webp",
        },
        {
          id: "HeartCollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-12.webp",
        },
        {
          id: "HeartCollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-13.webp",
        },
        {
          id: "HeartCollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-14.webp",
        },
        {
          id: "HeartCollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-15.webp",
        },
        {
          id: "HeartCollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-16.webp",
        },
        {
          id: "HeartCollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-17.webp",
        },
        {
          id: "HeartCollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-18.webp",
        },
        {
          id: "HeartCollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-19.webp",
        },
        {
          id: "HeartCollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-20.webp",
        },
        {
          id: "HeartCollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-21.webp",
        },
        {
          id: "HeartCollection-22",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-22.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-22.webp",
        },
        {
          id: "HeartCollection-23",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-23.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-23.webp",
        },
        {
          id: "HeartCollection-24",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-24.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-24.webp",
        },
        {
          id: "HeartCollection-25",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-25.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-25.webp",
        },
        {
          id: "HeartCollection-26",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-26.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-26.webp",
        },
        {
          id: "HeartCollection-27",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-27.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-27.webp",
        },
        {
          id: "HeartCollection-28",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-28.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-28.webp",
        },
        {
          id: "HeartCollection-29",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-29.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-29.webp",
        },
        {
          id: "HeartCollection-30",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-30.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-30.webp",
        },
        {
          id: "HeartCollection-31",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-31.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-31.webp",
        },
        {
          id: "HeartCollection-32",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-32.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-32.webp",
        },
        {
          id: "HeartCollection-33",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-33.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-33.webp",
        },
        {
          id: "HeartCollection-34",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-34.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-34.webp",
        },
        {
          id: "HeartCollection-35",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-35.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-35.webp",
        },
        {
          id: "HeartCollection-36",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-36.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-36.webp",
        },
        {
          id: "HeartCollection-37",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-37.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-37.webp",
        },
        {
          id: "HeartCollection-38",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-38.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-38.webp",
        },
        {
          id: "HeartCollection-39",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-39.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-39.webp",
        },
        {
          id: "HeartCollection-40",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-40.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-40.webp",
        },
        {
          id: "HeartCollection-41",
          desktopImage:
            "/zillara/Collection/Desktop/HeartCollection/HeartCollection-41.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Heartcollection/Heartcollection-41.webp",
        },
      ],
    },
    {
      image: "/zillara/Aqua-Aurora-Collection.webp",
      title: "Aqua Aurora Collection",
      mobileImage: "/zillara/Aqua-Aurora-Collection-mob.webp",
      images: [
        {
          id: "AquaCollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-01.webp",
        },
        {
          id: "AquaCollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-02.webp",
        },
        {
          id: "AquaCollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-03.webp",
        },
        {
          id: "AquaCollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-04.webp",
        },
        {
          id: "AquaCollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-05.webp",
        },
        {
          id: "AquaCollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-06.webp",
        },
        {
          id: "AquaCollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-07.webp",
        },
        {
          id: "AquaCollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-08.webp",
        },
        {
          id: "AquaCollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-09.webp",
        },
        {
          id: "AquaCollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-10.webp",
        },
        {
          id: "AquaCollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-11.webp",
        },
        {
          id: "AquaCollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-12.webp",
        },
        {
          id: "AquaCollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-13.webp",
        },
        {
          id: "AquaCollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-14.webp",
        },
        {
          id: "AquaCollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-15.webp",
        },
        {
          id: "AquaCollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-16.webp",
        },
        {
          id: "AquaCollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-17.webp",
        },
        {
          id: "AquaCollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/AquaCollection/AquaCollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Aquacollection/Aquacollection-18.webp",
        },
      ],
    },
    {
      image: "/zillara/Enchant-Collection.webp",
      title: "Enchat Collection",
      mobileImage: "/zillara/Enchant-Collection-mob.webp",
      images: [
        {
          id: "EnchantCollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-01.webp",
        },
        {
          id: "EnchantCollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-02.webp",
        },
        {
          id: "EnchantCollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-03.webp",
        },
        {
          id: "EnchantCollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-04.webp",
        },
        {
          id: "EnchantCollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-05.webp",
        },
        {
          id: "EnchantCollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-06.webp",
        },
        {
          id: "EnchantCollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-07.webp",
        },
        {
          id: "EnchantCollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-08.webp",
        },
        {
          id: "EnchantCollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-09.webp",
        },
        {
          id: "EnchantCollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-10.webp",
        },
        {
          id: "EnchantCollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-11.webp",
        },
        {
          id: "EnchantCollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-12.webp",
        },
        {
          id: "EnchantCollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-13.webp",
        },
        {
          id: "EnchantCollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-14.webp",
        },
        {
          id: "EnchantCollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-15.webp",
        },
        {
          id: "EnchantCollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-16.webp",
        },
        {
          id: "EnchantCollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-17.webp",
        },
        {
          id: "EnchantCollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-18.webp",
        },
        {
          id: "EnchantCollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-19.webp",
        },
        {
          id: "EnchantCollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-20.webp",
        },
        {
          id: "EnchantCollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/EnchantCollection/EnchantCollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Enchantcollection/Enchantcollection-21.webp",
        },
      ],
    },
    {
      image: "/zillara/Birth-Stone-Collection.webp",
      title: "Birthstone Collection",
      mobileImage: "/zillara/Birth-Stone-Collection-mob.webp",
      images: [
        {
          id: "Birthstonecollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-01.webp",
        },
        {
          id: "Birthstonecollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-02.webp",
        },
        {
          id: "Birthstonecollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-03.webp",
        },
        {
          id: "Birthstonecollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-04.webp",
        },
        {
          id: "Birthstonecollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-05.webp",
        },
        {
          id: "Birthstonecollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-06.webp",
        },
        {
          id: "Birthstonecollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-07.webp",
        },
        {
          id: "Birthstonecollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-08.webp",
        },
        {
          id: "Birthstonecollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-09.webp",
        },
        {
          id: "Birthstonecollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-10.webp",
        },
        {
          id: "Birthstonecollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-11.webp",
        },
        {
          id: "Birthstonecollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-12.webp",
        },
        {
          id: "Birthstonecollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-13.webp",
        },
        {
          id: "Birthstonecollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-14.webp",
        },
        {
          id: "Birthstonecollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-15.webp",
        },
        {
          id: "Birthstonecollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-16.webp",
        },
        {
          id: "Birthstonecollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-17.webp",
        },
        {
          id: "Birthstonecollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-18.webp",
        },
        {
          id: "Birthstonecollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-19.webp",
        },
        {
          id: "Birthstonecollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-20.webp",
        },
        {
          id: "Birthstonecollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/Birthstonecollection/Birthstonecollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Birthstonecollection/Birthstonecollection-21.webp",
        },
      ],
    },
    {
      image: "/zillara/Sparkling-Collection.webp",
      title: "Sparkling Collection",
      mobileImage: "/zillara/Sparkling-Collection-mob.webp",
      images: [
        {
          id: "Sparklingcollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-01.webp",
        },
        {
          id: "Sparklingcollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-02.webp",
        },
        {
          id: "Sparklingcollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-03.webp",
        },
        {
          id: "Sparklingcollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-04.webp",
        },
        {
          id: "Sparklingcollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-05.webp",
        },
        {
          id: "Sparklingcollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-06.webp",
        },
        {
          id: "Sparklingcollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-07.webp",
        },
        {
          id: "Sparklingcollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-08.webp",
        },
        {
          id: "Sparklingcollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-09.webp",
        },
        {
          id: "Sparklingcollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-10.webp",
        },
        {
          id: "Sparklingcollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-11.webp",
        },
        {
          id: "Sparklingcollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-12.webp",
        },
        {
          id: "Sparklingcollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-13.webp",
        },
        {
          id: "Sparklingcollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-14.webp",
        },
        {
          id: "Sparklingcollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-15.webp",
        },
        {
          id: "Sparklingcollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-16.webp",
        },
        {
          id: "Sparklingcollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-17.webp",
        },
        {
          id: "Sparklingcollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-18.webp",
        },
        {
          id: "Sparklingcollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-19.webp",
        },
        {
          id: "Sparklingcollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-20.webp",
        },
        {
          id: "Sparklingcollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-21.webp",
        },
        {
          id: "Sparklingcollection-22",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-22.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-22.webp",
        },
        {
          id: "Sparklingcollection-23",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-23.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-23.webp",
        },
        {
          id: "Sparklingcollection-24",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-24.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-24.webp",
        },
        {
          id: "Sparklingcollection-25",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-25.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-25.webp",
        },
        {
          id: "Sparklingcollection-26",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-26.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-26.webp",
        },
        {
          id: "Sparklingcollection-27",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-27.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-27.webp",
        },
        {
          id: "Sparklingcollection-28",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-28.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-28.webp",
        },
        {
          id: "Sparklingcollection-29",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-29.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-29.webp",
        },
        {
          id: "Sparklingcollection-30",
          desktopImage:
            "/zillara/Collection/Desktop/Sparklingcollection/Sparklingcollection-30.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Sparklingcollection/Sparklingcollection-30.webp",
        },
      ],
    },
    {
      image: "/zillara/Traditional-Collection.webp",
      title: "Traditional Collection",
      mobileImage: "/zillara/Traditional-Collection-mob.webp",
      images: [
        {
          id: "Traditionalcollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-01.webp",
        },
        {
          id: "Traditionalcollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-02.webp",
        },
        {
          id: "Traditionalcollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-03.webp",
        },
        {
          id: "Traditionalcollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-04.webp",
        },
        {
          id: "Traditionalcollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-05.webp",
        },
        {
          id: "Traditionalcollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-06.webp",
        },
        {
          id: "Traditionalcollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-07.webp",
        },
        {
          id: "Traditionalcollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-08.webp",
        },
        {
          id: "Traditionalcollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/Traditionalcollection/Traditionalcollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Traditionalcollection/Traditionalcollection-09.webp",
        },
      ],
    },
    {
      image: "/zillara/Pearl-Collection.webp",
      title: "Pearl Collection",
      mobileImage: "/zillara/Pearl-Collection-mob.webp",
      images: [
        {
          id: "PearlCollection-01",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-01.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-01.webp",
        },
        {
          id: "PearlCollection-02",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-02.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-02.webp",
        },
        {
          id: "PearlCollection-03",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-03.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-03.webp",
        },
        {
          id: "PearlCollection-04",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-04.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-04.webp",
        },
        {
          id: "PearlCollection-05",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-05.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-05.webp",
        },
        {
          id: "PearlCollection-06",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-06.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-06.webp",
        },
        {
          id: "PearlCollection-07",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-07.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-07.webp",
        },
        {
          id: "PearlCollection-08",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-08.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-08.webp",
        },
        {
          id: "PearlCollection-09",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-09.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-09.webp",
        },
        {
          id: "PearlCollection-10",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-10.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-10.webp",
        },
        {
          id: "PearlCollection-11",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-11.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-11.webp",
        },
        {
          id: "PearlCollection-12",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-12.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-12.webp",
        },
        {
          id: "PearlCollection-13",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-13.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-13.webp",
        },
        {
          id: "PearlCollection-14",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-14.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-14.webp",
        },
        {
          id: "PearlCollection-15",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-15.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-15.webp",
        },
        {
          id: "PearlCollection-16",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-16.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-16.webp",
        },
        {
          id: "PearlCollection-17",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-17.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-17.webp",
        },
        {
          id: "PearlCollection-18",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-18.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-18.webp",
        },
        {
          id: "PearlCollection-19",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-19.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-19.webp",
        },
        {
          id: "PearlCollection-20",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-20.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-20.webp",
        },
        {
          id: "PearlCollection-21",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-21.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-21.webp",
        },
        {
          id: "PearlCollection-22",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-22.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-22.webp",
        },
        {
          id: "PearlCollection-23",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-23.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-23.webp",
        },
        {
          id: "PearlCollection-24",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-24.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-24.webp",
        },
        {
          id: "PearlCollection-25",
          desktopImage:
            "/zillara/Collection/Desktop/PearlCollection/PearlCollection-25.webp",
          mobileImage:
            "/zillara/Collection/Mobile/Pearlcollection/Pearlcollection-25.webp",
        },
      ],
    },
  ];

  return (
    <section className="ZillaraSection5">
      <div className="pb-5 py-lg-5">
        <div className="col-12 text-center mb-4">
          <div className="fs-2 fw-semibold text-center mb-4 text-uppercase">
            Our collection
          </div>
        </div>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div className="container-fluid py-5">
            <div className="col-12">
              <Swiper
                ref={sliderRef}
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                navigation={{
                  nextEl: ".next-arrow",
                  prevEl: ".prev-arrow",
                  disabledClass: "swiper-button-disabled",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="position-relative">
                      <CollectionModal
                        images={item.images}
                        mobileImg={item.mobileImage}
                        image={item.image}
                        title={item.title}
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-arrows">
                  <div
                    className="prev-arrow position-absolute top-50 start-0 z-3 ps-2"
                    onClick={handlePrev}
                  >
                    <Image
                      style={{ filter: "invert(1)" }}
                      width={24}
                      height={24}
                      alt="arrow"
                      src="/zillara/left-arrow-img.png"
                    />
                  </div>

                  <div
                    className="next-arrow position-absolute top-50 end-0 z-3 pe-2"
                    onClick={handleNext}
                  >
                    <Image
                      style={{ filter: "invert(1)" }}
                      width={24}
                      height={24}
                      alt="arrow"
                      src="/zillara/right-arrow-img.png"
                    />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZillaraSection5;
