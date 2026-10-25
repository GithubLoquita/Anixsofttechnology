import React from 'react';

interface RangoliProps {
  className?: string;
  size?: number;
}

export const RangoliFloor: React.FC<RangoliProps> = ({
  className = '',
  size = 320,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient Warm Floor Glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-rose-500/15 to-transparent blur-2xl"
      />

      {/* Rotating Mandala Artwork */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-rangoli-spin opacity-85"
        style={{ animationDuration: '90s' }}
      >
        <defs>
          <radialGradient id="rangoliCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient id="petalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="petalRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>
          <linearGradient id="petalTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Outer Ring with decorative beads */}
        <circle
          cx="200"
          cy="200"
          r="185"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeDasharray="4,6"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#EA580C"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* 16 Outer Floral Petals */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`outer-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <path
              d="M 200 45 C 215 90, 218 135, 200 155 C 182 135, 185 90, 200 45 Z"
              fill="url(#petalRose)"
              opacity="0.85"
            />
            <circle cx="200" cy="55" r="3" fill="#FDE68A" />
          </g>
        ))}

        {/* Middle Ring */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#FBBF24"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* 8 Inner Geometric Saffron/Teal Petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <path
              d="M 200 90 C 220 130, 210 160, 200 170 C 190 160, 180 130, 200 90 Z"
              fill="url(#petalGold)"
              opacity="0.9"
            />
            <circle cx="200" cy="110" r="4" fill="#047857" />
          </g>
        ))}

        {/* Central Lotus Motif */}
        <circle
          cx="200"
          cy="200"
          r="48"
          fill="url(#rangoliCenter)"
          stroke="#FEF08A"
          strokeWidth="2"
        />

        {/* Center Point */}
        <circle cx="200" cy="200" r="10" fill="#991B1B" />
        <circle cx="200" cy="200" r="4" fill="#FEF08A" />
      </svg>
    </div>
  );
};
