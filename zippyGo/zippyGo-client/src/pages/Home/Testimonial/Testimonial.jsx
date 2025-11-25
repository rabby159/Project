import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    text: "I received my products safely packed. Very reliable service.",
    name: "Mahima Sultana",
    position: "E-commerce Seller",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    text: "Quick delivery and excellent rider behavior. Fully impressed!",
    name: "Tanvir Hasan",
    position: "Shop Owner",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    text: "They always maintain communication and provide proper updates.",
    name: "Shamima Rahman",
    position: "Online Seller",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 7,
    text: "Very organized delivery system. Their quality stays consistent.",
    name: "Arif Chowdhury",
    position: "Freelancer",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const leftIndex = (index - 1 + testimonials.length) % testimonials.length;
  const centerIndex = index;
  const rightIndex = (index + 1) % testimonials.length;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-5xl mx-auto my-20 text-center px-4">
      <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>

      <div className="">
        {/* Slider Cards */}
        <div className="grid grid-cols-3 items-center justify-center gap-7">
          {[leftIndex, centerIndex, rightIndex].map((slideIndex, pos) => {
            const t = testimonials[slideIndex];
            const active = pos === 1;

            return (
              <Card
                key={t.id}
                className={`duration-300 ease-linear shadow-md border
                  ${
                    active
                      ? "scale-100 opacity-100 bg-white"
                      : "scale-90 opacity-60 bg-gray-100"
                  }`}
              >
                <CardContent className="p-7">
                  <Quote className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <p className="text-gray-700 italic mb-6">"{t.text}"</p>

                  <div className="flex flex-col items-center">
                    <Avatar className="w-14 h-14 mb-2">
                      <AvatarImage src={t.img} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.position}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronLeft />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all ${
                  i === index ? "bg-orange-500 w-6" : "bg-gray-400 w-3"
                }`}
              ></button>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
