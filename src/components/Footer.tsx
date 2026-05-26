import React from 'react';
import { COMPANY_INFO } from '../data';
import { ShieldCheck, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Left Column Description brand logo */}
        <div className="md:col-span-5 space-y-4">
          <Logo showText={true} iconSizeClass="w-9 h-9" textColorClass="text-white" />
          
          <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
            Entreprise certifiée spécialisée dans le froid, la climatisation résidentielle ou commerciale, l'électricité générale, la plomberie sanitaire, et les divers travaux de bâtiment à Abidjan, Côte d'Ivoire.
          </p>

          <div className="flex items-center gap-2 text-xs text-accent-orange font-bold bg-accent-orange/10 border border-orange-500/20 py-2 px-3 rounded-md w-fit">
            <ShieldCheck size={14} /> Garantie de Parfait Achèvement Décennale
          </div>
        </div>

        {/* Middle Column Quick navigations */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest border-b border-slate-950 pb-2">
            Plan d'accès rapide
          </h4>
          <ul className="space-y-2 text-xs">
            {[
              { label: "Accueil / Présentation", href: "#accueil" },
              { label: "Nos Services d'Artisans", href: "#services" },
              { label: "Pourquoi Choisir Kofroid", href: "#pourquoi-nous" },
              { label: "Estimer Votre Projet", href: "#calculateur" },
              { label: "Témoignages Clients Abidjan", href: "#testimonials" },
              { label: "Contact & Localisation", href: "#contact" }
            ].map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column Contacts info block */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest border-b border-slate-950 pb-2">
            ETS Kofroid Marcory
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-350">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.location}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-blue-500 shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-bold">
                {COMPANY_INFO.phoneFormatted}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-blue-500 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white underline">
                {COMPANY_INFO.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Base copyrights section bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-500 font-light text-center sm:text-left">
          &copy; {new Date().getFullYear()} <strong>ETS Kofroid Abidjan</strong>. Tous droits réservés. Code optimisé pour photos locales. Autorisée 🇨🇮
        </p>
        
        {/* Scroll back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-all flex items-center gap-1.5 focus:outline-none"
          aria-label="Retour en haut"
          id="scroll-to-top-btn"
        >
          <span className="text-[10px] font-semibold">Retour en haut</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
