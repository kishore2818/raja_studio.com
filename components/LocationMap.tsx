'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone, Sparkles } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 relative bg-studio-obsidian border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Studio Location</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Visit Our{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              studio in srivaikuntam.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-studio-silver">
            Directly opposite Taluk Office on Arasalvar Kovil Street. Drop in for 5-minute passport photos, wedding consultations, or custom flex banner printing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Hours Information Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-studio-surface border border-studio-border/80 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-white">
                  Raja Digital Studio
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Now
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-500 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red-500/10">
                    <MapPin className="w-5 h-5 fill-red-500 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Studio Exact Address
                    </p>
                    <p className="text-sm text-studio-cream font-medium leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                    <p className="text-xs text-studio-gold mt-1 font-mono font-semibold">
                      ★ Landmark: Opposite Taluk Office
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-studio-border/60">
                  <div className="w-10 h-10 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Daily Working Hours
                    </p>
                    <p className="text-sm text-studio-cream font-medium">
                      {STUDIO_INFO.openingHours}
                    </p>
                    <p className="text-xs text-studio-silver mt-0.5">Open all 7 days for customer service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-studio-border/60">
                  <div className="w-10 h-10 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Contact Durai / Studio
                    </p>
                    <a
                      href={STUDIO_INFO.callLink}
                      className="text-base text-white font-bold hover:text-studio-gold transition-colors block"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20 active:scale-98"
            >
              <Navigation className="w-4 h-4 fill-studio-pitch" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          {/* Bright, Full-Color Map Visual with Centered Red Pin */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-studio-border bg-white shadow-2xl relative min-h-[380px] sm:min-h-[440px]">
            {/* Interactive Bright Google Maps Embed (Standard Natural Full Color) */}
            <iframe
              title="Raja Digital Studio Srivaikuntam Location Map"
              src="https://maps.google.com/maps?q=Srivaikuntam%20Taluk%20Office%20Thoothukudi%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
            />

            {/* Exact Location Floating Red Marker Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center z-20">
              {/* Location Badge */}
              <div className="bg-studio-pitch/95 text-white border border-studio-gold/50 px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 mb-1 backdrop-blur-md animate-bounce">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-[11px] font-bold font-mono tracking-wide text-studio-cream whitespace-nowrap">
                  Raja Digital Studio (Opp. Taluk Office)
                </span>
              </div>

              {/* Red Pin Icon with pulsing radar shadow */}
              <div className="relative flex items-center justify-center">
                <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-[0_4px_12px_rgba(220,38,38,0.7)]" />
                <div className="absolute -bottom-1 w-4 h-1.5 bg-black/60 rounded-full blur-[1px]" />
              </div>
            </div>

            {/* Map Top-Right Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 text-gray-900 hover:bg-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 flex items-center gap-1.5 transition-transform active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Map Bottom Status Bar */}
            <div className="absolute bottom-3 left-3 bg-studio-pitch/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-studio-border text-[11px] font-mono text-studio-silver flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Srivaikuntam • Thoothukudi District</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
