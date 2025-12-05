import React from 'react'
import StickyHeader from '../components/StickyHeader'
import Footer from '../components/Footer'
import TestimonialSlider from '../components/TestimonialSlider'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Using react-icons for the arrow
import LogosMarquee from '../components/LogosMarquee';
import LogosMarquee2 from '../components/LogosMarquee2';
import ServiceSlider from '../components/ServiceSlider';

const items = [
  {
    title: 'We Make An Impact',
    body: 'We’re here to build a better technology world, inspiring and empowering others to join the movement. ',
    icon: 'images/Klyk_05_RebootPlanet.png',
    href: '#',
  },
  {
    title: 'We Bring The Energy',
    body: "We're passion-fueled problem solvers with a relentless focus on improvement, powered by a growth mindset",
    icon: 'images/Klyk_Illustration_RepairRefurbService_RGB_31feb7de-eee5-4859-b955-cdcd221543e6.png',
    href: '#',
  },
  {
    title: 'We Learn & Grow',
    body: 'We have a never ending determination to upgrade our own performance. We believe every challenge holds a lesson and an opportunity for growth.',
    icon: 'images/Klyk_02_Refurbolution.png',
    href: '#',
  },
  {
    title: 'We Care',
    body: "With big hearts and warm smiles, we don't just serve people, we look after our colleagues to the best of our abilities",
    icon: 'images/Klyk_Illustration_ITSupport_crop.png',
    href: '#',
  },
  
];

// helper to give delays by row: 0s for row1, 0.35s for row2, 0.7s for row3
const delayByIndex = (i) => {
  const row = Math.floor(i / 2);   // 0,1,2 for rows
  const columnOffset = i % 2 ? 0.1 : 0; // tiny stagger within the row
  return row * 0.35 + columnOffset;
};


