import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechAchievements from './components/TechAchievements'; // Insert after Hero
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks'; // Insert before footer
import HeroCanvas from './components/canvas/Computers';
import About from './components/About';

function App() {
  return (
    <main className="relative z-0 bg-[#0a0a0a] min-h-screen">
      <HeroCanvas /> 
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About/>
        <TechAchievements /> {/* New Skills & Awards section */}
        <Experience />
        <Gallery />
        <Contact />
        <SocialLinks /> {/* New Social Links section */}
        
        <footer className="py-10 text-center px-10">
          <p className="font-mono text-[10px] text-gray-600 tracking-[0.5em] uppercase">
            © 2026 Portfolio By Prince Inc.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;