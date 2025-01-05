"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
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
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735372130/lfjxw9hbbr5nv0mcfl3i.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735464030/lrrr7sej0t5ng52gqrjf.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735376386/civbiervqahsjdppp6hh.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735457248/wo0gbrgbvvokj2pv9sor.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735475149/rhn9n1hecmyfwelobyhl.jpg",
  ];

  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      className="relative w-full h-auto"
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
      {/* Carousel Content */}
      <CarouselContent className="flex gap-4 p-10">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="min-w-[85%] sm:min-w-[70%] md:min-w-[40%] lg:min-w-[30%]"
          >
            <div className="p-2">
              <Card className="rounded-lg  bg-white h-full">
                <CardContent className="flex aspect-square max-h-screen w-full items-center justify-center p-6 bg-gray-100">
                  <img
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    className="h-[600px] w-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
        ←
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
        →
      </CarouselNext>
    </Carousel>
  );
}
