import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, Layers, Box, Cpu, X, Film, Play, Check } from 'lucide-react';

// Eva 01
import evaRender1 from '../assets/Portafolio/Eva 01/Render_1.jpg';
import evaRender2 from '../assets/Portafolio/Eva 01/Render_2.jpg';
import evaRender3 from '../assets/Portafolio/Eva 01/Render_3.jpg';
import evaRender4 from '../assets/Portafolio/Eva 01/Render_4.jpg';
import evaTurnaround from '../assets/Portafolio/Eva 01/VERTICAL -Eva Turnaround.mp4';

// Kaiju n8
import kaijuRender2 from '../assets/Portafolio/Kaiju n8/KaijuRender2.png';
import kaijuRender1 from '../assets/Portafolio/Kaiju n8/Kaiju Render 1.jpg';
import kaijuRender3 from '../assets/Portafolio/Kaiju n8/Kaiju Render 3.jpg';
import kaijuTurnaround from '../assets/Portafolio/Kaiju n8/KaijuTurnAround-2.mp4';

// Julieta
import julietaRender1 from '../assets/Portafolio/Julieta/Render_1.jpg';
import julietaRender2 from '../assets/Portafolio/Julieta/Render_2.jpg';
import julietaTurnaround from '../assets/Portafolio/Julieta/Julieta_TurnAround.mp4';

// Seed Hero
import seedHeroVideo from '../assets/Portafolio/SeedHeroAnimaciones/OniricTeam_Characters.mp4';

// Believe
import believePoster from '../assets/Portafolio/Believe_3DsMaxScene/PosterConNombre.jpg';
import believeMask from '../assets/Portafolio/Believe_3DsMaxScene/Yosiel_Mask_Details.jpg';
import believeTrains from '../assets/Portafolio/Believe_3DsMaxScene/Yosiel_Trains_Details.jpg';

// Tank Pilot
import tankTurnaround from '../assets/Portafolio/TankPilot/TankDriver_TurnAroundWithShadows.jpg';
import tankColor from '../assets/Portafolio/TankPilot/YOSIELTankDriverColorBase.jpg';
import tankText from '../assets/Portafolio/TankPilot/YosielImperialDriver_Text.jpg';

// Golden Brown
import goldenVideo from '../assets/Portafolio/GoldenBrown/GoldenBrownScenario.mp4';

// Halo Drink
import haloVideo from '../assets/Portafolio/HaloDrink/Final_HaloDrinkYosh.mp4';

// Perfume
import perfume1 from '../assets/Portafolio/Perfume/Perdume -1.jpg';
import perfume2 from '../assets/Portafolio/Perfume/Perfume - 2.jpg';
import perfume3 from '../assets/Portafolio/Perfume/Perfume - 3.jpg';

