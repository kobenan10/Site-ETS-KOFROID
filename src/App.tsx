/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import RealProjects from './components/RealProjects';
import Testimonials from './components/Testimonials';
import ContactAndLocation from './components/ContactAndLocation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white" id="main-app-container">
      {/* Navigation and Top utility details */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Welcome Section (Hero) */}
        <Hero />

        {/* Areas of Expertise */}
        <Services />

        {/* Why choose us & estimate calculator */}
        <WhyChooseUs />

        {/* Real Projects Action Gallery */}
        <RealProjects />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact form & coordinates */}
        <ContactAndLocation />
      </main>

      {/* Footer Credits */}
      <Footer />

      {/* Floating Interactive WhatsApp Chat Box */}
      <WhatsAppButton />
    </div>
  );
}
