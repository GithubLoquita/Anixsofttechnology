import React, { useState } from 'react';

interface CharacterProps {
  className?: string;
  speechText?: string;
  interactive?: boolean;
}

export const CharacterNamaste: React.FC<CharacterProps> = ({
  className = '',
  speechText = 'Namaste & Happy Diwali!',
  interactive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none group ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      role="img"
      aria-label="Indian tech professional in maroon kurta greeting with folded hands"
    >
      {/* Speech Bubble */}
      <div
        className={`absolute -top-12 z-20 px-3 py-1 bg-amber-950/90 border border-amber-400/60 rounded-full text-xs font-medium text-amber-200 shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <span>{speechText}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-amber-950 border-r border-b border-amber-400/60" />
      </div>

      {/* Main Character Body Group */}
      <div className="relative flex flex-col items-center animate-char-breathe">
        {/* Hair - Stylish combed dark hair */}
        <div className="relative z-10 w-16 h-8 bg-slate-900 rounded-t-full -mb-3 flex justify-center">
          <div className="w-4 h-3 bg-slate-800 rounded-full -ml-3 -mt-0.5" />
        </div>

        {/* Head */}
        <div className="relative z-10 w-14 h-16 rounded-[45%_45%_48%_48%] bg-[#E8B282] border border-[#C58957] shadow-sm flex flex-col items-center pt-2">
          {/* Eyebrows */}
          <div className="flex gap-4 mb-1">
            <div className="w-3 h-0.5 bg-slate-800 rounded-full -rotate-6" />
            <div className="w-3 h-0.5 bg-slate-800 rounded-full rotate-6" />
          </div>

          {/* Eyes with CSS Blinking */}
          <div className="flex gap-4 items-center">
            <div className="animate-eye-blink w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
            <div className="animate-eye-blink w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
          </div>

          {/* Subtle Festive Tilak / Tika */}
          <div className="absolute top-2.5 w-1 h-2 rounded-full bg-amber-600 shadow-[0_0_4px_#ea580c]" />

          {/* Glasses Frame (Tech Professional) */}
          <div className="absolute top-4 inset-x-2 flex justify-between items-center opacity-75">
            <div className="w-3.5 h-3.5 rounded-full border border-slate-700 bg-white/10" />
            <div className="w-1.5 h-0.5 bg-slate-700" />
            <div className="w-3.5 h-3.5 rounded-full border border-slate-700 bg-white/10" />
          </div>

          {/* Cheeks blush */}
          <div className="flex justify-between w-9 mt-1 opacity-40">
            <div className="w-1.5 h-1 rounded-full bg-rose-500" />
            <div className="w-1.5 h-1 rounded-full bg-rose-500" />
          </div>

          {/* Warm Friendly Smile */}
          <div className="w-4 h-2 border-b-2 border-amber-950 rounded-b-full mt-0.5" />
        </div>

        {/* Neck */}
        <div className="w-4 h-2 bg-[#DDA173] -mt-0.5 z-0" />

        {/* Upper Body: Maroon & Saffron Traditional Festive Kurta */}
        <div className="relative z-10 w-24 h-24 rounded-t-2xl bg-gradient-to-b from-rose-900 via-rose-950 to-rose-900 shadow-md flex flex-col items-center pt-1 border-t-2 border-amber-400">
          {/* Kurta Mandarin Collar & Golden Embroidery Placket */}
          <div className="w-4 h-12 bg-amber-500/90 rounded-sm border-x border-yellow-300 flex flex-col items-center justify-around py-1">
            <div className="w-1 h-1 rounded-full bg-yellow-200" />
            <div className="w-1 h-1 rounded-full bg-yellow-200" />
            <div className="w-1 h-1 rounded-full bg-yellow-200" />
          </div>

          {/* Folded Hands in Namaste (Anjali Mudra) */}
          <div className="animate-namaste absolute top-8 z-20 flex flex-col items-center">
            {/* Joined Palms */}
            <div className="relative flex items-center justify-center">
              {/* Left & Right hands together */}
              <div className="w-3 h-5 bg-[#E8B282] rounded-t-full border border-[#C58957] -rotate-6" />
              <div className="w-3 h-5 bg-[#E8B282] rounded-t-full border border-[#C58957] rotate-6 -ml-1" />
            </div>
            {/* Golden Wrist Bangle / Watch */}
            <div className="w-5 h-1 bg-amber-400 rounded-full mt-0.5 shadow-xs" />
          </div>

          {/* Kurta Sleeves */}
          <div className="absolute top-1 -left-2 w-5 h-14 bg-rose-900 rounded-2xl rotate-25 border-l border-amber-400/40" />
          <div className="absolute top-1 -right-2 w-5 h-14 bg-rose-900 rounded-2xl -rotate-25 border-r border-amber-400/40" />

          {/* Festive Saffron Dupatta / Stole Draped over shoulder */}
          <div className="absolute top-0 right-2 w-3.5 h-20 bg-gradient-to-b from-amber-500 to-orange-600 rounded-b-md shadow-xs border-r border-yellow-300/60" />
        </div>

        {/* Lower Kurta Hem & Pajama */}
        <div className="w-22 h-10 bg-rose-950 rounded-b-lg border-b-2 border-amber-400/80 -mt-1 flex justify-center">
          <div className="w-0.5 h-6 bg-amber-400/60 mt-2" />
        </div>
        <div className="flex gap-2 -mt-1">
          <div className="w-4 h-6 bg-slate-100 rounded-b-sm border-t border-slate-300" />
          <div className="w-4 h-6 bg-slate-100 rounded-b-sm border-t border-slate-300" />
        </div>

        {/* Traditional Mojari Shoes */}
        <div className="flex gap-3 -mt-0.5">
          <div className="w-5 h-2 bg-amber-800 rounded-t-full border-t border-yellow-400" />
          <div className="w-5 h-2 bg-amber-800 rounded-t-full border-t border-yellow-400" />
        </div>
      </div>
    </div>
  );
};
