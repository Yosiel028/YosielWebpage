import React from 'react';
import { Volume2, VolumeX, Tv, Sparkles, FolderGit2 } from 'lucide-react';

export default function Navbar({
  soundEnabled,
  setSoundEnabled,
  crtEnabled,
  setCrtEnabled,
  onSound,
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f0e0d]/90 border-b border-[#2b2721] px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={() => onSound?.('click')}
          className="group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded bg-[#c29b62] text-[#121110] font-black flex items-center justify-center text-lg font-serif border border-[#f0dfc2] group-hover:scale-105 transition-transform">
            Y
          </div>
          <div className="text-left">
            <div className="font-serif text-lg tracking-wide text-[#f3ede2] group-hover:text-[#c29b62] transition-colors font-bold leading-tight">
              Yosiel Armando Sandate
            </div>
            <div className="text-[10px] font-retro-mono tracking-widest text-[#9b9283] uppercase">
              3D & 2D Artist • Digital Animator
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-retro-mono text-xs tracking-wider text-[#b8ad9e]">
          <a
            href="#hero"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // INICIO
          </a>
          <a
            href="#projects"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // PORTAFOLIO 3D
          </a>
          <a
            href="#vintage-ads"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // POSTERS VINTAGE
          </a>
          <a
            href="#experience"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // TRAYECTORIA
          </a>
          <a
            href="#skills"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // SOFTWARE
          </a>
          <a
            href="#contact"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            // CONTACTO
          </a>
        </nav>

        {/* Controls & Badges */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) onSound?.('beep');
            }}
            title="Activar/Desactivar efectos de audio retro"
            className={`p-2 rounded border transition-colors ${
              soundEnabled
                ? 'border-[#c29b62]/60 text-[#c29b62] bg-[#c29b62]/10'
                : 'border-[#38332b] text-[#71695d] hover:text-[#d6cebf]'
            }`}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* CRT Filter Toggle */}
          <button
            onClick={() => {
              setCrtEnabled(!crtEnabled);
              onSound?.('crt');
            }}
            title="Filtro de pantalla CRT retro / Scanlines"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border text-xs font-retro-mono transition-colors ${
              crtEnabled
                ? 'border-emerald-500/60 text-emerald-400 bg-emerald-950/20'
                : 'border-[#38332b] text-[#857d71] hover:text-[#ded6c9]'
            }`}
          >
            <Tv size={15} />
            <span className="hidden sm:inline">CRT {crtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Status Badge */}
          <a
            href="#contact"
            onClick={() => onSound?.('click')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#1b1916] hover:bg-[#26221d] border border-[#3b342a] rounded text-xs font-retro-mono text-[#dcd4c6] transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>DISPONIBLE</span>
          </a>
        </div>
      </div>
    </header>
  );
}
