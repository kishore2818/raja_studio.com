'use client';

import React from 'react';
import { SERVICES, STUDIO_INFO } from '../data/studioData';
import { Camera, Printer, UserCheck, Gift, Image as ImageIcon, Video, Check, Sparkles, MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'portrait':
        return <UserCheck className="w-5 h-5 text-studio-gold" />;
      case 'printer':
        return <Printer className="w-5 h-5 text-studio-gold" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-studio-gold" />;
      case 'frame':
        return <ImageIcon className="w-5 h-5 text-studio-gold" />;
      case 'gift':
        return <Gift className="w-5 h-5 text-studio-gold" />;
      default:
        return <Video className="w-5 h-5 text-studio-gold" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-32 relative bg-studio-obsidian/60 border-y border-studio-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Digital Studio Solutions</span>
          </div>
          <h2 className="font-display text-2xl sm:text-5xl font-black text-white tracking-tight uppercase mb-3 sm:mb-4">
            Studio Services &{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              print lab.
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-studio-silver leading-relaxed">
            From 5-minute express passport photos and grand wedding cinematography to custom flex banner design and handcrafted photo framing.
          </p>
        </div>

        {/* Mobile Swipe Prompt */}
        <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-studio-gold mb-3 px-1">
          <span>Swipe services left to right →</span>
          <span>{SERVICES.length} services</span>
        </div>

        {/* Services Container:
            - Mobile: Left-to-right horizontal scroll with snap-center & compact width
            - Desktop / Laptop: Untouched standard 2 & 3 column grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none gap-4 md:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="w-[82vw] md:w-auto shrink-0 snap-center md:shrink group relative rounded-2xl bg-studio-surface border border-studio-border/80 hover:border-studio-gold/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-5 sm:p-7 hover:shadow-xl hover:shadow-studio-gold/5"
            >
              <div>
                {/* Visual Image with Badges */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-studio-pitch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-transparent opacity-80" />
                  
                  {/* Service Badge */}
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-studio-pitch/90 text-studio-gold border border-studio-gold/40 backdrop-blur-md">
                    {service.badge}
                  </span>

                  {/* Icon Indicator */}
                  <div className="absolute bottom-2.5 left-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-studio-pitch/90 border border-studio-border flex items-center justify-center backdrop-blur-md">
                    {getIcon(service.iconType)}
                  </div>
                </div>

                {/* Subtag & Title */}
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] sm:text-xs text-studio-gold tracking-widest uppercase font-semibold">
                    {service.tag}
                  </span>
                  {service.priceNote && (
                    <span className="font-mono text-[10px] sm:text-[11px] text-emerald-400 font-medium">
                      {service.priceNote}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-white mt-1 mb-2.5 group-hover:text-studio-gold transition-colors line-clamp-1">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-studio-silver leading-relaxed mb-5 line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 sm:space-y-2 mb-5 pt-3 border-t border-studio-border/50">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-sans text-[11px] sm:text-xs text-studio-cream/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hi%20Durai,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-studio-card hover:bg-studio-gold hover:text-studio-pitch text-studio-silver border border-studio-border font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 group-hover:border-studio-gold/40 active:scale-98"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-studio-pitch" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
