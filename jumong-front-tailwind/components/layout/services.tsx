"use client";

import { FaLaptopCode, FaTools, FaGlobe } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Computer Sales",
    description: "High quality laptops, desktops and accessories for work, gaming and business.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Web Development",
    description: "Modern websites and web applications built with React, Next.js and Node.js.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Tech Support",
    description: "Laptop repairs, Windows installation, upgrades and system optimization.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-2">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>

              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};