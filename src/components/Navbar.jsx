import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaInfoCircle, FaConciergeBell, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="inline-block mr-2" /> },
    { name: 'About', href: '#about', icon: <FaInfoCircle className="inline-block mr-2" /> },
    { name: 'Services', href: '#services', icon: <FaConciergeBell className="inline-block mr-2" /> },
    { name: 'Portfolio', href: '#portfolio', icon: <FaBriefcase className="inline-block mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="inline-block mr-2" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ffecd2] backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-3xl font-extrabold font-sans text-[#2c2c2c] tracking-wide">
            Lumetech
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[#2b2b2b] font-medium items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition duration-300 ease-in-out hover:text-[#ff7e5f] flex items-center hover:scale-105"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleToggle} className="text-[#2b2b2b] focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ffecd2] px-4 pt-4 pb-6 space-y-4 shadow-md transition-all duration-500 ease-in-out">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block text-[#2b2b2b] font-medium text-lg transition duration-300 ease-in-out hover:text-[#ff7e5f] flex items-center hover:pl-2"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
