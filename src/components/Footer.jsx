import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer({ onSound }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSound?.('click');
  };

  return (
    <footer className="py-14 px-4 md:px-8 bg-[#0b0a09] border-t border-[#24201a] text-center font-retro-mono text-xs text-[#8c8273]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Retro Nintendo 1989 Japanese License Plate Block (matching the poster) */}
        <div className="inline-block p-4 bg-[#141210] border border-[#302a22] rounded-lg">
          <div className="flex flex-wrap items-center justify-center gap-6 text-left">
            
            {/* Boxed "N" Logo */}
            <div className="w-12 h-12 border-2 border-[#b5aa97] flex items-center justify-center font-serif text-3xl font-bold text-[#f2ecd9]">
              Y
            </div>

            {/* Japanese Text & Rights */}
            <div className="border-l border-[#3a3328] pl-5 space-y-0.5">
              <div className="text-sm font-bold tracking-widest text-[#dfd6c4]">
                せけせとおせえぞ • 3D ART ARCHIVE
              </div>
              <div className="text-[10px] text-[#857b6c] uppercase">
                ALL RIGHTS RESERVED TO YOSIEL ARMANDO SANDATE © 2026.
              </div>
              <div className="text-[10px] text-[#c29b62]">
                EST. 1989 VINTAGE SPIRIT • HOUSTON TX & SAN LUIS POTOSÍ MX
              </div>
            </div>

            {/* Nintendo-style capsule badge */}
            <div className="px-4 py-1.5 rounded-full border border-[#b5aa97] text-xs font-serif italic text-[#f2ecd9] font-bold">
              Yosiel®
            </div>

          </div>
        </div>

        {/* Navigation & GitHub Pages info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1e1b16] text-[#7a7062]">
          <div className="flex items-center gap-2">
            <span>Portfolio preparado para</span>
            <span className="text-[#ded4c5] font-semibold flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              GitHub Pages (React + Vite)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ded4c5] transition-colors"
            >
              Ver en GitHub
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#c29b62] transition-colors"
            >
              <span>Subir al Inicio</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="text-[11px] text-[#635a4d]">
          Desarrollado con Three.js, React, Tailwind CSS y tipografía editorial vintage.
        </div>

      </div>
    </footer>
  );
}
