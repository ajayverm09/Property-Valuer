import React from "react";
import { motion } from "framer-motion";
import { Home, MapPin, Clock, Factory, TreePine, LandPlot } from "lucide-react";

const HomeService = () => {
  const services = [
    {
      title: "Residential Valuation",
      description:
        "Expert assessment of single-family homes, apartments, and residential complexes using comprehensive market analysis.",
      icon: <Home size={40} className="text-blue-600" />,
    },
    {
      title: "Commercial Valuation",
      description:
        "Professional valuation of office buildings, retail spaces, industrial properties, and commercial land.",
      icon: <MapPin size={40} className="text-blue-600" />,
    },
    {
      title: "Investment Analysis",
      description:
        "Detailed analysis of investment properties including ROI calculations and market trend assessment.",
      icon: <Clock size={40} className="text-blue-600" />,
    },
    {
      title: "Industrial Valuation",
      description:
        "Specialized valuation of factories, warehouses, and manufacturing units considering operational and locational factors.",
      icon: <Factory size={40} className="text-blue-600" />,
    },
    {
      title: "Agricultural Valuation",
      description:
        "Valuation of farmlands, plantations, and agricultural estates based on soil quality, crop yield, and market demand.",
      icon: <TreePine size={40} className="text-blue-600" />,
    },
    {
      title: "Land & Development Valuation",
      description:
        "Assessment of raw land and development sites for potential projects, zoning compliance, and market feasibility.",
      icon: <LandPlot size={40} className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Valuation Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive property valuation solutions for residential,
            commercial, industrial, agricultural, and investment properties
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
