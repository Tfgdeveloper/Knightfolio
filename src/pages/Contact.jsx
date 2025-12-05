// src/pages/FinalContactPage.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

// --- Reusable component for the animated tab content ---
const TabContent = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="mt-8"
  >
    {children}
  </motion.div>
);

const FinalContactPage = () => {
  // State for the animation sequence
  const [isHero, setIsHero] = useState(true);
  const [open, setOpen] = useState(false);

  const [isTitleVisible, setIsTitleVisible] = useState(true);
  
  // State for the tabs in the main content
  const [activeTab, setActiveTab] = useState('inquiries');
  const tabs = [
    { id: 'inquiries', label: 'Inquiries' },
  ];

  // This useEffect controls the entire intro animation sequence
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setIsTitleVisible(false), 1500);
    const collapseTimer = setTimeout(() => setIsHero(false), 2000);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  // Animation variants for the main content columns
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="bg-black text-white">
      {/* 1. Background Video - Sits at the back, fixed to the viewport */}
      <video
        autoPlay loop muted playsInline
        className="fixed z-0 w-full h-full object-cover"
        src="images/GettyImages-1154356156 (1).webm"
      />

      {/* 2. The Animated Header/Hero */}
      <motion.header
        layout
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className={`relative w-full overflow-hidden z-20 ${isHero ? 'h-screen' : 'h-20 sticky top-0'}`}
      >
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-1000 ${isHero ? 'opacity-100' : 'opacity-0'}`} />
        {!isHero && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute inset-0 bg-black/30 backdrop-blur-lg" />}
        
        <div className={`relative h-full w-full flex items-center ${isHero ? 'justify-center' : 'justify-between px-8'}`}>
          <AnimatePresence>
            {isTitleVisible && (
              <motion.h1 key="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }} className="text-3xl md:text-6xl font-medium tracking-[0.3em] uppercase text-center fontext">
                knight Folio 360
              </motion.h1>
            )}
            {!isHero && (
              <motion.div key="header-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="w-full flex items-center justify-between">
                <Link to="/" className="font-bold text-xl tracking-tighter"><img src="images/image 20.png" className="w-18"></img></Link>
                <nav className="flex items-center gap-6 text-sm">
                  <Link to="/" className="font-medium text-white hover:underline">Home</Link>
                  <Link to="/services" className="font-medium text-white hover:underline">Services</Link>
                  
                  <Link to="/portfolio" className="font-medium text-white hover:underline">Portfolio</Link>
                 
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* 3. The Main Content Section */}
      <main className="relative z-10">
        <AnimatePresence>
          {!isHero && (
            <motion.div
              // This div wraps your main content and fades it in
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="min-h-screen flex items-center justify-center px-4 py-25  md:p-8 -mt-20" // -mt-20 pulls it up to fill the space
            >
              {/* === THIS IS YOUR PASTED CONTENT === */}
              <motion.div
                className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16"
                variants={contentContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* === LEFT COLUMN: Tabs Section === */}
                <motion.div variants={contentItemVariants} className="flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    {tabs.map((tab) => (
                      <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === tab.id ? 'bg-white text-black' : 'bg-white/10 backdrop-blur-2xl text-white hover:bg-white/20'}`}>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    {activeTab === 'inquiries' && <TabContent key="inquiries"><h2 className="text-4xl md:text-5xl font-bold tracking-tighter break-all">info@knightfolio360.com</h2><p className="mt-2 text-xl text-white">+44 7926 471214</p></TabContent>}
                    
                  </AnimatePresence>
                </motion.div>

                {/* === RIGHT COLUMN: Form Section === */}
                <motion.div variants={contentItemVariants} className="flex flex-col justify-center gap-4">
                  <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-white outline-none transition-all" />
                  <input type="email" placeholder="Your email" className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-white outline-none transition-all" />
                  <textarea placeholder="Tell us about your project" rows="5" className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-white outline-none transition-all" />
                  <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">Send Message</button>
                </motion.div>
              </motion.div>
              {/* === END OF PASTED CONTENT === */}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default FinalContactPage;