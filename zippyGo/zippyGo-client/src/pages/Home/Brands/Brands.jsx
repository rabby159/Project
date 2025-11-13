import React from "react";
import Marquee from "react-fast-marquee";
import dhl from "../../../assets/bandsLogo/dhl.png";
import etsy from "../../../assets/bandsLogo/etsy.png";
import amazon from "../../../assets/bandsLogo/amazon.png";
import zalatan from "../../../assets/bandsLogo/zalatan.png";
import flip from "../../../assets/bandsLogo/flip.png";
import Ali from "../../../assets/bandsLogo/ali.png";
import Door from "../../../assets/bandsLogo/door.png";
import Revoult from "../../../assets/bandsLogo/revolut.png";
import gru from "../../../assets/bandsLogo/grubhub.png";

const Brands = () => {
  const logos = [
    { src: [dhl], alt: "DHL" },
    { src: [etsy], alt: "etsy" },
    { src: [zalatan], alt: "UPS" },
    { src: [flip], alt: "Flip" },
    { src: [Ali], alt: "Ali" },
    { src: [amazon], alt: "Amazon" },
    { src: [Door], alt: "Door" },
    { src: [gru], alt: "Door" },
    { src: [Door], alt: "Door" },
    { src: [Revoult], alt: "Revoult" },
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center">
        <h1>Brands Love to Work With Us</h1>
      </div>
      <Marquee
        gradient={false}
        speed={70}
        className="flex items-center my-10"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-10 flex items-center justify-center hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-20 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
