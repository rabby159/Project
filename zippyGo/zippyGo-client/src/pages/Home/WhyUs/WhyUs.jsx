import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Package,
  CreditCard,
  Clock,
  Headphones,
  Truck,
  Monitor,
} from "lucide-react";
import Aos from "aos";

const serviceDetails = [
  {
    icon: <Truck className="h-10 w-10 text-orange-500" />,
    title: "Daily Pickup, No Limits",
    description:
      "ZippyGo gives you the freedom of unlimited daily pickups — whenever and wherever you need.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-orange-500" />,
    title: "Cash on Delivery",
    description:
      "We collect payments on your behalf and transfer them safely to your account.",
  },
  {
    icon: <Package className="h-10 w-10 text-orange-500" />,
    title: "Faster Payment Service",
    description:
      "We support multiple payment options — Cash, Bank Transfer, and Mobile Banking.",
  },
  {
    icon: <Monitor className="h-10 w-10 text-orange-500" />,
    title: "Online Management",
    description:
      "Access all your delivery and payment information easily in your personal dashboard.",
  },
  {
    icon: <Clock className="h-10 w-10 text-orange-500" />,
    title: "Real-Time Tracking",
    description:
      "Track every parcel with a unique code and monitor your delivery journey live.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-orange-500" />,
    title: "24/7 Customer Service",
    description:
      "Our dedicated support team is available anytime to assist you with any delivery concerns.",
  },
];

const WhyUs = () => {
  useEffect(() => {
    Aos.init({
      //   duration: 5000, // animation duration (in ms)
      //   once: false, // animation happens only once while scrolling
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 w-full p-10 my-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold">
          Why you should choose
        </h1>
        <h1 className="text-center text-3xl font-bold">ZippyGo?</h1>
        <div className="grid md:grid-cols-2 gap-6 my-10">
          {serviceDetails.map((service, index) => (
            <Card
              key={index}
              className="flex gap-6 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-white border border-orange-100"
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1400"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
