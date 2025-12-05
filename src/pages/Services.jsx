import { useState } from "react";
import StickyHeader from '../components/StickyHeader'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

import VideoPlayerSection from "../components/VideoPlayerSection";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";


const Services = () => {
  return (
    <>
      <StickyHeader/>
        {/* Hero */}
         <motion.section className="bg-gradient-to-br from-[#381C75] to-[#007C00]">
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-0">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left copy */}
          <div className='w-full flex flex-col items-center lg:items-start mt-25 ' >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[34px] leading-tight md:text-[56px] md:leading-[1.15] font-bold text-white text-center lg:text-left"
            >
              Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
            >
              At Knightfolio360, we offer everything from full brand management to social media content, print design and video editing and animation.

            </motion.p>
       

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-6"
            >
              <Link
              to="/portfolio"
            className="inline-flex mb-16 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
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
            className="relative w-full flex overflow-visible items-end justify-"
          >
             <img src="images/Services-page-Image (1).png" className="md:mt-20"></img>
            
           
          </motion.div>
        </div>
      </div>
        </motion.section>

         <section className="relative py-[125px]  px-4  bg-[#F5F5F5] ">
                
             <div className="max-w-[1720px] relative h-full mx-auto flex flex-col justify-center items-center md:items-start px-4 gap-[75px]">
               {/* Service1 */}
                <div className="w-auto flex flex-col md:flex-row shadow-lg rounded-3xl ">
                  <div className="md:w-1/2 ">
                    <img src="images/Website Icons/Logo Design-min.webp" className="rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl  "/>
                  </div>
                   <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-b-3xl md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl flex flex-col justify-center items-center md:items-start px-[20px] md:px-[40px] py-[40px] md:px-[0px]">
                      <h2 className="text-[24px] md:text-[36px] leading-none font-semibold text-left text-white">Logo Design</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] text-white text-center md:text-left">Knightfolio360 delivers refined, purposeful logo designs that strengthen your brand’s presence across every touchpoint.
</p>
                      
                      <Link
                                   to="/logodesign"
                                  className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                                >
                                  Explore more <FiArrowRight />
                                </Link>
                  </div>

                </div>
                {/* Service2 */}
                <div className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl ">
                   <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl flex flex-col justify-center items-center md:items-start px-[20px] py-[40px] py-[0px] ">
                      <h2 className="text-[24px] md:text-[36px] leading-none font-semibold md:text-left text-center text-white">Web design and development</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] md:text-left text-center text-white">At Knightfolio360, we craft elegant, future-ready web experiences that blend design excellence with powerful development.</p>
                       <Link
                          to="/web-design-and-development"
                         className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                       >
                        Explore more <FiArrowRight />
                      </Link>

                  </div>
                  <div className="md:w-1/2">
                    <img src="images/Website Icons/Website Design and Development-min.webp" className="rounded-b-3xl md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl"/>
                  </div>

                </div>
                {/* Service3 */}
                <div className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl ">
                  <div className="md:w-1/2">
                    <img src="images/Website Icons/Graphic design & Illustrations-min.webp" className="rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl"/>
                  </div>
                   <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-b-3xl  md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl flex flex-col justify-center items-center md:items-start px-[20px] py-[40px] py-[0px]">
                      <h2 className="text-[24px] md:text-[36px] leading-none font-semibold md:text-left text-center text-white">Graphic design & Illustrations</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] md:text-left text-center text-white">
                          Knightfolio360 crafts bold, expressive graphics and illustrations that bring your brand’s personality to life.</p>
                      <Link
                          to="/graphic-design-and-illustrations"
                         className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                       >
                        Explore more <FiArrowRight />
                      </Link>
                  </div>

                </div>
                {/* Service4 */}
                <div className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl ">
                   <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl flex flex-col justify-center items-center md:items-start px-[20px] py-[40px] py-[0px] ">
                      <h2 className="text-[24px] md:text-[36px] leading-none font-semibold md:text-left text-center text-white">Social media content & management</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] md:text-left text-center text-white">Knightfolio360 creates scroll-stopping content and manages your social presence to keep your brand active, consistent, and engaging.</p>
                        <Link
                          to="/social-media-content-and-management"
                         className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                       >
                        Explore more <FiArrowRight />
                      </Link>
                  </div>
                  <div className="md:w-1/2">
                    <img src="images/Website Icons/Social media content & management-min.webp" className="rounded-b-3xl md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl"/>
                  </div>

                </div>
                {/* Service5 */}
                <div className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl ">
                  <div className="md:w-1/2">
                    <img src="images/Website Icons/Video editing, Animation & motion graphics-min.webp" className="rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl"/>
                  </div>
                   <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-b-3xl  md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl flex flex-col justify-center items-center md:items-start px-[20px] py-[40px] py-[0px]">
                      <h2 className="text-[24px] md:text-[36px] font-semibold leading-none md:text-left text-center text-white ">Video editing, Animation & motion graphics</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] md:text-left text-center text-white">Knightfolio360 produces dynamic video, animation, and motion graphics that tell your story with energy, clarity, and impact.</p>
                       <Link
                          to="/video-editing-animation-and-motion-graphics"
                         className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                       >
                        Explore more <FiArrowRight />
                      </Link>
                  </div>

                </div>
                {/* Service6 */}
                <div className="w-full flex flex-col md:flex-row shadow-lg rounded-3xl ">
                    <div className="md:w-1/2 bg-gradient-to-br from-[#381C75] to-[#007C00] rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl flex flex-col justify-center items-center md:items-start px-[20px] py-[40px] py-[0px] ">
                      <h2 className="text-[24px] md:text-[36px] font-semibold leading-none md:text-left text-center text-white">Creative strategy & concept development</h2>
                      <p className="mt-4 text-[16px] md:text-[18x] md:text-left text-center text-white">Knightfolio360 develops smart, insight-driven creative concepts and strategies that shape stronger brands and more effective campaigns.</p>
                        <Link
                          to="/creative-strategy-and-concept-development"
                         className="inline-flex mt-4 items-center gap-2 bg-[#FFC10E] text-[#333435] py-3 px-6 rounded-full border-2 border-[#333435)] shadow-[3px_3px_0_#333435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                       >
                        Explore more <FiArrowRight />
                      </Link>
                  </div>
                  <div className="md:w-1/2">
                    <img src="images/Website Icons/Creative strategy & concept development-min.webp" className="rounded-b-3xl md:rounded-b-none md:rounded-r-3xl md:rounded-br-3xl"/>
                  </div>

                </div>
              </div>
             
        </section>

        <section className="relative py-20 px-4 bg-white">
                 <VideoPlayerSection/> 
        </section>
      <Footer/>
    </>
  )
}

export default Services
