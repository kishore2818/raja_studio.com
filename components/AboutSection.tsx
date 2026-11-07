'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { StudioLogo } from './StudioLogo';
import { Award, Clock, Heart, ShieldCheck, MapPin, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Gold Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-studio-border/80 shadow-2xl bg-studio-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop"
                  alt="Raja Digital Studio Master Cinematographer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-pitch via-transparent to-transparent opacity-70" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-studio-pitch/90 backdrop-blur-xl border border-studio-gold/40 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-studio-gold text-studio-pitch flex items-center justify-center font-display font-bold text-xl shrink-0">
                    15+
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">Years of Visual Mastery</p>
                    <p className="font-mono text-[11px] text-studio-gold">Serving Srivaikuntam & Tamil Nadu</p>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-studio-gold/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Story & Heritage */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
                <span>The Story of Raja Digital Studio</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
                Preserving life&apos;s most{' '}
                <span className="italic font-serif font-normal text-studio-gold lowercase">
                  sacred moments.
                </span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
              Founded in 2010 in the historic temple town of Srivaikuntam, <strong className="text-white">Raja Digital Studio</strong> was built on a singular artistic passion: to elevate regional wedding celebrations, family milestones, and commercial imagery into timeless cinematic works of art.
            </p>

            <p className="font-sans text-sm sm:text-base text-studio-silver/90 leading-relaxed">
              Over the past 15 years, our studio has documented over 3,500 weddings, temple muhurthams, and celebrations. Combining cinema-grade cameras, live 4K drone cinematography, and an in-house digital color grading and photo printing lab, we ensure your family&apos;s memories are preserved in heirloom quality for generations.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Uncompromising Quality</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Only Sony Cinema and RED equipment used with high-speed prime glass.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Prompt Delivery Guarantee</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Quick WhatsApp teasers within 48 hours and master albums within 3 weeks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <Heart className="w-4 h-4" />
                  <span>Emotional Storytelling</span>
                </div>
                <p className="text-xs text-studio-silver">
                  We capture unposed smiles, genuine tears, and pure ritual sanctity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface border border-studio-border">
                <div className="flex items-center gap-2 text-studio-gold font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Rooted in Srivaikuntam</span>
                </div>
                <p className="text-xs text-studio-silver">
                  Conveniently located opposite Taluk Office, Arasalvar Kovil Street.
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
                <span>Call {STUDIO_INFO.phone}</span>
              </a>

              <a
                href="#booking"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-studio-surface text-studio-cream border border-studio-border text-xs uppercase tracking-wider hover:border-studio-gold transition-colors"
              >
                <span>Check Availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
