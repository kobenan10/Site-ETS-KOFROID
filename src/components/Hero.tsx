import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Star, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { motion } from 'motion/react';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section 
      id="accueil" 
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-slate-900 text-white overflow-hidden py-20"
    >
      {/* Background Image with Dark Gradient Overlays for High Text Contrast */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {!imageFailed && (
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80" 
            alt="ETS Kofroid - Compétences professionnelles" 
            className="w-full h-full object-cover object-center opacity-25 scale-102"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a]/90 to-[#1e40af]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Trust Badge Indicator */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full py-1.5 px-4 text-blue-200 text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            ABIDJAN - ZOÉ BRUNO — EXCELLENCE TECHNIQUE
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Solutions de Froid & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
              Services de Bâtiment !
            </span>
          </h1>

          <p className="text-blue-105 text-base md:text-lg max-w-xl leading-relaxed font-light text-slate-205">
            L'expertise ivoirienne de confiance au service de votre confort : Climatisation, Électricité moderne, Plomberie et Travaux de bâtiment à <strong>Zoé Bruno, Abidjan</strong>.
          </p>

          {/* Live Checklist Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg">
            {[
              "Intervention urgente 24h/24 & 7j/7",
              "Devis gratuit détaillé en moins de 4h",
              "Matériel certifié de haute performance",
              "Suivi & SAV réactifs et attentifs"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                <CheckCircle2 size={16} className="text-accent-orange shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Action Call to Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#calculateur"
              className="flex items-center justify-center gap-2 bg-accent-orange hover:bg-orange-650 text-white font-bold py-3.5 px-8 rounded-md transition-all duration-300 shadow-lg shadow-orange-950/20 text-sm sm:text-base cursor-pointer"
              id="hero-estim-cta"
            >
              <Calendar size={18} />
              Estimer Mon Projet Gratuitement
            </a>
            <a
              href="tel:0505718945"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-3.5 px-6 rounded-md transition-all duration-300 text-sm sm:text-base cursor-pointer backdrop-blur-sm"
              id="hero-call-cta"
            >
              <Phone size={16} className="text-amber-400 animate-pulse" />
              Appeler au 05 05 71 89 45
            </a>
          </div>

          {/* Review Stars */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800 max-w-md">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Note moyenne <span className="text-white font-semibold">4.9/5</span> basée sur plus de 120 chantiers à Abidjan
            </p>
          </div>
        </div>

        {/* Right Column Interactive Floating Badge Panel Card */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 opacity-20 blur-xl" />
          <div className="relative bg-slate-900/95 border border-slate-800 p-6 md:p-8 rounded-xl shadow-2xl text-left space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="font-display font-bold text-lg text-slate-100">ETS Kofroid en direct</h3>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 py-1 px-2.5 rounded-full font-bold flex items-center gap-1.5 border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                Opérationnel
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Basés à <strong>Zoé Bruno (Abidjan, Côte d'Ivoire)</strong>, nous mobilisons rapidement nos techniciens certifiés pour des travaux de climatisation, dépannages électriques de sécurité ou canalisations engorgées.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Zone d'intervention prioritaires :</p>
                  <p className="text-sm font-semibold text-slate-200">Abidjan Nord & Sud (Cocody, Marcory, Plateau, Riviera)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                  📱
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Support d'urgence WhatsApp 24/7 :</p>
                  <p className="text-sm font-bold text-slate-200">05 05 71 89 45</p>
                </div>
              </div>
            </div>

            {/* Floating Live Quick Ticket Link */}
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between w-full bg-slate-850 hover:bg-slate-800 hover:border-slate-700 border border-slate-800 py-3 px-4 rounded-lg text-xs text-slate-200 font-semibold transition-all duration-300"
              id="hero-whatsapp-badge"
            >
              <span>📩 Lancer une discussion directe</span>
              <ArrowRight size={14} className="text-orange-400 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Visual Stats Bar of ETS Kofroid */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-slate-950/95 border-t border-slate-900 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-4 gap-6 text-center">
          {[
            { metric: "10+", label: "Ans au service des Ivoiriens" },
            { metric: "1,500+", label: "Climatisations & Pannes résolues" },
            { metric: "100%", label: "De conformité technique assurée" },
            { metric: "24h/7", label: "Disponibilité d'urgence absolue" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-display font-extrabold text-2xl lg:text-3xl text-blue-400">{stat.metric}</p>
              <p className="text-xs text-slate-400 tracking-wide font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
