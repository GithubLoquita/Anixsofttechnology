import React, { useState } from 'react';
import { X, Sparkles, Heart, Share2, Copy, Check, ExternalLink } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';
import { RangoliFloor } from './cartoon/RangoliFloor';
import { CharacterNamaste } from './cartoon/CharacterNamaste';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiwaliCardModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [diyaLit, setDiyaLit] = useState(true);

  if (!isOpen) return null;

  const handleCopyGreeting = () => {
    const message = `🪔 Happy Diwali from ANIX Software Technology! 🪔\nWishing you joy, prosperity, and inspiring digital innovation!\nDiscover our free tool QR Studio: https://qrenerator.vercel.app/`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diwali-card-title"
    >
      {/* Click outside to dismiss backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Greeting Card Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1C1445] via-[#150F33] to-[#0D0924] border-2 border-amber-400/50 p-6 sm:p-8 shadow-[0_25px_70px_rgba(245,158,11,0.25)] z-10 overflow-hidden text-center">
        {/* Subtle Decorative Rangoli Background */}
        <div className="absolute -top-20 -right-20 opacity-20 pointer-events-none">
          <RangoliFloor size={240} />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close Diwali Card"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Auspicious Header Motifs */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-amber-400 text-sm">✦</span>
          <span className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold">
            ANIX Festive Greetings
          </span>
          <span className="text-amber-400 text-sm">✦</span>
        </div>

        {/* Mini Character Greeting */}
        <div className="my-2 flex justify-center">
          <CharacterNamaste interactive={false} className="scale-85" />
        </div>

        {/* Card Main Title */}
        <h3
          id="diwali-card-title"
          className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 mt-2 mb-3"
        >
          Shubh Deepawali!
        </h3>

        {/* Festive Message Body */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
          May the divine glow of diyas illuminate your home and work with peace, prosperity, and boundless
          creative energy. Here's to building brighter, simpler digital experiences together!
        </p>

        {/* Centerpiece Diya */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-amber-500/20 mb-6 flex flex-col items-center">
          <DiyaFlame
            size="lg"
            isLit={diyaLit}
            onToggle={() => setDiyaLit(!diyaLit)}
            className="cursor-pointer"
          />
          <span className="text-[11px] text-amber-300/80 mt-2">
            {diyaLit ? 'Click to toggle flame' : 'Click to light diya'}
          </span>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleCopyGreeting}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Wishes!' : 'Copy Festive Wish'}</span>
          </button>

          <a
            href="https://qrenerator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-white border border-amber-500/40 font-semibold text-xs transition-all"
          >
            <span>Explore QR Studio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tagline footer */}
        <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400">
          <span>Technology That Makes Life Simpler. · ANIX Software Technology</span>
        </div>
      </div>
    </div>
  );
};
