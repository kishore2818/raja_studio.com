'use client';

import React from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { Star, Quote, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-studio-obsidian/40 border-t border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Words from Our Patrons</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Cherished{' '}
            <span className="italic font-serif font-normal text-studio-gold lowercase">
              memories.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-studio-silver">
            Over 3,500 families have trusted Raja Digital Studio to capture their once-in-a-lifetime milestones.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-studio-surface border border-studio-border/80 flex flex-col justify-between relative group hover:border-studio-gold/40 transition-colors shadow-lg shadow-black/40"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-studio-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-studio-gold text-studio-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-studio-cream/90 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Event Info */}
              <div className="mt-8 pt-4 border-t border-studio-border/50">
                <p className="font-display font-bold text-sm text-white">{t.author}</p>
                <div className="flex items-center justify-between text-xs font-mono text-studio-gold mt-1">
                  <span>{t.event}</span>
                  <span className="text-studio-muted">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
