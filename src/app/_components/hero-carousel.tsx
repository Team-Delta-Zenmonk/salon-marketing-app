"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  images: string[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative group overflow-hidden bg-background">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full shrink-0 relative aspect-[16/10] sm:aspect-[16/9] max-h-[600px]">
            <Image
              src={src}
              alt={`Dashboard Screenshot ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={idx === 0}
              className="object-cover object-top rounded-b-2xl"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border text-foreground flex items-center justify-center shadow-lg transition-all opacity-80 hover:opacity-100 cursor-pointer z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border text-foreground flex items-center justify-center shadow-lg transition-all opacity-80 hover:opacity-100 cursor-pointer z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/60 shadow-md z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
