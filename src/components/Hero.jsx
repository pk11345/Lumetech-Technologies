import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24 bg-gradient-to-br from-[#fff8f1] via-[#fbe4d8] to-[#fbe5d3] overflow-hidden">


      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold font-sans text-[#2b2b2b] leading-tight tracking-tight"
        >
          Lumetech Technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-[#4a4a4a] max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Bridging Vintage Charm with Modern Innovation.
        </motion.p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
        >
          Explore Our Services <FaArrowRight className="ml-2" />
        </motion.a>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center relative z-10"
      >
        <img
          src="/logo.png"
          alt="Hero"
          className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
