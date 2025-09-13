import React from "react";
import { motion } from "framer-motion";

const HomeTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Homeowner",
      feedback:
        "The valuation report was incredibly detailed and accurate. It gave me the confidence to sell my property at the right price. Excellent service!",
    },
    {
      id: 2,
      name: "Anita Verma",
      role: "Real Estate Investor",
      feedback:
        "Professional, transparent, and quick! Their insights helped me assess multiple properties and make profitable investments.",
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Business Owner",
      feedback:
        "I needed a commercial property valuation for bank loans. The report was clear, unbiased, and delivered on time. Highly recommended!",
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
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about our professional valuation services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
