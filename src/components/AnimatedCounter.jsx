'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// --- Data for the Stats ---
// Store data here for easy updates. Replace icons with your actual SVG components/paths.
const STATS_DATA = [
  {
    icon: 'images/73255KG.png',
    value: 73255,
    label: 'CO2 Saved',
    unit: 'KG',
  },
  {
    icon: 'images/Frame_1948754953_2.png',
    value: 1,
    label: 'First Response Time',
    unit: ' hour',
    decimals: 0,
  },
  {
    icon: 'images/97.png',
    value: 97,
    label: 'Of Calls Answered Within 15 Seconds',
    unit: '%',
  },
  {
    icon: 'images/Klyk_25_Money_9378a0c6-0ac2-4052-a3b9-55f77affcb40.png',
    value: 81268,
    label: 'Financial Savings For Businesses',
    unit: '£',
    prefix: true,
  },
  {
    icon: 'images/96.png',
    value: 96,
    label: 'Customer Satisfaction',
    unit: '%',
  },
];

// --- Reusable Animated Counter Component ---
function AnimatedCounter({ to, prefix = false, unit = '', decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(0, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          if (ref.current) {
            const formattedValue = value.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            
            if (prefix) {
              ref.current.textContent = `${unit}${formattedValue}`;
            } else {
              ref.current.textContent = `${formattedValue}${unit}`;
            }
          }
        },
      });
    }
  }, [isInView, to, unit, prefix, decimals]);

  return <span ref={ref}>0</span>;
}


// --- Main Component ---
export default function Knightfolio360Factor() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/50 via-amber-50/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          The Knightfolio360 Factor
        </h2>
        <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-full border-2 border-black shadow-[3px_3px_0_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                  >
                    It all starts with a Knightfolio360 <FiArrowRight />
                  </a>

        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {STATS_DATA.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="h-26 w-auto mb-3">
                 {/* 
                   IMPORTANT: Replace this img tag with your own sketch-style SVG components 
                   for the best result to match the original design.
                 */}
                <img src={stat.icon} alt="" className="h-full w-full object-contain text-gray-700" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">
                <AnimatedCounter 
                  to={stat.value} 
                  unit={stat.unit}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-sm text-gray-600 mt-1 max-w-[150px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}