import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ServicesCard = ({ service }) => {
  const { animation, title, description } = service;
  return (
    <Card className="p-6 border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center max-w-7xl mx-auto">
      <CardHeader className="flex flex-col items-center gap-3">
        <DotLottieReact src={animation} loop autoplay className="h-sm w-sm"></DotLottieReact>
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
