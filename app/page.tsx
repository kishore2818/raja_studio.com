import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WorkGrid } from '../components/WorkGrid';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { GearArsenal } from '../components/GearArsenal';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingInquiry } from '../components/BookingInquiry';
import { LocationMap } from '../components/LocationMap';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-studio-pitch text-studio-cream">
      {/* Top Floating Navigation */}
      <Navbar />

      {/* Hero Showcase with Atmospheric Reel Backdrop */}
      <Hero />

      {/* Curated Selected Works & Films */}
      <WorkGrid />

      {/* Complete Studio Services */}
      <ServicesSection />

      {/* Studio Heritage & Founder Story */}
      <AboutSection />

      {/* Cinema Camera & Drone Gear Arsenal */}
      <GearArsenal />

      {/* Real Client Testimonials */}
      <TestimonialsSection />

      {/* 1-Click WhatsApp Booking & Inquiries */}
      <BookingInquiry />

      {/* Srivaikuntam Location, Hours & Google Maps */}
      <LocationMap />

      {/* Global Studio Footer */}
      <Footer />
    </main>
  );
}
