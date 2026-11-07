'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { StudioLogo } from './StudioLogo';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'About Studio', href: '#about' },
    { name: 'Cinema Gear', href: '#gear' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-studio-pitch/90 backdrop-blur-xl border-b border-studio-border/60 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-studio-pitch/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group transition-transform active:scale-95">
              <StudioLogo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-widest text-studio-silver hover:text-studio-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Direct Contact CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Quick Link */}
              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/50 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={STUDIO_INFO.callLink}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch transition-all duration-200 shadow-lg shadow-studio-gold/20 hover:shadow-studio-gold/40"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {STUDIO_INFO.rawPhone}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={STUDIO_INFO.callLink}
                className="p-2 rounded-full bg-studio-gold text-studio-pitch"
                title="Call Studio"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-studio-silver hover:text-white border border-studio-border bg-studio-surface/80"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-studio-pitch/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="space-y-6">
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-studio-surface border border-studio-border w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-studio-silver font-mono">Accepting 2025-2026 Dates</span>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold tracking-tight text-white hover:text-studio-gold transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-studio-gold/60" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-studio-border/60 space-y-3">
            <a
              href={STUDIO_INFO.callLink}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-studio-gold text-studio-pitch font-bold text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {STUDIO_INFO.phone}</span>
            </a>
            <a
              href={STUDIO_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-studio-muted font-mono pt-2">
              {STUDIO_INFO.address}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
