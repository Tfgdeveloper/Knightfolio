import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import { Link } from 'react-router';
import { useState } from 'react';
const categories = [ 'Logo Portfolio',];

const projects = [
  {
    id: 48,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/FreeWarrantyAndService01_HasnainShakil.png',
  },
  {
    id: 49,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/FreeWarrantyAndService02.jpeg',
  },
  {
    id: 50,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/FreeWarrantyAndService03.jpeg',
  },
  {
    id: 51,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/greenhydrogensummitoman.jpg',
  },
  {
    id: 52,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch1_Mesa de trabajo 1 copia 2.png',
  },
    {
    id: 53,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch1_Mesa de trabajo 1 copia 3.png',
  },
    {
    id: 54,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch1_Mesa de trabajo 1 copia 4.png',
  },
    {
    id: 55,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch1_Mesa de trabajo 1 copia.png',
  },
    {
    id: 56,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch3_Slide1 copy.png',
  },
    
  {
    id: 60,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/SocialRngagement-02_HasnainShakil.png',
  },
  {
    id: 61,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/SocialRngagement-03.jpeg',
  },
  {
    id: 62,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Style copy face & quote 2.png',
  },
  {
    id: 63,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Style copy face & quote.png',
  },
  {
    id: 58,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch3_Slide1.png',
  },
    {
    id: 59,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch3_Slide2 copy 3.png',
  },
 
];

export default function Socialmedia({  onNavigate }) {

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
                              <h2 className="text-[32px] md:text-[56px] font-semibold text-left text-white">Social Media Content & Management</h2>

                          </div>
                          <p
                            className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
                          >
                            Knightfolio360 creates scroll-stopping content and manages your social presence to keep your brand active, consistent, and engaging.

                          </p>
                          </div>
                         
        </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#381C75] text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600 text-lg mb-8">Our social media content and management service helps brands maintain a consistent, professional, and engaging presence across all major platforms. We combine creative content production with strategic planning to deliver posts, reels, stories, and campaigns that attract attention and drive results.</p>

              <h3 className="text-[#381C75] text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Consistent, high-quality content tailored to your brand voice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Improved audience engagement and follower growth</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Professionally designed visuals optimized for each platform</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Strategic posting schedules based on performance insights</span>
                  </li>
               
              </ul>
            </div>

            <div>
              <img
                src="images/Website Icons/Social media content & management-min.webp"
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
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Creative Content Production</h3>
                <p className="text-gray-600">We design premium posts, reels, stories, banners, and ad creatives tailored to your brand identity and optimized for Instagram, Facebook, TikTok, LinkedIn, and more.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Social Media Strategy & Planning</h3>
                <p className="text-gray-600">We develop monthly content calendars, posting schedules, campaign ideas, and engagement strategies to ensure your brand stays active and relevant.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Account Management & Community Handling</h3>
                <p className="text-gray-600">From posting and monitoring performance to responding to comments and messages, we manage your daily activities so your brand stays consistently active.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Performance Tracking & Analytics Reports</h3>
                <p className="text-gray-600">We deliver monthly insights on reach, engagement, audience growth, and ad performance to help you understand what works and refine future content strategies.</p>
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
