import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Offer = () => {
  return (
    <div>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="mt-4  text-xl font-semibold p-5"
      >
        <p className="mr-10 text-rose-600">
          Turn the Page to Savings – Up to 50% Off!
        </p>
        <p className="mr-10 text-amber-600">
          Buy 2, Get 1 Free – Build Your Library Today!
        </p>
        <p className="mr-10 text-indigo-600">
          Your Weekend Read, Our Treat – Special Book Sets Available!
        </p>
      </Marquee>
    </div>
  );
};

export default Offer;
