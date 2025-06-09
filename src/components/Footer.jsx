import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3e3e3e] via-[#2b2b2b] to-[#1a1a1a] text-[#f8f1e4] py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 shadow-inner">
      
      {/* Left: Logo / Company */}
      <div className="text-lg font-serif font-semibold tracking-wide select-none">
        Lumetech Technologies
      </div>
      
      {/* Center: Copyright */}
      <div className="text-sm opacity-60 select-none">
        © {new Date().getFullYear()} Lumetech Technologies. All rights reserved.
      </div>
      
      {/* Right: Social Icons */}
      <div className="flex space-x-6 text-[#f8f1e4] text-xl">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a67c52] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a67c52] transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a67c52] transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
