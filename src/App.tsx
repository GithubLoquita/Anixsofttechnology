/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProduct } from './components/FeaturedProduct';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { DiwaliExperience } from './components/DiwaliExperience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DiwaliCardModal } from './components/DiwaliCardModal';
import { LegalModal } from './components/LegalModal';
import { VercelGuideModal } from './components/VercelGuideModal';
import { Terminal } from 'lucide-react';

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [diwaliCardOpen, setDiwaliCardOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [vercelGuideOpen, setVercelGuideOpen] = useState(false);

  // Detect system prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  const toggleMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return (
    <div className={`min-h-screen bg-[#0B1120] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Sticky Header & Navbar */}
      <Navbar
        reducedMotion={reducedMotion}
        onToggleMotion={toggleMotion}
        onOpenDiwaliCard={() => setDiwaliCardOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Animated Cartoon Tech Team */}
        <HeroSection onOpenDiwaliCard={() => setDiwaliCardOpen(true)} />

        {/* 2. Featured Flagship Product: QR Studio & Interactive Showcase */}
        <FeaturedProduct />

        {/* 3. About ANIX Software Technology & Values */}
        <AboutSection />

        {/* 4. Services & Digital Capabilities */}
        <ServicesSection />

        {/* 5. Frequently Asked Questions (Accordion) */}
        <FAQSection />

        {/* 6. Interactive Diwali Pavilion (Altar of Lights) */}
        <DiwaliExperience />

        {/* 7. Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Floating Vercel Deploy Guide Button at bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setVercelGuideOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          title="View Vercel Deployment Instructions"
        >
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Vercel Deployment Guide</span>
          <span className="sm:hidden">Deploy</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenDiwaliCard={() => setDiwaliCardOpen(true)}
      />

      {/* Modals */}
      <DiwaliCardModal
        isOpen={diwaliCardOpen}
        onClose={() => setDiwaliCardOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <VercelGuideModal
        isOpen={vercelGuideOpen}
        onClose={() => setVercelGuideOpen(false)}
      />
    </div>
  );
}
