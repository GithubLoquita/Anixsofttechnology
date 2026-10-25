import React, { useState } from 'react';

interface CharacterProps {
  className?: string;
  speechText?: string;
  interactive?: boolean;
}

export const CharacterLaptopCoder: React.FC<CharacterProps> = ({
  className = '',
  speechText = 'Building QR Studio with joy!',
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
      aria-label="Female developer in magenta lehenga working on a laptop showcasing QR Studio"
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
        {/* Hair - Side braided dark hair with golden clips */}
        <div className="relative z-0 w-16 h-10 bg-slate-900 rounded-t-full -mb-4 flex">
          <div className="w-3 h-14 bg-slate-900 rounded-full -ml-1 mt-2 rotate-12 flex flex-col items-center justify-around py-1">
            <span className="w-1.5 h-0.5 bg-amber-400" />
            <span className="w-1.5 h-0.5 bg-amber-400" />
          </div>
        </div>

        {/* Head */}
        <div className="relative z-10 w-13 h-15 rounded-[46%_46%_48%_48%] bg-[#EBB486] border border-[#C68D5F] shadow-sm flex flex-col items-center pt-2">
          {/* Delicate Bindi */}
          <div className="w-1 h-1 rounded-full bg-rose-600 mb-1" />

          {/* Eyebrows */}
          <div className="flex gap-3.5 mb-1">
            <div className="w-3 h-0.5 bg-slate-800 rounded-full -rotate-4" />
            <div className="w-3 h-0.5 bg-slate-800 rounded-full rotate-4" />
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

          {/* Golden Stud Earrings */}
          <div className="absolute -left-1 top-6 w-1.5 h-1.5 rounded-full bg-amber-400" />
          <div className="absolute -right-1 top-6 w-1.5 h-1.5 rounded-full bg-amber-400" />

          {/* Cheeks Blush */}
          <div className="flex justify-between w-9 mt-1 opacity-40">
            <div className="w-1.5 h-1 rounded-full bg-pink-500" />
            <div className="w-1.5 h-1 rounded-full bg-pink-500" />
          </div>

          {/* Cheerful Smile */}
          <div className="w-3.5 h-1.5 border-b-2 border-amber-950 rounded-b-full mt-0.5" />
        </div>

        {/* Neck */}
        <div className="relative w-4 h-2 bg-[#DC9F70] -mt-0.5 z-0 flex justify-center items-center">
          <div className="w-3 h-0.5 bg-amber-400 rounded-full" />
        </div>

        {/* Upper Body: Magenta & Gold Festive Outfit */}
        <div className="relative z-10 w-22 h-18 rounded-t-xl bg-gradient-to-b from-fuchsia-900 via-pink-900 to-fuchsia-950 shadow-md flex flex-col items-center border-t-2 border-amber-400">
          {/* Golden Embroidered Neckline */}
          <div className="w-6 h-3 rounded-b-full border-b-2 border-amber-300" />

          {/* Magenta Dupatta draped diagonally */}
          <div className="absolute inset-y-0 right-0 w-5 bg-gradient-to-bl from-amber-400/80 via-pink-600/70 to-rose-700/80 rounded-r-md -rotate-6 shadow-xs border-l border-yellow-200" />

          {/* Laptop Floating in Front */}
          <div className="animate-laptop-glow absolute top-6 z-30 flex flex-col items-center">
            {/* Laptop Screen Display */}
            <div className="w-16 h-10 rounded-t-md bg-slate-900 border-2 border-slate-700 p-1 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Screen Content: Mini QR Studio Logo & Code */}
              <div className="flex items-center gap-1">
                {/* Stylized QR Code matrix icon */}
                <div className="w-4 h-4 bg-amber-400 rounded-xs flex items-center justify-center p-0.5">
                  <div className="w-full h-full bg-slate-950 grid grid-cols-2 gap-0.5 p-0.5">
                    <span className="bg-amber-400" />
                    <span className="bg-amber-400" />
                    <span className="bg-amber-400" />
                    <span className="bg-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[5px] font-bold text-amber-300 tracking-tight leading-none">QR Studio</span>
                  <span className="text-[4px] text-emerald-400 leading-none">by ANIX</span>
                </div>
              </div>

              {/* Minimal Web Utility lines */}
              <div className="w-12 h-0.5 bg-amber-400/40 rounded-full mt-1" />
            </div>

            {/* Laptop Keyboard Base & Trackpad */}
            <div className="w-18 h-1.5 rounded-b-sm bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 shadow-sm border-t border-slate-200 flex justify-center">
              <div className="w-4 h-0.5 bg-slate-500 rounded-xs" />
            </div>

            {/* Coder Hands typing on laptop */}
            <div className="w-14 flex justify-between px-1 -mt-1.5">
              <div className="w-2.5 h-1.5 bg-[#EBB486] rounded-full border border-[#C68D5F]" />
              <div className="w-2.5 h-1.5 bg-[#EBB486] rounded-full border border-[#C68D5F]" />
            </div>
          </div>
        </div>

        {/* Festive Magenta Lehenga Skirt */}
        <div className="relative z-0 w-26 h-18 -mt-1 rounded-t-md bg-gradient-to-b from-pink-900 via-fuchsia-950 to-purple-950 flex flex-col items-center overflow-hidden border-b-3 border-amber-400 shadow-lg">
          <div className="w-full flex justify-around px-2 pt-1 opacity-60">
            <span className="w-0.5 h-14 bg-amber-400/60" />
            <span className="w-0.5 h-14 bg-amber-400/60" />
            <span className="w-0.5 h-14 bg-amber-400/60" />
          </div>
          {/* Golden Hem */}
          <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 border-t border-yellow-200" />
        </div>

        {/* Shoes */}
        <div className="flex gap-4 -mt-0.5">
          <div className="w-4 h-2 bg-amber-500 rounded-t-full" />
          <div className="w-4 h-2 bg-amber-500 rounded-t-full" />
        </div>
      </div>
    </div>
  );
};
