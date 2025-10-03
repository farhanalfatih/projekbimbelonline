import React from "react";
import { CheckCircle } from "lucide-react"; // icon checklist

const KenapaSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 to-indigo-800">
      {/* Heading */}
      <div className="text-center mb-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Kenapa harus belajar <br /> di E-Learning?
        </h1>
        <p className="mt-4 text-sm md:text-base max-w-xl mx-auto text-gray-200">
          Belajar lebih fleksibel, bisa di mana saja dan kapan saja. Materi
          lengkap, tutor berpengalaman, dan komunitas aktif siap mendukung
          perjalanan belajarmu.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="md:w-1/2 flex flex-col gap-6">
          <div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-white">
                    Akses materi kapan saja, di mana saja.
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur, tempora sunt doloremque cupiditate rem aliquid.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-white">
                    Akses materi kapan saja, di mana saja.
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur, tempora sunt doloremque cupiditate rem aliquid.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-white">
                    Akses materi kapan saja, di mana saja.
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur, tempora sunt doloremque cupiditate rem aliquid.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-white">
                    Akses materi kapan saja, di mana saja.
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur, tempora sunt doloremque cupiditate rem aliquid.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/600x400"
            alt="E-Learning"
            className="w-full max-w rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default KenapaSection;
