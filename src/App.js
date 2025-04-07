import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.module.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
