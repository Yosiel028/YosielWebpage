import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ExperienceEducation from './components/ExperienceEducation';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { playRetroSound } from './utils/audio';
import { translations } from './utils/translations';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('yosiel_lang') === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('yosiel_lang', lang);
    } catch {}
  }, [lang]);

  const handleSound = (type = 'click') => {
    playRetroSound(type, soundEnabled);
  };

  const t = translations[lang] || translations.es;

  return (
    <div id="top" className="relative min-h-screen bg-[#0f0e0d] text-[#e7e1d5] selection:bg-[#c29b62] selection:text-[#121110]">
      {/* Optional CRT Scanlines and Vignette overlay */}
      {crtEnabled && (
        <>
          <div className="crt-overlay"></div>
          <div className="crt-vignette"></div>
        </>
      )}

      {/* Background Vintage Paper Grain Texture */}
      <div className="fixed inset-0 vintage-grain pointer-events-none z-0 opacity-40"></div>

      {/* Main Content Tree */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          crtEnabled={crtEnabled}
          setCrtEnabled={setCrtEnabled}
          lang={lang}
          setLang={setLang}
          t={t.navbar}
          onSound={handleSound}
        />

        <main className="flex-1">
          <Hero
            lang={lang}
            t={t.hero}
            onSound={handleSound}
          />

          <Gallery
            lang={lang}
            t={t.gallery}
            onSound={handleSound}
          />

          <ExperienceEducation
            lang={lang}
            t={t.experience}
            onSound={handleSound}
          />

          <SkillsMatrix
            lang={lang}
            t={t.skills}
            onSound={handleSound}
          />

          <ContactSection
            lang={lang}
            t={t.contact}
            onSound={handleSound}
          />
        </main>

        <Footer
          lang={lang}
          t={t.footer}
          onSound={handleSound}
        />
      </div>
    </div>
  );
}
