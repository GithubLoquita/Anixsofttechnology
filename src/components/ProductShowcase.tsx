import React, { useState } from 'react';
import { ExternalLink, QrCode, Barcode, Image as ImageIcon, FileText, CheckCircle2, Lock } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qr' | 'barcode' | 'img2pdf' | 'mergepdf'>('qr');
  const [demoInput, setDemoInput] = useState('https://qrenerator.vercel.app');

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden">
      {/* Mock Browser Header & Navigation Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Browser Address Bar */}
        <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="truncate">https://qrenerator.vercel.app</span>
        </div>

        {/* Live App Link */}
        <a
          href="https://qrenerator.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-medium transition-colors"
        >
          <span>Launch Live App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Workflow Tabs inside the preview */}
      <div className="bg-slate-950/60 border-b border-slate-800 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('qr')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'qr'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>QR Generator</span>
        </button>

        <button
          onClick={() => setActiveTab('barcode')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'barcode'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Barcode className="w-3.5 h-3.5" />
          <span>Barcode Generator</span>
        </button>

        <button
          onClick={() => setActiveTab('img2pdf')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'img2pdf'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Image to PDF</span>
        </button>

        <button
          onClick={() => setActiveTab('mergepdf')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'mergepdf'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Merge PDF</span>
        </button>
      </div>

      {/* Interactive Workflow Content */}
      <div className="p-6 sm:p-8 min-h-[380px] flex items-center justify-center">
        {/* Tab 1: QR Code Generator Preview */}
        {activeTab === 'qr' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Workflow Preview · Step 1
                </span>
                <h4 className="text-xl font-bold text-white mt-1">Generate High-Resolution QR Codes</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Create clean QR codes for website URLs, plain text, Wi-Fi network credentials, WhatsApp chat
                  invites, and contact vCards.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-medium">Test input preview:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                    placeholder="Enter text or URL"
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  Supported: URLs, Wi-Fi passwords, WhatsApp numbers, vCard contacts
                </p>
              </div>

              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Launch QR Code Generator</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual SVG QR Mockup */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner">
              <div className="relative p-4 bg-white rounded-xl shadow-lg">
                <svg className="w-44 h-44" viewBox="0 0 100 100" fill="none">
                  {/* Outer corner finders */}
                  <rect x="5" y="5" width="26" height="26" rx="4" fill="#0B1120" />
                  <rect x="8" y="8" width="20" height="20" rx="2" fill="white" />
                  <rect x="12" y="12" width="12" height="12" rx="1" fill="#0B1120" />

                  <rect x="69" y="5" width="26" height="26" rx="4" fill="#0B1120" />
                  <rect x="72" y="8" width="20" height="20" rx="2" fill="white" />
                  <rect x="76" y="12" width="12" height="12" rx="1" fill="#0B1120" />

                  <rect x="5" y="69" width="26" height="26" rx="4" fill="#0B1120" />
                  <rect x="8" y="72" width="20" height="20" rx="2" fill="white" />
                  <rect x="12" y="76" width="12" height="12" rx="1" fill="#0B1120" />

                  {/* QR Matrix Elements */}
                  <rect x="36" y="8" width="6" height="6" fill="#0B1120" />
                  <rect x="46" y="8" width="6" height="6" fill="#0B1120" />
                  <rect x="56" y="8" width="6" height="6" fill="#0B1120" />
                  <rect x="36" y="18" width="6" height="6" fill="#0B1120" />
                  <rect x="56" y="18" width="6" height="6" fill="#0B1120" />

                  <rect x="8" y="36" width="6" height="6" fill="#0B1120" />
                  <rect x="18" y="36" width="6" height="6" fill="#0B1120" />
                  <rect x="36" y="36" width="26" height="26" rx="2" fill="#D97706" />
                  {/* Center ANIX Monogram accent */}
                  <circle cx="49" cy="49" r="8" fill="white" />
                  <path d="M47 52 L49 46 L51 52 Z" fill="#D97706" />

                  <rect x="68" y="36" width="6" height="6" fill="#0B1120" />
                  <rect x="78" y="36" width="14" height="6" fill="#0B1120" />
                  <rect x="68" y="46" width="10" height="6" fill="#0B1120" />
                  <rect x="82" y="46" width="10" height="6" fill="#0B1120" />
                  <rect x="68" y="56" width="6" height="6" fill="#0B1120" />
                  <rect x="78" y="56" width="6" height="6" fill="#0B1120" />

                  <rect x="36" y="68" width="6" height="6" fill="#0B1120" />
                  <rect x="46" y="68" width="16" height="6" fill="#0B1120" />
                  <rect x="36" y="78" width="16" height="6" fill="#0B1120" />
                  <rect x="56" y="78" width="6" height="6" fill="#0B1120" />
                  <rect x="36" y="88" width="6" height="6" fill="#0B1120" />
                  <rect x="46" y="88" width="6" height="6" fill="#0B1120" />
                  <rect x="68" y="68" width="24" height="6" fill="#0B1120" />
                  <rect x="74" y="78" width="18" height="6" fill="#0B1120" />
                  <rect x="68" y="88" width="10" height="6" fill="#0B1120" />
                  <rect x="82" y="88" width="10" height="6" fill="#0B1120" />
                </svg>
              </div>
              <span className="text-[11px] text-slate-400 mt-3 font-mono">
                Payload: {demoInput.slice(0, 32)}...
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Barcode Generator Preview */}
        {activeTab === 'barcode' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Workflow Preview · Step 2
                </span>
                <h4 className="text-xl font-bold text-white mt-1">Multi-Format Barcodes</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Create clean commercial and logistics barcodes ready for inventory, shipping labels, and
                  product tags.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-medium">Standards supported:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">CODE 128</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">EAN-13</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">UPC-A</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">CODE 39</span>
                </div>
              </div>

              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Launch Barcode Generator</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* SVG Barcode Graphic */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-[280px] flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-1">
                  CODE 128 STANDARD
                </span>
                {/* Barcode Lines */}
                <div className="flex items-center justify-center gap-1 h-20 w-full py-1">
                  <div className="w-1 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-1.5 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-2 h-full bg-slate-950" />
                  <div className="w-1 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-1.5 h-full bg-slate-950" />
                  <div className="w-2.5 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-1 h-full bg-slate-950" />
                  <div className="w-1.5 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-2 h-full bg-slate-950" />
                  <div className="w-1 h-full bg-slate-950" />
                  <div className="w-0.5 h-full bg-slate-950" />
                  <div className="w-1.5 h-full bg-slate-950" />
                  <div className="w-1 h-full bg-slate-950" />
                  <div className="w-2 h-full bg-slate-950" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-900 tracking-wider mt-1">
                  ANIX-2026-DIWALI
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Image to PDF Workflow */}
        {activeTab === 'img2pdf' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Workflow Preview · Step 3
                </span>
                <h4 className="text-xl font-bold text-white mt-1">Convert Images into a Clean PDF</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Drop PNG, JPEG, or WEBP photos and assemble them automatically into a high-quality,
                  downloadable single PDF file.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Preserves image resolution and aspect ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Reorder photos before compiling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Client-side privacy: Files never leave your browser</span>
                </li>
              </ul>

              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Launch Image to PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual Workflow Transformation */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                {/* 2 Mock Photo Cards */}
                <div className="w-16 h-20 rounded-lg bg-amber-900/40 border border-amber-500/50 p-2 flex flex-col justify-between -rotate-6 shadow-md">
                  <ImageIcon className="w-5 h-5 text-amber-300" />
                  <span className="text-[8px] font-mono text-amber-200">IMG_1.png</span>
                </div>
                <div className="w-16 h-20 rounded-lg bg-purple-900/40 border border-purple-500/50 p-2 flex flex-col justify-between rotate-6 shadow-md">
                  <ImageIcon className="w-5 h-5 text-purple-300" />
                  <span className="text-[8px] font-mono text-purple-200">IMG_2.jpg</span>
                </div>

                {/* Arrow */}
                <span className="text-amber-400 font-bold text-lg">→</span>

                {/* Compiled Single PDF Document */}
                <div className="w-20 h-26 rounded-lg bg-rose-950/60 border-2 border-rose-500/70 p-2.5 flex flex-col justify-between shadow-xl">
                  <div className="flex items-center justify-between">
                    <FileText className="w-6 h-6 text-rose-300" />
                    <span className="text-[7px] font-bold px-1 rounded bg-rose-500 text-white">PDF</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-rose-400/50 rounded-full" />
                    <div className="w-3/4 h-1 bg-rose-400/50 rounded-full" />
                  </div>
                  <span className="text-[8px] font-mono text-slate-300">Document.pdf</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Merge PDF Workflow */}
        {activeTab === 'mergepdf' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Workflow Preview · Step 4
                </span>
                <h4 className="text-xl font-bold text-white mt-1">Combine Multiple PDFs in Seconds</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Merge several separate PDF contracts, receipts, or notes into one organized, unified PDF
                  document without uploads or file size caps.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Drag-and-drop page sequencing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Instant browser-powered PDF compilation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No account, no subscription, 100% free</span>
                </li>
              </ul>

              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Launch Merge PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Merge Visual Graphic */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2">
                  <div className="w-18 h-12 rounded bg-slate-800 border border-slate-700 p-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-rose-400" />
                    <span className="text-[8px] text-slate-300 font-mono">Part_A.pdf</span>
                  </div>
                  <div className="w-18 h-12 rounded bg-slate-800 border border-slate-700 p-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="text-[8px] text-slate-300 font-mono">Part_B.pdf</span>
                  </div>
                </div>

                <span className="text-amber-400 font-bold text-lg">+</span>

                {/* Unified Output */}
                <div className="w-22 h-28 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-emerald-500/70 p-3 flex flex-col justify-between shadow-xl">
                  <div className="flex items-center justify-between">
                    <FileText className="w-6 h-6 text-emerald-400" />
                    <span className="text-[7px] font-bold px-1 rounded bg-emerald-600 text-white">MERGED</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-600 rounded-full" />
                    <div className="w-4/5 h-1 bg-slate-600 rounded-full" />
                    <div className="w-2/3 h-1 bg-slate-600 rounded-full" />
                  </div>
                  <span className="text-[8px] font-mono text-emerald-300">Unified.pdf</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar of preview window */}
      <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span>Interactive preview of QR Studio workflows</span>
        <a
          href="https://qrenerator.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1.5"
        >
          <span>Use tool directly at qrenerator.vercel.app</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
