import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants/store';
import { ExternalLink, Terminal as TerminalIcon, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group bg-secondary/20 border border-white/5 overflow-hidden"
  >
    {/* Background Tech Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
      <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#00f0ff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </div>

    {/* Project Header Bar */}
    <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/30" />
        <div className="w-2 h-2 rounded-full bg-accent/30" />
      </div>
      <span className="font-mono text-[8px] text-gray-500 tracking-[0.2em]">PROJECT_ID: 00{index + 1}</span>
    </div>

    {/* Media Container */}
    <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10" />
      <img 
        src={project.image || 'https://via.placeholder.com/600x400/0a0a0a/00f0ff?text=DATA_ENCRYPTED'} 
        alt={project.name}
        className="h-full w-full object-contain group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
      
      {/* Tech Stack Overlay */}
      <div className="absolute bottom-4 left-4 flex gap-2 z-20">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-black/80 border border-accent/30 text-accent font-mono text-[8px] uppercase">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Metadata & Details */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <TerminalIcon size={12} className="text-accent" />
        <h3 className="font-bold text-white text-lg tracking-tight uppercase">{project.name}</h3>
      </div>
      
      <p className="text-gray-500 font-mono text-xs leading-relaxed mb-6 h-12 overflow-hidden italic">
        &gt; {project.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Code2 size={14} className="text-gray-600 hover:text-accent cursor-pointer transition-colors" />
        </div>
        <a 
          href={project.link || "#"} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest group/btn"
        >
          EXECUTE_DEPLOYMENT 
          <ExternalLink size={10} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    {/* Corner Accents */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
  </motion.div>
);

const Gallery = () => {
  return (
    <section id="projects" className="relative py-24 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Technical Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">Repository_Manifest</span>
          </div>
          <h2 className="text-white font-bold text-4xl md:text-6xl tracking-tighter uppercase">
            Project_<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Modules</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {DATA.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;