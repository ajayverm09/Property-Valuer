import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BookOpenCheck, BadgeCheck } from "lucide-react";

const AboutCertifications = () => {
  const certifications = [
    {
      title: "RICS Certified",
      desc: "Royal Institution of Chartered Surveyors accreditation for global valuation standards.",
      icon: <Award size={28} />,
    },
    {
      title: "ISO 9001",
      desc: "International quality management certification ensuring accuracy and compliance.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Government Registered",
      desc: "Licensed and recognized by government authorities for legal valuation services.",
      icon: <BookOpenCheck size={28} />,
    },
    {
      title: "IVSC Standards",
      desc: "Compliance with International Valuation Standards Council guidelines.",
      icon: <BadgeCheck size={28} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Certifications & Accreditations
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our professional credentials that ensure the highest standards of
            valuation practice
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-lg">
                {cert.icon}
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
