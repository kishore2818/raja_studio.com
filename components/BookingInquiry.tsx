'use client';

import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const BookingInquiry: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Wedding Photography & 4K Cinema Video');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Durai,
*New Studio Service Inquiry*
👤 *Customer Name:* ${name || 'Customer'}
📞 *Phone Number:* ${phone || 'Not provided'}
🎯 *Required Service:* ${service}
📅 *Date / Required By:* ${eventDate || 'Immediate / To discuss'}
📍 *Location / Town:* ${location || 'Srivaikuntam / Thoothukudi'}
📝 *Order Details / Size:* ${notes || 'None'}

_Sent via Raja Digital Studio Website_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 sm:py-32 relative bg-studio-pitch border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Studio Booking & Orders</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
              Order or Book Your{' '}
              <span className="italic font-serif font-normal text-studio-gold lowercase">
                service.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-studio-silver leading-relaxed">
              Need wedding photography, urgent 5-minute passport photos, a grand flex banner design, or custom wooden photo framing? Contact us directly or send a quick WhatsApp message.
            </p>

            <div className="p-6 rounded-2xl bg-studio-surface border border-studio-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-studio-muted">Studio Direct Phone</p>
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
                  <p className="text-xs font-mono text-studio-muted">Instant WhatsApp Order Desk</p>
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

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-studio-silver">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant 5-Minute Passport Photo Service (Walk-ins welcome)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-studio-silver">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Same-Day Urgent Flex Banner Print Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-studio-silver">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Custom Wedding Packages with Album & Video</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-studio-surface border border-studio-border/90 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Quick Service & Price Inquiry
              </h3>
              <p className="font-sans text-xs sm:text-sm text-studio-silver mb-8">
                Select your service to generate an instant WhatsApp quote sent directly to Raja Digital Studio.
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
                      placeholder="e.g. Saravanan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Contact Phone *
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
                      Select Service *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                    >
                      <option value="Wedding Photography & 4K Cinema Video">Wedding Photography & 4K Video</option>
                      <option value="Flex Banner Design & Digital Print">Flex Banner Design & Print</option>
                      <option value="Instant 5-Minute Passport Size Photos">Instant Passport Photos (5 Mins)</option>
                      <option value="Photo Framing & Old Photo Restoration">Photo Framing & Old Photo Repair</option>
                      <option value="Digital Photo Lab & Italian Album">Digital Photo Lab & Italian Album</option>
                      <option value="Pre/Post Wedding Outdoor Shoot">Pre / Post Wedding Outdoor Shoot</option>
                      <option value="Housewarming / Baby Shower / Birthday Shoot">Birthday / Family Event Shoot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                      Date Needed (or Event Date)
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
                    Town / Venue / Delivery Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Srivaikuntam, Thoothukudi, Tirunelveli, Eral..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-studio-muted uppercase tracking-wider mb-2">
                    Order Details / Banner Size / Frame Size
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 10x6 ft Wedding Welcome Flex banner, or 12x18 inch golden photo frame..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-studio-card border border-studio-border text-white text-sm focus:border-studio-gold focus:outline-none focus:ring-1 focus:ring-studio-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 shrink-0 text-white" />
                  <span className="text-center">Send Order Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
