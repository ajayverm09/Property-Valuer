import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative py-24 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbSYfJbZV7LGgDNfadBY0HZZaSbHjmGJnww&s"
          alt="Property background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-purple-800/70 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
            Get in touch with our team of valuation experts for a consultation
            or to schedule a property assessment.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
