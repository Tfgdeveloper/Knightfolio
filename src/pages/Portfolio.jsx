import { useState } from 'react';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';

const categories = ['All', 'Logo Portfolio', 'Graphic Design and Illustrations', 'Website Portfolio', 'Video Editing, Animation, Motion Graphics', 'Social Media Ads'];

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
    id: 57,
    category: 'Social Media Ads',
    image:
      'images/Services/Social Media Ads/Pitch3_Slide2 copy 2.png',
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
  {
    id: 20,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/2.png',
  },
  {
    id: 21,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/03.jpg',
  },
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
  {
    id: 17,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/01.jpg',
  },
  {
    id: 18,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/1.png',
  },
  {
    id: 19,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/02.jpg',
  },
  
  {
    id: 22,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/04.jpg',
  },
  {
    id: 23,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/05.jpg',
  },
  {
    id: 24,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/06.jpg',
  },
  {
    id: 25,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/07.jpg',
  },
  {
    id: 26,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/08.jpg',
  },
  {
    id: 27,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/09.jpg',
  },
  {
    id: 28,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/10.jpg',
  },
  {
    id: 29,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/11.jpg',
  },
  {
    id: 30,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/12.jpg',
  },
  {
    id: 31,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/13.jpg',
  },
  {
    id: 32,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/14.jpg',
  },
  {
    id: 33,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/3.png',
  },
  {
    id: 34,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/4.png',
  },
  {
    id: 35,
    category: 'Graphic Design and Illustrations',
    image:
      'images/Services/Graphic Design and Illustrations/5.png',
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

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null); // popup image
  const [zoom, setZoom] = useState(1); 
  const [selectedVideo, setSelectedVideo] = useState(null);
  

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const [visibleCount, setVisibleCount] = useState(16); // show 4 items initially

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16); // load 4 more each click
  };
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));   // max 3x
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5)); // min 0.5x
  const handleResetZoom = () => setZoom(1);

  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div>
       <StickyHeader/>
              {/* Hero */}
            <motion.section className="bg-gradient-to-br from-[#381C75] to-[#007C00]">
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 ">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left copy */}
          <div className='w-full flex flex-col items-center lg:items-start mt-25' >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[34px] leading-tight md:text-[56px] md:leading-[1.15] font-bold text-white text-center lg:text-left"
            >
              Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-4 md:mt-5 text-[16px] leading-7 text-white/80 max-w-[560px] text-center lg:text-left"
            >
              Where ideas become visuals. Explore the projects that shape our story.

            </motion.p>
       

           
          </div>

          {/* Right illustration */}
           <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-full flex overflow-visible items-center justify-center"
          >
             <img src="images/Portfolio-page-Image (1).png" className="md:mt-10"></img>
            
           
          </motion.div>
        </div>
      </div>
        </motion.section>
   

      {/* Filter Section */}
      <section className="bg-white py-8  z-40 border-b">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#381C75] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#FFC10E] hover:text-[#333435]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="w-full h-64 object-cover object-start object-top transform group-hover:scale-105 transition-transform duration-500"
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

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#381C75] text-3xl font-bold mb-4">Results That Matter</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '250+', label: 'Happy Clients' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#381C75] text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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

export default PortfolioPage;
