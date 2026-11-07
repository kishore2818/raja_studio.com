'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Clock, ShieldCheck, Camera, Printer, UserCheck, Image as ImageIcon, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-studio-border/80 shadow-2xl bg-studio-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop"
                  alt="Raja Digital Studio Srivaikuntam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-pitch via-transparent to-transparent opacity-70" />

                {/* Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-studio-pitch/90 backdrop-blur-xl border border-studio-gold/40 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-studio-gold text-studio-pitch flex items-center justify-center font-display font-bold text-xl shrink-0">
                    15+
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">Years in Srivaikuntam</p>
                    <p className="font-mono text-[11px] text-studio-gold">Opposite Taluk Office</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-48 h-48 bg-studio-gold/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
                <span>About Raja Digital Studio</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
                Your Complete Neighborhood{' '}
                <span className="italic font-serif font-normal text-studio-gold lowercase">
                  photo studio & print hub.
                </span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
              Established in 2010 right opposite the Taluk Office in Srivaikuntam, <strong className="text-white">Raja Digital Studio</strong> is the go-to destination for families, businesses, and couples across Thoothukudi district for all photography, videography, and digital printing needs.
            </p>

            <p className="font-sans text-sm sm:text-base text-studio-silver/90 leading-relaxed">
              Whether you need urgent <strong>5-minute passport size photos</strong> for job applications and visas, grand multi-camera <strong>wedding cinematography and live LED drone coverage</strong>, large-format <strong>flex banner design & printing</strong> for your family function, or customized <strong>Italian photo albums & wooden framing</strong>, we handle everything in-house with guaranteed quality.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>5-Min Passport Photos</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Immediate print sets with digital softcopy on WhatsApp. White & blue backgrounds ready.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <Camera className="w-4 h-4" />
                  <span>Wedding Photography</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Traditional Muhurtham, candid photos, 4K video, drone sweeps, and LED walls.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <Printer className="w-4 h-4" />
                  <span>Flex Banner Printing</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Eye-catching Tamil graphic designs, Star flex quality, and same-day urgent delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <ImageIcon className="w-4 h-4" />
                  <span>Framing & Old Photo Repair</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Antique golden frames, teak wood, and digital restoration of damaged ancestral photos.
                </p>
              </div>
            </div>

            {/* Call Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={STUDIO_INFO.callLink}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-studio-gold text-studio-pitch font-bold text-xs uppercase tracking-wider hover:bg-studio-gold-hover transition-colors shadow-lg shadow-studio-gold/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio: {STUDIO_INFO.phone}</span>
              </a>

              <a
                href="#booking"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-studio-surface text-studio-cream border border-studio-border text-xs uppercase tracking-wider hover:border-studio-gold transition-colors"
              >
                <span>Order or Inquire Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
