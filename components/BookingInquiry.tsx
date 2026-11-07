'use client';

import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Send, Phone, MessageCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export const BookingInquiry: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Royal Wedding Cinematography');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Shoot Inquiry - Raja Digital Studio*
👤 *Name:* ${name || 'Prospective Client'}
📞 *Phone:* ${phone || 'Not provided'}
🎥 *Service:* ${service}
📅 *Event Date:* ${eventDate || 'To be discussed'}
📍 *Location / Venue:* ${location || 'Srivaikuntam / Tamil Nadu'}
📝 *Special Requests:* ${notes || 'None'}

_Sent via Raja Digital Studio Website_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 sm:py-32 relative bg-studio-pitch border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dates for 2025 – 2026</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
              Book Your{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                sacred date.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
              Wedding season dates fill up quickly. Reach out to verify date availability, request a custom cinema package quote, or visit our studio in Srivaikuntam.
            </p>

            <div className="p-6 rounded-2xl bg-studio-surface border border-studio-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-studio-muted">Direct Studio Hotline</p>
                  <a
                    href={STUDIO_INFO.callLink}
                    className="font-display text-lg font-bold text-white hover:text-studio-gold transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-studio-border/50">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-studio-muted">Instant WhatsApp Consultation</p>
                  <a
                    href={STUDIO_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-bold text-emerald-400 hover:underline"
                  >
                    +91 {STUDIO_INFO.rawPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-studio-silver">
                <CheckCircle2 className="w-4 h-4 text-studio-gold" />
                <span>Zero Obligation Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-studio-silver">
                <CheckCircle2 className="w-4 h-4 text-studio-gold" />
                <span>Custom Packages for Every Budget</span>
              </div>
            </div>
          </div>

          {/* Right Column: 1-Click Quote & WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-studio-surface border border-studio-border/90 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Inquire or Check Availability
              </h3>
              <p className="font-sans text-xs sm:text-sm text-studio-silver mb-8">
                Fill the details below to generate an instant WhatsApp quote sent directly to our team.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 94434 86821"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Desired Service *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    >
                      <option value="Royal Wedding Cinematography">Royal Wedding Cinematography</option>
                      <option value="Candid Photography & Traditional Coverage">Candid Photography & Traditional</option>
                      <option value="Pre/Post Wedding Outdoor Shoot">Pre / Post Wedding Outdoor Shoot</option>
                      <option value="Digital Photo Lab & Luxury Album">Digital Photo Lab & Luxury Album</option>
                      <option value="4K Drone Cinematography">4K Drone Aerial Shoot</option>
                      <option value="Commercial / Fashion Ad Campaign">Commercial / Fashion Ad Campaign</option>
                      <option value="Family Portrait / Housewarming">Family Portrait / Housewarming</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Event Date (Approx)
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                    Event Venue / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Srivaikuntam, Thoothukudi, Tirunelveli, Chennai..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                    Additional Notes or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding events, timing, or album requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
