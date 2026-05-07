"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

const ProductImageGallery = ({ images, alt }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const activeImage = images?.[activeIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`border rounded-md overflow-hidden w-16 h-16 ${
              idx === activeIndex ? "border-yellow-500" : "border-gray-200"
            }`}
          >
            <Image
              src={img}
              alt={`${alt}-${idx}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="relative w-full md:w-[500px] h-[400px] bg-white border rounded-lg overflow-hidden cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <Image
          src={activeImage}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-200 ${
            zoom ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
          priority
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;