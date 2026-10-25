import React, { useState } from 'react';
import { DiyaFlame } from './DiyaFlame';
import { LanternKandil } from './LanternKandil';
import { RangoliFloor } from './RangoliFloor';
import { CharacterNamaste } from './CharacterNamaste';
import { CharacterDiyaLighter } from './CharacterDiyaLighter';
import { CharacterGift } from './CharacterGift';
import { CharacterLaptopCoder } from './CharacterLaptopCoder';
import { CharacterWaving } from './CharacterWaving';

export const HeroCelebrationStage: React.FC = () => {
  const [litDiyasCount, setLitDiyasCount] = useState<number>(5);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const toggleDiya = () => {
    setLitDiyasCount((prev) => (prev > 0 ? prev - 1 : 5));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#110E2E]/90 via-[#18113C]/95 to-[#0B081E] border border-amber-500/30 p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] overflow-hidden">
      {/* Subtle Deep Festive Ambient Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Golden Garlands & Hanging Lanterns at top */}
      <div className="absolute top-0 inset-x-0 h-32 flex justify-between px-4 sm:px-12 pointer-events-none z-10">
        <LanternKandil color="saffron" size="sm" delay="0s" className="-mt-2" />
        <LanternKandil color="gold" size="md" delay="1.2s" className="-mt-1 hidden sm:inline-flex" />
        <LanternKandil color="purple" size="sm" delay="0.5s" className="-mt-3 hidden md:inline-flex" />
        <LanternKandil color="maroon" size="md" delay="2.1s" className="-mt-1" />
        <LanternKandil color="gold" size="sm" delay="1.6s" className="-mt-2 hidden sm:inline-flex" />
      </div>

      {/* Gentle Sky Fireworks Sparkles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {/* Firework Spark Burst 1 */}
        <div className="absolute top-12 left-1/5 w-1 h-1 rounded-full bg-amber-300 shadow-[0_0_12px_6px_rgba(245,158,11,0.6)] animate-pulse" />
        <div className="absolute top-20 right-1/4 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_14px_8px_rgba(236,72,153,0.5)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-16 right-12 w-1 h-1 rounded-full bg-yellow-200 shadow-[0_0_10px_5px_rgba(254,240,138,0.7)] animate-pulse" style={{ animationDelay: '0.8s' }} />
        
        {/* Golden Floating Stardust Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-60"
            style={{
              top: `${15 + (i * 11) % 70}%`,
              left: `${8 + (i * 13) % 85}%`,
              animationDuration: `${3 + (i % 3)}s`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Top Banner Tag / Status */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>ANIX Tech Studio · Festive Team Celebration</span>
        </div>

        {/* Interactive Lighting Diya Counter */}
        <button
          onClick={toggleDiya}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-amber-400/40 text-xs text-amber-200 transition-colors cursor-pointer group"
          title="Click to interact with the diyas"
        >
          <span className="text-amber-400">🪔</span>
          <span>Diyas Glowing ({litDiyasCount}/5)</span>
          <span className="text-[10px] text-amber-400/80 group-hover:text-amber-300">· Tap to light</span>
        </button>
      </div>

      {/* Central Stage Floor with Rangoli & Characters */}
      <div className="relative z-10 pt-10 pb-4 flex flex-col items-center">
        {/* Rangoli Floor Base */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-70">
          <RangoliFloor size={380} />
        </div>

        {/* The Animated Team Lineup */}
        <div className="relative z-10 w-full flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-8 pt-4">
          {/* Character 1: Gift Giver */}
          <div className="order-2 md:order-1 transition-transform hover:scale-105 duration-300">
            <CharacterGift
              speechText="Diwali sweets & bright ideas!"
              className="scale-90 sm:scale-95"
            />
          </div>

          {/* Character 2: Namaste Tech Lead */}
          <div className="order-1 md:order-2 transition-transform hover:scale-105 duration-300">
            <CharacterNamaste
              speechText="Happy Diwali from ANIX!"
              className="scale-95 sm:scale-100"
            />
          </div>

          {/* Character 3 (Center): Diya Lighter */}
          <div className="order-3 transition-transform hover:scale-105 duration-300">
            <CharacterDiyaLighter
              speechText="Lighting up modern digital experiences!"
              className="scale-100 sm:scale-105"
            />
          </div>

          {/* Character 4: Laptop Engineer (QR Studio showcase) */}
          <div className="order-4 transition-transform hover:scale-105 duration-300">
            <CharacterLaptopCoder
              speechText="Building QR Studio: Fast, Simple, Free!"
              className="scale-95 sm:scale-100"
            />
          </div>

          {/* Character 5: Waving Tech Specialist */}
          <div className="order-5 transition-transform hover:scale-105 duration-300">
            <CharacterWaving
              speechText="Welcome! Explore our digital products!"
              className="scale-90 sm:scale-95"
            />
          </div>
        </div>

        {/* Foreground Diya Garland Row on Stage Border */}
        <div className="relative z-20 flex justify-center items-center gap-4 sm:gap-8 mt-6 pt-3 border-t border-amber-500/20 w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <DiyaFlame
              key={`stage-diya-${index}`}
              size={index === 2 ? 'md' : 'sm'}
              isLit={index < litDiyasCount}
              onToggle={() => setLitDiyasCount((prev) => (prev > index ? index : index + 1))}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Stage Caption / Floating Badge */}
      <div className="relative z-20 mt-4 text-center">
        <p className="text-xs text-amber-200/80 font-medium">
          Original CSS cartoon team celebrating Diwali · Hover or tap any character to interact
        </p>
      </div>
    </div>
  );
};
