'use client';

import React from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-32 relative bg-studio-obsidian/40 border-t border-studio-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-3 sm:mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-5xl font-black text-white tracking-tight uppercase mb-3 sm:mb-4">
            Cherished{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              customer feedback.
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-studio-silver">
            Over 3,500 families have trusted Raja Digital Studio for weddings, passport photos, and flex banners.
          </p>
        </div>

        {/* Mobile Swipe Prompt */}
        <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-studio-gold mb-3 px-1">
          <span>Swipe reviews left to right →</span>
          <span>{TESTIMONIALS.length} reviews</span>
        </div>

        {/* Reviews Grid:
            - Mobile: Left-to-right horizontal scroll
            - Laptop / Desktop: Untouched grid */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none gap-4 sm:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="w-[82vw] md:w-auto shrink-0 snap-center md:shrink p-6 sm:p-8 rounded-3xl bg-studio-surface border border-studio-border/80 flex flex-col justify-between relative group hover:border-studio-gold/40 transition-colors shadow-lg shadow-black/40"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1 text-studio-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-studio-gold text-studio-gold" />
                  ))}
                </div>

                <p className="font-serif italic text-sm sm:text-lg text-studio-cream/90 leading-relaxed line-clamp-4 md:line-clamp-none">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-studio-border/50">
                <p className="font-display font-bold text-sm text-white">{t.author}</p>
                <div className="flex items-center justify-between text-xs font-mono text-studio-gold mt-1">
                  <span className="truncate max-w-[150px]">{t.event}</span>
                  <span className="text-studio-muted shrink-0">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
