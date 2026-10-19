import React, { useState, useRef } from 'react';
import { ArrowDown, Box, Sparkles, MapPin, Layers, Film, Gamepad2, Send, Tv, Volume2, VolumeX, Play, ExternalLink } from 'lucide-react';
import monitorBezel from '../assets/Elementosgraficos/Monitor_1_cropped.png';

// Import personal animations for the TV
import kaijuVideo from '../assets/Portafolio/Kaiju n8/KaijuTurnAround-2.mp4';
import evaVideo from '../assets/Portafolio/Eva 01/Artstation_MINIEvasNoName.mp4';
import julietaVideo from '../assets/Portafolio/Julieta/Julieta_TurnAround.mp4';
import goldenBrownVideo from '../assets/Portafolio/GoldenBrown/GoldenBrownScenario.mp4';
import seedHeroVideo from '../assets/Portafolio/SeedHeroAnimaciones/OniricTeam_Characters.mp4';
import haloVideo from '../assets/Portafolio/HaloDrink/Final_HaloDrinkYosh.mp4';

const CHANNELS = [
  { id: 'kaiju', name: 'CH 01 // KAIJU N8', video: kaijuVideo, tag: '3D Turnaround' },
  { id: 'eva', name: 'CH 02 // EVA 01', video: evaVideo, tag: '3D Model Turn' },
  { id: 'julieta', name: 'CH 03 // JULIETA', video: julietaVideo, tag: '3D Animation' },
  { id: 'seedhero', name: 'CH 04 // SEED HERO', video: seedHeroVideo, tag: '2D Indie Game' },
  { id: 'golden', name: 'CH 05 // GOLDEN BROWN', video: goldenBrownVideo, tag: '3D Scenario' },
  { id: 'halo', name: 'CH 06 // HALO DRINK', video: haloVideo, tag: 'Commercial 3D' },
];

