'use client';

import React from 'react';
import { StudioLogo } from './StudioLogo';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageCircle, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-pitch border-t border-studio-border/80 pt-16 pb-24 md:pb-12 text-studio-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-studio-border/60">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <StudioLogo size="lg" />
            <p className="font-sans text-xs sm:text-sm text-studio-silver max-w-sm leading-relaxed mt-4">
              Srivaikuntam&apos;s complete digital photo studio: 5-minute passport photos, grand wedding cinematography, custom flex banner design & printing, Italian photobooks, and wooden framing.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {STUDIO_INFO.rawPhone}</span>
              </a>
              <a
                href={STUDIO_INFO.callLink}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-studio-surface text-studio-gold border border-studio-gold/30 hover:border-studio-gold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#works" className="hover:text-studio-gold transition-colors">
                  Featured Works & Films
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-studio-gold transition-colors">
                  Wedding & Photography Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-studio-gold transition-colors">
                  About Raja Digital Studio
                </a>
              </li>
              <li>
                <a href="#gear" className="hover:text-studio-gold transition-colors">
                  Cinema Camera Arsenal
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-studio-gold transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-studio-gold transition-colors">
                  Book a Shoot / Inquire
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Address & Official Web Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Visit Studio
            </h4>
            <p className="text-xs text-studio-cream/90 leading-relaxed">
              {STUDIO_INFO.address}
            </p>
            <p className="text-xs font-mono text-studio-gold">
              Hours: {STUDIO_INFO.openingHours}
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_INFO.referenceSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-studio-muted hover:text-studio-gold transition-colors"
              >
                <span>Referenced Site: rajastudiosrivi.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-muted">
          <p>© {new Date().getFullYear()} RAJA DIGITAL STUDIO. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-studio-gold transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
