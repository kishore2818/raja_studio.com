'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowDown, Sparkles, Phone, MessageCircle, MapPin, Award, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Ambience & Cinematic Lighting Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-pitch via-studio-pitch/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-pitch via-transparent to-studio-pitch" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-studio-gold/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Regal Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-surface/90 border border-studio-gold/30 backdrop-blur-md mb-8 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-studio-gold" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-studio-gold font-medium">
            Srivaikuntam&apos;s Premier Digital Studio • Estd. {STUDIO_INFO.foundedYear}
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[1.08] mb-6">
          Cinematic{' '}
          <span className="bg-gradient-to-r from-white via-studio-gold-light to-studio-gold bg-clip-text text-transparent">
            Vision.
          </span>
          <br />
          Timeless{' '}
          <span className="italic font-serif font-normal text-studio-gold lowercase">
            stories.
          </span>
        </h1>

        {/* Studio Subtext */}
        <p className="font-sans text-base sm:text-xl text-studio-silver max-w-2xl font-light leading-relaxed mb-10">
          Crafting breathtaking royal wedding cinematography, candid heirloom photography,
          commercial brand films, and luxury photo albums with unmatched cinema precision.
        </p>

        {/* Address / Location Pill */}
        <a
          href={STUDIO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-studio-muted hover:text-studio-gold transition-colors mb-10 bg-studio-card/70 px-4 py-2 rounded-xl border border-studio-border/70 group"
        >
          <MapPin className="w-4 h-4 text-studio-gold group-hover:scale-110 transition-transform" />
          <span>79, Taluk Office Opp, Arasalvar Kovil St, Srivaikuntam</span>
        </a>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={STUDIO_INFO.callLink}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-studio-gold/25 hover:shadow-studio-gold/40 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-studio-pitch" />
            <span>Call {STUDIO_INFO.phone}</span>
          </a>

          <a
            href={STUDIO_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>

          <a
            href="#works"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-studio-surface/80 hover:bg-studio-surface text-studio-cream border border-studio-border hover:border-studio-gold/50 font-semibold text-sm tracking-wider uppercase transition-all duration-300"
          >
            <span>View Portfolio</span>
          </a>
        </div>

        {/* Studio Credibility Stats Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-studio-surface/70 border border-studio-border/80 backdrop-blur-md">
          {STUDIO_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-2">
              <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-studio-muted uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Prompt */}
        <a
          href="#works"
          className="mt-12 flex flex-col items-center text-studio-muted hover:text-studio-gold transition-colors duration-200 group"
          aria-label="Scroll down to featured works"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase mb-2">Explore Portfolio</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-studio-gold group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
