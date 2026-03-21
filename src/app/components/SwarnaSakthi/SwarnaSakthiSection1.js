"use client"
import Image from "next/image";
import React, { useState } from "react";
import "./SwarnaSakthi.css";

const SwarnaSakthiSection1 = () => {
  const [appLink, setAppLink] = useState("");

  const getAppLink = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US"; // Android app link
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "https://apps.apple.com/in/app/jewelone/id1507128724"; // iOS app link
    } else {
      return "desktop";
    }
  };

  const handleBannerClick = () => {
    const link = getAppLink();
    if (link === "desktop") {
      const androidLink = "https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US";
      // const iosLink = "https://apps.apple.com/in/app/jewelone/id1507128724";
      window.open(androidLink, '_blank');
      // window.open(iosLink, '_blank');
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
      <picture>
        <source
          srcSet="/swarna-sakthi/swarna-sakthi-banner.webp"
          type="image/webp"
          media="(min-width: 768px)"
        />
        <Image
          alt="main banner"
          src="/swarna-sakthi/swarna-sakthi-mobile-banner.webp"
          height={1059}
          width={1920}
          priority="true"
          className="img-fluid"
        />
      </picture>
    </div>
  );
};

export default SwarnaSakthiSection1;


