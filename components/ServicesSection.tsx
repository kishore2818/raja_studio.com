'use client';

import React from 'react';
import { SERVICES, STUDIO_INFO } from '../data/studioData';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-32 relative bg-studio-obsidian/60 border-y border-studio-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Crafts & Offerings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Complete{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              creative services.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
            From high-end wedding cinematography and aerial drone perspectives to in-house digital color grading and archival Italian photobooks.
          </p>
        </div>

        {/* Services Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-studio-surface border border-studio-border/80 hover:border-studio-gold/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 hover:shadow-xl hover:shadow-studio-gold/5"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-studio-pitch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-studio-pitch/90 text-studio-gold border border-studio-gold/40 backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                {/* Subtag & Title */}
                <span className="font-mono text-[10px] sm:text-xs text-studio-gold tracking-widest uppercase font-semibold">
                  {service.tag}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 mb-3 group-hover:text-studio-gold transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-studio-silver leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-studio-border/50">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-sans text-xs text-studio-cream/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hi%20Raja%20Digital%20Studio,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-studio-card hover:bg-studio-gold hover:text-studio-pitch text-studio-silver border border-studio-border font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 group-hover:border-studio-gold/40"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-studio-pitch" />
                <span>Get Package Quote</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
