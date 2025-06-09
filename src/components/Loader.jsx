import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#fffaf3] via-[#f8f1e4] to-[#e3d9c0] z-50">
      {/* Company Logo with subtle pulse */}
      <motion.img
        src="/logo.png"
        alt="Lumetech Logo"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="w-40 mb-10 drop-shadow-lg"
      />

      {/* Glowing Bouncing Dots */}
      <div className="flex space-x-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#a67c52] to-[#ffb347] shadow-lg"
            animate={{ y: ["0%", "-60%", "0%"], boxShadow: [
              "0 0 8px #a67c52, 0 0 20px #ffb347",
              "0 0 18px #ffb347, 0 0 28px #a67c52",
              "0 0 8px #a67c52, 0 0 20px #ffb347"
            ] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Loading Text with gradient shine */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mt-10 text-2xl font-semibold bg-gradient-to-r from-[#a67c52] via-[#ffb347] to-[#a67c52] bg-clip-text text-transparent select-none"
      >
        Loading...
      </motion.h2>
    </div>
  );
};

export default Loader;
