import React from 'react'
import useLenis from "./hooks/useLenis";
import ReactDOM from "react-dom/client";
import Home from './pages/Home';
import { BrowserRouter,Link, Route, Router, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import  PortfolioPage  from './pages/Portfolio';

import Logodesign from './pages/LogoDesign';
import Webdesignanddevelopment from './pages/Web design and development';
import GraphicDesignandIllustrations from './pages/Graphic Design and Illustrations';
import Socialmedia from './pages/Social media';
import Videoediting from './pages/Video editing';
import Creativestrategy from './pages/Creative strategy';
import ScrollToTop from './components/ScrollToTop';


function App() {
  useLenis();
  

ReactDOM.createRoot(root).render(
      <BrowserRouter>
      <ScrollToTop />
       
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/logodesign" element={<Logodesign/>} />
          <Route path="/web-design-and-development" element={<Webdesignanddevelopment/>} />
          <Route path="/graphic-design-and-illustrations" element={<GraphicDesignandIllustrations/>} />
          <Route path="/social-media-content-and-management" element={<Socialmedia/>} />
          <Route path="/video-editing-animation-and-motion-graphics" element={<Videoediting/>} />
          <Route path="/creative-strategy-and-concept-development" element={<Creativestrategy/>} />
          
        </Routes>
      </BrowserRouter>
);

 return (
   <>
   </>
  );
}

export default App;
