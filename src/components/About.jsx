import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="relative py-24 px-6 md:px-12 text-center overflow-hidden bg-gradient-to-br from-[#fffaf3] via-[#f8f1e4] to-[#f0e7d3]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
    

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-[#2b2b2b] mb-8 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:h-[4px] after:w-20 after:bg-gradient-to-r from-[#ffb347] to-[#ffcc33] after:rounded-full"
      >
        About Us
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl mx-auto text-lg md:text-xl text-[#3d3d3d] leading-relaxed tracking-wide"
      >
        We craft elegant, high-performing web and mobile experiences that captivate and inspire. <br />
        Blending timeless design with cutting-edge innovation, our team transforms ideas into digital reality—seamlessly and beautifully.
      </motion.p>
    </motion.section>
  );
};

export default About;
