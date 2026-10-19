import React from 'react';
import { Languages, Volume2, VolumeX, Tv } from 'lucide-react';
import logoImg from '../assets/logo/LogoSimplificado_cropped.png';

export default function Navbar({
  soundEnabled,
  setSoundEnabled,
  crtEnabled,
  setCrtEnabled,
  lang,
  setLang,
  t,
  onSound,
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f0e0d]/90 border-b border-[#2b2721] px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={() => onSound?.('click')}
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-[#f4efe5] border-2 border-[#c29b62] flex items-center justify-center p-1 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(194,155,98,0.5)] transition-all overflow-hidden shadow-md">
            <img src={logoImg} alt="Yosh Logo" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0 text-left">
            <div className="max-w-[145px] truncate font-serif text-base sm:max-w-none sm:text-lg tracking-wide text-[#f3ede2] group-hover:text-[#c29b62] transition-colors font-bold leading-tight">
              Yosiel Armando Sandate
            </div>
            <div className="hidden text-[10px] font-retro-mono tracking-widest text-[#9b9283] uppercase sm:flex items-center gap-1.5">
              <span>{t.subtitle.split(' • ')[0]}</span>
              <span>•</span>
              <span className="text-[#c29b62]">{t.subtitle.split(' • ')[1]}</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-retro-mono text-xs tracking-wider text-[#b8ad9e]">
          <a
            href="#hero"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            {t.home}
          </a>
          <a
            href="#projects"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            {t.portfolio}
          </a>
          <a
            href="#experience"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            {t.experience}
          </a>
          <a
            href="#skills"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            {t.software}
          </a>
          <a
            href="#contact"
            onClick={() => onSound?.('click')}
            className="hover:text-[#f3ede2] hover:border-b border-[#c29b62] pb-0.5 transition-colors"
          >
            {t.contact}
          </a>
        </nav>

        {/* Controls & Badges */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              setLang(lang === 'es' ? 'en' : 'es');
              onSound?.('click');
            }}
            aria-label={t.switchLanguage}
            title={t.switchLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#c29b62]/60 text-[#dfcca5] bg-[#c29b62]/10 hover:bg-[#c29b62]/20 font-retro-mono text-xs transition-colors"
          >
            <Languages size={15} />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) onSound?.('beep');
            }}
            title={t.audioToggle}
            aria-label={t.audioToggle}
            className={`p-2 rounded border transition-colors ${
              soundEnabled
                ? 'border-[#c29b62]/60 text-[#c29b62] bg-[#c29b62]/10'
                : 'border-[#38332b] text-[#71695d] hover:text-[#d6cebf]'
            }`}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* CRT Filter Toggle */}
          <button
            onClick={() => {
              setCrtEnabled(!crtEnabled);
              onSound?.('crt');
            }}
            title={t.crtToggle}
            aria-label={t.crtToggle}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border text-xs font-retro-mono transition-colors ${
              crtEnabled
                ? 'border-emerald-500/60 text-emerald-400 bg-emerald-950/20'
                : 'border-[#38332b] text-[#857d71] hover:text-[#ded6c9]'
            }`}
          >
            <Tv size={15} />
            <span className="hidden sm:inline">{t.crtToggle} {crtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Status Badge */}
          <a
            href="#contact"
            onClick={() => onSound?.('click')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#1b1916] hover:bg-[#26221d] border border-[#3b342a] rounded text-xs font-retro-mono text-[#dcd4c6] transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.available}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
