import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';

interface FAQItem {
  id: string;
  category: 'qr-studio' | 'anix';
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
    external?: boolean;
  };
}

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);
  const [activeCategory, setActiveCategory] = useState<'all' | 'qr-studio' | 'anix'>('all');

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'qr-studio',
      question: 'Is QR Studio completely free to use?',
      answer:
        'Yes, QR Studio is 100% free with no subscriptions, usage limits, or hidden paywalls. Generated QR codes and exported PDF documents contain no watermarks and are yours to use for personal or commercial projects.',
      link: {
        text: 'Try QR Studio now',
        url: 'https://qrenerator.vercel.app/',
        external: true,
      },
    },
    {
      id: 'faq-2',
      category: 'qr-studio',
      question: 'What types of QR codes and barcodes can I generate?',
      answer:
        'QR Studio supports standard QR codes for website URLs, plain text, Wi-Fi network credentials, WhatsApp chat triggers, and contact vCards. For barcodes, it generates industry standards including CODE 128, EAN-13, UPC-A, and CODE 39.',
      link: {
        text: 'Open QR Studio',
        url: 'https://qrenerator.vercel.app/',
        external: true,
      },
    },
    {
      id: 'faq-3',
      category: 'qr-studio',
      question: 'Are my uploaded images or merged PDFs stored on any servers?',
      answer:
        'No. QR Studio is engineered with a strict client-side architecture. Image-to-PDF conversion, PDF merging, and barcode rendering occur directly in your web browser. Your private documents, photos, and files are never uploaded to our servers or stored anywhere.',
    },
    {
      id: 'faq-4',
      category: 'anix',
      question: 'What is ANIX Software Technology’s product philosophy?',
      answer:
        'Our core tagline is "Technology That Makes Life Simpler." We focus on creating straightforward, browser-native digital utilities and modern web applications that remove friction, eliminate unnecessary logins, and respect user privacy.',
    },
    {
      id: 'faq-5',
      category: 'anix',
      question: 'What development services does ANIX Software Technology offer?',
      answer:
        'We specialize in responsive website development, UI/UX design systems, digital product engineering, custom web applications, and creative startup branding. Each solution is built with clean code and high performance.',
      link: {
        text: 'Discuss a project with us',
        url: '#contact',
        external: false,
      },
    },
    {
      id: 'faq-6',
      category: 'anix',
      question: 'How do I contact ANIX Software Technology for project inquiries?',
      answer:
        'You can reach our team directly at hembramgroupofficials@gmail.com or via the interactive inquiry composer in our Contact section. We reply promptly to genuine project proposals and technical partnerships.',
      link: {
        text: 'Send an email inquiry',
        url: 'mailto:hembramgroupofficials@gmail.com',
        external: true,
      },
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#0D1326] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
            <DiyaFlame size="sm" isLit={true} showGlow={false} />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Answers & Insights
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Learn more about using QR Studio's digital utilities and our transparent development approach at
            ANIX Software Technology.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Questions ({faqData.length})
            </button>
            <button
              onClick={() => setActiveCategory('qr-studio')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'qr-studio'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              QR Studio
            </button>
            <button
              onClick={() => setActiveCategory('anix')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'anix'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ANIX Development
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/40 shadow-lg shadow-black/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-500/20 text-amber-300 rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60"
                  >
                    <p className="mb-3">{faq.answer}</p>
                    {faq.link && (
                      <div className="pt-2">
                        <a
                          href={faq.link.url}
                          target={faq.link.external ? '_blank' : undefined}
                          rel={faq.link.external ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <span>{faq.link.text}</span>
                          {faq.link.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <span>→</span>
                          )}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust & Privacy Footnote Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question?</h4>
              <p className="text-xs text-slate-400">
                Contact our engineering team directly at hembramgroupofficials@gmail.com
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-amber-500/30 text-xs font-semibold transition-all shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Ask a Question</span>
          </a>
        </div>
      </div>
    </section>
  );
};
