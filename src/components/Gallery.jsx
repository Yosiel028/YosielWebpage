import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, Layers, Box, Cpu, X, CheckCircle2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'flowerbomb',
    title: 'Flowerbomb Viktor & Rolf — 3D Render',
    category: '3d-modeling',
    categoryLabel: 'Modelado 3D & Shading',
    year: '2025',
    polycount: '64k tris',
    software: ['Maya / Blender', 'Substance 3D Painter', 'Unreal Engine 5'],
    image: './images/yosiel-profile.png',
    crop: 'top', // uses the perfume bottle banner
    aspect: 'video',
    description: 'Renderización de producto de lujo inspirado en Viktor & Rolf Flowerbomb. Modelado facetado estilo granada de cristal, sellos metálicos grabados y refracción cáustica fotorrealista con iluminación dramática de estudio en tonos carmesí y negro obsidiana.',
    views: {
      final: './images/yosiel-profile.png',
      clay: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    breakdown: [
      'Topología optimizada con facetas diamantadas y biseles de alta definición.',
      'Shaders PBR de vidrio con transmisión óptica y dispersión subsuperficial.',
      'Sello metálico con acabado en bronce antiguo y micro-rayones procedurales.',
    ],
  },
  {
    id: 'gameboy-vintage',
    title: 'The 1989 Nintendo Game Boy — Vintage Ad Poster',
    category: 'vintage-posters',
    categoryLabel: 'Póster Vintage & 3D Hard-Surface',
    year: '2024',
    polycount: '32k tris',
    software: ['ZBrush', 'Substance 3D Painter', 'Photoshop'],
    image: './images/gameboy-vintage-ad.jpg',
    description: 'Reconstrucción en 3D hard-surface de la icónica consola portátil Nintendo Game Boy de 1989 enmarcada en una pieza publicitaria editorial retro estilo revista noventera. Cuenta con textura de plástico ABS granulado, pantalla LCD con matriz de fósforo verdoso y tipografía serif clásica.',
    views: {
      final: './images/gameboy-vintage-ad.jpg',
    },
    breakdown: [
      'Modelado de precisión de los botones biselados A/B y cruz direccional con rebajes ergonómicos.',
      'Ranura trasera de cartucho Game Pak y rejilla inferior derecha de 6 ranuras acústicas.',
      'Grano fotográfico analógico de 35mm y tipografía editorial de coleccionista.',
    ],
  },
  {
    id: 'mac-nostalgia',
    title: 'Nineties Nostalgia — Vintage Macintosh Classic',
    category: 'vintage-posters',
    categoryLabel: 'Póster Vintage & Entornos 90s',
    year: '2024',
    polycount: '48k tris',
    software: ['Blender', 'Substance 3D Painter', 'ZBrush'],
    image: './images/mac-vintage-poster.png',
    description: 'Homenaje a la era de la computación personal de los años 90. Modelado del ordenador clásico con pantalla CRT abombada, ranura de disquete 3.5 pulgadas, teclado mecánico con cable en espiral y carcasa con envejecimiento plástico beige cálido.',
    views: {
      final: './images/mac-vintage-poster.png',
    },
    breakdown: [
      'Materiales de plástico ABS vintage envejecido con sutil pátina amarillenta por rayos UV.',
      'Teclas mecánicas escalonadas con grabado vintage y resorte interno simulado.',
      'Composición de póster con textura de papel prensa y tipografía serif retro.',
    ],
  },
  {
    id: 'oniric-game-art',
    title: 'Oniric Mob — Personajes & Animación Indie Game',
    category: 'game-art',
    categoryLabel: 'Game Art & Videojuegos Indie',
    year: '2024 - 2026',
    polycount: '18k tris (Game Ready)',
    software: ['Unreal Engine 5', 'ZBrush', 'Toon Boom Harmony'],
    image: './images/yosiel-experience.png',
    description: 'Activos de personajes y animaciones 3D/2D para proyectos independientes en Oniric Mob. Creación de rigs dinámicos, ciclos de locomoción (Run, Walk, Attack), optimización de texturas atlas y shaders estilizados en tiempo real.',
    views: {
      final: './images/yosiel-experience.png',
    },
    breakdown: [
      'Topología con loops ideales para deformación anatómica y codos/rodillas articulados.',
      'Mapas Normal, Roughness, Metallic y Curvature integrados en Unreal Engine 5.',
      'Animación de combate y expresiones faciales tanto en 3D como soporte 2D.',
    ],
  },
  {
    id: 'digital-sculpt-creature',
    title: 'Digital Sculpting — Criatura & Anatomía ZBrush',
    category: '3d-modeling',
    categoryLabel: 'Digital Sculpting',
    year: '2024',
    polycount: '3.8M polys (High-Res Sculpt)',
    software: ['ZBrush', 'Substance 3D Painter', 'Marmoset Toolbag'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    description: 'Esculpido digital orgánico en ZBrush explorando anatomía muscular compleja, texturas de piel escamosa y detalles de micro-poros. Preparado para pipeline de baking High-to-Low Poly.',
    views: {
      final: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    },
    breakdown: [
      'DynaMesh a ZRemesher con retopología manual en zonas críticas.',
      'Bake de mapas de Normales de 4K preservando cada detalle de 3 millones de polígonos.',
      'Lookdev con luz cálida de tres puntos.',
    ],
  },
  {
    id: 'toon-animation-rig',
    title: 'Toon Boom Harmony — Animación & Cut-Out Rigging',
    category: 'animation',
    categoryLabel: 'Animación 2D Digital',
    year: '2023 - 2025',
    polycount: 'Vector Rig',
    software: ['Toon Boom Harmony', 'Storyboarding', 'Clip Studio'],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    description: 'Producción de animación digital con técnicas combinadas de dibujo cuadro a cuadro (frame-by-frame) y puppets articulados en Toon Boom Harmony para cortometrajes y secuencias cinemáticas.',
    views: {
      final: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    },
    breakdown: [
      'Master Controllers y Deformers de curva/envolvente para rotación de cabezas fluida.',
      'Limpieza de líneas vectoriales con texturas de lápiz analógico.',
      'Sincronización labial (Lip-sync) y acting emocional en escenas clave.',
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Todos los Trabajos' },
  { id: '3d-modeling', label: 'Modelado 3D & Sculpting' },
  { id: 'game-art', label: 'Game Art (Unreal Engine)' },
  { id: 'animation', label: 'Animación 2D/3D' },
  { id: 'vintage-posters', label: 'Pósters Retro 90s' },
];

export default function Gallery({ onSound }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c29b62]"></span>
              <span>CATÁLOGO SELECCIONADO</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f6f0e4] font-normal tracking-tight">
              Obras 3D & Creación Digital
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a89e90] font-sans leading-relaxed">
            Una colección de proyectos de modelado hard-surface, esculpido orgánico, arte para videojuegos indie y cartelería editorial vintage inspirada en los años 90.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                onSound?.('beep');
              }}
              className="group cursor-pointer bg-[#171513] border border-[#2e2a23] hover:border-[#c29b62]/60 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#000000]/60 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] w-full bg-[#0d0c0b] overflow-hidden border-b border-[#29251f]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.crop === 'top' ? 'object-top' : 'object-center'
                  }`}
                  loading="lazy"
                />

                {/* Vintage Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-60"></div>

                {/* Top Badge */}
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
                  <p className="text-xs text-[#a39889] font-sans line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Software tags */}
                <div className="pt-3 border-t border-[#26221c] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.map((sw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-retro-mono px-2 py-0.5 rounded bg-[#1e1b18] text-[#9c9181] border border-[#342e26]"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-retro-mono text-[#c29b62]">
                    {project.polycount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector for Project Details */}
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
                <span>•</span>
                <span className="text-[#8e8577]">{selectedProject.polycount}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f6f0e4] font-normal">
                {selectedProject.title}
              </h2>
            </div>

            {/* Main Showcase Image Preview */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#363028] bg-black mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#2d2821]">
              <div className="md:col-span-2">
                <h4 className="font-serif text-lg text-[#f0e8db] mb-2">Descripción del Proyecto</h4>
                <p className="text-sm text-[#b5aa9b] font-sans leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <h4 className="font-serif text-lg text-[#f0e8db] mb-2">Desglose Técnico & Pipeline</h4>
                <ul className="space-y-2">
                  {selectedProject.breakdown?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#ded5c7] font-sans">
                      <CheckCircle2 size={15} className="text-[#c29b62] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical specs sidebar */}
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

                <div>
                  <span className="text-[#8a8072] block text-[10px] uppercase">Presupuesto Poligonal</span>
                  <span className="text-[#f0e9dc] font-bold">{selectedProject.polycount}</span>
                </div>

                <div>
                  <span className="text-[#8a8072] block text-[10px] uppercase">Pipeline de Arte</span>
                  <span className="text-[#b5ab9c]">High-to-Low Bake • PBR Texturing</span>
                </div>

                <div className="pt-2 border-t border-[#3b342b]">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      onSound?.('click');
                    }}
                    className="block text-center py-2 bg-[#c29b62] hover:bg-[#d6af75] text-[#121110] font-bold rounded transition-colors text-xs uppercase"
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
