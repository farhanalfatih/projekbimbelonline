'use client';
import React, { useState } from "react";
import { Marquee } from "@/components/ui/marquee";

const HeroSection = () => {
  const images = [
    "https://placehold.co/600x400?text=Hero+1",
    "https://placehold.co/600x400?text=Hero+2",
    "https://placehold.co/600x400?text=Hero+3",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 min-h-screen">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Terus maju, <br /> terus berkembang
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
          Discover amazing content and connect with others.
        </p>
        {/* <button className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button> */}
        {/* Marquee di dalam hero */}
        <div className="mt-6 sm:mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:22s]">
            <img src="https://placehold.co/120x120" alt="img1" className="h-10 sm:h-12 md:h-16 mx-3 sm:mx-6" />
            <img src="https://placehold.co/120x120" alt="img2" className="h-10 sm:h-12 md:h-16 mx-3 sm:mx-6" />
            <img src="https://placehold.co/120x120" alt="img3" className="h-10 sm:h-12 md:h-16 mx-3 sm:mx-6" />
            <img src="https://placehold.co/120x120" alt="img4" className="h-10 sm:h-12 md:h-16 mx-3 sm:mx-6" />
            <img src="https://placehold.co/120x120" alt="img5" className="h-10 sm:h-12 md:h-16 mx-3 sm:mx-6" />
          </Marquee>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2 mt-8 md:mt-0 mb-6 md:mb-0 md:pl-5">
        {/* Gambar */}
        <img
          src={images[activeIndex]}
          alt="Hero"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg"
        />

        {/* Navigasi dots */}
        <div className="flex justify-center mt-4 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeIndex === index ? "bg-blue-600 scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
