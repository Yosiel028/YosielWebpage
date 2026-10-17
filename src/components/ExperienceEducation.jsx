import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

export default function ExperienceEducation({ onSound }) {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
          <div>
            <div className="flex items-center gap-2 font-retro-mono text-xs text-[#c29b62] tracking-widest uppercase mb-2">
              <Briefcase size={14} />
              <span>REGISTRO DE TRAYECTORIA PROFESIONAL</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f5efe4] font-normal tracking-tight">
              Experiencia & Formación
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a49a8b] font-sans">
            Experiencia comprobada en estudios independientes, animación 2D/3D y formación universitaria especializada en arte y diseño para videojuegos.
          </p>
        </div>

        {/* Two Columns Grid: Experience on left, Education on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Column 1: Experience Dossier */}
          <div className="p-6 sm:p-8 bg-[#181613] rounded-xl border border-[#312c24] retro-border">
            <div className="flex items-center gap-3 pb-5 border-b border-[#2b2720] mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#27231c] border border-[#3f382d] flex items-center justify-center text-[#c29b62]">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#f6efe2]">Experiencia en la Industria</h3>
                <span className="text-xs font-retro-mono text-[#8a8172]">Estudios y Proyectos Comerciales</span>
              </div>
            </div>

            {/* Experience Item: Oniric Mob */}
            <div className="relative pl-6 border-l-2 border-[#c29b62] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  Animator & 3D Modeler
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-retro-mono text-[11px]">
                  ACTUALIDAD
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-retro-mono text-[#c29b62]">
                <span className="font-bold text-[#e8ded0]">Oniric Mob</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#9b9181]">
                  <Calendar size={12} /> Octubre 2024 — Presente (2+ años)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#9b9181]">
                  <MapPin size={12} /> En remoto / San Luis Potosí
                </span>
              </div>

              <p className="text-sm text-[#b2a797] font-sans leading-relaxed">
                Modelador 3D y animador digital 2D en proyectos de videojuegos independientes y producciones multimedia. Responsable de:
              </p>

              <ul className="space-y-2 text-xs text-[#d3c9ba] font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>Modelado orgánico y hard-surface de personajes y props para motores en tiempo real.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>Animación 2D en Toon Boom Harmony para secuencias narrativas y combate fluido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>Texturizado PBR en Substance 3D Painter y optimización de UVs y presupuestos poligonales.</span>
                </li>
              </ul>

              {/* Skills pill list */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-retro-mono text-[10px]">
                {['3D Animation', 'Toon Boom Harmony', '3D Modeling', 'Game Art', 'Unreal Engine'].map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#221f1a] border border-[#3b352b] text-[#c29b62]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Exhibitor / Industry Events Record */}
            <div className="mt-8 pt-6 border-t border-[#29251f]">
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-[#c29b62]" />
                <h4 className="font-serif text-lg text-[#f4eee2]">Expositor & Festivales de Animación</h4>
              </div>
              <p className="text-xs text-[#a99e8f] font-sans leading-relaxed">
                Participación activa como expositor y ponente en convenciones de videojuegos indie, muestras de cortometrajes y eventos de la industria del entretenimiento digital en México y Estados Unidos.
              </p>
            </div>
          </div>

          {/* Column 2: Education Dossier */}
          <div className="p-6 sm:p-8 bg-[#181613] rounded-xl border border-[#312c24] retro-border">
            <div className="flex items-center gap-3 pb-5 border-b border-[#2b2720] mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#27231c] border border-[#3f382d] flex items-center justify-center text-[#c29b62]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#f6efe2]">Educación Universitaria</h3>
                <span className="text-xs font-retro-mono text-[#8a8172]">Grado Académico Profesional</span>
              </div>
            </div>

            {/* University Item: UNIAT */}
            <div className="relative pl-6 border-l-2 border-[#e0a256] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  Licenciatura en Artes y Diseño de Videojuegos
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-300 font-retro-mono text-[11px]">
                  2022 — 2026
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-retro-mono text-[#c29b62]">
                <span className="font-bold text-[#e8ded0]">UNIAT</span>
                <span>•</span>
                <span className="text-[#9b9181]">University of Advanced Technologies</span>
                <span>•</span>
                <span className="text-[#9b9181]">Digital Arts</span>
              </div>

              <p className="text-sm text-[#b2a797] font-sans leading-relaxed">
                Formación integral en pipelines de desarrollo de videojuegos, escultura digital avanzada, teoría del color, iluminación cinemática y anatomía artística.
              </p>

              <div className="p-4 bg-[#141210] rounded-lg border border-[#2e2a22] space-y-2">
                <span className="text-[11px] font-retro-mono text-[#c29b62] uppercase block">
                  Aptitudes Validadas por la Institución:
                </span>
                <div className="flex flex-wrap gap-1.5 font-retro-mono text-[11px]">
                  {[
                    'ZBrush',
                    '3D Modeling',
                    'Digital Sculpting',
                    'Substance 3D Painter',
                    'Unreal Engine',
                    'Game Art',
                    'Rigging',
                  ].map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#201d19] border border-[#3b342a] text-[#d6cdbe] rounded">
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Geographical Mobility block */}
            <div className="mt-8 pt-6 border-t border-[#29251f]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-[#c29b62]" />
                <h4 className="font-serif text-lg text-[#f4eee2]">Disponibilidad Geográfica</h4>
              </div>
              <p className="text-xs text-[#a99e8f] font-sans leading-relaxed">
                Ubicado estratégicamente entre <strong>Houston, Texas</strong> y <strong>San Luis Potosí, México</strong>. Con facilidad para trabajo remoto internacional, contratos por proyecto o relocalización.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
