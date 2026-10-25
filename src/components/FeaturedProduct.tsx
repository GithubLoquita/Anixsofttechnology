import React from 'react';
import { ExternalLink, QrCode, Barcode, Image as ImageIcon, FileText, CheckCircle2 } from 'lucide-react';
import { ProductShowcase } from './ProductShowcase';

export const FeaturedProduct: React.FC = () => {
  const featureCards = [
    {
      title: 'QR Code Generator',
      description:
        'Generate high-resolution QR codes for supported content such as website URLs, text, Wi-Fi credentials, WhatsApp, and vCard contacts.',
      cta: 'Generate QR Code',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
          <QrCode className="w-6 h-6" />
        </div>
      ),
      tag: 'Vector Quality',
    },
    {
      title: 'Barcode Generator',
      description:
        'Create supported standard barcode formats such as CODE 128, EAN-13, UPC-A, and CODE 39 for inventory, labels, and products.',
      cta: 'Create Barcode',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center text-orange-400">
          <Barcode className="w-6 h-6" />
        </div>
      ),
      tag: 'Industry Standards',
    },
    {
      title: 'Image to PDF',
      description:
        'Convert supported image files (PNG, JPEG, WEBP) directly in your browser into a single, beautifully formatted PDF document.',
      cta: 'Convert Images',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-400">
          <ImageIcon className="w-6 h-6" />
        </div>
      ),
      tag: 'Zero Uploads',
    },
    {
      title: 'Merge PDF',
      description:
        'Combine multiple supported PDF files into one clean document with fast, secure in-browser compilation and page ordering.',
      cta: 'Merge PDFs',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400">
          <FileText className="w-6 h-6" />
        </div>
      ),
      tag: 'Fast & Secure',
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#0B1120] relative">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Flagship Digital Product</span>
            <span className="text-amber-400/60 font-normal">·</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              100% Free
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">QR Studio</span>
          </h2>

          <p className="text-lg font-medium text-amber-200/90 mb-4">
            Everyday digital utilities. One simple destination.
          </p>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            QR Studio is a browser-based toolkit designed to help people generate QR codes and barcodes and work
            with common image and PDF tasks.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {card.icon}
                  <span className="text-[11px] font-mono text-slate-400 font-medium tracking-wide">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Verified Product CTA Button */}
              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>{card.cta}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Animated Product Showcase Window */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Experience the Workflow Inside Your Browser
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select any capability below to preview how QR Studio makes everyday tasks faster and simpler.
            </p>
          </div>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
};
