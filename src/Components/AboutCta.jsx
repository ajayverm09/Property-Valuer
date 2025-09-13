import React from "react";
import { motion } from "framer-motion";

const AboutCta = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Optional Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/v2/D4D12AQGu2UTPSNzldQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1655400987786?e=2147483647&v=beta&t=jZBstNp8_9URZxypeq9_pymX_lHEMZFQ4SZ4QigAdmk')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-900/70"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Work with certified professionals who bring expertise, integrity,
            and precision to every valuation
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(to right, #2563eb, #7c3aed)", // blue to purple
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCta;
