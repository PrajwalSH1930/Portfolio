import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants/store';
import HeroCanvas from './canvas/Computers'; // Import the 3D Canvas

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center px-10 bg-[#0a0a0a] overflow-hidden">
      {/* 3D Neural Background */}
      <HeroCanvas />
      
      {/* Overlay Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

      <div className="z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-accent shadow-[0_0_10px_#00f0ff]" />
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em]">
              Core_Engine_Active // {DATA.profile.designation}
            </span>
          </div>
          
          <h1 className="text-white font-bold text-[55px] md:text-[85px] leading-[0.9] mb-8 tracking-tighter">
            PRAJWAL<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #00f0ff' }}>
              HIREMATH
            </span>
          </h1>

          <div className="border-l-2 border-accent/30 pl-6 mb-10">
            <p className="text-gray-400 font-mono text-xs max-w-lg leading-relaxed lowercase italic">
              // root@prajwal:~$ {DATA.profile.about}
            </p>
          </div>

          <div className="flex gap-6">
            {/* PROTOCOL 01: Resume Access */}
            <a 
                href={DATA.profile.resumeLink} // Points to /PRAJWAL_HIREMATH_RESUME.pdf in public folder [cite: 2, 34]
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-3 overflow-hidden border border-accent bg-transparent text-accent font-mono text-[10px] uppercase tracking-widest transition-all hover:text-black"
            >
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
                Download_CV.exe
            </a>

            {/* PROTOCOL 02: Navigation to Contact Section */}
            <a 
                href="#contact" // Smooth scrolls to your Inquiry Terminal [cite: 42]
                className="px-8 py-3 border border-white/10 text-white/50 font-mono text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition-all flex items-center gap-2"
            >
                Establish Inquiry
            </a>
            </div>
        </motion.div>

        {/* 3D Floating Technical Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:block relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-transparent opacity-20 blur group-hover:opacity-40 transition duration-1000" />
          <div className="relative border border-white/10 bg-black/60 backdrop-blur-xl p-8 font-mono text-[10px] text-gray-500 rounded-sm">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <p className="text-accent font-bold tracking-widest uppercase">&gt; System_Manifest</p>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="flex justify-between"><span>INFRASTRUCTURE</span> <span className="text-white">AWS_EKS_CLUSTER </span></p>
              <p className="flex justify-between"><span>BACKEND_CORE</span> <span className="text-white">JAVA_21_SPRING</span></p>
              <p className="flex justify-between"><span>API_GATEWAY</span> <span className="text-white">MULESOFT_ANYPOINT</span></p>
              <p className="flex justify-between"><span>OBSERVABILITY</span> <span className="text-white">SPLUNK_DASHBOARD</span></p>
            </div>

            <div className="mt-8">
              <p className="mb-2 text-[8px] opacity-50 uppercase">Network_Traffic</p>
              <div className="h-12 w-full flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 30, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse', delay: i * 0.1 }}
                    className="flex-1 bg-accent/20 border-t border-accent"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;