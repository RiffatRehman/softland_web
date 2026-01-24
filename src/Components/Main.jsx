import React from 'react';
import NavbarComp from './NavbarComp';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home  from './Home';
import About from './About';
import Features from './Features';
import Gallery from './Gallery';
import Contact from './Contact';
import Pricing from './Pricing';
import Footer from './Footer';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  return (
    <>
    <NavbarComp />
   <Home />
   <About />
   <Features />
   <Gallery />
   <Pricing />
   <Contact />
   <Footer/>

  
    </>
  )
}

export default Main