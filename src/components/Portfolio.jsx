import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section className="py-20 px-8 bg-[#fffaf3] text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-[#3e3e3e] mb-12"
      >
        Portfolio
      </motion.h2>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item * 0.1 }}
            className="group relative overflow-hidden border-2 border-[#d1bfa0] rounded-xl shadow-lg bg-[#fff] transform transition duration-300 ease-in-out hover:scale-[1.03] cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={`https://placehold.co/600x400?text=Project+${item}`}
                alt={`Project ${item}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay - MOBILE FRIENDLY */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-500 z-20
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
              <button className="px-6 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                View More
              </button>
            </div>

            <div className="p-4 relative z-10">
              <p className="text-lg font-medium text-[#3e3e3e]">Project {item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
