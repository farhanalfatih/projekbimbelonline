"use client";
import React, { useState } from "react";
import {
  RiCoupon3Line,
  RiTicket2Line,
  RiArrowRightSLine,
} from "react-icons/ri";

const Page = () => {
  const images = [
    "https://placehold.co/1200x400/0000FF/FFF?text=Image+1",
    "https://placehold.co/1200x400/FF0000/FFF?text=Image+2",
    "https://placehold.co/1200x400/00FF00/FFF?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Slider Section */}
      <div className="flex flex-col items-center justify-center mt-46">
        <div className="hidden md:block relative w-full md:w-11/12 lg:w-4/5 overflow-hidden mt-6 rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-72 lg:h-[450px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-10">
        <div className="w-full p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="flex items-center justify-between bg-white rounded-xl border p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <RiTicket2Line className="text-orange-500 text-lg" />
                <span className="font-medium text-sm sm:text-base">
                  Cari kelas yg anda mau
                </span>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-xl" />
            </button>

            <button className="flex items-center justify-between bg-white rounded-xl border p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <RiCoupon3Line className="text-cyan-500 text-lg" />
                <span className="font-medium text-sm sm:text-base">
                  Kupon Potongan Harga
                </span>
              </div>
              <RiArrowRightSLine className="text-gray-500 text-xl" />
            </button>
          </div>

          <div
            className="
  flex gap-4 
  overflow-x-auto snap-x snap-mandatory no-scrollbar 
  py-3 px-1 w-full
  md:overflow-x-hidden md:justify-center
"
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="snap-center shrink-0 w-[80%] sm:w-[250px] bg-white rounded-xl shadow-md overflow-hidden border"
              >
                <img
                  src={`https://placehold.co/400x250?text=Item+${item}`}
                  alt={`Item ${item}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col items-center justify-center mt-10 mb-20">
        <div className="w-full md:w-11/12 lg:w-4/5 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl border shadow-sm overflow-hidden"
              >
                <img
                  src={`https://placehold.co/600x400?text=Class+${item}`}
                  alt={`Class ${item}`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Kelas Belajar {item}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Deskripsi singkat tentang kelas belajar {item}.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://placehold.co/40x40?text=UTBK"
                      alt="UTBK Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <img
                      src="https://placehold.co/40x40?text=UTBK"
                      alt="UTBK Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <img
                      src="https://placehold.co/40x40?text=UTBK"
                      alt="UTBK Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
