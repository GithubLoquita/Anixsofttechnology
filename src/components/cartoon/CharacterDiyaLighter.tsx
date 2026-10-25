import React, { useState } from 'react';
import { DiyaFlame } from './DiyaFlame';

interface CharacterProps {
  className?: string;
  speechText?: string;
  interactive?: boolean;
}

export const CharacterDiyaLighter: React.FC<CharacterProps> = ({
  className = '',
  speechText = 'Lighting the lamp of innovation!',
  interactive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDiyaLit, setIsDiyaLit] = useState(true);

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none group ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      role="img"
      aria-label="Female tech engineer in festive teal lehenga lighting a Diwali diya"
    >
      {/* Speech Bubble */}
      <div
        className={`absolute -top-12 z-30 px-3 py-1 bg-amber-950/90 border border-amber-400/60 rounded-full text-xs font-medium text-amber-200 shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <span>{speechText}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-amber-950 border-r border-b border-amber-400/60" />
      </div>

      {/* Main Body */}
      <div className="relative flex flex-col items-center animate-char-breathe">
        {/* Hair - Elegant long hair with festive Gajra / flower accessory */}
        <div className="relative z-0 w-16 h-10 bg-slate-900 rounded-t-full -mb-4">
          {/* Hair Bun / Flow with floral jasmine garland (Gajra) */}
          <div className="absolute -top-1 left-2 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-100" />
          </div>
          {/* Flowing side tresses */}
          <div className="absolute -left-1 top-4 w-2 h-12 bg-slate-900 rounded-full" />
          <div className="absolute -right-1 top-4 w-2 h-12 bg-slate-900 rounded-full" />
        </div>

        {/* Head */}
        <div className="relative z-10 w-13 h-15 rounded-[46%_46%_48%_48%] bg-[#F0BD92] border border-[#CCA07C] shadow-sm flex flex-col items-center pt-2">
          {/* Bindi (Traditional Festive Red/Gold dot) */}
          <div className="w-1.5 h-1.5 rounded-full bg-rose-600 shadow-[0_0_3px_#e11d48] mb-1" />

          {/* Eyebrows */}
          <div className="flex gap-3.5 mb-1">
            <div className="w-3 h-0.5 bg-slate-800 rounded-full -rotate-6" />
            <div className="w-3 h-0.5 bg-slate-800 rounded-full rotate-6" />
          </div>

          {/* Eyes with Kajal & CSS Blinking */}
          <div className="flex gap-3.5 items-center">
            <div className="animate-eye-blink relative w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
            <div className="animate-eye-blink relative w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
          </div>

          {/* Golden Jhumka Earrings */}
          <div className="absolute -left-1.5 top-6 flex flex-col items-center">
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="w-2 h-1.5 bg-amber-400 rounded-b-full shadow-xs" />
          </div>
          <div className="absolute -right-1.5 top-6 flex flex-col items-center">
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="w-2 h-1.5 bg-amber-400 rounded-b-full shadow-xs" />
          </div>

          {/* Cheerful blush */}
          <div className="flex justify-between w-9 mt-1 opacity-45">
            <div className="w-1.5 h-1 rounded-full bg-rose-500" />
            <div className="w-1.5 h-1 rounded-full bg-rose-500" />
          </div>

          {/* Gentle Smile */}
          <div className="w-3.5 h-1.5 border-b-2 border-amber-950 rounded-b-full mt-0.5" />
        </div>

        {/* Neck with Golden Necklace / Choker */}
        <div className="relative w-4 h-2 bg-[#E2AD84] -mt-0.5 z-0 flex justify-center items-center">
          <div className="w-3.5 h-0.5 bg-amber-400 rounded-full" />
        </div>

        {/* Upper Body: Teal & Golden Festive Choli / Blouse with Dupatta */}
        <div className="relative z-10 w-22 h-18 rounded-t-xl bg-gradient-to-b from-teal-700 via-teal-800 to-teal-900 shadow-md flex flex-col items-center border-t-2 border-amber-300">
          {/* Golden Zari embroidery neckline */}
          <div className="w-8 h-3 rounded-b-full border-b-2 border-amber-400" />

          {/* Draped Golden / Saffron Dupatta */}
          <div className="absolute inset-y-0 -left-1 w-5 bg-gradient-to-br from-amber-400/90 to-yellow-500/80 rounded-l-md rotate-6 shadow-xs border-r border-yellow-200" />

          {/* Arms holding the glowing Diya */}
          <div className="absolute top-4 inset-x-2 flex justify-between items-center z-20">
            {/* Left Arm */}
            <div className="w-4 h-8 bg-teal-800 rounded-full rotate-45 border-l border-amber-300" />
            {/* Hands cradling Diya */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 flex flex-col items-center z-30">
              <DiyaFlame
                size="sm"
                isLit={isDiyaLit}
                onToggle={() => setIsDiyaLit(!isDiyaLit)}
                className="hover:scale-110 transition-transform"
              />
              <div className="w-8 h-2 bg-[#F0BD92] rounded-full border-t border-[#CCA07C] -mt-1" />
            </div>
            {/* Right Arm */}
            <div className="w-4 h-8 bg-teal-800 rounded-full -rotate-45 border-r border-amber-300" />
          </div>
        </div>

        {/* Festive Flared Lehenga Skirt (Teal, Gold, Ruby accents) */}
        <div className="relative z-0 w-28 h-20 -mt-1 rounded-t-md bg-gradient-to-b from-teal-800 via-teal-900 to-teal-950 flex flex-col items-center overflow-hidden border-b-4 border-amber-400 shadow-lg">
          {/* Gold Pleat Lines */}
          <div className="w-full flex justify-around px-2 pt-1 opacity-70">
            <span className="w-0.5 h-16 bg-amber-400/50" />
            <span className="w-0.5 h-16 bg-amber-400/70" />
            <span className="w-0.5 h-16 bg-amber-400/50" />
            <span className="w-0.5 h-16 bg-amber-400/70" />
            <span className="w-0.5 h-16 bg-amber-400/50" />
          </div>
          {/* Heavy Zari Border at bottom of Lehenga */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 border-t border-yellow-200 flex items-center justify-around">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal-800" />
            <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal-800" />
          </div>
        </div>

        {/* Festive Golden Juttis */}
        <div className="flex gap-4 -mt-0.5">
          <div className="w-4 h-2 bg-amber-500 rounded-t-full border border-yellow-300" />
          <div className="w-4 h-2 bg-amber-500 rounded-t-full border border-yellow-300" />
        </div>
      </div>
    </div>
  );
};
