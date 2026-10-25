import React from 'react';
import { Globe, Palette, Box, Code2, Sparkles, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      description:
        'Fast, responsive, and search-optimized web presences built using modern web standards and tailored to deliver high conversion and accessibility.',
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      features: ['Modern Next.js / React', 'Mobile-first responsive design', 'SEO and performance focused'],
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centered interfaces designed with clarity, aesthetic restraint, and intuitive interactions that make digital products effortless to navigate.',
      icon: <Palette className="w-6 h-6 text-rose-400" />,
      features: ['Design systems & typography', 'Interactive prototypes', 'Accessibility (WCAG AA)'],
    },
    {
      title: 'Digital Product Development',
      description:
        'End-to-end conceptualization and engineering of standalone digital utilities, SaaS tools, and browser extensions that solve distinct problems.',
      icon: <Box className="w-6 h-6 text-purple-400" />,
      features: ['Browser utility engines', 'Zero-server client tools', 'Intuitive product UX'],
    },
    {
      title: 'Web Application Development',
      description:
        'Robust web applications engineered with clean component architectures, state management, and real-time responsiveness.',
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      features: ['Full-stack architectures', 'REST & GraphQL APIs', 'Client-side performance'],
    },
    {
      title: 'Creative Branding & Design',
      description:
        'Distinctive brand visual identities, typography pairings, color systems, and digital assets tailored for modern tech startups.',
      icon: <Sparkles className="w-6 h-6 text-amber-300" />,
      features: ['Vector logos & icons', 'Color palettes & style guides', 'Campaign visual assets'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
            <span>Capabilities & Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Services & Expertise
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From focused browser utilities like QR Studio to full-scale digital products, we craft software
            solutions designed with care, performance, and simplicity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">{service.title}</h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/50">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Callout Card to Discuss a Project */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-amber-950/40 via-purple-950/40 to-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Collaboration
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                Have an Idea in Mind?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you need a custom web application, utility software, or a refresh of your digital presence,
                let's discuss your requirements.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
