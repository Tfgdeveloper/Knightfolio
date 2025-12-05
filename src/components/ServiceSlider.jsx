'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import { link } from 'framer-motion/client';

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


const TESTIMONIALS = [
  { id: 1, company: 'Logo Design',  imageSrc: 'images/Website Icons/Logo Design-min.webp', redirect:"/logodesign" },

  { id: 2, company: 'Web Design & Development',  imageSrc: 'images/Website Icons/Website Design and Development-min.webp', redirect:"/web-design-and-development" },

  { id: 3, company: 'Graphic Design & Illustrations',  imageSrc: 'images/Website Icons/Graphic design & Illustrations-min.webp', redirect:"/graphic-design-and-illustrations" },

  { id: 4, company: 'Social Media Content & Management', imageSrc: 'images/Website Icons/Social media content & management-min.webp', redirect:"/social-media-content-and-management" },

  { id: 5, company: 'Video Editing, Animation & Motion Graphics', imageSrc: 'images/Website Icons/Video editing, Animation & motion graphics-min.webp', redirect:"/video-editing-animation-and-motion-graphics" },

  { id: 6, company: 'Creative Strategy & Concept Development', imageSrc: 'images/Website Icons/Creative strategy & concept development-min.webp', redirect:"/creative-strategy-and-concept-development" },

  
];

const AUTOPLAY_INTERVAL = 5000;

export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  // Use the hook to determine layout. 'md' in Tailwind is 768px.
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const slidesPerView = isDesktop ? 3 : 1;
  
  // Calculate the last possible index to prevent empty space
  const lastIndex = TESTIMONIALS.length - slidesPerView;

  // Autoplay logic that pauses on hover and loops
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
      }, AUTOPLAY_INTERVAL);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering, lastIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  return (
    <section 
        className="relative w-full py-10 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
      
      
      <div className="relative z-10 container mx-auto px-4">
        
        <div className="w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            // This animation moves the whole container by a fraction of its width.
            // On desktop, it moves by 1/3 for each index change.
            // On mobile, it moves by 1/1 (or 100%) for each index change.
            animate={{ x: `-${currentIndex * (100 / slidesPerView)}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="flex"
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="flex-none w-full md:w-1/3 px-3">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-12 flex items-center gap-4">
          <div className="w-[80%] bg-black/25 rounded-full h-1.5 overflow-hidden">
            <motion.div
              key={currentIndex} 
              className="bg-black h-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>
          <div className="w-[20%] flex items-center justify-end gap-3">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-black/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors" aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="w-10 h-10 rounded-full bg-black/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors" aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial }) => (
  <Link to={testimonial.redirect}>
  <div className="relative w-full h-[400px] md:h-[550px] lg:h-[300px] p-6 rounded-2xl border border-white/20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src={testimonial.imageSrc} alt="Abstract background texture" className="w-full h-full object-cover" />
              
            </div>

    
    <div className="absolute flex flex-col text-white right-6 left-6 bottom-6 lg:right-6 lg:left-6 lg:bottom-6 md:right-3 md:left-6 md:bottom-6">
      <div className='relative h-auto w-auto p-6 md:p-3 z-99 border border-2 border-white rounded-xl'>
        <div className="absolute inset-0 backdrop-blur-lg -z-10 rounded-xl" ></div>
        <div className="flex-grow overflow-y-auto pr-2 z-99">
        <p className="text-[28px] lg:text-[28px] md:text-[22px] font-bold text-md mb-2">{testimonial.company}</p>
        
      </div>
      </div>
     
      
      
    </div>
  </div>
  </Link>
);