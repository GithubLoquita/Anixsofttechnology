import React, { useState } from 'react';
import { Sparkles, Copy, Check, Volume2, VolumeX, Heart, Share2 } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';
import { RangoliFloor } from './cartoon/RangoliFloor';
import { CharacterNamaste } from './cartoon/CharacterNamaste';
import { CharacterDiyaLighter } from './cartoon/CharacterDiyaLighter';
import { CharacterGift } from './cartoon/CharacterGift';
import { CharacterLaptopCoder } from './cartoon/CharacterLaptopCoder';
import { CharacterWaving } from './cartoon/CharacterWaving';

export const DiwaliExperience: React.FC = () => {
  const [diyasLit, setDiyasLit] = useState<boolean[]>([true, true, true, true, true, true, true]);
  const [copied, setCopied] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [activeBlessing, setActiveBlessing] = useState<number>(0);

  const blessings = [
    {
      title: 'Light of Innovation',
      message:
        'May this festival of lights illuminate your path with bold creativity, clear thinking, and meaningful technology breakthroughs.',
    },
    {
      title: 'Prosperity & Simplicity',
      message:
        'Wishing you clean code, smooth workflows, and the joy of simple tools that make every day productive and rewarding.',
    },
    {
      title: 'Warmth & Good Health',
      message:
        'From our entire team at ANIX Software Technology, we wish you and your loved ones peace, happiness, and prosperity this Diwali.',
    },
  ];

  // Web Audio gentle chime on diya lighting (no external assets, fully client-side)
  const playChime = () => {
    if (!audioEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      // Harmonious pentatonic chime note
      const notes = [523.25, 587.33, 659.25, 783.99, 880.0];
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      osc.frequency.setValueAtTime(randomNote, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Ignore if audio context is blocked
    }
  };

  const toggleDiya = (index: number) => {
    setDiyasLit((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
    playChime();
  };

  const lightAllDiyas = () => {
    setDiyasLit(diyasLit.map(() => true));
    playChime();
  };

  const copyGreeting = () => {
    const text = `✨ Happy Diwali from ANIX Software Technology! ✨\n"Technology That Makes Life Simpler."\nCelebrate with QR Studio: https://qrenerator.vercel.app/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="diwali" className="py-24 bg-gradient-to-b from-[#0B1120] via-[#1A0E2E] to-[#0B1120] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-4">
            <DiyaFlame size="sm" isLit={true} showGlow={false} />
            <span>Festive Celebration Pavilion</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Diwali Interactive Celebration
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Light traditional earthen diyas, explore our animated tech team, and share festive greetings with
            your network.
          </p>
        </div>

        {/* Central Festive Altar & Interactive Diya Lighting Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-amber-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-sm mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>The Altar of Lights</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {diyasLit.filter(Boolean).length} / {diyasLit.length} Lit
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Tap any diya to light or blow its flame.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  audioEnabled
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle gentle chime sound effect on lighting diyas"
                aria-label="Toggle audio effects"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-[11px] hidden sm:inline">{audioEnabled ? 'Chime On' : 'Chime Off'}</span>
              </button>

              <button
                onClick={lightAllDiyas}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                Light All Diyas
              </button>
            </div>
          </div>

          {/* Diya Array */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-6">
            {diyasLit.map((isLit, idx) => (
              <div
                key={`altar-diya-${idx}`}
                className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <DiyaFlame
                  size={idx === 3 ? 'lg' : 'md'}
                  isLit={isLit}
                  onToggle={() => toggleDiya(idx)}
                />
                <span className="text-[10px] font-mono text-slate-400">
                  {isLit ? 'Glowing' : 'Tap to light'}
                </span>
              </div>
            ))}
          </div>

          {/* Festive Blessings Switcher */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex justify-center gap-2 mb-4">
              {blessings.map((b, i) => (
                <button
                  key={b.title}
                  onClick={() => setActiveBlessing(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeBlessing === i
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {b.title}
                </button>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-lg font-bold text-amber-300 mb-2">
                {blessings[activeBlessing].title}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed italic">
                "{blessings[activeBlessing].message}"
              </p>
            </div>

            {/* Share Greeting CTA */}
            <div className="flex justify-center mt-6">
              <button
                onClick={copyGreeting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Greeting Copied to Clipboard!' : 'Copy Festive Greeting to Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
