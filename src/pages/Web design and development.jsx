import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import { Link } from 'react-router';
import { useState } from 'react';
const categories = [ 'Logo Portfolio',];

const projects = [
 {
    id: 36,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (1).jpeg',
  },
  {
    id: 37,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (2).jpeg',
  },
  {
    id: 38,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (3).jpeg',
  },
  {
    id: 39,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (4).jpeg',
  },
  {
    id: 40,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (5).jpeg',
  },
  {
    id: 41,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (6).jpeg',
  },
  {
    id: 42,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (7).jpeg',
  },
  {
    id: 43,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (8).jpeg',
  },
  {
    id: 44,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (9).jpeg',
  },
  {
    id: 45,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (10).jpeg',
  },
  {
    id: 46,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (11).jpeg',
  },
  {
    id: 47,
    category: 'Website Portfolio',
    image:
      'images/Services/Website Portfolio/1 (12).jpeg',
  },
 
];

export default function Webdesignanddevelopment({  onNavigate }) {

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
                              <h2 className="text-[32px] md:text-[56px] font-semibold text-left text-white">Web design and development</h2>

                          </div>
                          <p
                            className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
                          >
                            At Knightfolio360, we craft elegant, future-ready web experiences that blend design excellence with powerful development.



                          </p>
                          </div>
                         
        </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#381C75] text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600 text-lg mb-8">Our website design and development service focuses on building modern, high-performing websites that elevate your brand and convert visitors into customers. We combine strategic UI/UX design, clean coding practices, and responsive layouts to deliver websites that look exceptional and function flawlessly across all devices.</p>

              <h3 className="text-[#381C75] text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">High-performing websites built for speed, stability, and SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Custom UI/UX design tailored to brand identity and user behavior</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Fully responsive layouts optimized for mobile, tablet, and desktop</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Scalable development with clean, secure, and maintainable code</span>
                  </li>
               
              </ul>
            </div>

            <div>
              <img
                src="/images/Website Icons/Website Design and Development-min.webp"
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
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Custom Website UI/UX Design</h3>
                <p className="text-gray-600">We create visually compelling and user-friendly layouts designed around your brand identity and customer journey. Every page is crafted for clarity, conversion, and engagement.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Responsive Front-End Development</h3>
                <p className="text-gray-600">Your website is developed using modern frameworks to ensure fast loading, smooth animations, and flawless performance across all devices.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">SEO-Ready Structure & Clean Code</h3>
                <p className="text-gray-600">We build with search engine best practices in mind—fast loading, optimized markup, and proper on-page structure—giving your site a strong foundation for organic visibility.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Complete Website Setup & Integrations</h3>
                <p className="text-gray-600">From hosting and CMS setup to form integrations, analytics, payment gateways, and security tools—we handle everything required to launch a fully functional website.</p>
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
