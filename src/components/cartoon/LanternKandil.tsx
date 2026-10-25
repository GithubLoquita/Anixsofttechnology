import React from 'react';

interface LanternProps {
  color?: 'saffron' | 'purple' | 'maroon' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  delay?: string;
}

export const LanternKandil: React.FC<LanternProps> = ({
  color = 'gold',
  size = 'md',
  className = '',
  delay = '0s',
}) => {
  const colorMap = {
    gold: {
      body: 'from-amber-500 via-amber-600 to-amber-700',
      accent: 'border-yellow-300',
      glow: 'shadow-[0_0_25px_rgba(245,158,11,0.5)]',
      tassel: 'bg-amber-400',
    },
    saffron: {
      body: 'from-orange-500 via-orange-600 to-amber-700',
      accent: 'border-orange-300',
      glow: 'shadow-[0_0_25px_rgba(234,88,12,0.5)]',
      tassel: 'bg-orange-400',
    },
    purple: {
      body: 'from-purple-600 via-indigo-700 to-purple-900',
      accent: 'border-purple-300',
      glow: 'shadow-[0_0_25px_rgba(168,85,247,0.4)]',
      tassel: 'bg-pink-400',
    },
    maroon: {
      body: 'from-rose-600 via-rose-700 to-rose-950',
      accent: 'border-rose-300',
      glow: 'shadow-[0_0_25px_rgba(225,29,72,0.4)]',
      tassel: 'bg-rose-400',
    },
  };

  const sizeMap = {
    sm: { scale: 'scale-75', height: 'h-28' },
    md: { scale: 'scale-90', height: 'h-36' },
    lg: { scale: 'scale-100', height: 'h-44' },
  };

  const activeColor = colorMap[color];
  const activeSize = sizeMap[size];

  return (
    <div
      className={`animate-lantern-sway inline-flex flex-col items-center pointer-events-none ${activeSize.scale} ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {/* Hanging Golden Cord */}
      <div className="w-0.5 h-10 bg-gradient-to-b from-amber-200/20 via-amber-300 to-amber-400" />

      {/* Top Cap */}
      <div className="w-8 h-2 bg-amber-400 rounded-t-sm shadow-sm" />

      {/* Geometric Lantern Body (Kandil Diamond) */}
      <div className="relative my-0.5">
        <div
          className={`w-14 h-14 rotate-45 rounded-sm bg-gradient-to-br ${activeColor.body} border-2 ${activeColor.accent} ${activeColor.glow} flex items-center justify-center overflow-hidden`}
        >
          {/* Internal Glowing Light Core */}
          <div className="w-6 h-6 rounded-full bg-yellow-200/90 blur-[2px] animate-pulse" />
          {/* Geometric Inner Cutout Line */}
          <div className="absolute inset-1 border border-white/30 rotate-45 rounded-xs pointer-events-none" />
        </div>

        {/* Diagonal Corner Wing Points */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-yellow-300" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-yellow-300" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rotate-45 bg-yellow-300" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rotate-45 bg-yellow-300" />
      </div>

      {/* Bottom Cap */}
      <div className="w-7 h-2 bg-amber-500 rounded-b-sm shadow-xs" />

      {/* Flowing Festive Tassels */}
      <div className="flex justify-center gap-1 mt-0.5">
        <div className={`w-0.5 h-7 ${activeColor.tassel} rounded-full opacity-90`} />
        <div className={`w-0.5 h-9 ${activeColor.tassel} rounded-full`} />
        <div className="w-0.5 h-11 bg-yellow-300 rounded-full shadow-xs" />
        <div className={`w-0.5 h-9 ${activeColor.tassel} rounded-full`} />
        <div className={`w-0.5 h-7 ${activeColor.tassel} rounded-full opacity-90`} />
      </div>
    </div>
  );
};
