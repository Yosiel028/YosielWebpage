import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink, Image as ImageIcon, Sparkles, X } from 'lucide-react';
import gameboyBezel from '../assets/Elementosgraficos/GameBoy_1_cropped.png';
import yoshiPhoto from '../assets/FotosMias/Yoshi.exe.jpg';

// Event & Certificate photos
import talentlandImg from '../assets/FotosMias/Talentland.jpg';
import gameconferenceImg from '../assets/FotosMias/Gameconference.jpg';
import constanciaImg from '../assets/FotosMias/ConstanciaYoshi+.jpg';
import claseOnlineImg from '../assets/FotosMias/Classenlinea.PNG';
import conNegasImg from '../assets/FotosMias/FotoConNegasEditada.png';

export default function ExperienceEducation({ lang, t, onSound }) {
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const eventPhotos = [
    { title: t.eventTitles[0], img: talentlandImg, desc: t.eventDescriptions[0] },
    { title: t.eventTitles[1], img: gameconferenceImg, desc: t.eventDescriptions[1] },
    { title: t.eventTitles[2], img: constanciaImg, desc: t.eventDescriptions[2] },
    { title: t.eventTitles[3], img: claseOnlineImg, desc: t.eventDescriptions[3] },
    { title: t.eventTitles[4], img: conNegasImg, desc: t.eventDescriptions[4] },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 border-b border-[#2b2721] bg-[#11100e]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ========================================================
            PART 1: VISUAL REFERENCE "ABOUT ME" (GAME BOY + BIO + LOGOS)
            Matching Image 2 Reference
            ======================================================== */}
        <div className="bg-[#161412] border border-[#332e26] rounded-2xl p-6 sm:p-10 retro-border">
          
          {/* Top Bar with Language Toggle & Section Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#2d2821] mb-8 font-retro-mono text-xs">
            <div className="flex items-center gap-2 text-[#c29b62]">
              <span className="w-2 h-2 rounded-full bg-[#c29b62] animate-ping"></span>
              <span className="tracking-widest uppercase">{t.profileTag}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#847a6b] text-[11px]">{t.langLabel} {lang === 'es' ? 'Español' : 'English'}</span>
            </div>
          </div>

          {/* 3-Column Layout: Game Boy Left | Bio Center | Institution Logos Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Game Boy Frame with Yosiel's Photo inside the screen (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[647/996] select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                
                {/* Photo behind the transparent Game Boy LCD screen */}
                <div
                  className="absolute z-0 overflow-hidden bg-[#242c16] rounded-md shadow-inner flex items-center justify-center"
                  style={{
                    left: '13.14%',
                    top: '11.55%',
                    width: '69.40%',
                    height: '33.13%',
                  }}
                >
                  <img
                    src={yoshiPhoto}
                    alt="Yosiel Armando Sandate"
                    className="w-full h-full object-cover grayscale contrast-125 filter"
                  />
                  {/* Retro Dot-Matrix Game Boy Screen Tint */}
                  <div className="absolute inset-0 pointer-events-none bg-[#8bac0f]/30 mix-blend-multiply"></div>
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_3px] opacity-70"></div>
                  {/* Battery LED indicator on GameBoy */}
                  <div className="absolute top-4 left-3 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_red] animate-pulse"></div>
                </div>

                {/* Bezel Overlay on top */}
                <img
                  src={gameboyBezel}
                  alt="Nintendo Game Boy"
                  className="relative z-10 w-full h-full object-contain pointer-events-none"
                />
              </div>
            </div>

            {/* Center: "About me" Text in Pixel & Editorial Typography (5 cols) */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="font-pixel text-xl sm:text-2xl text-[#dfcca5] tracking-wide">
                  {t.aboutMeTitle}
                </h3>
                <span className="text-[#c29b62] font-pixel text-lg">♥</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#ded6c8] font-sans leading-relaxed">
                <p className="font-serif text-lg text-[#f6efe2]">{t.whoAmITitle}</p>
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <div className="p-3.5 bg-[#1f1c18] border-l-2 border-[#c29b62] rounded-r text-xs text-[#c2b6a3] italic">
                  <span className="block font-bold text-[#f0e8db] not-italic mb-1 font-retro-mono text-[11px] uppercase text-[#c29b62]">
                    {t.philosophyLabel}
                  </span>
                  {t.philosophyText}
                </div>
                <div className="pt-1 flex items-center gap-2 font-retro-mono text-xs text-[#c29b62]">
                  <Sparkles size={14} />
                  <span className="font-bold">{t.specialtyHighlight}</span>
                </div>
              </div>
            </div>

            {/* Right: Institution Badges matching Image 2 Reference (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-6">
              
              {/* CUAAD Badge */}
              <div
                onClick={() => {
                  setActivePhotoModal(eventPhotos[2]);
                  onSound?.('beep');
                }}
                className="group cursor-pointer p-4 bg-[#1b1916] hover:bg-[#25221d] border border-[#383228] hover:border-[#528eb3] rounded-xl text-left w-full max-w-[220px] transition-all hover:scale-105"
                title={lang === 'en' ? 'Click to view the official CUAAD certificate' : 'Click para ver constancia oficial CUAAD'}
              >
                <div className="font-serif text-2xl font-black text-[#528eb3] tracking-wider leading-none">
                  CUAAD
                </div>
                <div className="text-[10px] font-retro-mono text-[#8a96a3] mt-1 uppercase leading-tight">
                  {t.cuaadName}
                </div>
                <div className="mt-2 text-[10px] text-emerald-400 font-retro-mono flex items-center gap-1">
                  <span>{t.badges.cuaadRole}</span>
                </div>
              </div>

              {/* GCMX Badge */}
              <div
                onClick={() => {
                  setActivePhotoModal(eventPhotos[1]);
                  onSound?.('beep');
                }}
                className="group cursor-pointer p-4 bg-[#1b1916] hover:bg-[#25221d] border border-[#383228] hover:border-[#38bdf8] rounded-xl text-left w-full max-w-[220px] transition-all hover:scale-105"
                title={lang === 'en' ? 'Click to view the Game Conference MX photo' : 'Click para ver foto en Game Conference MX'}
              >
                <div className="flex items-baseline gap-1 font-retro-mono text-2xl font-black">
                  <span className="text-[#a855f7]">G</span>
                  <span className="text-[#38bdf8]">M</span>
                  <span className="text-[#a855f7]">C</span>
                  <span className="text-[#38bdf8]">X</span>
                </div>
                <div className="text-[10px] font-retro-mono text-[#94a3b8] mt-1 uppercase leading-tight">
                  Game Conference MX
                </div>
                <div className="mt-2 text-[10px] text-amber-400 font-retro-mono flex items-center gap-1">
                  <span>{t.badges.gcmxRole}</span>
                </div>
              </div>

              {/* TalentLand Badge */}
              <div
                onClick={() => {
                  setActivePhotoModal(eventPhotos[0]);
                  onSound?.('beep');
                }}
                className="group cursor-pointer p-4 bg-[#1b1916] hover:bg-[#25221d] border border-[#383228] hover:border-emerald-500 rounded-xl text-left w-full max-w-[220px] transition-all hover:scale-105"
                title={lang === 'en' ? 'Click to view the Talent Land photo' : 'Click para ver foto en Talent Land'}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-black text-xs rotate-12">
                    TL
                  </div>
                  <span className="font-retro-mono text-base font-bold text-emerald-400">
                    TALENTLAND
                  </span>
                </div>
                <div className="text-[10px] font-retro-mono text-[#8b9e8f] mt-1.5 uppercase leading-tight">
                  {t.talentlandLocation}
                </div>
                <div className="mt-2 text-[10px] text-emerald-400 font-retro-mono flex items-center gap-1">
                  <span>{t.badges.talentlandRole}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Quick Photo Strip of Verified Events */}
          <div className="mt-8 pt-6 border-t border-[#29251f] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-retro-mono text-[#a89d8d] flex items-center gap-2">
              <ImageIcon size={14} className="text-[#c29b62]" />
              <span>{t.photoStripLabel}</span>
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {eventPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActivePhotoModal(photo);
                    onSound?.('click');
                  }}
                  className="px-2.5 py-1 bg-[#201d19] hover:bg-[#2c2721] border border-[#3b352b] hover:border-[#c29b62] rounded text-[11px] font-retro-mono text-[#ded6c8] transition-colors flex items-center gap-1.5"
                >
                  <span>📷 {photo.title.split('—')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>

        </div>


        {/* ========================================================
            PART 2: FORMAL DOSSIER & WORK EXPERIENCE FROM CV
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Column 1: Detailed Work Experience Dossier */}
          <div className="p-6 sm:p-8 bg-[#181613] rounded-xl border border-[#312c24] retro-border space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-[#2b2720]">
              <div className="w-10 h-10 rounded-lg bg-[#27231c] border border-[#3f382d] flex items-center justify-center text-[#c29b62]">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#f6efe2]">{t.workTitle}</h3>
                <span className="text-xs font-retro-mono text-[#8a8172]">{t.workSubtitle}</span>
              </div>
            </div>

            {/* Experience 1: Oniric Mob */}
            <div className="relative pl-6 border-l-2 border-[#c29b62] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  {t.oniricRole}
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-retro-mono text-[11px]">
                  {t.oniricPeriod}
                </span>
              </div>

              <div className="text-xs font-retro-mono text-[#c29b62]">
                {t.oniricStudio}
              </div>

              <ul className="space-y-2 text-xs text-[#b8aca0] font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>{t.oniricItem1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>{t.oniricItem2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#c29b62] shrink-0 mt-0.5" />
                  <span>{t.oniricItem3}</span>
                </li>
              </ul>
            </div>

            {/* Experience 2: Cortometraje "Entre fichas y recuerdos" */}
            <div className="relative pl-6 border-l-2 border-[#cca76a] space-y-3 pt-4 border-t border-[#26211a]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  {t.directorTitle}
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-300 font-retro-mono text-[11px]">
                  2026
                </span>
              </div>

              <div className="text-xs font-retro-mono text-[#c29b62]">
                {t.directorProject} <span className="font-bold text-[#e8ded0]">"Entre fichas y recuerdos"</span>
              </div>

              <p className="text-xs text-[#b8aca0] font-sans leading-relaxed">
                {t.directorDesc}
              </p>
            </div>

            {/* Experience 3: Taller CUAAD */}
            <div className="relative pl-6 border-l-2 border-[#528eb3] space-y-3 pt-4 border-t border-[#26211a]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  {t.cuaadRoleTitle}
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-sky-950/40 border border-sky-500/40 text-sky-300 font-retro-mono text-[11px]">
                  2024
                </span>
              </div>

              <div className="text-xs font-retro-mono text-[#528eb3]">
                {t.cuaadSub}
              </div>

              <p className="text-xs text-[#b8aca0] font-sans leading-relaxed">
                {t.cuaadDesc}
              </p>
            </div>

            {/* Experience 4: Expositor & Comisiones */}
            <div className="pt-4 border-t border-[#26211a] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-3 bg-[#13110f] rounded border border-[#2b261f]">
                <span className="font-retro-mono text-[#c29b62] font-bold block mb-1">
                  {t.exhibitorTitle}
                </span>
                <span className="text-[#a49988]">
                  {t.exhibitorDesc}
                </span>
              </div>

              <div className="p-3 bg-[#13110f] rounded border border-[#2b261f]">
                <span className="font-retro-mono text-[#c29b62] font-bold block mb-1">
                  {t.commissionsTitle}
                </span>
                <span className="text-[#a49988]">
                  {t.commissionsDesc}
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Academic Formation & Personal Skills */}
          <div className="p-6 sm:p-8 bg-[#181613] rounded-xl border border-[#312c24] retro-border space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-[#2b2720]">
              <div className="w-10 h-10 rounded-lg bg-[#27231c] border border-[#3f382d] flex items-center justify-center text-[#c29b62]">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#f6efe2]">{t.academicTitle}</h3>
                <span className="text-xs font-retro-mono text-[#8a8172]">{t.degreeLevel}</span>
              </div>
            </div>

            {/* Degree: UNIAT */}
            <div className="relative pl-6 border-l-2 border-[#e0a256] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-xl text-[#f6efe3] font-normal">
                  {t.degreeTitle}
                </h4>
                <span className="px-2.5 py-0.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-300 font-retro-mono text-[11px]">
                  2022 — 2026
                </span>
              </div>

              <div className="text-xs font-retro-mono text-[#c29b62]">
                <span className="font-bold text-[#e8ded0]">UNIAT</span> • University of Advanced Technologies
              </div>

              <p className="text-xs sm:text-sm text-[#b2a797] font-sans leading-relaxed">
                {t.degreeDesc}
              </p>

              {/* Languages */}
              <div className="pt-2">
                <span className="text-[11px] font-retro-mono text-[#8c8272] uppercase block mb-1.5">
                  {t.languagesLabel}
                </span>
                <div className="flex gap-2 font-retro-mono text-xs">
                  <span className="px-2.5 py-1 bg-[#201d19] border border-[#383126] text-[#dfcca5] rounded">
                    {t.langSpanish}
                  </span>
                  <span className="px-2.5 py-1 bg-[#201d19] border border-[#383126] text-[#dfcca5] rounded">
                    {t.langEnglish}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal and Professional Skills from CV */}
            <div className="pt-4 border-t border-[#26211a] space-y-3">
              <span className="text-xs font-retro-mono text-[#c29b62] uppercase tracking-wider block">
                {t.personalSkillsLabel}
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#d6cdbd]">
                {t.professionalSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 p-2.5 bg-[#141210] rounded border border-[#2d2821]">
                    <CheckCircle size={14} className="text-[#c29b62] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographical Availability */}
            <div className="pt-4 border-t border-[#26211a] flex items-start gap-3">
              <MapPin size={18} className="text-[#c29b62] shrink-0 mt-0.5" />
              <div className="text-xs text-[#a99e8f] font-sans leading-relaxed">
                <strong className="text-[#ded4c5]">{t.locationLabel}</strong> {t.locationDesc}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for Event Photo Evidence */}
      {activePhotoModal && (
        <div
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#181613] border border-[#3b3429] rounded-xl overflow-hidden p-6 text-left shadow-2xl"
          >
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#24211d] hover:bg-[#342e26] text-[#c7beaf] transition-colors"
            >
              <X size={18} />
            </button>

            <h3 className="font-serif text-2xl text-[#f6efe2] mb-1">
              {activePhotoModal.title}
            </h3>
            <p className="text-xs font-retro-mono text-[#c29b62] mb-4">
              {activePhotoModal.desc}
            </p>

            <div className="w-full max-h-[70vh] rounded-lg overflow-hidden border border-[#342e26] bg-black flex items-center justify-center">
              <img
                src={activePhotoModal.img}
                alt={activePhotoModal.title}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
