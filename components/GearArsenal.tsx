'use client';

import React from 'react';
import { GEAR_HIGHLIGHTS } from '../data/studioData';
import { Camera, Radio, Video, Sliders, Film, Sparkles } from 'lucide-react';

export const GearArsenal: React.FC = () => {
  return (
    <section id="gear" className="py-20 sm:py-28 relative bg-studio-pitch border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-studio-gold font-mono text-xs uppercase tracking-widest mb-3">
              <Camera className="w-4 h-4" />
              <span>Broadcast & Cinema Standards</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Cinema-Grade{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                arsenal.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-studio-silver max-w-md">
            We invest in the same camera packages and color calibration equipment trusted by the world&apos;s leading production houses.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR_HIGHLIGHTS.map((gear, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-studio-surface/80 border border-studio-border hover:border-studio-gold/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-studio-card text-studio-gold flex items-center justify-center border border-studio-border group-hover:border-studio-gold/50 transition-colors">
                  <Film className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-studio-gold tracking-widest uppercase">
                  Spec 0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-studio-gold transition-colors">
                {gear.name}
              </h3>

              <p className="font-mono text-xs text-studio-silver leading-relaxed">
                {gear.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
