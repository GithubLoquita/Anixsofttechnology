import React, { useState } from 'react';

interface CharacterProps {
  className?: string;
  speechText?: string;
  interactive?: boolean;
}

export const CharacterWaving: React.FC<CharacterProps> = ({
  className = '',
  speechText = 'Welcome to ANIX! Happy Diwali!',
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
      aria-label="Male tech professional in saffron kurta waving warmly"
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
        {/* Hair - Stylish wavy textured hair */}
        <div className="relative z-10 w-15 h-8 bg-slate-900 rounded-t-full -mb-3 flex justify-start pl-2">
          <div className="w-5 h-3 bg-slate-800 rounded-full -mt-0.5" />
        </div>

        {/* Head */}
        <div className="relative z-10 w-13 h-15 rounded-[45%_45%_48%_48%] bg-[#E8B282] border border-[#C58957] shadow-sm flex flex-col items-center pt-2">
          {/* Eyebrows */}
          <div className="flex gap-3.5 mb-1">
            <div className="w-3 h-0.5 bg-slate-800 rounded-full -rotate-6" />
            <div className="w-3 h-0.5 bg-slate-800 rounded-full rotate-6" />
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

          {/* Warm Grin / Smile */}
          <div className="w-4 h-2 border-b-2 border-amber-950 rounded-b-full mt-2" />
        </div>

        {/* Neck */}
        <div className="w-4 h-2 bg-[#DDA173] -mt-0.5 z-0" />

        {/* Upper Body: Saffron & Golden Festive Kurta */}
        <div className="relative z-10 w-22 h-20 rounded-t-xl bg-gradient-to-b from-orange-600 via-amber-600 to-orange-700 shadow-md flex flex-col items-center pt-1 border-t-2 border-yellow-300">
          {/* Golden Embroidery Button Line */}
          <div className="w-3 h-10 bg-amber-300 rounded-sm border-x border-yellow-200 flex flex-col items-center justify-around py-0.5">
            <div className="w-1 h-1 rounded-full bg-orange-700" />
            <div className="w-1 h-1 rounded-full bg-orange-700" />
          </div>

          {/* Left Resting Arm */}
          <div className="absolute top-1 -left-2 w-5 h-12 bg-orange-700 rounded-2xl rotate-15 border-l border-yellow-300/40" />

          {/* Right Waving Arm (Layered CSS animated arm & palm) */}
          <div className="animate-arm-wave absolute -right-3 -top-2 z-20 flex flex-col items-center origin-bottom-left">
            {/* Waving Palm */}
            <div className="w-4 h-4 rounded-full bg-[#E8B282] border border-[#C58957] flex flex-col items-center justify-center -mb-1 shadow-xs">
              <span className="text-[7px] leading-none">✨</span>
            </div>
            {/* Forearm & Sleeve */}
            <div className="w-4 h-10 bg-orange-600 rounded-2xl border-r border-yellow-300 -rotate-12" />
          </div>
        </div>

        {/* Lower Kurta Hem & Pajama */}
        <div className="w-20 h-10 bg-orange-700 rounded-b-md border-b-2 border-yellow-300 -mt-1 flex justify-center">
          <div className="w-0.5 h-6 bg-yellow-300/60 mt-2" />
        </div>
        <div className="flex gap-2 -mt-1">
          <div className="w-4 h-6 bg-amber-50 rounded-b-sm border-t border-amber-200" />
          <div className="w-4 h-4 bg-amber-50 rounded-b-sm border-t border-amber-200" />
        </div>

        {/* Shoes */}
        <div className="flex gap-3 -mt-0.5">
          <div className="w-5 h-2 bg-amber-900 rounded-t-full border-t border-amber-400" />
          <div className="w-5 h-2 bg-amber-900 rounded-t-full border-t border-amber-400" />
        </div>
      </div>
    </div>
  );
};
