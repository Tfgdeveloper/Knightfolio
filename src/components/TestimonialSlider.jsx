'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  {
    id: 1,
    name: 'Marian Carson',
    title: 'COO',
    company: 'Rewilding Britain',
    quote: "If you're looking for an IT partner who can support you... I couldn't recommend Knightfolio360 more highly.",
    imageSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
    color: 'rgba(225, 66, 66, 0.1)', // Reddish tint
  },
  {
    id: 2,
    name: 'Caitlin Seaman',
    title: 'People Experience Manager',
    company: 'Field',
    quote: "The Knightfolio360 team are accessible, friendly and have a roll-up-your-sleeves attitude, as well as being super knowledgeable.",
    imageSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
    color: 'rgba(245, 158, 11, 0.1)', // Yellowish tint
  },
  {
    id: 3,
    name: 'Piers Mudd',
    title: 'COO',
    company: 'Brilliant Planet',
    quote: "If you're seeking an IT partner that combines innovation with sustainability and top-tier service, I can't recommend Knightfolio360 enough.",
    imageSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: 'rgba(52, 211, 153, 0.1)', // Greenish tint
  },
  {
    id: 4,
    name: 'Shiraz Jiwa',
    title: 'Founder & CEO',
    company: 'The Valesco Group',
    quote: "It's rare to find a partner in the IT sector that combines expertise and delivery with core values of sustainability and community.",
    imageSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
    color: 'rgba(99, 102, 241, 0.1)', // Indigo tint
  },
  {
    id: 5,
    name: 'Georgia Davies',
    title: 'Head of Sustainability',
    company: 'Unifrog',
    quote: 'Partnering with a truly sustainable IT provider has been a game-changer for our commitment to reducing our carbon footprint.',
    imageSrc: 'https://randomuser.me/api/portraits/women/21.jpg',
    color: 'rgba(236, 72, 153, 0.1)', // Pinkish tint
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function TestimonialSlider() {
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
          <div className="w-[80%] bg-white/10 rounded-full h-1.5 overflow-hidden">
            <motion.div
              key={currentIndex} 
              className="bg-white h-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>
          <div className="w-[20%] flex items-center justify-end gap-3">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial }) => (
  <div className="relative w-full h-[400px] md:h-[360px] p-6 rounded-2xl border border-white/20 overflow-hidden">
    <div className="absolute inset-0 backdrop-blur-lg -z-10" ></div>
    <div className="flex flex-col h-full text-white">
      <div className="flex items-center mb-4">
        <img src={testimonial.imageSrc} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/50" />
        <div className="ml-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            ))}
          </div>
          <p className="font-semibold mt-1 text-sm">{testimonial.name}, {testimonial.title}</p>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pr-2">
        <p className="font-bold text-md mb-2">{testimonial.company}</p>
        <blockquote className="text-white/80 italic text-sm">"{testimonial.quote}"</blockquote>
      </div>
    </div>
  </div>
);