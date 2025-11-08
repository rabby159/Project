import React from "react";
import bannerImg from "../../../assets/bannerImg/4363221_2325156-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsPersonBadge } from "react-icons/bs";
import { SiPointy } from "react-icons/si";

const Banner = () => {
  return (
    <div className="flex justify-around items-center p-3 mt-10 gap-5">
      {/* Banner moto part */}
      <div className="flex-1">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Making Deliveries <span className="text-[#EE4E32]">Simple</span>,
            Fast & Hassle-Free
          </h1>
          <h1 className="text-5xl font-bold">
            {/* Fast & <span className="text-[#EE4E32]">Hassle-Free</span> */}
          </h1>
        </div>
        <p className="my-7 text-lg font-medium">
          ZippyGo - Where Every Second Counts.
        </p>
        <Button className="py-7 bg-[#EE4E32] text-lg">Become a Merchant</Button>
      </div>
      {/* Banner image part */}
      <div className="">
        <div className="flex justify-center">
          <img src={bannerImg} alt="" />
        </div>
        <div className="flex gap-5 mt-4">
          {/* iron man */}
          <div className="flex gap-2 items-center">
            <div className="border-2 p-4 text-3xl text-[#EE4E32]">
              <GiDeliveryDrone />
            </div>
            <div className="border-y-2 border-dashed">
              <h2 className="text-2xl font-bold">15k +</h2>
              <p className="text-lg font-medium">Iron Man</p>
            </div>
          </div>
          {/* Registered Merchant */}
          <div className="flex gap-2 items-center">
            <div className="border-2 p-4 text-3xl text-[#EE4E32]">
              <BsPersonBadge />
            </div>
            <div className="border-y-2 border-dashed">
              <h2 className="text-2xl font-bold">100k +</h2>
              <p className="text-lg font-medium">Registered Merchant</p>
            </div>
          </div>
          {/* Delivery Point */}
          <div className="flex gap-2 items-center">
            <div className="border-2 p-4 text-3xl text-[#EE4E32]">
              <SiPointy />
            </div>
            <div className="border-y-2 border-dashed">
              <h2 className="text-2xl font-bold">400k +</h2>
              <p className="text-lg font-medium">Delivery Point</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
