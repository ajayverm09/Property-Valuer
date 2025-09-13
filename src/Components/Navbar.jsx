// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Mail, BookOpen } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: <Home size={18} /> },
  { to: "/about", label: "About", icon: <User size={18} /> },
  { to: "/blogs", label: "Blogs", icon: <BookOpen size={18} /> },
  { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-blue-800"
          >
            Property Valuer
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-1 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                <span>{icon}</span>
                <span>{label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="py-4 space-y-4">
                {navItems.map(({ to, label, icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 w-full px-4 py-2 ${
                        isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-600"
                      }`
                    }
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;