export default function Hero({ onSound }) {
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const activeChannel = CHANNELS[currentChannelIndex];

  const handleNextChannel = () => {
    const next = (currentChannelIndex + 1) % CHANNELS.length;
    setCurrentChannelIndex(next);
    onSound?.('click');
  };

  const handlePrevChannel = () => {
    const prev = (currentChannelIndex - 1 + CHANNELS.length) % CHANNELS.length;
    setCurrentChannelIndex(prev);
    onSound?.('click');
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 md:px-8 border-b border-[#2b2721] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-amber-500/5 blur-[130px] pointer-events-none rounded-full"></div>

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

        {/* Main Grid: Left Column Editorial Title / Right Column CRT TV or 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Title in Pixel Font matching reference */}
            <h1 className="font-pixel text-2xl sm:text-3xl xl:text-4xl leading-relaxed tracking-wide text-[#dfcca5] mb-5 selection:bg-[#c29b62]">
              If you can<br />
              dream it up, I<br />
              can make it<br />
              real!
            </h1>

            {/* Sub-lead with emphasis on character creation */}
            <p className="text-base sm:text-lg text-[#b8ada0] leading-relaxed mb-6 font-sans">
              Hola, soy <strong className="text-[#f5eee3] font-semibold">Yosiel Armando Sandate</strong>. Artista 2D y modelador 3D <span className="text-[#c29b62] font-medium underline decoration-[#c29b62]/40">especializado en personajes</span>, animación y pipelines para videojuegos indie y cortometrajes.
            </p>

            {/* Pill highlights matching visual reference */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-8 font-retro-mono text-xs text-[#d1c7b8]">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b] hover:border-[#c29b62] transition-colors w-fit">
                <Box size={14} className="text-[#c29b62]" /> 3D Modeling & Sculpting
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b] hover:border-amber-400 transition-colors w-fit">
                <Film size={14} className="text-amber-400" /> 2D/3D Animation
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1916] border border-[#39342b] hover:border-emerald-400 transition-colors w-fit">
                <Gamepad2 size={14} className="text-emerald-400" /> Indie Game Assets
              </span>
            </div>

            {/* Action Buttons matching visual reference */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={() => onSound?.('click')}
                className="px-6 py-3.5 bg-[#cca76a] hover:bg-[#ddba80] text-[#121110] font-pixel text-xs tracking-wider uppercase rounded shadow-lg hover:shadow-[#c29b62]/20 transition-all flex items-center gap-2 border-2 border-[#eed5a1]"
              >
                <span>Art Showcase</span>
                <span className="text-sm font-bold">⬇</span>
              </a>

              <a
                href="#contact"
                onClick={() => onSound?.('click')}
                className="px-6 py-3.5 bg-[#1a1816] hover:bg-[#25221e] text-[#f0e9dd] border border-[#3d372e] font-retro-mono text-xs tracking-wider uppercase rounded transition-all flex items-center gap-2"
              >
                <Send size={14} className="text-[#c29b62]" />
                <span>Contactar</span>
              </a>

              <a
                href="https://youtu.be/2QDKLjbx9Y0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSound?.('click')}
                className="px-4 py-3.5 bg-[#141210] hover:bg-[#221e1a] text-[#c29b62] border border-[#42392c] font-retro-mono text-xs tracking-wider uppercase rounded transition-all flex items-center gap-2"
                title="Ver Demo Reel Oficial en YouTube"
              >
                <Play size={13} className="fill-current" />
                <span className="hidden sm:inline">Demo Reel</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Vintage Guarantee Stamp matching reference */}
            <div className="mt-8 pt-6 border-t border-[#292520] flex items-center gap-4 text-xs font-retro-mono text-[#8a8174]">
              <div className="w-9 h-9 rounded border border-[#52493d] flex items-center justify-center font-bold text-[#c29b62] shrink-0 text-sm">
                90s
              </div>
              <div>
                <div className="text-[#d9d0c1] font-semibold tracking-wide">ESTILO VINTAGE & RETRO GAMING</div>
                <div className="text-[11px] text-[#938a7c]">Modelado en ZBrush, Substance Painter & Unreal Engine 5</div>
              </div>
            </div>
          </div>

          {/* Right Column: CRT TV Monitor with Animations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* TV Header with retro label */}
            <div className="w-full max-w-[620px] flex items-center justify-between pb-3 mb-2 font-retro-mono text-xs">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#1b1916] border border-[#363028] rounded text-[#c29b62]">
                <Tv size={14} />
                <span>MONITOR CRT RETRO // ANIMACIONES</span>
              </div>

              {/* Hand-drawn style badge matching user reference sketch */}
              <div className="hidden sm:flex items-center gap-1.5 text-[#dfcca5] font-retro-mono text-[11px] animate-pulse">
                <span>← Animaciones en la tv xd</span>
              </div>
            </div>

            {/* CRT Retro TV Frame */}
            <div className="relative w-full max-w-[620px] aspect-[891/832] flex items-center justify-center select-none">
              
              {/* Screen Cutout Container (Placed strictly behind the transparent bezel opening) */}
              <div
                className="absolute z-0 overflow-hidden bg-black flex items-center justify-center shadow-inner rounded-[16px]"
                style={{
                  left: '14.37%',
                  top: '13.82%',
                  width: '71.49%',
                  height: '53.61%',
                }}
              >
                {/* Video Player */}
                <video
                  ref={videoRef}
                  key={activeChannel.video}
                  src={activeChannel.video}
                  autoPlay
                  loop
                  muted={videoMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Inner CRT Scanline & Phosphor Tint Overlay on Screen */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-70"></div>
                
                {/* Screen Glare reflection */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60"></div>

                {/* OSD (On-Screen Display) Channel Tag */}
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 border border-emerald-500/40 text-emerald-400 font-retro-mono text-[10px] tracking-wider rounded backdrop-blur-sm pointer-events-none">
                  {activeChannel.name}
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/75 border border-[#443e33] text-[#c29b62] font-retro-mono text-[10px] rounded backdrop-blur-sm pointer-events-none">
                  {activeChannel.tag}
                </div>
              </div>

              {/* CRT Monitor Outer Bezel (Sits on top with transparent glass window) */}
              <img
                src={monitorBezel}
                alt="Monitor CRT Retro"
                className="relative z-10 w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
              />

              {/* TV Controls Bar below the bezel */}
              <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-between px-3 py-2 bg-[#171512] border border-[#332d24] rounded-lg font-retro-mono text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevChannel}
                    className="px-2.5 py-1 bg-[#24201a] hover:bg-[#342d25] border border-[#443b2f] rounded text-[#d6cdbd] text-[11px] transition-colors"
                  >
                    ◀ CH -
                  </button>
                  <button
                    onClick={handleNextChannel}
                    className="px-2.5 py-1 bg-[#24201a] hover:bg-[#342d25] border border-[#443b2f] rounded text-[#d6cdbd] text-[11px] transition-colors"
                  >
                    CH + ▶
                  </button>
                  <span className="text-[#a49a88] text-[11px] ml-1">
                    {currentChannelIndex + 1}/{CHANNELS.length}: {activeChannel.name.replace('CH 0', '').replace(' //', ' -')}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setVideoMuted(!videoMuted);
                    onSound?.('click');
                  }}
                  className={`p-1.5 rounded border transition-colors ${
                    !videoMuted
                      ? 'border-emerald-500/60 text-emerald-400 bg-emerald-950/30'
                      : 'border-[#3a342a] text-[#827869] hover:text-[#d3c9ba]'
                  }`}
                  title={videoMuted ? 'Activar Sonido del Video' : 'Silenciar'}
                >
                  {!videoMuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
