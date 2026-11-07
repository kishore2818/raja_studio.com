'use client';

import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/studioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight, Eye, Clock, CheckCircle } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Weddings',
  'Flex Design',
  'Passport & Portraits',
  'Framing & Gifts',
  'Photo Lab',
] as const;

export const WorkGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="works" className="py-20 sm:py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-studio-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-studio-gold font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Work Samples & Deliverables</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Recent{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                studio works.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-studio-silver max-w-md">
            Browse our real customer projects: grand wedding cinematography, 5-minute studio passport photos, printed flex banners, and custom wooden frames.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-studio-gold text-studio-pitch font-bold shadow-lg shadow-studio-gold/25'
                  : 'bg-studio-surface text-studio-silver hover:text-white border border-studio-border hover:border-studio-gold/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-studio-surface border border-studio-border/80 overflow-hidden hover:border-studio-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-studio-gold/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-studio-pitch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-black/40 opacity-80" />

                {/* Tags */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-studio-pitch/90 backdrop-blur-md text-studio-gold border border-studio-gold/30">
                    {project.category}
                  </span>

                  {project.highlightTag && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-studio-card/90 backdrop-blur-md text-white border border-white/20">
                      {project.highlightTag}
                    </span>
                  )}
                </div>

                {/* Hover Center Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-studio-gold text-studio-pitch font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-studio-gold/30">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              {/* Meta Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-studio-muted mb-2">
                  <span>{project.client}</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Clock className="w-3 h-3" />
                    {project.turnaroundTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-studio-gold transition-colors">
                  {project.title}
                </h3>

                <p className="font-serif italic text-sm text-studio-gold/90 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="font-sans text-xs text-studio-silver/80 line-clamp-2 leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="pt-3 border-t border-studio-border/50 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-studio-silver">
                    {project.serviceType}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-studio-gold group-hover:translate-x-1 transition-transform">
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
