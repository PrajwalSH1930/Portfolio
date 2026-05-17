import React from 'react';
import { DATA } from '../constants/store';
import "bootstrap-icons/font/bootstrap-icons.css";

const SocialLinks = () => {
  return (
    <section id="connect" className="py-20 border-t border-white/5 bg-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Header Line */}
        <div className="flex items-center gap-4 mb-10 opacity-60">
          <span className="text-accent font-mono text-[10px] uppercase tracking-[0.5em]">Connect_With_Me_On:</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center lg:justify-start">
          
          {/* Main Socials */}
          <a href={DATA.socials.linkedin} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-linkedin"></i> <span>LinkedIn</span>
          </a>
          
          <a href={DATA.socials.github} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-github"></i> <span>GitHub</span>
          </a>

          <a href={DATA.socials.twitter} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-twitter-x"></i> <span>Twitter</span>
          </a>

          <a href={DATA.socials.instagram} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-instagram"></i> <span>Instagram</span>
          </a>
          <a href={DATA.socials.facebook} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-facebook"></i> <span>Facebook</span>
          </a>

          {/* Coding Platforms - Bootstrap has great alternatives for these */}
          <a href={DATA.socials.leetcode} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-code-slash"></i> <span>LeetCode</span>
          </a>

          <a href={DATA.socials.gfg} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-terminal"></i> <span>GeeksForGeeks</span>
          </a>

          <a href={DATA.socials.interviewbit} target="_blank" className="nav-social-link" rel="noreferrer">
            <i className="bi bi-cpu"></i> <span>InterviewBit</span>
          </a>

          <a href={`mailto:${DATA.socials.email}`} className="nav-social-link text-accent">
            <i className="bi bi-envelope-at-fill"></i> <span>Email_Direct</span>
          </a>

        </div>
      </div>

      <style jsx>{`
        .nav-social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #9ca3af;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
        }
        .nav-social-link i {
          font-size: 1.1rem;
        }
        .nav-social-link:hover {
          color: #00f0ff;
          transform: translateY(-3px);
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default SocialLinks;