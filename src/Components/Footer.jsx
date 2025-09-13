// src/components/Footer.jsx
import React from "react";

const Footer = ({ onNavigate }) => {
  const pages = ["home", "about", "blogs", "contact"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Property Valuer</h3>
            <p className="text-gray-400">
              Professional property valuation services with accuracy and integrity since 2008.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page}>
                  <button
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                    onClick={() => onNavigate(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Valuation</li>
              <li>Commercial Valuation</li>
              <li>Investment Analysis</li>
              <li>Market Reports</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Valuation Street</p>
              <p>City, State 12345</p>
              <p>info@propertyvaluer.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Property Valuer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;