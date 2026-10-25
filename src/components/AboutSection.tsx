import React from 'react';
import { Lightbulb, Sparkles, Compass, Check } from 'lucide-react';
import { DiyaFlame } from './cartoon/DiyaFlame';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      tagline: 'Practical problem solving',
      description: 'Explore practical solutions to everyday problems.',
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30',
      points: [
        'Browser-native utility engines',
        'Zero-friction user experience',
        'Built for everyday productivity',
      ],
    },
    {
      title: 'Simplicity',
      tagline: 'Clean by design',
      description: 'Design experiences that are easy to understand and use.',
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      points: [
        'No complicated setups or signups',
        'Intuitive inputs with instant previews',
        'Fast and uncluttered interface',
      ],
    },
    {
      title: 'Creativity',
      tagline: 'Technology meets craft',
      description: 'Combine technology and visual design to build engaging products.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/30',
      points: [
        'Polished visual design systems',
        'Thoughtful animations & responsiveness',
        'High attention to detail',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D1326] relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
            <DiyaFlame size="sm" isLit={true} showGlow={false} />
            <span>About Us · ANIX Software Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Small Ideas. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Meaningful Technology.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            ANIX Software Technology focuses on creating useful digital experiences that make everyday tasks simpler.
            Our goal is to combine thoughtful design, practical software and accessible technology.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 text-sm font-medium text-amber-300">
            <span className="italic">"Technology That Makes Life Simpler."</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Build. Create. Simplify.</span>
          </div>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((val) => (
            <div
              key={val.title}
              className={`p-8 rounded-2xl bg-gradient-to-b ${val.color} bg-slate-900/60 border ${val.border} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 shadow-sm">
                    {val.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {val.tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{val.title}</h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {val.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {val.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Principles / Clean Statement */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-amber-500/20 text-center">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We believe the best technology feels invisible—solving problems directly in the browser
            without barriers, bloated software, or paywalls. From utilities like <strong className="text-amber-300">QR Studio</strong> to
            delightful digital experiences, our mission remains constant: creating software that is honest,
            accessible, and built to make life simpler.
          </p>
        </div>
      </div>
    </section>
  );
};
