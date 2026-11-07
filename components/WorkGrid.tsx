'use client';

import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/studioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight, Play, Eye } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Weddings',
  'Cinematography',
  'Commercial',
  'Portraits',
  'Post-Production',
] as const;

export const WorkGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="works" className="py-24 sm:py-32 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-studio-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-studio-gold font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio Archive</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Curated{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                works.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-studio-silver max-w-md">
            From regal temple Muhurthams and sunset coastal pre-shoots to high-fashion commercial campaigns and handcrafted photo albums.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
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
              className="group cursor-pointer rounded-2xl bg-studio-surface border border-studio-border/70 overflow-hidden hover:border-studio-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-studio-gold/10 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-studio-pitch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-surface via-transparent to-black/30 opacity-80" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-studio-pitch/80 backdrop-blur-md text-studio-gold border border-studio-gold/30">
                    {project.category}
                  </span>

                  {project.highlightTag && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                      {project.highlightTag}
                    </span>
                  )}
                </div>

                {/* Hover Center Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-studio-gold text-studio-pitch font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-studio-gold/30 scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-studio-muted mb-2">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-studio-gold transition-colors">
                  {project.title}
                </h3>

                <p className="font-serif italic text-sm text-studio-gold/90 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="font-sans text-xs text-studio-silver/80 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-studio-border/50 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-studio-muted">
                    {project.gearUsed[0]}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-studio-gold group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
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
