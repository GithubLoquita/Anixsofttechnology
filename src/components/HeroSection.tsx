import React from 'react';
import { ExternalLink, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { HeroCelebrationStage } from './cartoon/HeroCelebrationStage';
import { DiyaFlame } from './cartoon/DiyaFlame';

interface HeroSectionProps {
  onOpenDiwaliCard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiwaliCard }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0B1120] via-[#100D28] to-[#0B1120]"
    >
      {/* Background Ambience & Warm Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/10 via-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Hanging Fairy Light Dot Garland */}
      <div className="absolute top-20 inset-x-0 flex justify-around pointer-events-none opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`light-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]"
            style={{ marginTop: `${Math.sin(i * 0.6) * 16 + 20}px` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Top Badging & Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Small Attractive "Diwali Special" Pill / Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-purple-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm">
            <DiyaFlame size="sm" isLit={true} showGlow={false} />
            <span>Diwali Special Edition 2026</span>
            <span className="text-amber-400/60 font-normal">·</span>
            <button
              onClick={onOpenDiwaliCard}
              className="text-amber-200 hover:text-white underline decoration-amber-400/60 underline-offset-2 transition-colors cursor-pointer"
            >
              Open Greeting Card
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Happy Diwali from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
              ANIX Software Technology
            </span>
          </h1>

          {/* Supporting Heading */}
          <p className="text-lg sm:text-xl font-medium text-amber-200/90 tracking-wide mb-5">
            Technology That Connects. Innovation That Inspires.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Celebrate new beginnings with smarter digital tools and delightful technology experiences.
            Discover <strong className="text-amber-300 font-semibold">QR Studio</strong>, our free online
            toolkit built to make everyday tasks simpler.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://qrenerator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:via-amber-500 hover:to-orange-500 text-slate-950 font-bold text-base shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>Explore QR Studio</span>
              <ExternalLink className="w-5 h-5 text-slate-950/80" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-amber-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Discover Our Products</span>
              <ArrowDown className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Quiet Trust / Value separator */}
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Free Web Utility
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>No Account Required</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Browser-Based</span>
          </div>
        </div>

        {/* Hero Illustration: The Original CSS Cartoon Office Team Celebration */}
        <div className="mt-6">
          <HeroCelebrationStage />
        </div>
      </div>
    </section>
  );
};
