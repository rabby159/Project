import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    text: "Their delivery service is fast and reliable. I always trust them for urgent parcels.",
    name: "Raihan Ahmed",
    position: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "The customer support team is extremely helpful. Highly satisfied with their service!",
    name: "Nusrat Jahan",
    position: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "Their professionalism and delivery timing are truly exceptional.",
    name: "Samiul Karim",
    position: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    id: 4,
    text: "I received my products safely packed. Very reliable and trustworthy service.",
    name: "Mahima Sultana",
    position: "E-commerce Seller",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    text: "Quick delivery and excellent rider behavior. I’m fully impressed!",
    name: "Tanvir Hasan",
    position: "Shop Owner",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    text: "They always maintain communication and ensure proper delivery updates.",
    name: "Shamima Rahman",
    position: "Online Seller",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 7,
    text: "Very organized delivery process. Their service quality is consistent every time.",
    name: "Arif Chowdhury",
    position: "Freelancer",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const Testimonial = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Testimonial;
