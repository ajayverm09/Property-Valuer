import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, GraduationCap, Users } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      title: "Accuracy",
      desc: "Precision in every valuation through rigorous analysis and attention to detail.",
      icon: <CheckCircle size={28} />,
    },
    {
      title: "Integrity",
      desc: "Uncompromising ethical standards and transparent valuation practices.",
      icon: <Shield size={28} />,
    },
    {
      title: "Expertise",
      desc: "Deep market knowledge and continuous professional development.",
      icon: <GraduationCap size={28} />,
    },
    {
      title: "Client Focus",
      desc: "Tailored solutions that address each client's unique needs and objectives.",
      icon: <Users size={28} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and client relationships
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
