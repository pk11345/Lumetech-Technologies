import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative py-20 px-8 bg-gradient-to-br from-[#fffaf3] via-[#f8f1e4] to-[#f0e7d3] text-center overflow-hidden">
      
   

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-[#2b2b2b] mb-12"
      >
        Contact Us
      </motion.h2>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto flex flex-col space-y-6 bg-white p-8 rounded-xl
         shadow-xl border border-[#e2d6c3]"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 border border-[#d1bfa0] rounded-lg focus:ring-2 focus:ring-[#a67c52]
           outline-none transition duration-200"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 border border-[#d1bfa0] rounded-lg focus:ring-2 focus:ring-[#a67c52]
           outline-none transition duration-200"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-4 border border-[#d1bfa0] rounded-lg focus:ring-2 focus:ring-[#a67c52]
           outline-none transition duration-200 resize-none"
        ></textarea>
        <button
          type="submit"
          className="p-4 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white
           rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 font-medium text-lg"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
