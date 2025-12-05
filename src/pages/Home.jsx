import React from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import StickyHeader from '../components/StickyHeader'
import Footer from '../components/Footer'
import LogosMarquee from '../components/LogosMarquee';
import SolutionsGrid from '../components/SolutionsGrid';
import { FiArrowRight } from 'react-icons/fi'; // Using react-icons for the arrow
import VideoPlayerSection from '../components/VideoPlayerSection';
import { Link } from 'react-router';
import Workfor from '../components/Workfor';
import Fold7ScrollAnimation from '../components/ScrollingTextAnimation';




const FEATURES = [
  {
    icon: 'images/Save-Money.png',
    title: 'Save Money',
    description: 'Save more with Knightfolio360',
  },
  {
    icon: 'images/Save-Time.png',
    title: 'Save Time',
    description: 'Streamline processes and focus on the growth',
  },
  {
    icon: 'images/Increased-Efficiency.png',
    title: 'Increased Efficiency',
    description: 'Boost productivity by optimized your strategies with Knightfolio360',
  },
  {
    icon: 'images/Scalable-Solutions.png',
    title: 'Scalable Solutions',
    description: 'Get solutions with Knightfolio360 which will scale up your business',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Each child will animate 0.1s after the previous one
    },
  },
};

// Animation variants for each feature item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
    const prefersReduced = useReducedMotion();
    const { scrollY } = useScroll();
    const prefersReduced2 = useReducedMotion();
    const opacity = prefersReduced2
        ? 1
        : useTransform(scrollY, [0, 400], [1, 0]); // fade out after 50px
  return (
    <>
      <StickyHeader />
        
        
        {/* hero*/}
        <motion.section className="bg-gradient-to-br from-[#381C75] to-[#007C00]">
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 ">
        <div className="flex flex-col md:flex-row gap-10 items-start ">
          {/* Left copy */}
          <div className='w-full flex flex-col items-center lg:items-start mt-20' >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[34px] leading-tight md:text-[56px] md:leading-[1.15] font-bold text-white text-center lg:text-left"
            >
              Where Purpose <br/> Meets Precision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
            >
              We’re Knightfolio360 - a digital agency forged at the intersection of creativity, technology, and truth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
            >
              We build brands that carry light - shaping identities with meaning, discipline, and divine intent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-6"
            >
              <Link
              to="/services"
            className="inline-flex items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
          >
            Explore Our Work <FiArrowRight />
          </Link>
            </motion.div>
          </div>

          {/* Right illustration */}
           <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-full flex overflow-visible items-center justify-center"
          >
             <img src="images/Header-Image-(Revised) (1).png" className="mt-25"></img>
            
           
          </motion.div>
        </div>
      </div>
        </motion.section>
       
        {/* Logo */}
        <LogosMarquee speed={35} height={50} gap={72} />
        {/* Services */}
        <SolutionsGrid/>
        {/* Chalanges */}
        <section className="bg-[#333435] text-white py-20">
      <div className="mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-[32px] font-semibold leading-tight mb-5 text-[#F5F5F5]" >
          Who we work for

        </h2>
        <Workfor/>
      </div>
        </section>
        {/* Why Choose */}
         <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#333435] mb-4">
            Why choose our Creative Solution

          </h2>
          
        </div>

        {/* Features Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the grid is in view
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="mb-4 ">
                 
                <img src={feature.icon} alt={`${feature.title} icon`} className="w-auto h-40" />
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
         </section>    
         <section className='py-16'>  
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#F5F5F5] mb-4 text-center">
            HOW?
          </h2>
          <Fold7ScrollAnimation />   
          </section>
        <section className="relative py-20 px-4 bg-[#F5F5F5]">
         <VideoPlayerSection/> 
        </section>

       
      <Footer/>
    </>
  )
}

export default Home
