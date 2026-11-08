'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { StudioLogo } from './StudioLogo';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate real-time status in Indian Standard Time (IST: Asia/Kolkata)
    const checkStatus = () => {
      const now = new Date();
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istString);
      const currentMinutes = istDate.getHours() * 60 + istDate.getMinutes();
      const openMinutes = 8 * 60; // 8:00 AM
      const closeMinutes = 21 * 60 + 30; // 9:30 PM
      setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Featured Works', href: '#works' },
    { name: 'Services', href: '#services' },
    { name: 'About Studio', href: '#about' },
    { name: 'Equipment', href: '#gear' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 max-w-full overflow-x-hidden ${
          scrolled
            ? 'py-3 bg-studio-pitch/95 backdrop-blur-xl border-b border-studio-border/60 shadow-2xl'
            : 'py-4 sm:py-6 bg-gradient-to-b from-studio-pitch/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 w-full">
            {/* Brand Logo */}
            <Link href="/" className="group transition-transform active:scale-95 shrink min-w-0">
              <StudioLogo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 shrink-0">
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

            {/* Desktop Direct Contact CTAs */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/50 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={STUDIO_INFO.callLink}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-studio-gold hover:bg-studio-gold-hover text-studio-pitch transition-all duration-200 shadow-lg shadow-studio-gold/20 hover:shadow-studio-gold/40"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {STUDIO_INFO.rawPhone}</span>
              </a>
            </div>

            {/* Mobile Header Actions */}
            <div className="sm:hidden flex items-center gap-2 shrink-0">
              <a
                href={STUDIO_INFO.callLink}
                className="w-9 h-9 rounded-full bg-studio-gold text-studio-pitch flex items-center justify-center shrink-0 shadow-md shadow-studio-gold/20"
                title="Call Studio"
                aria-label="Call studio"
              >
                <Phone className="w-4 h-4 fill-studio-pitch" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-lg text-studio-silver hover:text-white border border-studio-border bg-studio-surface/80 flex items-center justify-center shrink-0"
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
        <div className="fixed inset-0 z-40 bg-studio-pitch/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-20 px-6 animate-fadeIn">
          <div className="space-y-6">
            <div className="flex items-center gap-2 py-2 px-3 rounded-full bg-studio-surface border border-studio-border w-fit">
              <span className={`w-2 h-2 rounded-full ${mounted && isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
              <span className="text-xs text-studio-silver font-mono">
                {mounted && (isOpen ? 'Open Now: Closes 9:30 PM' : 'Closed Now: Opens 8:00 AM')}
              </span>
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
            <p className="text-center text-[11px] text-studio-muted font-mono pt-1">
              79, Taluk Office Opp, Srivaikuntam
            </p>
          </div>
        </div>
      )}
    </>
  );
};
