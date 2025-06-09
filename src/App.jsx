import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay of 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          className="bg-[#f7f8fa] text-[#1a1a1a] font-sans relative overflow-x-hidden min-h-screen"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <CustomCursor />
          <Navbar />
          <main className="pt-24"> {/* padding top for fixed navbar */}
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
