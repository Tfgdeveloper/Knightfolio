import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import { useState } from 'react';
import { Link } from 'react-router';

const categories = [ 'Logo Portfolio',];

const projects = [
  {
    id: 1,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/01.webp',
  },
  {
    id: 2,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/2.webp',
  },
  {
    id: 3,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/02.webp',
  },
  {
    id: 4,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/3.webp',
  },
  {
    id: 5,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/03.webp',
  },
  {
    id: 6,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/4.webp',
  },
  {
    id: 7,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/04.webp',
  },
  {
    id: 8,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/5.webp',
  },
  {
    id: 9,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/05.webp',
  },
  {
    id: 10,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/6.webp',
  },
  {
    id: 11,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/7.webp',
  },
  {
    id: 12,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/8.webp',
  },
  {
    id: 13,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/9.webp',
  },
  {
    id: 14,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/10.webp',
  },
  {
    id: 15,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/11.webp',
  },
  {
    id: 16,
    category: 'Logo Portfolio',
    image:
      'images/Services/Logo Portfolio/12.webp',
  },
 
];

export default function Logodesign({  onNavigate }) {

    const [selectedCategory, setSelectedCategory] = useState('All');
      const [selectedImage, setSelectedImage] = useState(null); // popup image
      const [zoom, setZoom] = useState(1); 
      
    
      const filteredProjects =
        selectedCategory === 'All'
          ? projects
          : projects.filter((project) => project.category === selectedCategory);
    
      const [visibleCount, setVisibleCount] = useState(9); // show 4 items initially
    
      const visibleProjects = filteredProjects.slice(0, visibleCount);
    
      const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 9); // load 4 more each click
      };
      const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));   // max 3x
      const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5)); // min 0.5x
      const handleResetZoom = () => setZoom(1);
    
      const hasMore = visibleCount < filteredProjects.length;


  return (
    <div>
      <StickyHeader/>
        {/* Hero */}
        <section className="relative py-4 px-4 h-[80vh] bg-gradient-to-br from-[#381C75] to-[#007C00]">
                            
                         <div className="max-w-[1720px] relative h-full mx-auto flex flex-col justify-center items-between px-4">
                          <div>
                             <Link to="/services"
                             
                                className="flex items-center gap-2 mb-8 text-white hover:text-[#FFC10E] transition-colors"
                              >
                                <FaArrowLeft size={20} />
                                Back to Services
                              </Link>
                              <h2 className="text-[32px] md:text-[56px] font-semibold text-left text-white">Logo Design</h2>

                          </div>
                          <p
                            className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
                          >
                            Knightfolio360 delivers refined, purposeful logo designs that strengthen your brand’s presence across every touchpoint.

                          </p>
                          </div>
                         
        </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#381C75] text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600 text-lg mb-8">Our logo design service helps you establish a strong and memorable brand identity through meaningful, professionally crafted visuals. We translate your brand values, audience preferences, and business goals into a unique logo that stands out across all digital and print platforms.</p>

              <h3 className="text-[#381C75] text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">A distinctive and professional brand identity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">High-quality designs suitable for web, print, and merchandise</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Unlimited revisions until the design aligns perfectly with your vision</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Improved brand recognition and customer trust</span>
                  </li>
               
              </ul>
            </div>

            <div>
              <img
                src="images/Website Icons/Logo Design-min.webp"
                className="rounded-lg shadow-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#333435]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Custom Logo Concepts</h3>
                <p className="text-gray-600">We provide multiple unique logo concepts tailored to your brand identity, ensuring you have strong creative directions to choose from.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Strategic Brand Elements</h3>
                <p className="text-gray-600">Our team develops custom typography, iconography, and a cohesive color palette that aligns with your brand’s tone and target audience.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Professional & Scalable Files</h3>
                <p className="text-gray-600">You receive fully vector-based logo designs for flawless scalability, delivered in essential formats including AI, EPS, PDF, PNG, JPG, and SVG.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Complete Brand Identity Package</h3>
                <p className="text-gray-600">We supply a detailed brand style guide and essential logo variations—primary, secondary, monochrome, favicon, and a social media kit for consistent branding across all platforms.</p>
              </div>
           
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 text-center mb-18">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedImage(project.image)} // OPEN POPUP
            >
              <div className="relative overflow-hidden bg-[#F5F5F5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More button */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 text-sm font-semibold rounded-full border bg-[#381C75] text-white transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>

        {/* Services*/}
              <section className="relative py-20 px-4 bg-[#F5F5F5]">
                      
                   <div className="relative z-10 container mx-auto px-4">
                      <h2 className="text-[32px] md:text-[48px] font-semibold text-left text-black">Explore Our Other Services</h2>
                    </div>
                    <ServiceSlider />
              </section>      

                    {/* POPUP MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => {
            setSelectedImage(null);
            setZoom(1);  // reset zoom when closing
          }}
        >
          {/* Inner container – stop click from closing */}
          <div
            className="relative max-w-4xl w-full p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controls */}
            <div className="absolute -top-8 -right-42 flex gap-2">
              <button
                onClick={handleZoomOut}
                className="px-2 py-1 bg-white/80 rounded text-sm font-semibold"
              >
                -
              </button>
              <button
                onClick={handleZoomIn}
                className="px-2 py-1 bg-white/80 rounded text-sm font-semibold"
              >
                +
              </button>
              <button
                onClick={handleResetZoom}
                className="px-2 py-1 bg-white/80 rounded text-sm font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Zoomable image */}
            <div className="max-h-[80vh] max-w-full ">
              <img
                src={selectedImage}
                alt="preview"
                className="w-auto max-h-[80vh] rounded-lg shadow-lg transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>
      )}
      
      <Footer/>
    </div>
  );
}
