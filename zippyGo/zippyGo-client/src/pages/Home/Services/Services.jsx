import { Clock, Key, Package, Shield, Truck } from "lucide-react";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Fast Delivery",
      description:
        "Get your parcels delivered quickly with our reliable express delivery service.",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Safe Packaging",
      description:
        "We ensure secure and careful handling of all items, from pickup to delivery.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Support",
      description:
        "Our support team is always available to assist you with any delivery queries.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Trusted Service",
      description:
        "We guarantee safety, transparency, and trust for every delivery.",
    },
  ];

  return (
    <section id="services" className="">
      <div className="max-w-7xl mx-auto bg-[#d4452c] text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
        <p className=" mb-12 max-w-2xl mx-auto text-center">
          We deliver quality, speed, and trust with every service we offer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, id) => {
            <ServicesCard Key={id} service={service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
