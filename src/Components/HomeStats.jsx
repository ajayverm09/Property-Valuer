import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const HomeStats = () => {
  const stats = [
    { number: 5000, suffix: "+", label: "Properties Valued" },
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 24, suffix: "h", label: "Report Delivery" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
