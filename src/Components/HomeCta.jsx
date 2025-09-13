import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeCta = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Property Valued?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a professional valuation that you can trust for
            your important financial decisions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
            onClick={() => navigate("/contact")}
          >
            Schedule Valuation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCta;
