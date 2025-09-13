import React from 'react'
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div>
      <section
        className="relative py-20 bg-gradient-to-r from-blue-800/60 to-purple-800/60 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/28914932/pexels-photo-28914932.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Valuation Practice
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              With over 15 years of experience, we provide accurate and reliable
              property valuations for residential and commercial properties
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutHero
