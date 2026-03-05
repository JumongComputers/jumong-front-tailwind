"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const sliderImages: string[] = [
  "/g.jpg",
  "/c.jpg",
  "/d.jpg",
];

export const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mt-[120px] mb-[20px]">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[420px] md:h-[500px]">
          
          {/* LEFT — SLIDER */}
          <div className="relative h-full overflow-hidden rounded-lg">
            {/* Current Slide */}
            <Image
              src={sliderImages[current]}
              alt={`Hero slider ${current + 1}`}
              fill
              className="object-cover transition-all duration-700"
              priority
            />

            {/* THUMBNAIL INDICATORS */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                    ${current === index ? "bg-blue-600 scale-110" : "bg-white/60"}`}
                />
              ))}
            </div>
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