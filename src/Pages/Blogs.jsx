// src/pages/Blogs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import blogs from "../Components/BlogsData";
import BlogHero from "../Components/BlogHero";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <BlogHero />

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                  {/* Author Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={blog.authorImage || "https://via.placeholder.com/40"}
                      alt={blog.authorName || "Author"}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">
                        {blog.authorName || "Author Name"}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {blog.authorBio || "Certified Property Valuer"}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-semibold flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blogs/${blog.id}`);
                    }}
                  >
                    Read More <ChevronRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
