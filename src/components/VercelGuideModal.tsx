import React from 'react';
import { X, Check, Terminal, ExternalLink, Zap } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0D1326] border border-amber-500/30 p-6 sm:p-8 shadow-2xl z-10 text-slate-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-6 h-6 text-amber-400" />
          <h3 className="text-2xl font-bold text-white">Vercel Deployment Guide</h3>
        </div>
        <p className="text-xs text-amber-300/80 mb-6">
          Ready for 1-click or CLI production deployment for ANIX Software Technology
        </p>

        <div className="space-y-6 text-sm">
          {/* Method 1: GitHub / Git Push */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <span>Deploy via Vercel Dashboard (Recommended)</span>
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 ml-1">
              <li>Push this repository to your GitHub, GitLab, or Bitbucket account.</li>
              <li>Log in to <strong className="text-amber-300">vercel.com</strong> and click <strong>"Add New... &gt; Project"</strong>.</li>
              <li>Import your repository. Vercel automatically detects <strong>Vite + React</strong>.</li>
              <li>Build Command: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300">npm run build</code></li>
              <li>Output Directory: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300">dist</code></li>
              <li>Click <strong>Deploy</strong>. Your site will be live within 30 seconds!</li>
            </ol>
          </div>

          {/* Method 2: Vercel CLI */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span>Deploy via Vercel CLI</span>
            </h4>
            <div className="bg-slate-950 p-3 rounded-lg font-mono text-xs text-amber-300 space-y-1 border border-slate-800">
              <p className="text-slate-400"># Install CLI globally</p>
              <p>npm i -g vercel</p>
              <p className="text-slate-400 pt-1"># Deploy directly</p>
              <p>vercel</p>
              <p className="text-slate-400 pt-1"># Deploy to production</p>
              <p>vercel --prod</p>
            </div>
          </div>

          {/* Features verified checklist */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
            <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wider text-emerald-400">
              Pre-flight Deployment Checklist
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero external dependencies or server requirements (Pure client-side Vite SPA)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Responsive on Mobile, Tablet, and Desktop displays (1440px baseline)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Verified links to QR Studio (qrenerator.vercel.app)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>SEO, robots.txt, sitemap.xml, and OpenGraph social metadata included</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
