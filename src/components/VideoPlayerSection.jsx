'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaExpand } from 'react-icons/fa';

// --- CONFIGURATION ---
// Replace this with the path to your video file in the `public` folder
const VIDEO_SRC = "images/video.mp4"; 

export default function VideoPlayerSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null); // Ref for the fullscreen container

  // Framer Motion hook to detect when the video is in view
  const isInView = useInView(videoRef, { 
    once: false, // Play/pause every time it enters/leaves view
    amount: 0.5 // Trigger when 50% of the video is visible
  });

  // State management for video controls
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Effect to play/pause video when it enters or leaves the viewport
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          // Autoplay was prevented.
          console.error("Video autoplay was prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // Toggle mute state
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Toggle fullscreen state
  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Container for video and controls */}
        <motion.div
          ref={containerRef}
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            loop
            muted // Start muted for autoplay to work reliably
            playsInline // Crucial for autoplay on iOS
            controls={false} // Hide default browser controls
            className="w-full h-full object-cover"
            // This attribute helps prevent the download button in some browsers
            controlsList="nodownload" 
          />

          {/* Custom Controls Overlay */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex items-center justify-end gap-4">
              {/* Mute/Unmute Button */}
              

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="text-white text-xl p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Toggle fullscreen"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}