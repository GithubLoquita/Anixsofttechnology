import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, ArrowRight, MessageSquare } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('Project Inquiry / Collaboration');
  const [message, setMessage] = useState('');

  const officialEmail = 'hembramgroupofficials@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(
      subject || 'Inquiry for ANIX Software Technology'
    )}&body=${encodeURIComponent(
      `From: ${senderName || 'Anonymous'}\n\nMessage:\n${message || 'Hello ANIX Team, I would like to discuss a project with you.'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-[#0D1326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
            <DiyaFlame size="sm" isLit={true} showGlow={false} />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have a project inquiry, partnership idea, or feedback regarding QR Studio? Reach out directly
            to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & QR Studio Link */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Official Communication
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Get in Touch Directly</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  We reply directly to genuine inquiries regarding digital products, web development, and
                  technical collaborations.
                </p>
              </div>

              {/* Official Email Block with Copy */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Email Address</span>
                    <a
                      href={`mailto:${officialEmail}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors truncate block"
                    >
                      {officialEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Quick Mailto Link Button */}
              <a
                href={`mailto:${officialEmail}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>
            </div>

            {/* Featured Product Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#120F2B] border border-amber-500/20 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                  Featured Product
                </span>
                <h4 className="text-base font-bold text-white">QR Studio Web Toolkit</h4>
                <p className="text-xs text-slate-400 mt-0.5">Free QR, barcode, and PDF tools.</p>
              </div>

              <a
                href="https://qrenerator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-all shrink-0"
              >
                <span>Try App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Pre-configured Email Composer */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Compose an Inquiry</h3>
              </div>

              <form onSubmit={handleMailtoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Topic / Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Website Development or Product Partnership"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you'd like to build or discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    <span>Launch Email with Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    This directly opens your email client addressed to <strong className="text-slate-300">{officialEmail}</strong> with no intermediary trackers.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
