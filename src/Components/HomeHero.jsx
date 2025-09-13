import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf7f17b3-2229-40f5-8f3c-4eafbc895d2c.png"
            alt="Modern luxury home exterior with elegant architecture and landscaped garden"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Property Valuation Services</h1>
          <p className="text-xl md:text-2xl mb-8">
            Accurate, reliable property valuations with over 15 years of industry expertise
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center mx-auto"
            onClick={() => navigate("/contact")}
          >
            Get Your Valuation <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default HomeHero
