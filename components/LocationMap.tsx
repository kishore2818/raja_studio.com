'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 relative bg-studio-obsidian border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Headquarters</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Visit Our{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              studio.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-studio-silver">
            Drop by our studio in Srivaikuntam to view our handcrafted physical albums, sample 4K cinema films on calibrated monitors, and meet our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Hours Information Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-studio-surface border border-studio-border/80 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">
                Raja Digital Studio
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Studio Address
                    </p>
                    <p className="text-sm text-studio-cream font-medium leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                    <p className="text-xs text-studio-gold mt-1 font-mono">
                      (Opposite Taluk Office, Arasalvar Kovil Street)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-studio-border/60">
                  <div className="w-9 h-9 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Working Hours
                    </p>
                    <p className="text-sm text-studio-cream font-medium">
                      {STUDIO_INFO.openingHours}
                    </p>
                    <p className="text-xs text-studio-silver mt-0.5">Open all days for inquiries & shoots</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-studio-border/60">
                  <div className="w-9 h-9 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Direct Contact
                    </p>
                    <a
                      href={STUDIO_INFO.callLink}
                      className="text-sm text-white font-bold hover:text-studio-gold transition-colors block"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Action */}
            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
            >
              <Navigation className="w-4 h-4 fill-studio-pitch" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-studio-border/80 bg-studio-surface relative min-h-[350px]">
            <iframe
              title="Raja Digital Studio Srivaikuntam Location"
              src="https://maps.google.com/maps?q=Srivaikuntam%20Taluk%20Office%20Thoothukudi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-studio-pitch/90 backdrop-blur-md px-3 py-2 rounded-xl border border-studio-border text-[11px] font-mono text-studio-silver flex items-center gap-1.5 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Srivaikuntam • Thoothukudi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

