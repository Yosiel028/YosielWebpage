import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ExternalLink, MapPin, Link as LinkIcon, MessageSquare } from 'lucide-react';

export default function ContactSection({ onSound }) {
  const [copied, setCopied] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3d-modeling',
    message: '',
  });

  const emailAddress = 'yosiel.armando.sandate@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    onSound?.('beep');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSound?.('click');
    const subject = encodeURIComponent(`[Portafolio 3D] Consulta de ${formData.name} - ${formData.projectType}`);
    const body = encodeURIComponent(`Hola Yosiel,\n\nSoy ${formData.name} (${formData.email}).\n\nTipo de proyecto: ${formData.projectType}\n\nMensaje:\n${formData.message}\n\nEnviado desde el portafolio.`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e1b17] border border-[#3b342a] rounded-full text-xs font-retro-mono text-[#c29b62] mb-3">
            <Mail size={13} />
            <span>ESTACIÓN DE COMUNICACIONES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#f7f2e8] font-normal tracking-tight mb-4">
            Iniciemos una Conversación
          </h2>
          <p className="text-sm sm:text-base text-[#a99e8f] font-sans leading-relaxed">
            ¿Tienes un videojuego indie, un cortometraje o necesitas modelado 3D con estética vintage o realista? Hablemos de cómo darle vida a tu visión.
          </p>
        </div>

        {/* Telegram / Terminal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#181613] rounded-2xl border border-[#363027] retro-border p-6 sm:p-10 text-left">
          
          {/* Left Column: Direct Info & Social Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#2d2820] pb-8 lg:pb-0">
            <div>
              <span className="text-xs font-retro-mono text-[#c29b62] block mb-1">
                // DISPONIBILIDAD INMEDIATA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f6efe3] mb-4">
                Abierto a Comisiones & Contratos de Estudio
              </h3>
              <p className="text-sm text-[#ada293] font-sans leading-relaxed mb-6">
                Disponible tanto para proyectos remotos como oportunidades en sitio o híbridas en <strong>Houston, Texas</strong> y <strong>San Luis Potosí, México</strong>.
              </p>

              {/* Email Copy Box */}
              <div className="p-4 bg-[#121110] rounded-lg border border-[#332e26] space-y-2">
                <span className="text-[11px] font-retro-mono text-[#8a8172] block uppercase">
                  Correo Electrónico Directo
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-retro-mono text-xs sm:text-sm text-[#f1ebe0] font-semibold truncate">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded bg-[#24211c] hover:bg-[#342e26] text-[#c29b62] border border-[#40382d] transition-colors"
                    title="Copiar al portapapeles"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-retro-mono text-emerald-400 block animate-in fade-in">
                    ✓ ¡Copiado al portapapeles!
                  </span>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-retro-mono text-[#8e8475] block uppercase tracking-wider mb-3">
                Redes Profesionales & Portafolios
              </span>
              <div className="space-y-2.5 font-retro-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/yosiel-armando-sandate-362624263"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSound?.('click')}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.07V18.5h2.79z"/>
                    </svg>
                    <span>LinkedIn (Perfil Verificado)</span>
                  </div>
                  <ExternalLink size={14} className="text-[#847a6b]" />
                </a>

                <a
                  href="https://linktr.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSound?.('click')}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkIcon size={16} className="text-[#20d65b]" />
                    <span>Linktree (Todos los Enlaces)</span>
                  </div>
                  <ExternalLink size={14} className="text-[#847a6b]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2d2820]">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#c29b62]" />
                <span className="font-retro-mono text-xs text-[#ded5c7] uppercase tracking-wider">
                  Despacho de Telegrama / Mensaje Rápido
                </span>
              </div>
              <span className="font-retro-mono text-[10px] text-[#7c7365]">REF: MSG-2026</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                    Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre o estudio..."
                    className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                    Tu Correo
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@estudio.com"
                    className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                  Tipo de Proyecto
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] focus:border-[#c29b62] outline-none font-retro-mono text-xs cursor-pointer"
                >
                  <option value="3d-modeling">Modelado 3D & Digital Sculpting (ZBrush / Blender)</option>
                  <option value="game-art">Game Art para Videojuegos Indie (Unreal Engine)</option>
                  <option value="animation">Animación 2D o 3D (Toon Boom / 3D Acting)</option>
                  <option value="vintage-ad">Cartel Editorial / Campaña Publicitaria Retro</option>
                  <option value="full-time">Oferta de Contratación / Puesto en Estudio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                  Detalles del Proyecto o Mensaje
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto, fechas estimadas, especificaciones técnicas o presupuesto..."
                  className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-retro-mono text-[#8a8072]">
                  ⚡ Apertura de cliente de correo preconfigurado
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c29b62] hover:bg-[#d4ac73] text-[#121110] font-bold font-retro-mono text-xs tracking-wider uppercase rounded shadow transition-all flex items-center gap-2"
                >
                  <Send size={14} />
                  <span>Despachar Mensaje</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
