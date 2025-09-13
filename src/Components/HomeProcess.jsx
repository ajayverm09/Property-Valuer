import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Home,
  BarChart,
  Calculator,
  FileCheck,
} from "lucide-react";

const HomeProcess = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} className="text-white" />,
      title: "Initial Consultation",
      desc: "We begin with a detailed discussion to understand your property, purpose of valuation, and specific requirements.",
    },
    {
      icon: <FileText size={32} className="text-white" />,
      title: "Document Review",
      desc: "Collection and verification of property documents, ownership records, and legal clearances.",
    },
    {
      icon: <Home size={32} className="text-white" />,
      title: "Property Inspection",
      desc: "A thorough physical inspection covering location, condition, size, and unique property features.",
    },
    {
      icon: <BarChart size={32} className="text-white" />,
      title: "Market Analysis",
      desc: "Comparative analysis using recent sales data, local market trends, and demand-supply factors.",
    },
    {
      icon: <Calculator size={32} className="text-white" />,
      title: "Valuation Calculation",
      desc: "Applying industry-standard valuation methodologies to arrive at a fair and transparent value.",
    },
    {
      icon: <FileCheck size={32} className="text-white" />,
      title: "Final Report Delivery",
      desc: "You receive a comprehensive report with clear insights, ready to support financial or legal decisions.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Valuation Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic and transparent approach ensuring accuracy and
            reliability in every valuation
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
