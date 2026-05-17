import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants/store';
import { Terminal, ShieldCheck, Activity, Cpu } from 'lucide-react';

const Experience = () => {
  return (
    <section id="work" className="relative py-24 bg-transparent px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header with technical vibe */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <Activity className="text-accent animate-pulse" size={18} />
            <span className="text-accent font-mono text-xs tracking-[0.4em]">EX_LOG // PROFESSIONAL_HISTORY</span>
          </div>
          <h2 className="text-white font-bold text-5xl md:text-7xl tracking-tighter">
            EXPERI<span className="text-transparent" style={{ WebkitTextStroke: '1px #00f0ff' }}>ENCE</span>
          </h2>
        </div>

        {/* Security Compliance Footer Card */}
        <div className="my-10 p-6 border border-accent/20 bg-accent/5 rounded-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-accent" size={24} />
            <div>
              <p className="text-white font-mono text-xs uppercase font-bold tracking-widest">Compliance_Status: GREEN</p>
              <p className="text-accent/60 font-mono text-[10px]">100% Score Maintained // 4+ Months </p>
            </div>
          </div>
          <div className="hidden md:block h-px flex-1 mx-10 bg-accent/10" />
          <div className="text-right">
            <p className="text-gray-500 font-mono text-[8px] uppercase">Vulnerability_Report</p>
            <p className="text-white font-mono text-xs">ZERO_BREACHES</p>
          </div>
        </div>

        {DATA.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-24 relative group"
          >
            {/* Background decorative index */}
            <span className="absolute -left-10 top-0 text-white/5 text-9xl font-black select-none">
              0{index + 1}
            </span>

            <div className="relative z-10">
              <div className="flex flex-wrap justify-between items-start border-b border-white/10 pb-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent/10 text-accent text-[8px] font-mono px-2 py-0.5 rounded border border-accent/20">
                      {exp.type.toUpperCase()}
                    </span>
                    <p className="text-gray-500 font-mono text-[10px]">{exp.duration}</p>
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-mono text-sm mt-1 tracking-widest">{exp.company}</p>
                </div>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0 max-w-xs justify-end">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[8px] font-mono text-gray-500 border border-white/10 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {exp.points.map((point, i) => (
                  <div 
                    key={i} 
                    className="flex gap-4 p-5 bg-secondary/30 border border-white/5 hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2" />
                      <div className="w-[1px] h-full bg-white/10 mt-2" />
                    </div>
                    <p className="text-gray-400 text-sm font-mono leading-relaxed lowercase">
                      <span className="text-accent/50 mr-2">LOG_{i + 1}:</span> {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        
      </div>
    </section>
  );
};

export default Experience;