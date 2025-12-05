'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router';

export default function StickyHeader() {
  const [open, setOpen] = useState(false);

  // Framer Motion: map scroll 0→50px to opacity 1→0
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();
  const opacity = prefersReduced
    ? 1
    : useTransform(scrollY, [0, 200], [1, 0]); // fade out after 50px

  return (
    <>
      {/* Top bar (optional) */}
 

      {/* Sticky header that fades after 50px */}
      <motion.header
        style={{ opacity }}              // fades from 1 → 0 as you scroll
        className="sticky top-0  bg-[#381C75] shadow-md "
        aria-label="Site Header"
      >
        <div className="max-w-[1720px] mx-auto px-4 py-3 ">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="text-[34px] font-semibold ">
            <img src="images/image 20.png" className="w-25"></img>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex flex-col gap-[5px] p-2"
              aria-expanded={open}
              aria-controls="mainMenu"
              onClick={() => setOpen(s => !s)}
            >
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="font-medium text-white hover:underline">Home</Link>
              <Link to="/services" className="font-medium text-white hover:underline">Services</Link>
              <Link to="/portfolio" className="font-medium text-white hover:underline">Portfolio</Link>
              
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black font-medium"
              >
                Get Started
              </Link>
            </nav>
          </div>

          {/* Mobile menu */}
          <motion.nav
            id="mainMenu"
            initial={false}
            animate={open ? 'open' : 'closed'}
            variants={{
              open:  { height: 'auto', opacity: 1 },
              closed:{ height: 0, opacity: 0 }
            }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-3 pb-4 flex flex-col gap-3">
              <Link onClick={() => setOpen(false)} to="/" className="py-2 border-b border-white/10 text-white font-medium">Home</Link>
              <Link onClick={() => setOpen(false)} to="/services" className="py-2 border-b border-white/10 text-white font-medium">Services</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio" className="py-2 border-b border-white/10 text-white font-medium">Portfolio</Link>

              <Link
                onClick={() => setOpen(false)}
                to="/contact-us"
                className="mt-1 inline-flex h-10 items-center justify-center rounded-full border border-white text-white px-5 font-medium"
              >
                Get Started
              </Link>
            </div>
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
}
