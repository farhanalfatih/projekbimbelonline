import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 min-h-screen w-full bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="w-full md:w-2/3 text-left order-2 md:order-1 mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            About Our Website
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsa
            quam dolore expedita suscipit quasi impedit quia autem praesentium
            atque, laborum ab eius laudantium rerum pariatur perspiciatis modi!
            Repellendus, architecto. Velit, iure asperiores soluta qui inventore
            repellendus, officia, minima deleniti perspiciatis molestiae maiores
            eius! Saepe nemo distinctio odio impedit a veniam numquam et.
            Officiis, minima?
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
          <img
            src="https://placehold.co/600x400"
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