const About = () => {
  return (
    <>
      <StickyHeader/>
        {/* Hero */}
        <section className="relative py-4 px-4 h-[80vh] bg-gradient-to-br from-[#381C75] to-[#007C00]">
               
             <div className="max-w-[1720px] relative h-full mx-auto flex flex-col justify-between items-between px-4">
                <h2 className="text-[32px] md:text-[56px] font-semibold text-left text-white">About Knightfolio360</h2>
                <h2 className="text-[22px] md:text-[36px] font-semibold text-left text-white">The why behind what we do
</h2>
              </div>
             
        </section>
        {/* Why Choose */}
         <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-[1720px] mx-auto flex flex-col gap-20 justify-center items-center px-4 md:px-8 py-0 ">
            <div>
                <img src="images/trust.png " className='w-50'></img>
            </div>
            <div className="w-full md:w-[75%] lg:w-full flex flex-col lg:flex-row items-center bg-white border border-1 border-black rounded-xl">
            {/* Left copy */}
             {/* Right illustration */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="lg:w-2/3 relative"
            >
                {/* subtle dotted ring accent */}
                <div className="overflow-hidden">
                <img src="images/DSC05549_1.jpg" className="h-[400px] lg:h-[500px] rounded-xl "></img>
                </div>
            </motion.div>
            <div className='lg:w-3/5 flex flex-col items-center lg:items-start p-4'>
                <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[34px] leading-tight md:text-[48px] md:leading-[1.15] font-semibold text-[#1B1B1B] text-center lg:text-left"
                >
                Our Story
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-3 text-[16px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                Asad Hamir’s passion for technology started in childhood, working with his father, an IT engineer, repairing computers. From early on, he learnt that tech isn’t disposable—it should be reused and repaired.
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-3 text-[16px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                Years later, while visiting his hometown of Dar es Salaam in Tanzania, Asad saw piles of discarded tech from UK companies. This wasn’t just old tech; it was electronic waste, dumped in Africa because recycling was more expensive in the UK. Shocked, Asad found that businesses, responsible for 70% of global tech consumption, continued to buy new devices despite slowing innovation, avoiding sustainable solutions
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-3 text-[16px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                Determined to make a difference, Asad teamed up with his childhood friend Zahid, and together, they founded Knightfolio360 to make sustainable tech simple for businesses and tackle the electronic waste crisis.
                </motion.p>
                
            </div>

           
            </div>
        </div>
         </section>
          {/* hero*/}
        <motion.section className='bg-[#FFC10E] '>
              <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-16 ">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  {/* Left copy */}
                  <div className='w-full flex flex-col items-center lg:items-start' >
                    <motion.h1
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-[34px] leading-tight md:text-[48px] md:leading-[1.15] font-semibold text-white text-center lg:text-left"
                    >
                      A vision for a better future
                    </motion.h1>
        
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="mt-6 text-[16px] leading-7 text-white max-w-[560px] text-center lg:text-left font-semibold"
                    >
                      No sugarcoating, the world is at a tipping point. Hardware has hit a plateau. Innovation has slowed down, but consumption hasn’t. Our fixation with the Shiny and New is driving the planet to the brink of crisis. With waste choking up landfill 6x faster than we can recycle it.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="mt-2 text-[16px] leading-7 text-white max-w-[560px] text-center lg:text-left font-semibold"
                    >
                     At Knightfolio360 we think we can change this trajectory. Tilting tech towards a circular economy. Where products are made to last, born to live long and multiple lives – then dismantled and repurposed as something new. Powering a happier landscape. Where prices are fairer. Innovation is available to those who need it most. And progress goes round.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="mt-2 text-[16px] leading-7 text-white max-w-[560px] text-center lg:text-left font-semibold"
                    >
                    - Asad Hamir & Zahid Khimji (Co-founders of Knightfolio360)
                    </motion.p>
        
                    
                  </div>
        
                  {/* Right illustration */}
                   <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* subtle dotted ring accent */}
                    <div className="relative">
                      <img src='images/Untitled_e09964db-b2d6-4a01-a4b4-d6699c8786f0.jpg'></img>
                    </div>
                  </motion.div>
                </div>
              </div>
        </motion.section>
         {/* What makes us */}
        <section className="">
              <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-14 md:py-20 ">
                <h2 className="text-[32px] md:text-[48px] font-semibold text-[#F5F5F5] text-center lg:text-left">
                  What makes us Knightfolio360
                </h2>
                <p className="mt-4 text-[#F5F5F5] text-[24px] text-center lg:text-left">
                  The values that sustain us in all that we do.
                </p>
        
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">
                  {items.map((it, i) => (
                    <motion.a
                      key={it.title}
                      href={it.href}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.45, delay: delayByIndex(i) }}
                      className="group relative rounded-xl border border-[#1B1B1B] bg-white p-4 md:p-5 text-[#272727] "
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-col items-center lg:items-start gap-4 ">
                        {/* Icon */}
                        <motion.img
                          src={it.icon}
                          alt=""
                          className="w-auto h-50 "
                          initial={false}
                          whileHover={{ x: 2 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        />
                        {/* Copy */}
                        <div>
                          <h3 className="text-[20px] md:text-[24px] font-semibold text-center lg:text-left ">
                            {it.title}
                          </h3>
                          <p className="mt-1 text-[16px] md:text-[18px] leading-6 text-center lg:text-left ">
                            {it.body}
                          </p>
        
                          
                        </div>
                      </div>
        
                      {/* Accent outline on hover */}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#FFB84D]/40 transition group-hover:ring-4"
                        aria-hidden="true"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
        </section>
        {/* slider */}
        <section className="relative py-20 px-4 bg-[#F5F5F5]">
            <div className="flex flex-col lg:flex-row relative z-10 container mx-auto px-4">
                <div className='lg:w-1/5'>
                   <h2 className="text-[32px] font-semibold text-black text-center lg:text-left">Our powerful partnerships</h2>
                </div>
                <div className='lg:w-4/5'>
                   <LogosMarquee2/>
                </div>
               
            </div>
           
        </section>
        {/* Why Choose */}
         <section className="py-16 md:py-20">
        <div className="max-w-[1720px] mx-auto flex flex-col gap-20 justify-center items-center px-4 md:px-8 py-0 ">
           
            <div className="w-full md:w-[75%] lg:w-full  flex flex-col lg:flex-row items-center bg-white gap-10 lg:gap-0 border border-1 border-black rounded-xl">
            {/* Left copy */}
             {/* Right illustration */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="lg:w-1/2 relative"
            >
                {/* subtle dotted ring accent */}
                <div className="overflow-hidden">
                <img src="images/bcorp_2_1244x1127_crop_center_1ccaf841-6c16-497d-af43-024dc5f75cda.jpeg" className="h-[500px] rounded-xl "></img>
                </div>
            </motion.div>
            <div className='lg:w-1/2 md:p-4  flex flex-col items-center lg:items-start '>
                <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[34px] leading-tight md:text-[48px] md:leading-[1.15] font-semibold text-[#1B1B1B] text-center lg:text-left"
                >
                Tech Supplier to B-Corp
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-6 text-[18px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                We’re not just B-Corp certified. We’re the official supplier of their IT.
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-3 text-[18px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                With an impressive score of 110—well above the 80-point threshold required to achieve B-Corp certification—we’re proud to be in the top quartile of B-Corps. This certification is awarded exclusively to companies dedicated to making a positive impact in the world
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-3 text-[18px] leading-7 text-[#6F6F6F] text-center lg:text-left"
                >
                In 2025 we re-certify & we will roll up our sleeves to score even higher.
                </motion.p>
                
            </div>

           
            </div>
        </div>
         </section>
         {/* Services*/}
        <section className="relative py-20 px-4 bg-[#F5F5F5]">
                
             <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-[32px] md:text-[48px] font-semibold text-left text-black">Explore Our Other Services</h2>
              </div>
              <ServiceSlider />
        </section>
       
      <Footer/>
    </>
  )
}

export default About
