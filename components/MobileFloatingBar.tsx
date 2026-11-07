'use client';

import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';

export const MobileFloatingBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-studio-pitch/95 backdrop-blur-xl border-t border-studio-border/80 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Direct */}
        <a
          href={STUDIO_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Direct Phone Call */}
        <a
          href={STUDIO_INFO.callLink}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-studio-gold text-studio-pitch font-bold active:scale-95 transition-transform shadow-lg shadow-studio-gold/25"
        >
          <Phone className="w-4 h-4 fill-studio-pitch" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Call Now</span>
        </a>

        {/* Directions / Maps */}
        <a
          href={STUDIO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-studio-surface text-studio-silver border border-studio-border active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-studio-gold" />
          <span className="text-[10px] font-mono font-medium tracking-wider uppercase">Directions</span>
        </a>
      </div>
    </div>
  );
};
