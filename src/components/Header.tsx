import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Nos Services', href: '#services' },
    { label: 'Calculateur', href: '#calculateur' },
    { label: 'Nos Chantiers', href: '#portfolio' },
    { label: 'Avis Clients', href: '#testimonials' },
    { label: 'Contact & Accès', href: '#contact' }
  ];

  return (
    <header className="w-full z-40 relative">
      {/* Top Banner Utility Bar - Hidden on mobile for compactness */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin size={13} className="text-accent-orange" />
              {COMPANY_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock size={13} className="text-accent-orange" />
              {COMPANY_INFO.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-wider bg-accent-orange/10 text-accent-orange font-bold px-2 py-0.5 rounded border border-accent-orange/20 flex items-center gap-1">
              <Shield size={11} /> Agrée Abidjan
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-white underline decoration-accent-orange transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Sticky Header Section */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-3' : 'relative bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <a href="#accueil" className="flex items-center group">
            <Logo showText={true} iconSizeClass="w-10 h-10" textColorClass="text-slate-900 group-hover:text-blue-700 transition-colors" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA Calling Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-5 rounded-md text-sm transition-all duration-305 shadow-md shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5"
              id="header-call-cta"
            >
              <Phone size={14} className="animate-pulse" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
              <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-205 transition-all cursor-pointer"
            aria-label="Menu principal"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[115px] z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="bg-white max-w-sm w-full h-full p-6 shadow-2xl flex flex-col space-y-6 ml-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <span className="font-display font-bold text-slate-900">Menu ETS Kofroid</span>
              <X size={20} className="text-slate-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-900 hover:text-blue-700 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col space-y-3">
              <p className="text-xs text-slate-500 font-medium">Besoin d'aide d'urgence ?</p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 rounded-md transition-all"
                id="mobile-header-call"
              >
                <Phone size={16} />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-md transition-all"
                id="mobile-header-whatsapp"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
