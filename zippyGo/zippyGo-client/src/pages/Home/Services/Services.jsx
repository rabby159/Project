import { Clock, Key, Package, Shield, Truck } from "lucide-react";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      animation:
        "https://lottie.host/414b6c48-0f7b-411b-8e02-74732631f30e/rOSgO2V3Rv.json",
      title: "Fast Delivery",
      description:
        "Get your parcels delivered quickly with our reliable express service.",
    },
    {
      title: "Safe Packaging",
      description: "We ensure secure and careful handling of all items.",
    },
    {
      title: "24/7 Support",
      description: "Our support team is always available to assist you.",
    },
    {
      title: "Trusted Service",
      description:
        "We guarantee safety, transparency, and trust for every delivery.",
    },
  ];

  return (
    <section id="services" className="mb-20">
      <div className="max-w-7xl mx-auto bg-[#e64c30] text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-2 pt-10 text-center">
          Our Services
        </h2>
        <p className=" mb-12 text-center">
          We deliver quality, speed, and trust with every service we offer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
          {services.map((service, id) => (
            <ServicesCard key={id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
