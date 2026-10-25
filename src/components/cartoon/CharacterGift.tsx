import React, { useState } from 'react';

interface CharacterProps {
  className?: string;
  speechText?: string;
  interactive?: boolean;
}

export const CharacterGift: React.FC<CharacterProps> = ({
  className = '',
  speechText = 'Sweet festive wishes from ANIX!',
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
      aria-label="Male tech professional in navy kurta holding a Diwali gift box"
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
        {/* Hair - Neat modern pompadour */}
        <div className="relative z-10 w-15 h-8 bg-slate-900 rounded-t-full -mb-3 flex justify-end pr-2">
          <div className="w-5 h-3 bg-slate-800 rounded-full -mt-0.5" />
        </div>

        {/* Head */}
        <div className="relative z-10 w-13 h-15 rounded-[45%_45%_48%_48%] bg-[#E5AB7B] border border-[#BF8354] shadow-sm flex flex-col items-center pt-2">
          {/* Eyebrows */}
          <div className="flex gap-3.5 mb-1">
            <div className="w-3 h-0.5 bg-slate-800 rounded-full -rotate-4" />
            <div className="w-3 h-0.5 bg-slate-800 rounded-full rotate-4" />
          </div>

          {/* Eyes with CSS Blinking */}
          <div className="flex gap-3.5 items-center">
            <div className="animate-eye-blink w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
            <div className="animate-eye-blink w-2.5 h-2.5 rounded-full bg-slate-900 flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5" />
            </div>
          </div>

          {/* Neat Trimmed Goatee/Stubble & Friendly Smile */}
          <div className="w-3.5 h-1.5 border-b-2 border-amber-950 rounded-b-full mt-1.5" />
          <div className="w-1.5 h-0.5 bg-slate-700/60 rounded-full mt-0.5" />
        </div>

        {/* Neck */}
        <div className="w-4 h-2 bg-[#D59A6A] -mt-0.5 z-0" />

        {/* Upper Body: Navy Blue Festive Kurta with Golden Collar */}
        <div className="relative z-10 w-22 h-20 rounded-t-xl bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-950 shadow-md flex flex-col items-center pt-1 border-t-2 border-amber-400">
          {/* Golden Embroidery Button Line */}
          <div className="w-3 h-10 bg-amber-500/80 rounded-sm border-x border-yellow-300 flex flex-col items-center justify-around py-0.5">
            <div className="w-1 h-1 rounded-full bg-yellow-200" />
            <div className="w-1 h-1 rounded-full bg-yellow-200" />
          </div>

          {/* Sleeves */}
          <div className="absolute top-1 -left-2 w-5 h-12 bg-indigo-950 rounded-2xl rotate-20 border-l border-amber-400/40" />
          <div className="absolute top-1 -right-2 w-5 h-12 bg-indigo-950 rounded-2xl -rotate-20 border-r border-amber-400/40" />

          {/* Hands holding Festive Gift Box */}
          <div className="animate-gift-hover absolute top-8 z-30 flex flex-col items-center">
            {/* The Diwali Gift Box */}
            <div className="relative w-10 h-8 rounded-sm bg-gradient-to-br from-rose-700 via-rose-600 to-amber-700 border border-yellow-300 shadow-md flex items-center justify-center overflow-hidden">
              {/* Golden Cross Ribbon */}
              <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-200 shadow-xs" />
              <div className="absolute inset-y-0 w-1.5 bg-gradient-to-b from-amber-300 to-yellow-200 shadow-xs" />

              {/* Decorative Ribbon Bow */}
              <div className="absolute -top-1 w-3 h-2 rounded-full border border-yellow-200 bg-amber-400" />
            </div>

            {/* Thumbs holding box */}
            <div className="w-12 flex justify-between px-0.5 -mt-2 z-40">
              <span className="w-2 h-2 rounded-full bg-[#E5AB7B] border border-[#BF8354]" />
              <span className="w-2 h-2 rounded-full bg-[#E5AB7B] border border-[#BF8354]" />
            </div>
          </div>
        </div>

        {/* Lower Kurta Hem & Churidar */}
        <div className="w-20 h-10 bg-indigo-950 rounded-b-md border-b-2 border-amber-400/80 -mt-1 flex justify-center">
          <div className="w-0.5 h-6 bg-amber-400/50 mt-2" />
        </div>
        <div className="flex gap-2 -mt-1">
          <div className="w-4 h-6 bg-amber-50 rounded-b-sm border-t border-amber-200" />
          <div className="w-4 h-6 bg-amber-50 rounded-b-sm border-t border-amber-200" />
        </div>

        {/* Traditional Shoes */}
        <div className="flex gap-3 -mt-0.5">
          <div className="w-5 h-2 bg-amber-900 rounded-t-full border-t border-amber-400" />
          <div className="w-5 h-2 bg-amber-900 rounded-t-full border-t border-amber-400" />
        </div>
      </div>
    </div>
  );
};
