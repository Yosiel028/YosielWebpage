import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import yoshLogo from '../assets/logo/Yosh_cropped.png';

export default function Footer({ onSound }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSound?.('click');
  };

  return (
    <footer className="py-14 px-4 md:px-8 bg-[#0b0a09] border-t border-[#24201a] text-center font-retro-mono text-xs text-[#8c8273]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Retro Japanese 90s Brand Block */}
        <div className="inline-block p-4 sm:p-5 bg-[#141210] border border-[#302a22] rounded-xl max-w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 text-left">
            
            {/* User's custom Yosh cropped typography / logo on high-contrast vintage ivory badge */}
            <div className="px-3 py-1.5 rounded-lg bg-[#f4efe5] border-2 border-[#c29b62] shadow-sm flex items-center justify-center">
              <img src={yoshLogo} alt="Yosh" className="h-8 sm:h-9 w-auto object-contain" />
            </div>

            {/* Rights & Archival Info */}
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

            {/* Capsule badge */}
            <div className="px-4 py-1.5 rounded-full border border-[#b5aa97] text-xs font-serif italic text-[#f2ecd9] font-bold">
              Yosiel®
            </div>

          </div>
        </div>

        {/* Social Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-retro-mono text-xs text-[#b8ad9e]">
          <a
            href="https://linktr.ee/YOSH028"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSound?.('click')}
            className="hover:text-[#c29b62] transition-colors"
          >
            Linktree (YOSH028)
          </a>
          <span>•</span>
          <a
            href="https://www.artstation.com/yoshido-b1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSound?.('click')}
            className="hover:text-[#c29b62] transition-colors"
          >
            Artstation (yoshido-b1)
          </a>
          <span>•</span>
          <a
            href="https://www.instagram.com/yosiel028/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSound?.('click')}
            className="hover:text-[#c29b62] transition-colors"
          >
            Instagram (@yosiel028)
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/yosiel-armando-sandate-962563354/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSound?.('click')}
            className="hover:text-[#c29b62] transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://youtu.be/2QDKLjbx9Y0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSound?.('click')}
            className="hover:text-[#c29b62] transition-colors"
          >
            Demo Reel (YouTube)
          </a>
        </div>

        {/* Back to top */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1e1b16] text-[#7a7062]">
          <div>
            <span>Diseño & Arte 3D / 2D por </span>
            <span className="text-[#ded4c5] font-semibold">Yosiel Armando Sandate</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#c29b62] transition-colors"
          >
            <span>Subir al Inicio</span>
            <ArrowUp size={13} />
          </button>
        </div>

        <div className="text-[11px] text-[#635a4d]">
          Modelado en ZBrush, Substance Painter, Maya, Blender & Unreal Engine 5.
        </div>

      </div>
    </footer>
  );
}
