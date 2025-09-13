import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Optional Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://www.casagrand.co.in/wp-content/uploads/2025/04/BLOG-09-scaled.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/70 to-purple-900/70"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Property Valuation Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200"
        >
          Expert insights, market trends, and valuation tips from our team of
          professional property valuers
        </motion.p>
      </div>
    </section>
  );
};

export default BlogHero;
