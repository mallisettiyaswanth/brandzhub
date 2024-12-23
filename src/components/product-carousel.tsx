"use client";

import React, { useState } from "react";

type Props = {
  images: string[];
};

const ProductCarousel = ({ images }: Props) => {
  return (
    <div>
      {images.length > 0 ? (
        <ImageSlider images={images} />
      ) : (
        <div className="w-full min-h-40 flex items-center justify-center flex-1">
          No Images Avaliable
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex] || "/placeholder-image.png"}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
}
