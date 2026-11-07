'use client';

import React from 'react';
import { Camera, Printer, UserCheck, Image as ImageIcon, Video, Layers, Sparkles } from 'lucide-react';

export const GearArsenal: React.FC = () => {
  const labEquipment = [
    {
      name: "Sony Full-Frame Cinema Cameras",
      spec: "Sony FX3, FX6 & A7S III for low-light Muhurtham & 4K 120fps cinematic wedding films.",
      icon: <Camera className="w-5 h-5 text-studio-gold" />,
      tag: "WEDDING CINEMA"
    },
    {
      name: "Large-Format Digital Flex Printers",
      spec: "High-speed outdoor flex banner printing up to 40 feet width with Star flex & gloss finish.",
      icon: <Printer className="w-5 h-5 text-amber-400" />,
      tag: "FLEX & HOARDINGS"
    },
    {
      name: "High-Speed Passport Photo Engines",
      spec: "Instant 5-minute dye-sublimation passport & visa photo printers with zero-bleed gloss paper.",
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      tag: "INSTANT 5 MINS"
    },
    {
      name: "DJI 4K Cinema Drone Fleet",
      spec: "DJI Mavic 3 Cine for grand outdoor wedding processions, temple vistas, and crowd sweeps.",
      icon: <Video className="w-5 h-5 text-sky-400" />,
      tag: "AERIAL 4K"
    },
    {
      name: "Cold & Thermal Lamination Press",
      spec: "Matte, glossy, and sparkle lamination machines for albums, flex banners, and certificate preservation.",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      tag: "LAMINATION LAB"
    },
    {
      name: "Handcrafted Wooden Framing Workshop",
      spec: "In-house custom synthetic, teakwood, and antique gold carved frames with ready-to-hang wall mounts.",
      icon: <ImageIcon className="w-5 h-5 text-rose-400" />,
      tag: "FRAMING DEPT"
    }
  ];

  return (
    <section id="gear" className="py-16 sm:py-28 relative bg-studio-pitch border-t border-studio-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-studio-gold font-mono text-xs uppercase tracking-widest mb-2 sm:mb-3">
              <Sparkles className="w-4 h-4" />
              <span>In-House Studio & Lab Technology</span>
            </div>
            <h2 className="font-display text-2xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Studio Machinery &{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                equipment.
              </span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-base text-studio-silver max-w-md">
            We operate in-house cinema gear, high-resolution flex printing machinery, and instant passport photo stations under one roof in Srivaikuntam.
          </p>
        </div>

        {/* Mobile Swipe Prompt */}
        <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-studio-gold mb-3 px-1">
          <span>Swipe equipment left to right →</span>
          <span>{labEquipment.length} machines</span>
        </div>

        {/* Equipment Grid:
            - Mobile: Left-to-right horizontal scroll
            - Laptop / Desktop: Untouched grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-none gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {labEquipment.map((item, idx) => (
            <div
              key={idx}
              className="w-[75vw] sm:w-auto shrink-0 snap-center sm:shrink p-5 sm:p-6 rounded-2xl bg-studio-surface/80 border border-studio-border hover:border-studio-gold/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-studio-card text-studio-gold flex items-center justify-center border border-studio-border group-hover:border-studio-gold/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] text-studio-gold tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-studio-gold transition-colors line-clamp-1">
                  {item.name}
                </h3>

                <p className="font-sans text-xs text-studio-silver leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {item.spec}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-studio-border/40 flex items-center justify-between text-[11px] font-mono text-studio-muted">
                <span>Srivaikuntam Lab</span>
                <span className="text-emerald-400 font-semibold">Active Daily</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
