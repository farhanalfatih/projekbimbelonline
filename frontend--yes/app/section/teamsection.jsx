import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "John Doe",
      position: "CEO",
      img: "https://via.placeholder.com/300x300",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      img: "https://via.placeholder.com/300x300",
    },
    {
      name: "Michael Lee",
      position: "Designer",
      img: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p className="text-gray-600">Meet the people behind our success.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative group w-72 h-72 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
