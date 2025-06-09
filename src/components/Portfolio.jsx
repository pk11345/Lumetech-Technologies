import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-[#fffaf3] via-[#f8f1e4] to-[#f0e7d3] text-center relative overflow-hidden">
      
      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] 
        rounded-full top-[15%] left-[10%] blur-[120px] opacity-20 pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] 
        rounded-full bottom-[10%] right-[10%] blur-[120px] opacity-20 pointer-events-none"
      ></motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-12"
      >
        Portfolio
      </motion.h2>

      {/* Portfolio Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // STAGGER EFFECT
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden border border-[#e6d8c5] rounded-xl shadow-xl bg-gradient-to-br from-[#fff] via-[#fdf8f4] to-[#f8f1e4] transform transition duration-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* Glow hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] opacity-0 group-hover:opacity-10 transition duration-500 z-0"></div>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={`https://placehold.co/600x400?text=Project+${item}`}
                alt={`Project ${item}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500 z-20">
              <button className="px-6 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                View Details <FaArrowRight />
              </button>
            </div>

            {/* Text */}
            <div className="p-4 relative z-10 bg-opacity-90">
              <p className="text-lg font-medium text-[#3e3e3e]">Project {item}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
