import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "../constants/store";
import { Terminal, Cpu, Layers, Activity, Send, Link } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Map icons to your NavLinks
  const navIcons = {
    about: <Terminal size={14} />,
    work: <Cpu size={14} />,
    projects: <Layers size={14} />,
    contact: <Send size={14} />,
    connect: <Link size={14}/>
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-center">
      {/* 3D Glass Dock Container */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between w-full max-w-6xl px-8 py-3 
          transition-all duration-500 rounded-lg border
          ${scrolled 
            ? "bg-secondary/40 backdrop-blur-xl border-accent/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]" 
            : "bg-transparent border-transparent"
          }
        `}
      >
        {/* Brand Section with Status Indicator */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-8 h-8 border border-accent/50 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <span className="text-accent text-[10px] -rotate-45 font-bold">P</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
          <div>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase">
              {DATA.profile.name}
            </h2>
            <p className="text-[8px] text-accent font-mono tracking-widest opacity-70">
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* Technical Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {DATA.navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-mono tracking-tighter uppercase transition-all
                  ${active === link.id ? "text-accent bg-accent/10" : "text-gray-400 hover:text-white"}
                `}
              >
                <span className="opacity-50">{navIcons[link.id]}</span>
                {link.title}
                
                {/* 3D Hover Underline */}
                {active === link.id && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_10px_#00f0ff]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* System Status readout */}
        <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6">
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-gray-500 font-mono">LATENCY</span>
            <span className="text-[10px] text-accent font-mono tracking-widest">12ms</span>
          </div>
          <Activity size={16} className="text-accent opacity-50 animate-pulse" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;