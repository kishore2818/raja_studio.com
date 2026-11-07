'use client';

import React, { useEffect } from 'react';
import { Project, STUDIO_INFO } from '../data/studioData';
import { X, Camera, Film, Sliders, Calendar, User, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectWhatsappMessage = encodeURIComponent(
    `Hello Raja Digital Studio, I saw your project "${project.title}" (${project.category}) on your website. I would like to inquire about a similar shoot.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-studio-pitch/90 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl bg-studio-surface border border-studio-border rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-border/60 bg-studio-card/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-studio-gold/15 text-studio-gold border border-studio-gold/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-studio-muted">
              Project Archive // {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-studio-silver hover:text-white hover:bg-studio-border/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Media Showcase */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-studio-pitch overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-transparent" />
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header & Subtitle */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-studio-gold mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Project Summary */}
          <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-studio-card/60 border border-studio-border">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-studio-muted text-xs font-mono">
                <User className="w-3.5 h-3.5 text-studio-gold" />
                <span>Client / Event</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">{project.client}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-studio-muted text-xs font-mono">
                <Film className="w-3.5 h-3.5 text-studio-gold" />
                <span>Director / Lead</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">{project.director}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-studio-muted text-xs font-mono">
                <Camera className="w-3.5 h-3.5 text-studio-gold" />
                <span>Cinematography</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">{project.dop}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-studio-muted text-xs font-mono">
                <Sliders className="w-3.5 h-3.5 text-studio-gold" />
                <span>Color Grading</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">{project.colorist}</p>
            </div>
          </div>

          {/* Gear Used Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted mb-3">
              Production Equipment & Lenses Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.gearUsed.map((gear, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-studio-pitch border border-studio-border text-studio-silver"
                >
                  {gear}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Gallery Stills */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted mb-3">
                Production Frame Gallery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-studio-pitch border border-studio-border group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${project.title} still ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Call to Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-studio-border/60">
            <div>
              <p className="text-xs text-studio-muted font-mono">
                Interested in crafting something similar with Raja Digital Studio?
              </p>
              <p className="text-sm font-bold text-white">Call {STUDIO_INFO.phone} for dates</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${projectWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire for Similar Shoot</span>
              </a>

              <a
                href={STUDIO_INFO.callLink}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
