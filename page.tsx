
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


import React from 'react'

const homePage = () => {
  return (
    <div>
      <Navbar />  
       <Hero />
      <About />
       <Contact />
       <Footer />
    
      
    </div>
  )
}

export default homePage


