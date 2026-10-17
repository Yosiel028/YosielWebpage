import React from 'react';
import { ArrowDown, Box, Sparkles, MapPin, Layers, Film, Gamepad2, Send } from 'lucide-react';
import Retro3DCanvas from './Retro3DCanvas';

export default function Hero({
  activeModel,
  setActiveModel,
  onSound,
}) {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 md:px-8 border-b border-[#2b2721] overflow-hidden">
      {/* Decorative background grid and vintage glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Ribbon / Vintage Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#292520] mb-8 font-retro-mono text-xs text-[#a39a8c]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#26221d] border border-[#3e382f] text-[#c29b62] font-bold rounded">
              VOL. 1990 - 2026
            </span>
            <span>// ARCHIVO OFICIAL DE ARTE DIGITAL & 3D</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#cfc7b9]">
              <MapPin size={13} className="text-[#c29b62]" />
              Houston, TX & San Luis Potosí, MX
            </span>
            <span className="text-[#595247] hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[#a9a193]">
              UNIAT / ONIRIC MOB
            </span>
          </div>
        </div>

        {/* Main Grid: Left Column Editorial Title & Bio / Right Column Interactive 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Text Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Small serif lead-in, matching "The new..." poster style */}
            <span className="font-serif italic text-2xl md:text-3xl text-[#c29b62] tracking-wide mb-1">
              Explorando la estética...
            </span>

            {/* Big Headline inspired by vintage 90s posters */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#fbf7f0] mb-5">
              Nostalgia <br />
              <span className="italic font-light text-[#dfcca5]">Tridimensional.</span>
            </h1>

            {/* Artist Bio & Statement */}
            <p className="text-base sm:text-lg text-[#b8ada0] leading-relaxed mb-6 font-sans">
              Hola, soy <strong className="text-[#f5eee3] font-semibold">Yosiel Armando Sandate</strong>. Artista 3D/2D y animador digital con pasión por el diseño industrial vintage, videojuegos indie, cortometrajes y esculpido digital de alta fidelidad.
            </p>

            {/* Pill highlights */}
            <div className="flex flex-wrap gap-2 mb-8 font-retro-mono text-xs text-[#d1c7b8]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b]">
                <Box size={13} className="text-[#c29b62]" /> 3D Modeling & Sculpting
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b]">
                <Gamepad2 size={13} className="text-emerald-400" /> Indie Game Assets
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b]">
                <Film size={13} className="text-amber-400" /> 2D/3D Animation
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={() => onSound?.('click')}
                className="px-6 py-3.5 bg-[#c29b62] hover:bg-[#d6af75] text-[#121110] font-bold font-retro-mono text-xs tracking-wider uppercase rounded shadow-lg hover:shadow-[#c29b62]/20 transition-all flex items-center gap-2"
              >
                <span>Explorar Portafolio</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                onClick={() => onSound?.('click')}
                className="px-6 py-3.5 bg-[#1a1816] hover:bg-[#25221e] text-[#f0e9dd] border border-[#3d372e] font-retro-mono text-xs tracking-wider uppercase rounded transition-all flex items-center gap-2"
              >
                <Send size={14} className="text-[#c29b62]" />
                <span>Contactar</span>
              </a>
            </div>

            {/* Vintage Guarantee Stamp */}
            <div className="mt-8 pt-6 border-t border-[#292520] flex items-center gap-4 text-xs font-retro-mono text-[#8a8174]">
              <div className="w-8 h-8 rounded border border-[#52493d] flex items-center justify-center font-bold text-[#c29b62]">
                90s
              </div>
              <div>
                <div className="text-[#d9d0c1] font-semibold">ESTILO VINTAGE & RETRO GAMING</div>
                <div>Modelado en ZBrush, Substance Painter & Unreal Engine 5</div>
              </div>
            </div>
          </div>

          {/* Right 3D Interactive Canvas Column (7 cols) */}
          <div className="lg:col-span-7">
            <Retro3DCanvas
              activeModel={activeModel}
              setActiveModel={setActiveModel}
              onSound={onSound}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
