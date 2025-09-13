import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import blogs from "../Components/BlogsData";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-xl text-gray-700">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            {blog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl"
          >
            {blog.date}
          </motion.p>
        </div>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
      </section>

      {/* Blog Content Section with White Background */}
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/blogs")}
            className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors font-semibold"
          >
            <ChevronRight className="rotate-180 mr-2" size={16} /> Back to Blogs
          </motion.button>

          {/* Blog Content */}
          <div className="prose max-w-none text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-shrink-0">
              <img
                src={blog.authorImage || "https://via.placeholder.com/100"}
                alt={blog.authorName || "Author"}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 md:mb-0 shadow-lg"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-900">
                {blog.authorName || "Author Name"}
              </h4>
              <p className="text-gray-600 mb-2">
                {blog.authorBio || "Certified Property Valuer with 10+ years of experience"}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-sky-400 hover:text-sky-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleBlog;
