import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const AnimatedWord = ({ children, index }) => {
  const wordRef = useRef(null);

  // Detect screen sizes
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  
  const { scrollYProgress } = useScroll({
    target: wordRef,
    offset: ["start 0.9", "start 0.4"]
  });
  
  // For the first layer (gray/dim text)
  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.3, 0.3]
  );
  
  // For the second layer (white text with gradient reveal)
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );
  
   // Simplified X movement (removed Y movement for better performance)
  let xStart, xEnd;
  if (isMobile) {
    xStart = 100; // Reduced movement on mobile
    xEnd = 30;
  } else if (isTablet) {
    xStart = 150;
    xEnd = 50;
  } else {
    xStart = 300;
    xEnd = 100;
  }
  
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [xStart, xEnd]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 50 + (index * 0)]
  );

  return (
    <li ref={wordRef} className="relative overflow-visible py-1 sm:py-2">
      {/* First layer - dim background text */}
      <motion.div 
        style={{ opacity: firstOpacity, x, y }}
        className="relative"
      >
        <h2 className="text-6xl sm:text-7xl md:text-[80px] font-light tracking-tight text-white/30">
          {children}
        </h2>
      </motion.div>
      
      {/* Second layer - bright text with clip reveal */}
      <motion.div 
        style={{ clipPath, x, y }}
        className="absolute inset-0 py-1 sm:py-2"
      >
        <h2 className="text-6xl sm:text-7xl md:text-[80px] font-light tracking-tight text-white">
          {children}
        </h2>
      </motion.div>
    </li>
  );
};

const Fold7ScrollAnimation = () => {
  const paragraphText = "We help lots of talented people at brilliant brands solve a whole bunch of problems through just about every discipline you can imagine.";
  
  const words = [
    'Strategy',
    'Advertising',
    'Social',
    'Branding',
    'Digital',
    'Experience',
    'Innovation'
  ];

  return (
    <div className=" ">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 lg:gap-24">
          
          {/* Left Column - Paragraph */}
          <div className="md:col-span-4 lg:col-span-4 ">
            <div className="md:sticky md:top-40">
              <p className="text-base sm:text-lg leading-relaxed text-gray-400 w-full">
                {paragraphText}
              </p>
            </div>
          </div>

          {/* Right Column - Animated Words */}
          <div className="md:col-span-8 lg:col-span-8 h-150 md:h-190 overflow-hidden ">
            <ul className="space-y-0">
              {words.map((word, index) => (
                <AnimatedWord key={index} index={index}>
                  {word}
                </AnimatedWord>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom spacing */}
        
      </div>
    </div>
  );
};

export default Fold7ScrollAnimation;