'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

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
                  Raja Digital Studio & Video
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

            {/* Directions Action Button */}
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

          {/* Map Frame: Verified Google Place Embed with Native Pinned Marker & Softened Brightness */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-studio-border/90 bg-studio-surface shadow-2xl relative min-h-[380px] sm:min-h-[440px]">
            {/* Official Google Maps Verified Embed for Raja Digital Studio & Video:
                - Uses native Google Maps pin locked to the exact place (0x3b0475443bbf2ca7:0xffd2a7a87bf1a261).
                - Map adjustments (panning, dragging, zooming) keep the pin locked to the physical building.
                - Reduced brightness filter [filter:brightness(0.85)_contrast(1.02)] softens the glare. */}
            <iframe
              title="Raja Digital Studio & Video Srivaikuntam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6564126655603!2d77.9120044!3d8.6289454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0475443bbf2ca7%3A0xffd2a7a87bf1a261!2sRaja%20Digital%20Studio%20%26%20Video!5e0!3m2!1sen!2sin!4v1794154151458!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0 transition-opacity duration-300 [filter:brightness(0.85)_contrast(1.02)] hover:[filter:brightness(0.92)_contrast(1.02)]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Top-Right Direct Open Navigation Button */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-studio-pitch/90 hover:bg-studio-pitch text-studio-cream border border-studio-border/80 text-xs font-mono px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-all active:scale-95 backdrop-blur-md"
              >
                <Navigation className="w-3.5 h-3.5 text-studio-gold fill-studio-gold" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-3 left-3 bg-studio-pitch/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-studio-border text-[11px] font-mono text-studio-silver flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Raja Digital Studio & Video • Srivaikuntam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
