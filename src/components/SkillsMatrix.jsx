import React from 'react';
import { Box, Layers, Palette, Cpu, Film, Terminal, CheckCircle, Sparkles, Heart } from 'lucide-react';

const SOFTWARE_STACK = [
  {
    name: 'ZBrush',
    category: 'Esculpido Digital 3D',
    highlight: 'Especialista en Personajes',
    desc: 'Escultura digital orgánica de personajes, criaturas y accesorios hard-surface.',
  },
  {
    name: 'Blender',
    category: 'Modelado & Entornos 3D',
    highlight: 'Pipeline 3D',
    desc: 'Modelado poligonal, nodos de geometría, shading y secuencias de cámara.',
  },
  {
    name: 'Autodesk Maya',
    category: 'Modelado & Topología',
    highlight: 'Estándar de Industria',
    desc: 'Topología limpia para deformación en animación y rigging.',
  },
  {
    name: '3D Substance Painter',
    category: 'Texturizado PBR',
    highlight: 'Shaders & Baking',
    desc: 'Bakes de alta resolución, materiales PBR fotorrealistas y texturas estilizadas.',
  },
  {
    name: 'Autodesk 3DsMax',
    category: 'Escenarios & Shading',
    highlight: 'Render de Producción',
    desc: 'Composición de escenas arquitectónicas y vintage, iluminación avanzada.',
  },
  {
    name: 'Toon Boom Harmony',
    category: 'Animación 2D Digital',
    highlight: 'Dibujo a Mano & Puppets',
    desc: 'Animación cuadro a cuadro y publicidades animadas para Seed Hero.',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Concept Art & Cartelería',
    highlight: 'Post-Producción',
    desc: 'Bocetaje de personajes, retoque de texturas y afiches noventeros.',
  },
  {
    name: 'Adobe Premiere',
    category: 'Edición & Montaje',
    highlight: 'Demo Reel & Video',
    desc: 'Cortes secuenciales, timing de cinemáticas y edición de turnarounds.',
  },
  {
    name: 'Vray Chaos Phoenix',
    category: 'Motor de Render & FX',
    highlight: 'Iluminación Avanzada',
    desc: 'Cálculo de iluminación global, cáusticas y texturizado para Believe.',
  },
];

export default function SkillsMatrix({ onSound }) {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div>
            <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] tracking-widest uppercase mb-2">
              <Terminal size={14} />
              <span>STACK DE SOFTWARE OFICIAL (DEL CV)</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f6efe3] font-normal tracking-tight">
              Programas de Trabajo & Habilidades
            </h2>
          </div>
          <div className="p-3 bg-[#1e1a15] border border-[#c29b62]/40 rounded-lg text-left max-w-md">
            <span className="font-pixel text-xs text-[#dfcca5] block mb-1">
              ★ DESTACADO: CREACIÓN DE PERSONAJES
            </span>
            <p className="text-xs text-[#b8ada0] font-sans">
              Enfoque integral en el diseño de personajes: desde el arte conceptual inicial y la escultura anatómica en ZBrush hasta el texturizado y la animación.
            </p>
          </div>
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left mb-12">
          {SOFTWARE_STACK.map((sw, idx) => (
            <div
              key={idx}
              onMouseEnter={() => onSound?.('click')}
              className="p-5 bg-[#191714] rounded-xl border border-[#342e26] hover:border-[#c29b62]/70 transition-all hover:-translate-y-1 retro-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl text-[#f5efe3]">
                    {sw.name}
                  </h3>
                  <span className="text-[10px] font-retro-mono px-2 py-0.5 rounded bg-[#24201a] text-[#c29b62] border border-[#3f382d]">
                    {sw.highlight}
                  </span>
                </div>
                <span className="text-[11px] font-retro-mono text-[#8a8070] block mb-2 uppercase">
                  {sw.category}
                </span>
                <p className="text-xs text-[#a39889] font-sans leading-relaxed">
                  {sw.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#26211a] flex items-center justify-between text-[10px] font-retro-mono text-[#736a5e]">
                <span>SOFT-0{idx + 1}</span>
                <span className="text-emerald-400">● ACTIVO EN PRODUCCIÓN</span>
              </div>
            </div>
          ))}
        </div>

        {/* Personal & Professional Skills Banner from CV */}
        <div className="p-6 bg-[#181613] border border-[#363026] rounded-xl text-left space-y-4">
          <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] uppercase tracking-wider">
            <CheckCircle size={14} />
            <span>Habilidades Profesionales y Personales Validadas (del CV)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-3 bg-[#13110f] border border-[#2b261f] rounded flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#c29b62]"></span>
              <div>
                <strong className="text-[#ded5c5] block">Trabajo en equipo</strong>
                <span className="text-[#8e8474] text-[11px]">Coordinación fluida con artistas y directores</span>
              </div>
            </div>

            <div className="p-3 bg-[#13110f] border border-[#2b261f] rounded flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <div>
                <strong className="text-[#ded5c5] block">Gestión de tiempo</strong>
                <span className="text-[#8e8474] text-[11px]">Entregas puntuales y organización en sprints</span>
              </div>
            </div>

            <div className="p-3 bg-[#13110f] border border-[#2b261f] rounded flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <div>
                <strong className="text-[#ded5c5] block">Respeto, empatía y honestidad</strong>
                <span className="text-[#8e8474] text-[11px]">Ética y comunicación transparente</span>
              </div>
            </div>

            <div className="p-3 bg-[#13110f] border border-[#2b261f] rounded flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <div>
                <strong className="text-[#ded5c5] block">Responsabilidad</strong>
                <span className="text-[#8e8474] text-[11px]">Compromiso total con la visión de la obra</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
