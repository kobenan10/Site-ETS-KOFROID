import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Wind, Zap, Droplet, Building2, CheckCircle2, ArrowRight, X, PhoneCall, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Simple, high-performance image component with smooth fade-in and clean loading states
function ServiceCardImage({ service }: { service: Service }) {
  const [hasFailed, setHasFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map service IDs to nice styling profiles
  const getThemeColors = () => {
    switch (service.id) {
      case 'froid-clim':
        return { bg: 'bg-cyan-950/40', text: 'text-cyan-400', icon: Wind };
      case 'electricite':
        return { bg: 'bg-amber-950/40', text: 'text-amber-400', icon: Zap };
      case 'plomberie':
        return { bg: 'bg-blue-950/40', text: 'text-blue-400', icon: Droplet };
      case 'batiment':
        return { bg: 'bg-orange-950/40', text: 'text-orange-400', icon: Building2 };
      default:
        return { bg: 'bg-slate-950/40', text: 'text-slate-400', icon: HelpCircle };
    }
  };

  const theme = getThemeColors();
  const FallbackIcon = theme.icon;

  return (
    <div className="relative w-full h-full bg-slate-900 overflow-hidden" id={`img-container-${service.id}`}>
      {/* Sleek shimmering pulse skeleton while loading */}
      {!isLoaded && !hasFailed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950" id={`skeleton-${service.id}`}>
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
          <div className={`z-10 flex flex-col items-center justify-center space-y-2`}>
            <FallbackIcon className={`w-8 h-8 ${theme.text} animate-bounce opacity-40`} />
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Chargement...</span>
          </div>
        </div>
      )}

      {/* Clean high-contrast fallback on failure (replaces drawing diagrams with professional icons) */}
      {hasFailed && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${theme.bg}`} id={`failed-fallback-${service.id}`}>
          <FallbackIcon className={`w-12 h-12 ${theme.text} mb-3 opacity-80`} />
          <span className="text-xs font-semibold text-white tracking-wide uppercase">{service.title}</span>
        </div>
      )}

      {/* Primary high-quality actual photo */}
      {!hasFailed && (
        <img 
          src={service.image} 
          alt={service.title} 
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 z-10 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasFailed(true)}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon name to Lucide icons
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Droplet':
        return <Droplet className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest bg-blue-100 text-blue-800 font-extrabold px-3 py-1 rounded-full border border-blue-200">
            Savoir-Faire Certifié
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
            Nos Domaines d'Expertise Technique
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mt-2 leading-relaxed">
            ETS Kofroid met à votre service une équipe d'artisans experts pour des prestations soignées répondant à toutes vos exigences de confort et de sécurité.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Image Container with Custom Local Swap Instruction Comment */}
              <div className="relative h-48 w-full bg-slate-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                
                {/* 
                  NOTE AUX UTILISATEURS :
                  Pour remplacer cette image par une photo locale :
                  1. Placez votre image dans le dossier '/public/assets/images/' (ex: 'froid.jpg')
                  2. Remplacez l'URL Unsplash ci-dessous par la référence locale '/assets/images/froid.jpg'
                */}
                <ServiceCardImage service={service} />
                
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center text-blue-700 shadow-sm">
                  {renderIcon(service.iconName, "w-5 h-5")}
                </div>
              </div>

              {/* Service Details info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-slate-950 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Micro checklist items preview */}
                <div className="mt-4 pt-4 border-t border-slate-50 space-y-1.5">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-500 font-medium">
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Learn more interactive trigger */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 w-full py-2.5 px-4 rounded-md bg-slate-100 group-hover:bg-blue-700 text-slate-700 group-hover:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  id={`learn-more-${service.id}`}
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Sub-banner for dynamic estimation */}
        <div className="mt-16 bg-slate-900 rounded-xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-extrabold uppercase bg-orange-500/10 text-orange-400 py-1 px-3 border border-orange-500/20 rounded-full">
                Abidjan Climatiseur Offre Spéciale
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-slate-100">
                Vous avez un projet ou une urgence climatisation ?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 font-light">
                Qu'il s'agisse d'un problème d'écoulement sur votre climatiseur split, d'un besoin de recharge de gaz urgent à Cocody, ou de l'installation totale d'un réseau de câblage à Marcory : nos équipes répondent présent dans l'heure.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://wa.me/2250505718945?text=Bonjour%20ETS%20Kofroid%2C%20je%2520vous%2520contacte%2520pour%2520un%2520d%25C3%25A9pannage%2520d'urgence%2520clim."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-md text-center text-xs transition-all duration-300 shadow-md shadow-emerald-600/10 shrink-0"
              >
                ⚡ Assistance Climatisation Urgente
              </a>
              <a
                href="#calculateur"
                className="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold py-3 px-6 rounded-md text-center text-xs transition-all duration-300 shrink-0"
              >
                Calculer un budget
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Service Dynamic Modal/Drawer */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100"
                onClick={(e) => e.stopPropagation()}
                id="service-detail-modal"
              >
                {/* Modal Banner */}
                <div className="relative h-60 w-full bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  
                  {/* Local image swap indicator for safety */}
                  <ServiceCardImage service={selectedService} />
                  
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/40 text-white hover:bg-slate-950 hover:scale-105 transition-all cursor-pointer"
                    aria-label="Fermer la vue"
                    id="close-modal-upper"
                  >
                    <X size={18} />
                  </button>
                  
                  <div className="absolute bottom-6 left-6 z-20 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded border border-blue-400/20">
                      Prestation ETS Kofroid
                    </span>
                    <h4 className="font-display font-bold text-2xl text-white">
                      {selectedService.title}
                    </h4>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  <div className="space-y-2">
                    <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Présentation du Service</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  {/* Complete features list */}
                  <div className="space-y-3">
                    <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Ce que comprend notre intervention :</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 font-medium leading-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Informative Safety advice segment */}
                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/50 flex gap-3 text-left">
                    <span className="text-xl shrink-0">💡</span>
                    <div>
                      <h6 className="text-xs font-bold text-amber-900">Le Conseil de Pro Kofroid</h6>
                      <p className="text-[11px] text-amber-800 mt-1 leading-relaxed">
                        Pour maximiser la longévité de vos installations à Abidjan (sujettes à la poussière et à l'humidité), nous recommandons un entretien ou nettoyage de filtre de vos climatiseurs au moins une fois tous les 3 mois.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-slate-400 font-bold">Un conseiller est disponible :</p>
                    <p className="text-sm font-bold text-slate-800">05 05 71 89 45</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
                      id="close-modal-lower"
                    >
                      Fermer
                    </button>
                    <a
                      href={`https://wa.me/2250505718945?text=Bonjour%20ETS%20Kofroid%2C%20je%20souhaite%20commander%20un%20service%20de%20type%20%3A%20${encodeURIComponent(selectedService.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-blue-750 hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-blue-900/10 cursor-pointer"
                      id="order-service-whatsapp"
                    >
                      <PhoneCall size={14} />
                      Demander ce service
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
