'use client';

import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkStatus = () => {
      // Calculate real-time status in Indian Standard Time (IST: Asia/Kolkata)
      const now = new Date();
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istString);
      const currentMinutes = istDate.getHours() * 60 + istDate.getMinutes();
      
      const openMinutes = 8 * 60; // 8:00 AM = 480 mins
      const closeMinutes = 21 * 60 + 30; // 9:30 PM = 1290 mins

      setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-20 sm:py-28 relative bg-studio-obsidian border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-studio-gold" />
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
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-2xl font-bold text-white">
                  Raja Digital Studio & Video
                </h3>

                {/* Real-time Dynamic Open / Closed Status Badge Styled to Studio Color Palette */}
                {mounted && (
                  isOpen ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-gold/15 border border-studio-gold/40 text-studio-gold font-mono text-[11px] font-semibold shrink-0">
                      <span className="w-2 h-2 rounded-full bg-studio-gold animate-pulse" />
                      Open Now
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-card border border-studio-border text-studio-silver font-mono text-[11px] font-medium shrink-0">
                      <span className="w-2 h-2 rounded-full bg-studio-muted" />
                      Closed Now
                    </span>
                  )
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  {/* Pin Icon styled to Studio Palette (Gold & Studio Card) */}
                  <div className="w-10 h-10 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-studio-gold/10">
                    <MapPin className="w-5 h-5 text-studio-gold" />
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
                  <div className="w-10 h-10 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-studio-gold/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-studio-muted uppercase tracking-wider mb-1">
                      Daily Working Hours
                    </p>
                    <p className="text-sm text-studio-cream font-medium">
                      {STUDIO_INFO.openingHours}
                    </p>
                    <p className="text-xs text-studio-silver mt-0.5">
                      {mounted && (isOpen ? "Open until 9:30 PM today" : "Closed for the day • Opens 8:00 AM tomorrow")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-studio-border/60">
                  <div className="w-10 h-10 rounded-xl bg-studio-card border border-studio-border text-studio-gold flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-studio-gold/10">
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
            {/* Official Google Maps Verified Embed for Raja Digital Studio & Video */}
            <iframe
              title="Raja Digital Studio & Video Srivaikuntam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6564126655603!2d77.9120044!3d8.6289454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0475443bbf2ca7%3A0xffd2a7a87bf1a261!2sRaja%20Digital%20Studio%20%26%20Video!5e0!3m2!1sen!2sin!4v1794154151458!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0 transition-opacity duration-300 [filter:brightness(0.85)_contrast(1.02)] hover:[filter:brightness(0.92)_contrast(1.02)]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Bottom Status Bar */}
            <div className="absolute bottom-3 left-3 bg-studio-pitch/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-studio-border text-[11px] font-mono text-studio-silver flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-studio-gold animate-pulse" />
              <span>Raja Digital Studio & Video • Srivaikuntam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