// Personal portfolio projects strictly from user files.
// NO DEFAULT / FAKE DESCRIPTIONS ARE ADDED, as requested:
// "elimina todas las descripciones por default y en caso de que yo no te indique poner una descripcion no la pongas solo completa con lo que te pase al documento"
const PROJECTS = [
  {
    id: 'kaiju-n8',
    title: 'Kaiju No. 8',
    category: '3d-modeling',
    categoryLabel: 'Modelado 3D & Sculpting',
    year: '2026',
    software: ['ZBrush', 'Blender', 'Substance 3D Painter'],
    thumbnail: kaijuRender2,
    mediaType: 'video',
    videoUrl: kaijuTurnaround,
    gallery: [
      { type: 'image', src: kaijuRender2, label: 'Render Principal' },
      { type: 'video', src: kaijuTurnaround, label: 'Turnaround Video' },
      { type: 'image', src: kaijuRender1, label: 'Vista Frontal' },
      { type: 'image', src: kaijuRender3, label: 'Detalle de Armadura' },
    ],
    description: '',
  },
  {
    id: 'eva-01',
    title: 'Evangelion Unit-01 (Eva 01)',
    category: '3d-modeling',
    categoryLabel: 'Modelado 3D & Mecha',
    year: '2026',
    software: ['Maya', 'Blender', 'Substance 3D Painter'],
    thumbnail: evaRender1,
    mediaType: 'video',
    videoUrl: evaTurnaround,
    gallery: [
      { type: 'image', src: evaRender1, label: 'Render 01' },
      { type: 'video', src: evaTurnaround, label: 'Turnaround Video' },
      { type: 'image', src: evaRender2, label: 'Render 02' },
      { type: 'image', src: evaRender3, label: 'Render 03' },
      { type: 'image', src: evaRender4, label: 'Render 04' },
    ],
    description: '',
  },
  {
    id: 'julieta',
    title: 'Julieta',
    category: 'character-art',
    categoryLabel: 'Personajes & Animación',
    year: '2026',
    software: ['ZBrush', 'Blender', 'Substance 3D Painter'],
    thumbnail: julietaRender1,
    mediaType: 'video',
    videoUrl: julietaTurnaround,
    gallery: [
      { type: 'image', src: julietaRender1, label: 'Render 01' },
      { type: 'video', src: julietaTurnaround, label: 'Turnaround Video' },
      { type: 'image', src: julietaRender2, label: 'Render 02' },
    ],
    description: '',
  },
  {
    id: 'seed-hero',
    title: 'Seed Hero (Oniric Mob)',
    category: 'game-art',
    categoryLabel: 'Animación 2D & Game Art',
    year: '2024 - 2026',
    software: ['Toon Boom Harmony', 'Adobe Photoshop', 'Steam'],
    thumbnail: null,
    mediaType: 'video',
    videoUrl: seedHeroVideo,
    gallery: [
      { type: 'video', src: seedHeroVideo, label: 'Animaciones de Personajes' },
    ],
    // Authentic description from CV:
    description: 'Se trabajó animando personajes principales, npc\'s y objetos empleando Toon Boom Harmony con dibujos a mano para el juego de ritmo independiente ya en Steam "Seed Hero". Haciendo uso de los personajes del mismo juego, se crearon publicidades animadas para redes y eventos.',
  },
  {
    id: 'believe-scene',
    title: 'Believe — 3Ds Max Scene',
    category: '3d-modeling',
    categoryLabel: 'Escenarios 3D & Shading',
    year: '2026',
    software: ['Autodesk 3DsMax', 'Vray Chaos Phoenix', 'Photoshop'],
    thumbnail: believePoster,
    mediaType: 'image',
    gallery: [
      { type: 'image', src: believePoster, label: 'Póster Escenario Completo' },
      { type: 'image', src: believeMask, label: 'Detalles de Máscara' },
      { type: 'image', src: believeTrains, label: 'Detalles de Trenes' },
    ],
    description: '',
  },
  {
    id: 'tank-pilot',
    title: 'Imperial Tank Pilot',
    category: '3d-modeling',
    categoryLabel: 'Modelado 3D & Personajes',
    year: '2026',
    software: ['ZBrush', 'Substance 3D Painter'],
    thumbnail: tankTurnaround,
    mediaType: 'image',
    gallery: [
      { type: 'image', src: tankTurnaround, label: 'Turnaround con Sombras' },
      { type: 'image', src: tankColor, label: 'Color Base' },
      { type: 'image', src: tankText, label: 'Texturizado' },
    ],
    description: '',
  },
  {
    id: 'golden-brown',
    title: 'Golden Brown',
    category: 'animation',
    categoryLabel: 'Animación & Escenarios',
    year: '2026',
    software: ['Blender', 'Adobe Premiere'],
    thumbnail: null,
    mediaType: 'video',
    videoUrl: goldenVideo,
    gallery: [
      { type: 'video', src: goldenVideo, label: 'Secuencia Golden Brown' },
    ],
    description: '',
  },
  {
    id: 'halo-drink',
    title: 'Halo Drink — Publicidad 3D',
    category: 'animation',
    categoryLabel: 'Animación 3D Comercial',
    year: '2026',
    software: ['Blender', 'Substance 3D Painter', 'After Effects'],
    thumbnail: null,
    mediaType: 'video',
    videoUrl: haloVideo,
    gallery: [
      { type: 'video', src: haloVideo, label: 'Spot Final Halo Drink' },
    ],
    description: '',
  },
  {
    id: 'perfume',
    title: 'Perfume Render',
    category: '3d-modeling',
    categoryLabel: 'Modelado 3D & Producto',
    year: '2026',
    software: ['Blender / Maya', 'Substance 3D Painter'],
    thumbnail: perfume1,
    mediaType: 'image',
    gallery: [
      { type: 'image', src: perfume1, label: 'Render 01' },
      { type: 'image', src: perfume2, label: 'Render 02' },
      { type: 'image', src: perfume3, label: 'Render 03' },
    ],
    description: '',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Todos los Trabajos' },
  { id: '3d-modeling', label: 'Modelado 3D & Sculpting' },
  { id: 'character-art', label: 'Personajes 3D' },
  { id: 'game-art', label: 'Game Art (Oniric Mob)' },
  { id: 'animation', label: 'Animación Digital' },
];

export default function Gallery({ onSound }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
    onSound?.('beep');
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c29b62]"></span>
              <span>PORTAFOLIO OFICIAL • TRABAJOS PERSONALES & COMERCIALES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f6f0e4] font-normal tracking-tight">
              Obras 3D, Personajes & Animación
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a89e90] font-sans leading-relaxed">
            Trabajos personales y de estudio: escultura digital en ZBrush, modelos de personajes, rigs de animación 2D y pipelines completos para videojuegos y producciones cinematográficas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#27231d]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                onSound?.('click');
              }}
              className={`px-4 py-2 rounded font-retro-mono text-xs tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c29b62] text-[#121110] font-bold shadow-md shadow-[#c29b62]/10'
                  : 'bg-[#1a1816] text-[#b3a898] hover:text-[#f6f0e4] border border-[#332e27]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer bg-[#171513] border border-[#2e2a23] hover:border-[#c29b62]/70 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 flex flex-col"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[4/3] w-full bg-[#0a0908] overflow-hidden border-b border-[#29251f] flex items-center justify-center">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : project.videoUrl ? (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <video
                      src={project.videoUrl}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ) : (
                  <div className="p-6 text-center space-y-2">
                    <Film size={36} className="text-[#c29b62] mx-auto opacity-70" />
                    <span className="font-retro-mono text-xs text-[#a99e8f] block">
                      Cortometraje & Dirección de Arte
                    </span>
                  </div>
                )}

                {/* Vintage Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-60 pointer-events-none"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#121110]/90 backdrop-blur-md rounded border border-[#3c362c] text-[10px] font-retro-mono text-[#c29b62]">
                  <span>{project.categoryLabel}</span>
                </div>

                {/* Year Pill */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#121110]/80 rounded border border-[#383229] text-[10px] font-retro-mono text-[#b3a898]">
                  {project.year}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#121110]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-retro-mono text-[#f6f0e4]">
                  <Eye size={18} className="text-[#c29b62]" />
                  <span>Inspeccionar Proyecto</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#f6f0e4] group-hover:text-[#c29b62] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  
                  {/* ONLY show description if provided in user document; do NOT show any default fake description */}
                  {project.description ? (
                    <p className="text-xs text-[#a39889] font-sans line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  ) : null}
                </div>

                {/* Software tags */}
                <div className="pt-3 border-t border-[#26221c] flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.map((sw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-retro-mono px-2 py-0.5 rounded bg-[#1e1b18] text-[#c29b62] border border-[#342e26]"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                  {project.gallery.length > 1 && (
                    <span className="text-[10px] font-retro-mono text-[#7a7062]">
                      +{project.gallery.length} vistas
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector for Project Details & Media Showcase */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#171513] border border-[#3d372e] rounded-xl shadow-2xl p-6 sm:p-8 text-left">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProject(null);
                onSound?.('click');
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#24211d] hover:bg-[#332e28] text-[#c7beaf] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] mb-1">
                <span>{selectedProject.categoryLabel}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f6f0e4] font-normal">
                {selectedProject.title}
              </h2>
            </div>

            {/* Main Showcase Viewer (Image or Video) */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#363028] bg-black mb-4 flex items-center justify-center">
              {selectedProject.gallery.length > 0 ? (
                selectedProject.gallery[activeMediaIndex]?.type === 'video' ? (
                  <video
                    key={selectedProject.gallery[activeMediaIndex].src}
                    src={selectedProject.gallery[activeMediaIndex].src}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    key={selectedProject.gallery[activeMediaIndex].src}
                    src={selectedProject.gallery[activeMediaIndex].src}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                )
              ) : selectedProject.videoUrl ? (
                <video
                  src={selectedProject.videoUrl}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-8 text-center text-[#a39889] font-sans">
                  <Film size={40} className="text-[#c29b62] mx-auto mb-2 opacity-80" />
                  <p>Producción cinematográfica con actores reales y composición 3D</p>
                </div>
              )}
            </div>

            {/* Multi-view Thumbnails Strip */}
            {selectedProject.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
                {selectedProject.gallery.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveMediaIndex(idx);
                      onSound?.('click');
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-retro-mono transition-all flex items-center gap-1.5 shrink-0 ${
                      activeMediaIndex === idx
                        ? 'bg-[#c29b62] text-[#121110] font-bold shadow'
                        : 'bg-[#221f1a] text-[#a99e8d] hover:text-[#f3eee4] border border-[#3a3329]'
                    }`}
                  >
                    {media.type === 'video' ? <Play size={11} className="fill-current" /> : <Eye size={11} />}
                    <span>{media.label || `Vista ${idx + 1}`}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Details and Software */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#2d2821]">
              <div className="md:col-span-2">
                {/* ONLY render description if provided in user document */}
                {selectedProject.description ? (
                  <>
                    <h4 className="font-serif text-lg text-[#f0e8db] mb-2">Descripción</h4>
                    <p className="text-sm text-[#b5aa9b] font-sans leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>
                  </>
                ) : (
                  <div className="text-xs font-retro-mono text-[#8a8172]">
                    // TRABAJO PERSONAL • MODELADO & ARTE DIGITAL
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="p-4 bg-[#1e1b18] rounded-lg border border-[#342e26] font-retro-mono text-xs space-y-3">
                <div>
                  <span className="text-[#8a8072] block text-[10px] uppercase">Software Empleado</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedProject.software.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#29241f] text-[#c29b62] rounded text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#3b342b]">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      onSound?.('click');
                    }}
                    className="block text-center py-2 bg-[#c29b62] hover:bg-[#d6af75] text-[#121110] font-bold rounded transition-colors text-xs uppercase font-retro-mono"
                  >
                    Cotizar Proyecto Similar
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
