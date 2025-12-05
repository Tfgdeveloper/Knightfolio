'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// --- Reusable hook to detect screen size ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

// ------------------- DATA -------------------
const SERVICES = [
  {
    id: 1,
    imageSrc: '/images/work/Retail_food-scaled-e1688377729931-min.webp',
    title: 'Retail',
  },
  {
    id: 2,
    imageSrc: '/images/work/b2b-carousel.webp',
    title: 'B2B',
  },
  {
    id: 3,
    imageSrc: '/images/work/Financial-Services-min.webp',
    title: 'Financial Services',
  },
  {
    id: 4,
    imageSrc: '/images/work/FoodDrink-min.webp',
    title: 'Food & Drink',
  },
  {
    id: 5,
    imageSrc: '/images/work/beauty-1.webp',
    title: 'Health & Beauty',
  },
  {
    id: 6,
    imageSrc: '/images/work/Property-min.webp',
    title: 'Property',
  },
  {
    id: 7,
    imageSrc: '/images/work/Charity-min.webp',
    title: 'Charity',
  },
  {
    id: 8,
    imageSrc: '/images/work/Luxury-min.webp',
    title: 'Luxury',
  },
  
];

const AUTOPLAY_INTERVAL = 5000;

// ------------------- MAIN SLIDER -------------------
export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const slidesPerView = isDesktop ? 3 : 1;

  const lastIndex = Math.max(0, SERVICES.length - slidesPerView);
  const totalPages = lastIndex + 1;

  // Autoplay
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
      }, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, lastIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full py-12 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">

          {/* Slider track */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / slidesPerView)}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="flex"
            >
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="flex-none w-full md:w-1/3 px-3"
                >
                  <ServiceCard
                    imageSrc={service.imageSrc}
                    title={service.title}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left / Right arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 
                       "
          >
            <FiArrowLeft className="text-[32px] transition-all duration-300 hover:-translate-x-[5px]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 
                      "
          >
            <FiArrowRight className="text-[32px] transition-all duration-300 hover:translate-x-[5px]" />
          </button>
        </div>

        {/* Dots pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-white w-4' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------- IMAGE CARD -------------------
const ServiceCard = ({ imageSrc, title }) => {
  return (
    <div className="relative group w-full h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">

      {/* Image */}
      <img
        src={imageSrc}
        alt=""
        className="w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Heading fade-up on hover */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          opacity-0 translate-y-4 
          group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-out
        "
      >
        <h3 className="text-white text-xl md:text-2xl tracking-wide 
                       bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out">
          {title}
        </h3>
      </div>

    </div>
  );
};
