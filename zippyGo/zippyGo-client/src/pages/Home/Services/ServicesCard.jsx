import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";

const ServicesCard = ({ service }) => {
  const { animation, title, description } = service;
  return (
    <Card className="p-6 border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center max-w-7xl mx-auto">
      <CardHeader className="flex flex-col items-center gap-3">
        <Lottie animationData={animation} loop autoplay className="w-28 h-28" />
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
