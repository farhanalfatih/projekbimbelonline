import React from "react";
import { CheckCircle } from "lucide-react"; // icon checklist

const KenapaSection = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-blue-900 to-indigo-800">
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-800/70 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-start mb-12 pl-5 text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Beberapa course <br /> pilihan yang bisa kamu pelajari
          </h1>
        </div>

        {/* Isi Konten */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Gambar */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://placehold.co/600x400"
              alt="E-Learning"
              className="w-full max-w rounded-2xl shadow-lg"
            />
          </div>

          {/* List Benefit */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">
                      Akses materi kapan saja, di mana saja.
                    </h2>
                    <p className="text-sm mt-1 text-gray-200">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tenetur, tempora sunt doloremque cupiditate rem aliquid.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default KenapaSection;
