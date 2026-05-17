import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants/store';
import { Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-accent" />
          <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">System_Archive // Biography</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: The Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter uppercase leading-none">
              Decoding the <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Developer Identity</span>
            </h2>
            
            <div className="space-y-4 font-mono text-sm text-gray-400 leading-relaxed">
              <p>
                &gt; I am a <span className="text-white">Programmer Analyst Trainee at Cognizant</span> with a deep-rooted passion for architecting scalable backend systems and high-availability API ecosystems.
              </p>
              <p>
                &gt; My journey began at <span className="text-white">Hirasugar Institute of Technology</span>, where I maintained a <span className="text-accent font-bold">9.28 CGPA</span> while pushing the boundaries of AI with my award-winning <span className="text-white">Inclusive Voice Assistant</span> project.
              </p>
              <p>
                &gt; Beyond the IDE, I apply the same precision to physical discipline as a <span className="text-white">VTU State Level Yogasana</span> competitor, proving that a sharp mind requires a balanced foundation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border border-white/5 bg-secondary/20 p-4">
                <p className="text-accent font-mono text-[10px] uppercase mb-1">Current_Focus</p>
                <p className="text-white font-bold text-xs uppercase tracking-tight">MuleSoft & Platform Ops</p>
              </div>
              <div className="border border-white/5 bg-secondary/20 p-4">
                <p className="text-accent font-mono text-[10px] uppercase mb-1">Logic_Base</p>
                <p className="text-white font-bold text-xs uppercase tracking-tight">Java Full Stack</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Data Points */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="border border-white/10 bg-black/40 p-8 rounded-sm relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="text-accent" size={20} />
                <h3 className="text-white font-mono text-sm font-bold uppercase tracking-widest">Academic_Credentials</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-1 border-l-2 border-accent/30 pl-4">
                  <span className="text-gray-500 font-mono text-[10px] uppercase">Bachelor of Engineering - 9.28 CGPA</span>
                  <span className="text-white font-bold text-sm uppercase">Computer Science and Engineering</span>
                  <span className="text-accent/80 font-mono text-[10px]">Hirasugar Institute of Technology / 2025</span>
                </div>
                
                <div className="flex flex-col gap-1 border-l-2 border-white/10 pl-4">
                  <span className="text-gray-500 font-mono text-[10px] uppercase">Pre-University - 94%</span>
                  <span className="text-white font-bold text-sm uppercase">PCMB</span>
                  <span className="text-gray-500 font-mono text-[10px]">KLE's Prerana PU College, Hubballi / 2021</span>
                </div>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <Target size={60} className="text-accent animate-pulse" />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;