import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  const logos = [
    { src: "/logos/dhl.png", alt: "DHL" },
    { src: "/logos/fedex.png", alt: "FedEx" },
    { src: "/logos/ups.png", alt: "UPS" },
    { src: "/logos/tnt.png", alt: "TNT" },
    { src: "/logos/aramex.png", alt: "Aramex" },
    { src: "/logos/amazon.png", alt: "Amazon" },
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center">
        <h1>Brands Love to Work With Us</h1>
      </div>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={40}
        className="flex items-center"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brands;
