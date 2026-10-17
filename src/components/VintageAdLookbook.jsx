import React, { useState } from 'react';
import { Sparkles, ZoomIn, Film, Disc, ShieldCheck, Heart } from 'lucide-react';

const POSTERS = [
  {
    id: 'gameboy-1989',
    title: 'The new... Nintendo GAME BOY (1989)',
    subtitle: 'Keep it in your pants • Available in every local Nintendo store',
    image: './images/gameboy-vintage-ad.jpg',
    tag: '1989 ARCHIVE ADVERT',
    theme: 'Dark Editorial Vintage',
    description: 'Homenaje a la publicidad impresa de finales de los 80s y principios de los 90s. Composición minimalista sobre fondo negro carbón, tipografía serif condensada con ligaduras personalizadas y la icónica consola portátil en ángulo cenital.',
    palette: ['#0f1110', '#ded8cb', '#a42646', '#7e932b'],
    specs: {
      format: 'Póster Gráfico 3D',
      lighting: 'Foco direccional analógico con caída suave',
      typography: 'Editorial Serif & Cooper Black inspired',
    },
  },
  {
    id: 'macintosh-1990s',
    title: 'Nineties Nostalgia — Exploring the 90\'s Vintage Vibe',
    subtitle: 'Join us on a journey back in time as we celebrate Nineties Nostalgia',
    image: './images/mac-vintage-poster.png',
    tag: 'RETRO COMPUTING EDITORIAL',
    theme: 'Warm Paper & Beige Hardware',
    description: 'Estética de revista clásica sobre papel pergamino con textura de grano y desgaste natural. Protagonizado por un ordenador retro monobloque con pantalla CRT curva, disquetera de 3.5 pulgadas y teclado mecánico ergonómico.',
    palette: ['#f4efe5', '#ded5c2', '#412b1e', '#1c1917'],
    specs: {
      format: 'Cartel Editorial Impreso',
      lighting: 'Luz difusa de estudio fotográfico años 90',
      typography: 'Didone Serif con florituras itálicas caligráficas',
    },
  },
];

export default function VintageAdLookbook({ onSound }) {
  const [activePoster, setActivePoster] = useState(POSTERS[0]);
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section id="vintage-ads" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201d19] border border-[#3a342b] rounded-full text-xs font-retro-mono text-[#c29b62] mb-3">
            <Sparkles size={13} />
            <span>ESTÉTICA & DISEÑO RETRO DE LOS 90S</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#f7f2e8] font-normal tracking-tight mb-4">
            Galería de Cartelería Vintage
          </h2>
          <p className="text-sm sm:text-base text-[#ab9f90] font-sans leading-relaxed">
            Una mirada a cómo fusiono el modelado 3D contemporáneo con el lenguaje visual, la tipografía editorial y el grano analógico de las revistas de los años 80 y 90.
          </p>
        </div>

        {/* Feature Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#191714] p-6 sm:p-10 rounded-2xl border border-[#332e26] retro-border">
          
          {/* Left: Poster Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => {
                setZoomOpen(true);
                onSound?.('click');
              }}
              className="group relative max-w-[380px] w-full rounded-lg overflow-hidden border-2 border-[#453e33] shadow-2xl cursor-pointer hover:border-[#c29b62] transition-all"
            >
              <img
                src={activePoster.image}
                alt={activePoster.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-retro-mono text-xs text-white">
                <ZoomIn size={18} className="text-[#c29b62]" />
                <span>Click para pantalla completa</span>
              </div>
            </div>

            {/* Poster Switcher Selector */}
            <div className="flex gap-3 mt-6">
              {POSTERS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePoster(p);
                    onSound?.('click');
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-retro-mono transition-all ${
                    activePoster.id === p.id
                      ? 'bg-[#c29b62] text-[#121110] font-bold shadow'
                      : 'bg-[#221f1a] text-[#a49a8a] hover:text-white border border-[#3b342a]'
                  }`}
                >
                  {p.id === 'gameboy-1989' ? '★ Nintendo Game Boy' : '★ Nineties Nostalgia Mac'}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Editorial & Technique Breakdown (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#2a251e] border border-[#443b2f] text-[#c29b62] rounded text-[11px] font-retro-mono uppercase tracking-wider">
                {activePoster.tag}
              </span>
              <span className="text-xs font-retro-mono text-[#8c8273]">
                {activePoster.theme}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#f8f3ea] font-normal leading-tight">
              {activePoster.title}
            </h3>

            <p className="font-serif italic text-lg text-[#cbbfae]">
              "{activePoster.subtitle}"
            </p>

            <p className="text-sm sm:text-base text-[#b1a594] font-sans leading-relaxed">
              {activePoster.description}
            </p>

            {/* Color Palette Swatches */}
            <div>
              <span className="block text-xs font-retro-mono text-[#8a8070] mb-2 uppercase tracking-wider">
                Paleta Cromática de la Época
              </span>
              <div className="flex items-center gap-3">
                {activePoster.palette.map((color, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border border-[#4f4639] shadow-inner"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-[11px] font-retro-mono text-[#b1a695]">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2e2922] font-retro-mono text-xs">
              <div className="p-3 bg-[#201d19] rounded border border-[#362f25]">
                <span className="text-[#847a6b] block text-[10px] uppercase">Formato</span>
                <span className="text-[#f1ebd0] font-semibold">{activePoster.specs.format}</span>
              </div>
              <div className="p-3 bg-[#201d19] rounded border border-[#362f25]">
                <span className="text-[#847a6b] block text-[10px] uppercase">Iluminación</span>
                <span className="text-[#f1ebd0] font-semibold">{activePoster.specs.lighting}</span>
              </div>
              <div className="p-3 bg-[#201d19] rounded border border-[#362f25]">
                <span className="text-[#847a6b] block text-[10px] uppercase">Tipografía</span>
                <span className="text-[#f1ebd0] font-semibold">{activePoster.specs.typography}</span>
              </div>
            </div>

            {/* Quote block */}
            <blockquote className="p-4 bg-[#141210] border-l-2 border-[#c29b62] rounded-r text-xs text-[#a89d8e] font-sans italic leading-relaxed">
              "El diseño analógico y los anuncios impresos de los 90 tenían una textura y una intención tipográfica que hoy dan a los renders 3D una personalidad única y atemporal."
            </blockquote>

          </div>

        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomOpen && (
        <div
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 cursor-zoom-out"
        >
          <img
            src={activePoster.image}
            alt={activePoster.title}
            className="max-w-full max-h-[92vh] object-contain rounded shadow-2xl border border-[#443e33]"
          />
        </div>
      )}
    </section>
  );
}
