import React from 'react';

interface DiyaProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isLit?: boolean;
  onToggle?: () => void;
  showGlow?: boolean;
}

export const DiyaFlame: React.FC<DiyaProps> = ({
  size = 'md',
  className = '',
  isLit = true,
  onToggle,
  showGlow = true,
}) => {
  const sizeMap = {
    sm: { baseW: 'w-8', baseH: 'h-4', flameW: 'w-2.5', flameH: 'h-4', glow: 'w-16 h-16' },
    md: { baseW: 'w-12', baseH: 'h-6', flameW: 'w-3.5', flameH: 'h-6', glow: 'w-24 h-24' },
    lg: { baseW: 'w-16', baseH: 'h-8', flameW: 'w-5', flameH: 'h-8', glow: 'w-32 h-32' },
    xl: { baseW: 'w-24', baseH: 'h-12', flameW: 'w-7', flameH: 'h-12', glow: 'w-48 h-48' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onToggle}
      className={`relative inline-flex flex-col items-center select-none group ${onToggle ? 'cursor-pointer' : ''} ${className}`}
      role={onToggle ? 'button' : undefined}
      tabIndex={onToggle ? 0 : undefined}
      onKeyDown={(e) => {
        if (onToggle && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-label={isLit ? 'Glowing Diya' : 'Unlit Diya'}
    >
      {/* Ambient Warm Glow */}
      {isLit && showGlow && (
        <div
          className={`absolute -top-3 pointer-events-none rounded-full bg-gradient-to-t from-amber-500/30 via-orange-500/20 to-transparent blur-xl transition-all duration-300 group-hover:scale-125 ${currentSize.glow}`}
        />
      )}

      {/* Flame System */}
      {isLit && (
        <div className="relative flex justify-center items-end mb-0.5">
          {/* Outer Orange Flame */}
          <div
            className={`animate-flame-outer rounded-[50%_50%_35%_35%/70%_70%_30%_30%] bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-200 shadow-[0_0_15px_#f59e0b] ${currentSize.flameW} ${currentSize.flameH}`}
          >
            {/* Inner White-Hot Core */}
            <div
              className="animate-flame-inner w-1/2 h-3/5 mx-auto mt-auto rounded-[50%_50%_40%_40%/80%_80%_20%_20%] bg-gradient-to-t from-amber-300 via-yellow-100 to-white shadow-[0_0_8px_#ffffff]"
            />
          </div>

          {/* Diya Wick */}
          <div className="absolute -bottom-1 w-0.5 h-1.5 bg-amber-950 rounded-full" />
        </div>
      )}

      {/* Earthen Terracotta / Brass Base */}
      <div
        className={`relative ${currentSize.baseW} ${currentSize.baseH} rounded-b-full bg-gradient-to-b from-amber-700 via-amber-800 to-amber-950 shadow-md border-t border-amber-400/50 flex items-center justify-center`}
      >
        {/* Decorative Golden Band */}
        <div className="absolute top-0.5 inset-x-1.5 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full opacity-80" />
        {/* Subtle Carving dots */}
        <div className="flex gap-1 items-center justify-center opacity-60">
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="w-1 h-1 rounded-full bg-yellow-200" />
          <span className="w-1 h-1 rounded-full bg-amber-400" />
        </div>
      </div>
    </div>
  );
};
