'use client';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
const ctaBlocks = [
  
  {
    icon: 'images/Asset 6.svg', // Replace with your actual icon path
    title: 'Instant IT Support',
    buttonText: 'Start a Live Chat',
    href: '#',
  },
];

// Animation variants for the container (to manage staggering)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Time delay between each child animating in
    },
  },
};

// Animation variants for each individual CTA block
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#381C75] to-[#007C00] ">
       <div className="container mx-auto max-w-5xl px-4 mb-12 ">
        
        {/* Header Content */}
        <div className="text-center mb-12 md:mb-16 pt-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get Started with Knightfolio360
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
            Change your style 360 degree and grow your business with Knightfolio360
          </p>
          <div className='flex flex-row gap-4 mt-10 justify-center'>             
              
              <div className='flex flex-row gap-4 justify-center items-center'>

              <Link
                to="/contact-us"
            className="inline-flex items-center gap-2 bg-[#FFC10E] text-[#1b1b1b] py-3 px-6 rounded-full border-2 border-[#1b1b1b] shadow-[3px_3px_0_#1b1b1b] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
              >
                Get started now  <FiArrowRight />
              </Link>
              </div>
          </div>    
        </div>

      
      </div>
      <div className="bg-[#1B1B1B] pt-14 pb-10 border-b-10 border-[#FFC10E] ">
      <div className="max-w-[1720px] mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between">

        {/* Column 1 – Brand */}
        <div>
          <Link to="/" className="text-[34px] font-semibold ">
            <img src="images/image 20.png" className="w-25"></img>
            </Link>
          <p className=" mt-4 text-[#fff] text-sm leading-relaxed max-w-lg">
            Knightfolio360 stands at the intersection of design, technology, and purpose. As a digital agency born from
3B Knights Group, our mission goes beyond visuals - we build brands that carry meaning, purpose, and light.
          </p>


          <p className="hidden md:flex text-[#9A9A9A] text-xs mt-8">
            © {new Date().getFullYear()}  Knightfolio360. All rights reserved.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10'>
        {/* Column 2 – Services */}
        <div>
          <h3 className="text-[#FFC10E] font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li><Link to="/logodesign">Logo Design</Link></li>
            <li><Link to="/web-design-and-development">Web design and development</Link></li>
            <li><Link to="/graphic-design-and-illustrations">Graphic design & Illustrations</Link></li>
            <li><Link to="/social-media-content-and-management">Social media content & management</Link></li>
            <li><Link to="/video-editing-animation-and-motion-graphics">Video editing, Animation & motion graphics</Link></li>
            <li><Link to="/creative-strategy-and-concept-development">Creative strategy & concept development</Link></li>
          </ul>
        </div>

        {/* Column 3 – contact */}
       
        <div>
          <h3 className="text-[#FFC10E] font-semibold mb-3">Contact info</h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li><Link to="tel:+447926471214">+44 7926 471214</Link></li>
            <li><Link to="mailto:info@knightfolio360.com">info@knightfolio360.com</Link></li>
           
          </ul>
          <p className="md:hidden flex text-[#9A9A9A] text-xs mt-8 text-center">
            © {new Date().getFullYear()}  Knightfolio360. All rights reserved.
          </p>
        </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
