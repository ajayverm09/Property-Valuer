import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const AboutTeam = () => {
  // Team data
  const teamMembers = [
    {
      name: "Amit Sharma",
      role: "Senior Property Valuer",
      image:
        "https://images.pexels.com/photos/5888189/pexels-photo-5888189.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Priya Mehta",
      role: "Real Estate Analyst",
      image:
        "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Rajesh Verma",
      role: "Commercial Valuation Expert",
      image:
        "https://images.pexels.com/photos/8217413/pexels-photo-8217413.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
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
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of certified property valuation professionals
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image container with overlay */}
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                {/* Gradient Overlay using #101828 */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#101828]/90 to-[#101828]/60 flex items-center justify-center space-x-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  {/* Facebook */}
                  <a
                    href={member.socials.facebook}
                    className="text-white hover:text-blue-500 border border-transparent rounded-full p-3 hover:border-blue-500 transition-all duration-300"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  {/* Twitter */}
                  <a
                    href={member.socials.twitter}
                    className="text-white hover:text-sky-400 border border-transparent rounded-full p-3 hover:border-sky-400 transition-all duration-300"
                  >
                    <FaTwitter size={20} />
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={member.socials.linkedin}
                    className="text-white hover:text-blue-600 border border-transparent rounded-full p-3 hover:border-blue-600 transition-all duration-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">
                  Certified professional with years of expertise in property
                  valuation, delivering trusted insights and accurate reports.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
