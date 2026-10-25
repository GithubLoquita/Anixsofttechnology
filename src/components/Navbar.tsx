import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Sparkles, SlidersHorizontal } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';

interface NavbarProps {
  reducedMotion: boolean;
  onToggleMotion: () => void;
  onOpenDiwaliCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  reducedMotion,
  onToggleMotion,
  onOpenDiwaliCard,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          >
            {/* Original CSS/SVG Brand Mark */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-rose-700 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 text-lg tracking-tighter">
                  A
                </span>
                {/* Subtle tech node highlight */}
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                ANIX
                <span className="text-xs font-normal text-amber-400 tracking-normal hidden md:inline">
                  Software Technology
                </span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Digital Products
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md py-1 px-1.5"
              >
                {link.label}
              </a>
            ))}

            {/* Highlighted Diwali Special Nav Item */}
            <button
              onClick={onOpenDiwaliCard}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 transition-colors text-xs font-semibold cursor-pointer group"
            >
              <DiyaFlame size="sm" isLit={true} showGlow={false} />
              <span>Diwali Special</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            </button>
          </nav>

          {/* Desktop Action Buttons: Motion Toggle & QR Studio CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Reduced Motion Toggle Button */}
            <button
              onClick={onToggleMotion}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                reducedMotion
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title={reducedMotion ? 'Enable Animations' : 'Reduce Motion'}
              aria-label={reducedMotion ? 'Enable Animations' : 'Reduce Motion'}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="text-[11px]">{reducedMotion ? 'Motion Off' : 'Motion On'}</span>
            </button>

            {/* Flagship Product CTA Button */}
            <a
              href="https://qrenerator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:via-amber-500 hover:to-orange-500 text-slate-950 font-semibold text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>Explore QR Studio</span>
              <ExternalLink className="w-4 h-4 text-slate-950/80" />
            </a>
          </div>

          {/* Mobile Menu & Motion Toggles */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleMotion}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs"
              aria-label="Toggle motion"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120]/98 border-b border-amber-500/20 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                onOpenDiwaliCard();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between w-full py-2.5 px-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold text-left"
            >
              <span className="flex items-center gap-2">
                <DiyaFlame size="sm" isLit={true} showGlow={false} />
                <span>Diwali Special Greetings</span>
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>

            <div className="pt-2">
              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-semibold text-sm shadow-md"
              >
                <span>Explore QR Studio</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
