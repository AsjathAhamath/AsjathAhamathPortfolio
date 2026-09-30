import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F7FA] relative selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40 -z-20" />
      
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
