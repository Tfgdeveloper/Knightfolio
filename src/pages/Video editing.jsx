import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ServiceSlider from '../components/ServiceSlider';
import { useState } from 'react';
const categories = [ 'Logo Portfolio',];

const projects = [
 {
    id: 64,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/1.jpg',
    videoUrl: 'https://www.youtube.com/embed/H0Hk0pPBaXM?si=DqH9EOCIpetBhrwF'
    },
    {
    id: 65,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/2.jpg',
    videoUrl: 'https://www.youtube.com/embed/XfcfLl31EYM?si=Z-0o1xOPhu_O3iai'
    },
    {
    id: 66,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/3.jpg',
    videoUrl: 'https://www.youtube.com/embed/XK-YAVMBT3g?si=DRgt03MY79F8jbus'
    },
    {
    id: 67,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/4.jpg',
    videoUrl: 'https://www.youtube.com/embed/eZaWcpcfyII?si=SKAJ2dSyZLpLPXR4'
    },
    {
    id: 68,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/5.jpg',
    videoUrl: 'https://www.youtube.com/embed/Kj3riLcSMKo?si=QqiF112VD9nCYKwO'
    },
    {
    id: 69,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/6.jpg',
    videoUrl: 'https://www.youtube.com/embed/MIIlajRBUDE?si=MxPfiBjHwDagD5ay'
    },
    {
    id: 70,
    category: 'Video Editing, Animation, Motion Graphics',
    image:
      'images/Services/Video Editing, Animation, Motion Graphics/7.jpg',
    videoUrl: 'https://www.youtube.com/embed/mUtddlb-qS8?si=wYlCKozoa99ERTY_'
    },
];

export default function Videoediting({  onNavigate }) {

    const [selectedCategory, setSelectedCategory] = useState('All');
      const [selectedImage, setSelectedImage] = useState(null); // popup image
      const [zoom, setZoom] = useState(1); 
  
      const [selectedVideo, setSelectedVideo] = useState(null);
    
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
                              <h2 className="text-[32px] md:text-[56px] font-semibold text-left text-white">Video Editing, Animation & Motion Graphics</h2>

                          </div>
                          <p
                            className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
                          >
                            Knightfolio360 produces dynamic video, animation, and motion graphics that tell your story with energy, clarity, and impact.

                          </p>
                          </div>
                         
        </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#381C75] text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-600 text-lg mb-8">Our video editing, animation, and motion graphics service brings your brand stories to life through dynamic visuals and professional production. From promotional ads and product videos to animated explainers and social media reels, we craft high-impact visuals that engage audiences and communicate your message with clarity and creativity.</p>

              <h3 className="text-[#381C75] text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Professionally edited, high-quality videos tailored to your brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Increased viewer engagement through impactful visuals and transitions</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Enhanced storytelling with custom animations and motion graphics</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#007C00] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Optimized exports for social media, websites, and advertisements</span>
                  </li>
               
              </ul>
            </div>

            <div>
              <img
                src="images/Website Icons/Video editing, Animation & motion graphics-min.webp"
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
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Professional Video Editing</h3>
                <p className="text-gray-600">We edit raw footage into compelling, story-driven videos with smooth transitions, clean cuts, audio enhancement, text overlays, and color grading for a premium finish.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Custom Animation & Motion Graphics</h3>
                <p className="text-gray-600">Our team creates animated elements, kinetic typography, logo animations, lower thirds, intros/outros, and explainer graphics to boost visual engagement.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Social Media & Ad Video Production</h3>
                <p className="text-gray-600">We design short-form videos, reels, TikToks, YouTube shorts, and ad creatives optimized for platform requirements and viewer retention.</p>
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-[#381C75] text-xl font-semibold mb-3">Full Post-Production Delivery</h3>
                <p className="text-gray-600">You receive polished, ready-to-publish video files in multiple formats (MP4, MOV, Web-optimized sizes), along with versions for ads, social media, and high-resolution platforms.</p>
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
               onClick={() => {
                                if (project.videoUrl) {
                                  setSelectedVideo(project.videoUrl);
                                  setSelectedImage(null);
                                } else {
                                  setSelectedImage(project.image);
                                  setSelectedVideo(null);
                                }
                              }} // OPEN POPUP
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
       {selectedVideo && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="relative w-[90%] max-w-4xl bg-black rounded-lg p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        className="w-full h-[500px] rounded-lg"
        src={selectedVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute -top-10 right-0 bg-white px-3 py-1 text-black rounded"
      >
        Close
      </button>
    </div>
  </div>
)}
      <Footer/>
    </div>
  );
}
