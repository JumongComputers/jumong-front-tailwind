"use client";

import Image from "next/image";
import { useState } from "react";

const sliderImages: string[] = [
  "/b.jpg",
  "/c.jpg",
  "/d.jpg",
];

export const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="w-full mt-[120px]">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[420px]">
          
          {/* LEFT — SLIDER */}
          <div className="relative h-full overflow-hidden rounded-lg">
            <Image
              src={sliderImages[current]}
              alt="Hero slider"
              fill
              className="object-cover"
              priority
            />

            {/* Slider Controls */}
            <button
              onClick={nextSlide}
              className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm"
            >
              Next
            </button>
          </div>

          {/* RIGHT — STATIC IMAGES */}
          <div className="grid grid-rows-2 gap-3 h-full">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/e.jpg"
                alt="Static hero top"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/f.jpg"
                alt="Static hero bottom"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};