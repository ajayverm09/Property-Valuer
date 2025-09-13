import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactHero from "../Components/ContactHero";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ContactHero/>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Phone size={32} className="text-blue-600" />,
                title: "Phone",
                detail: "+1 (555) 123-4567",
                desc: "Mon-Fri from 8am to 6pm",
              },
              {
                icon: <Mail size={32} className="text-blue-600" />,
                title: "Email",
                detail: "info@propertyvaluer.com",
                desc: "Send us a message anytime",
              },
              {
                icon: <MapPin size={32} className="text-blue-600" />,
                title: "Office",
                detail: "123 Valuation Street",
                desc: "City, State 12345",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{item.detail}</p>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for contacting us! We will get back to you shortly.");
                  e.target.reset();
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019927927927!2d-122.4194154846813!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0f0f0f%3A0x123456789abcdef!2s123%20Valuation%20Street%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;