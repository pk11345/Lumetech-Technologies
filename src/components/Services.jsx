import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRedo } from 'react-icons/fa';

const services = [
  {
    title: 'Web Design',
    desc: 'Beautiful and responsive websites.',
    icon: <FaLaptopCode className="text-5xl text-[#ff7e5f] mb-4" />,
    progress: 90,
  },
  {
    title: 'App Development',
    desc: 'iOS & Android apps with modern UX.',
    icon: <FaMobileAlt className="text-5xl text-[#feb47b] mb-4" />,
    progress: 80,
  },
  {
    title: 'UI/UX Design',
    desc: 'Seamless user experience with vintage charm.',
    icon: <FaPaintBrush className="text-5xl text-[#fdbb2d] mb-4" />,
    progress: 95,
  },
  {
    title: 'Website Redesign',
    desc: 'Revamp your digital presence.',
    icon: <FaRedo className="text-5xl text-[#a67c52] mb-4" />,
    progress: 85,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-[#fffaf3] via-[#f8f1e4] to-[#f0e7d3] text-center relative overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-12"
      >
        Our Services
      </motion.h2>
      
      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-xl bg-gradient-to-br from-[#fff] via-[#fdf8f4] to-[#f8f1e4] shadow-xl hover:shadow-2xl border border-[#e6d8c5] transform transition duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] opacity-0 group-hover:opacity-10 transition duration-500 z-0"></div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500 z-20">
              <button className="px-6 py-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                View More
              </button>
            </div>

            {/* Icon */}
            <div className="relative z-10 flex justify-center mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="relative z-10 text-2xl font-serif font-semibold text-[#3e3e3e] mb-2 mt-2 group-hover:text-[#a67c52] transition-colors duration-300">
              {service.title}
            </h3>
            {/* Description */}
            <p className="relative z-10 text-[#5a5a5a] leading-relaxed mt-2 mb-4">
              {service.desc}
            </p>

            {/* Progress Bar */}
            <div className="relative z-10 w-full h-3 bg-[#e6d8c5] rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${service.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full"
              ></motion.div>
            </div>

            {/* % Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative z-10 text-sm text-[#3e3e3e] font-semibold mt-1"
            >
              {service.progress}%
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
