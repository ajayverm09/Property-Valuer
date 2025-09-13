// src/components/AboutCompany.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutCompany = () => {
  const sections = [
    {
      title: "Trusted Property Valuations",
      description: [
        "We provide reliable and transparent property valuation services tailored to your needs. Our experienced valuers combine market insights with professional expertise to give you accurate reports you can trust.",
        "Whether you're buying, selling, or refinancing, knowing the true worth of your property helps you make smarter financial decisions.",
      ],
      points: [
        "Comprehensive market analysis",
        "Independent and unbiased reports",
        "Quick turnaround times",
      ],
      image: "https://images.pexels.com/photos/8293700/pexels-photo-8293700.jpeg",
    },
    {
      title: "Expert Team You Can Rely On",
      description: [
        "Our certified valuers and consultants bring decades of combined experience in residential, commercial, and industrial property markets.",
        "We don’t just provide numbers — we provide clarity, confidence, and strategies that support your goals.",
      ],
      points: [
        "Qualified and accredited valuers",
        "Deep understanding of local markets",
        "Client-focused approach",
      ],
      image: "https://images.pexels.com/photos/25310895/pexels-photo-25310895.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Our Company
        </h2>
        <div className="space-y-20">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className="md:w-1/2 w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="md:w-1/2 w-full text-center md:text-left"
                initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {sec.title}
                </h3>

                {sec.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed text-lg mb-4"
                  >
                    {para}
                  </p>
                ))}

                <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                  {sec.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
