import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ServicesCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <Card className="p-6 border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center">
      <CardHeader className="flex flex-col items-center gap-3">
        <div className="text-orange-500">{icon}</div>
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
