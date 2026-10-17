import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VintageAdLookbook from './components/VintageAdLookbook';
import ExperienceEducation from './components/ExperienceEducation';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { playRetroSound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [activeModel, setActiveModel] = useState('gameboy'); // 'gameboy' | 'vintageMac' | 'fragrance'

  const handleSound = (type = 'click') => {
    playRetroSound(type, soundEnabled);
  };

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
          onSound={handleSound}
        />

        <main className="flex-1">
          <Hero
            activeModel={activeModel}
            setActiveModel={setActiveModel}
            onSound={handleSound}
          />

          <Gallery onSound={handleSound} />

          <VintageAdLookbook onSound={handleSound} />

          <ExperienceEducation onSound={handleSound} />

          <SkillsMatrix onSound={handleSound} />

          <ContactSection onSound={handleSound} />
        </main>

        <Footer onSound={handleSound} />
      </div>
    </div>
  );
}
