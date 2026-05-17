import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants/store';
import { Award, Cpu, ShieldCheck } from 'lucide-react';

const TechAchievements = () => {
  return (
    <section className="py-24 px-10 bg-primary/50 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* SKILLS COLUMN */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <Cpu className="text-accent" size={20} />
            <h2 className="text-white font-bold text-3xl uppercase tracking-tighter">Core_Capabilities</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, borderColor: '#00f0ff' }}
                className="px-6 py-4 border border-white/5 bg-secondary/20 flex flex-col items-start gap-1"
              >
                <span className="text-gray-500 font-mono text-[8px] uppercase tracking-widest">{skill.category}</span>
                <span className="text-white font-mono text-sm font-bold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS COLUMN */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <Award className="text-accent" size={20} />
            <h2 className="text-white font-bold text-3xl uppercase tracking-tighter">System_Honors</h2>
          </div>
          <div className="space-y-6">
            {DATA.achievements.map((award, index) => (
              <div key={index} className="flex gap-6 items-center p-4 border-l-2 border-accent bg-accent/5">
                <span className="text-gray-600 font-mono text-xs">0{index + 1}</span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">{award.title}</h4>
                  <p className="text-accent/60 font-mono text-[10px] uppercase mt-1">Status: Verified // {award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechAchievements;