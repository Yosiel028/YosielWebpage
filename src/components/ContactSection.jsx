import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ExternalLink, MapPin, Link as LinkIcon, MessageSquare, Sparkles } from 'lucide-react';
import julietaDesk from '../assets/Elementosgraficos/JulietaSentada_cropped.png';
import knightImg from '../assets/Elementosgraficos/Knight_cropped.png';

export default function ContactSection({ lang, t, onSound }) {
  const [copied, setCopied] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3d-characters',
    message: '',
  });

  // Official email addresses from CV & Portfolio documents
  const primaryEmail = 'yosiel3Ddesigns@gmail.com';
  const alternateEmail = 'yosiel.armando.sandate@gmail.com';
  const projectTypeLabels = {
    '3d-characters': t.options.characters,
    'game-art': t.options.gameArt,
    animation: t.options.animation,
    'film-vfx': t.options.filmVfx,
    commissions: t.options.commissions,
    'full-time': t.options.fullTime,
  };

  const handleCopyEmail = (emailToCopy = primaryEmail) => {
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    onSound?.('beep');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSound?.('click');
    const projectType = projectTypeLabels[formData.projectType];
    const subject = encodeURIComponent(`[${t.mailPrefix}] ${t.mailSubject} ${lang === 'es' ? 'de' : 'from'} ${formData.name} - ${projectType}`);
    const body = encodeURIComponent(`${t.mailGreeting}\n\n${t.mailName} ${formData.name} (${formData.email}).\n\n${t.mailProjectType} ${projectType}\n\n${t.mailMessage}\n${formData.message}\n\n${t.mailFooter}`);
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header matching Visual Reference 3 & 4 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e1b17] border border-[#3b342a] rounded-full text-xs font-retro-mono text-[#c29b62] mb-3">
            <Mail size={13} />
            <span>{t.stationTag}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#f7f2e8] font-normal tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#a99e8f] font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Telegram / Terminal Card with Character Integration */}
        <div className="relative bg-[#181613] rounded-2xl border border-[#363027] retro-border p-6 sm:p-10 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Direct Info & Social Channels (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#2d2820] pb-8 lg:pb-0">
              <div>
                <span className="text-xs font-retro-mono text-[#c29b62] block mb-1">
                  {t.availability}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f6efe3] mb-4">
                  {t.openTitle}
                </h3>
                <p className="text-sm text-[#ada293] font-sans leading-relaxed mb-6">
                  {t.openDesc}
                </p>

                {/* Email Copy Box */}
                <div className="p-4 bg-[#121110] rounded-lg border border-[#332e26] space-y-2.5">
                  <span className="text-[11px] font-retro-mono text-[#8a8172] block uppercase">
                    {t.emailLabel}
                  </span>
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-retro-mono text-xs sm:text-sm text-[#dfcca5] font-semibold truncate">
                      {primaryEmail}
                    </span>
                    <button
                      onClick={() => handleCopyEmail(primaryEmail)}
                      className="shrink-0 p-2 rounded bg-[#24211c] hover:bg-[#342e26] text-[#c29b62] border border-[#40382d] transition-colors"
                      title={t.copyPrimaryTitle}
                    >
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[#26211a] flex items-center justify-between text-[11px] font-retro-mono text-[#786e61]">
                    <span className="truncate">{alternateEmail}</span>
                    <button
                      onClick={() => handleCopyEmail(alternateEmail)}
                      className="text-[#c29b62] hover:underline shrink-0 ml-2"
                      title={t.copyAlternateTitle}
                    >
                      {t.copyAlternate}
                    </button>
                  </div>

                  {copied && (
                    <span className="text-[11px] font-retro-mono text-emerald-400 block animate-in fade-in">
                      {t.copiedSuccess}
                    </span>
                  )}
                </div>
              </div>

              {/* Verified Links from Text Document */}
              <div>
                <span className="text-xs font-retro-mono text-[#8e8475] block uppercase tracking-wider mb-3">
                  {t.socialsLabel}
                </span>
                <div className="space-y-2 font-retro-mono text-xs">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/yosiel-armando-sandate-962563354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSound?.('click')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.07V18.5h2.79z"/>
                      </svg>
                      <span>{t.linkedinLabel}</span>
                    </div>
                    <ExternalLink size={13} className="text-[#847a6b]" />
                  </a>

                  {/* Linktree */}
                  <a
                    href="https://linktr.ee/YOSH028"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSound?.('click')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkIcon size={15} className="text-[#20d65b]" />
                      <span>{t.linktreeLabel}</span>
                    </div>
                    <ExternalLink size={13} className="text-[#847a6b]" />
                  </a>

                  {/* Artstation */}
                  <a
                    href="https://www.artstation.com/yoshido-b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSound?.('click')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-[#13aff0] text-sm leading-none">A</span>
                      <span>{t.artstationLabel}</span>
                    </div>
                    <ExternalLink size={13} className="text-[#847a6b]" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/yosiel028/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSound?.('click')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-current text-[#e1306c]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>{t.instagramLabel}</span>
                    </div>
                    <ExternalLink size={13} className="text-[#847a6b]" />
                  </a>

                  {/* Demo Reel Link */}
                  <a
                    href="https://youtu.be/2QDKLjbx9Y0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSound?.('click')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#201d19] hover:bg-[#2b2721] border border-[#383228] text-[#ded6c9] hover:text-[#f7f2e8] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-current text-[#ff0000]" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>{t.demoReelLabel}</span>
                    </div>
                    <ExternalLink size={13} className="text-[#847a6b]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Dispatch Form (7 cols) */}
            <div className="lg:col-span-7 xl:pr-24 relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2d2820]">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-[#c29b62]" />
                  <span className="font-retro-mono text-xs text-[#ded5c7] uppercase tracking-wider">
                    {t.formTitle}
                  </span>
                </div>
                <span className="font-retro-mono text-[10px] text-[#7c7365]">REF: MSG-2026</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                      {t.fieldName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.yourName}
                      className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                      {t.fieldEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@studio.com"
                      className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                    {t.fieldType}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] focus:border-[#c29b62] outline-none font-retro-mono text-xs cursor-pointer"
                  >
                    <option value="3d-characters">{t.options.characters}</option>
                    <option value="game-art">{t.options.gameArt}</option>
                    <option value="animation">{t.options.animation}</option>
                    <option value="film-vfx">{t.options.filmVfx}</option>
                    <option value="commissions">{t.options.commissions}</option>
                    <option value="full-time">{t.options.fullTime}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-retro-mono text-[#a89e90] mb-1.5 uppercase">
                    {t.fieldMessage}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.placeholderMessage}
                    className="w-full px-3.5 py-2.5 bg-[#121110] border border-[#383229] rounded text-sm text-[#f1ebd0] placeholder-[#665e52] focus:border-[#c29b62] outline-none font-sans resize-none"
                  ></textarea>
                </div>

                {/* Submit button relocated to left side to ensure zero overlap */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#c29b62] hover:bg-[#d4ac73] text-[#121110] font-bold font-retro-mono text-xs tracking-wider uppercase rounded shadow transition-all flex items-center gap-2"
                  >
                    <Send size={14} />
                    <span>{t.btnSend}</span>
                  </button>
                  <span className="text-[11px] font-retro-mono text-[#8a8072]">
                    {t.clientNotice}
                  </span>
                </div>
              </form>
            </div>

          </div>

          {/* ========================================================
              JULIETA SENTADA AT HER COMPUTER DESK (IMAGE 3 REFERENCE)
              Positioned at the bottom-right corner of the dispatch form
              ======================================================== */}
          <div className="hidden xl:block absolute -bottom-10 -right-24 w-[300px] pointer-events-none z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
            <img
              src={julietaDesk}
              alt={t.julietaAlt}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

        {/* Mobile/Tablet Inline Showcase of Julieta sitting at desk */}
        <div className="xl:hidden mt-8 flex justify-center">
          <div className="w-[240px] max-w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            <img
              src={julietaDesk}
              alt={t.julietaAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
