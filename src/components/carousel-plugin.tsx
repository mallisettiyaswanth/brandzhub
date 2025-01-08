"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/carousel1.jpg",
    "/carousel2.jpg",
    "/carousel3.jpg",
    "/carousel4.jpg",
    "/carousel5.jpg",
    "/carousel6.jpg",
  ];

  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      className="relative w-full" // Set fixed height or make it dynamic
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
      {/* Carousel Content */}
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons
      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
        ←
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
        →
      </CarouselNext> */}
    </Carousel>
  );
}
