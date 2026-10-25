import React from 'react';
import { ExternalLink, Heart, Sparkles } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenDiwaliCard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenDiwaliCard }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#070B16] border-t border-amber-500/20 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Brand Mark */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center font-extrabold text-amber-300 text-base">
                  A
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                ANIX Software Technology
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Technology and digital product development focused on simple, accessible web utilities,
              thoughtful UI/UX design, and innovative user-friendly software.
            </p>

            <div className="pt-1">
              <p className="text-xs text-amber-300 font-medium">
                "Technology That Makes Life Simpler."
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Build. Create. Simplify.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDiwaliCard}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs transition-colors cursor-pointer"
              >
                <DiyaFlame size="sm" isLit={true} showGlow={false} />
                <span>Happy Diwali 2026</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Toolkits */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Digital Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-slate-200 font-medium"
                >
                  <span>QR Studio</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  QR Code Generator
                </a>
              </li>
              <li>
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Barcode Generator
                </a>
              </li>
              <li>
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Image to PDF Converter
                </a>
              </li>
              <li>
                <a
                  href="https://qrenerator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Merge PDF Documents
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li className="pt-2">
                <span className="block text-[11px] text-slate-500">Official Inquiries:</span>
                <a
                  href="mailto:hembramgroupofficials@gmail.com"
                  className="text-amber-400 hover:text-amber-300 text-xs break-all"
                >
                  hembramgroupofficials@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with official copyright & developer credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {currentYear} ANIX Software Technology. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-1.5 text-amber-300/90 font-medium">
            <span>Developed by ANIX Software Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
