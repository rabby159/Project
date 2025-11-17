import React from "react";
import rider from ".././../../assets/riderSectionImg/rider.png";
import riderBg from ".././../../assets/riderSectionImg/city.png";
import { Button } from "@/components/ui/button";

const Rider = () => {
  return (
    <div className="relative max-w-7xl mx-auto bg-[#e64c30] text-white rounded-2xl my-20 px-20 py-10 flex">
      <img
        src={riderBg}
        alt=""
        className="absolute left-0 bottom-0 -mb-18 w-80 opacity-90 pointer-events-none"
      />

      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-2 pt-10">
          We Prioritize Satisfaction for Both Merchants and Customers.
        </h2>
        <Button className="bg-[#e64c30] py-5 text-sm mt-5" variant="outline">
          Become a Rider
        </Button>
      </div>
      <div className="flex flex-1 justify-center">
        <img className="w-80 h-80" src={rider} alt="" />
      </div>
    </div>
  );
};

export default Rider;
