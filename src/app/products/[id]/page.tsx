"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useDispatch } from "react-redux";
import { addToCart } from "@/context/cartSlice";

// Example Product Data
const product = {
  id: "1", // Added ID for Redux
  images: [
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735541031/euqbtkvtsapj0ezsrrmv.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735541034/atmxgcek2eepgx8exqlx.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735541029/l1g3pcmvuzokccgvrqbr.jpg",
    "https://res.cloudinary.com/drvi87eud/image/upload/v1735541027/zouxm8usaahbfgpwpt9v.jpg",
  ],
  name: "Puma Men Slides",
  cost: 799,
  size: ["6", "7", "8", "9", "10", "11"],
  category: ["Puma", "Slides", "Black & White"],
  type: "Men",
};

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  // Function to handle next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.cost,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="mb-32">
        <Header />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery Section */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="object-cover"
                fill
                priority
              />
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-4 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border-2",
                    index === currentImageIndex
                      ? "border-primary"
                      : "border-transparent"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="object-cover"
                    fill
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">₹{product.cost}</span>
              <span className="text-sm text-muted-foreground">INR</span>
            </div>
            <span>Type</span>
            <span className="rounded-full bg-secondary w-[70px] px-3 py-1 text-sm text-center text-secondary-foreground">
              {product.type}
            </span>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Size</h3>
                <RadioGroup
                  defaultValue={product.size[0]}
                  className="mt-2 flex flex-wrap gap-2"
                >
                  {product.size.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer hidden"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
            <div className="space-y-4 border-t pt-4">
              <div>
                <h3 className="font-semibold">Categories</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.category.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
