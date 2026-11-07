'use client';

import React, { useEffect } from 'react';
import { Project, STUDIO_INFO } from '../data/studioData';
import { X, Clock, CheckCircle2, MessageCircle, Phone, Tag } from 'lucide-react';

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
    `Hello Durai, I saw your "${project.title}" (${project.category}) on your website. I want to inquire about a similar service.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-studio-pitch/90 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-studio-surface border border-studio-border rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-border/60 bg-studio-card/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-studio-gold/15 text-studio-gold border border-studio-gold/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-studio-muted">
              {project.serviceType}
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

        {/* Hero Cover */}
        <div className="relative aspect-[16/9] w-full bg-studio-pitch overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-studio-gold mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-studio-card/60 border border-studio-border text-xs font-mono">
            <div>
              <p className="text-studio-muted uppercase tracking-wider mb-1">Turnaround Time</p>
              <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{project.turnaroundTime}</span>
              </p>
            </div>
            <div>
              <p className="text-studio-muted uppercase tracking-wider mb-1">Client / Purpose</p>
              <p className="text-white font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-studio-muted uppercase tracking-wider mb-1">Location</p>
              <p className="text-studio-gold font-semibold">Srivaikuntam / TN</p>
            </div>
          </div>

          {/* Additional Gallery Stills */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-studio-muted mb-3">
                Sample Work Views
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden bg-studio-pitch border border-studio-border"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${project.title} sample ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-studio-border/60">
            <div>
              <p className="text-xs text-studio-muted font-mono">
                Need this service at Raja Digital Studio?
              </p>
              <p className="text-sm font-bold text-white">Call {STUDIO_INFO.phone} or visit our studio</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${projectWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
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
