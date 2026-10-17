import React from 'react';
import { Box, Layers, Palette, Cpu, Film, Terminal, Check } from 'lucide-react';

const SKILL_MODULES = [
  {
    category: 'Escultura & Modelado 3D',
    icon: Box,
    items: [
      { name: 'ZBrush', level: 'Avanzado', desc: 'Digital Sculpting orgánico y hard-surface, DynaMesh, ZRemesher.' },
      { name: 'Modelado Low & High Poly', level: 'Especialidad', desc: 'Topología limpia para animación y videojuegos.' },
      { name: 'Retopología & UVs', level: 'Avanzado', desc: 'Optimización de texel density y flujo de aristas.' },
      { name: 'Maya / Blender', level: 'Avanzado', desc: 'Modelado poligonal, hard-surface y asset pipeline.' },
    ],
  },
  {
    category: 'Texturizado PBR & Lookdev',
    icon: Palette,
    items: [
      { name: 'Substance 3D Painter', level: 'Avanzado', desc: 'Bake de mapas (Normal, Curvature, AO), texturizado procedural y stylized.' },
      { name: 'Shaders & Materiales PBR', level: 'Intermedio+', desc: 'Refracción de vidrio, metales oxidados y piel con SSS.' },
      { name: 'Pintura Digital & Texturas', level: 'Avanzado', desc: 'Hand-painted textures y estética retro noventera.' },
      { name: 'Adobe Photoshop', level: 'Experto', desc: 'Edición de texturas, cartelería vintage y post-procesado.' },
    ],
  },
  {
    category: 'Motores en Tiempo Real',
    icon: Cpu,
    items: [
      { name: 'Unreal Engine 5', level: 'Avanzado', desc: 'Integración de assets, Material Graph, iluminación Lumen y Nanite.' },
      { name: 'Game Art Pipeline', level: 'Especialidad', desc: 'Presupuestos de polígonos, LODs y colisiones en motor.' },
      { name: 'Iluminación Cinemática', level: 'Avanzado', desc: 'Setups de tres puntos, iluminación de estudio y atmósferas retro.' },
    ],
  },
  {
    category: 'Animación Digital 2D & 3D',
    icon: Film,
    items: [
      { name: 'Toon Boom Harmony', level: 'Avanzado', desc: 'Cut-out rigging con Deformers, Master Controllers y animación 2D.' },
      { name: 'Animación 3D de Personajes', level: 'Avanzado', desc: 'Ciclos de caminata, idle, combate y acting gestual.' },
      { name: 'Storyboarding & Timing', level: 'Intermedio+', desc: 'Planificación secuencial de planos y ritmo de animación.' },
    ],
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
              <span>STACK DE SOFTWARE & COMPETENCIAS TÉCNICAS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f6efe3] font-normal tracking-tight">
              Herramientas & Habilidades
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a69c8e] font-sans">
            Dominio de software estándar de la industria cinematográfica y de videojuegos, preparado para flujos de trabajo AAA e Indie.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {SKILL_MODULES.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => onSound?.('click')}
                className="p-5 bg-[#1a1815] rounded-xl border border-[#342e26] hover:border-[#c29b62]/70 transition-all hover:-translate-y-1 retro-border flex flex-col justify-between"
              >
                <div>
                  {/* Module Header */}
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#2b261f]">
                    <div className="p-2 bg-[#25211b] rounded border border-[#3d362a] text-[#c29b62]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-serif text-lg text-[#f4eee3] leading-snug">
                      {mod.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {mod.items.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-retro-mono text-[#ded6c8] font-bold group-hover:text-[#c29b62] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-retro-mono px-1.5 py-0.5 rounded bg-[#27221c] text-[#a89d8c] border border-[#383126]">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#918778] font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative cartridge stamp */}
                <div className="mt-6 pt-3 border-t border-[#26211a] flex items-center justify-between text-[10px] font-retro-mono text-[#786f62]">
                  <span>MOD-0{idx + 1}</span>
                  <span className="text-emerald-500/80">● VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pipeline banner summary */}
        <div className="mt-12 p-6 bg-[#1a1714] border border-[#342e25] rounded-xl flex flex-wrap items-center justify-between gap-4 font-retro-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#c29b62]"></span>
            <span className="text-[#f1ebe0]">PIPELINE ARTÍSTICO COMPLETO:</span>
            <span className="text-[#a49989]">Concept → High Sculpt (ZBrush) → Low Poly (Retopo) → UVs → Texturing (Substance) → Rig & Anim → Engine (UE5)</span>
          </div>
          <span className="text-[#c29b62] font-bold">READY TO DEPLOY</span>
        </div>
      </div>
    </section>
  );
}
