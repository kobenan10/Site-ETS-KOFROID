import React, { useState } from 'react';
import { VALUE_PROPOSITIONS } from '../data';
import { Clock, Award, FileText, ShieldCheck, Calculator, CornerDownRight, Coins, Wrench, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  // Calculator States
  const [domain, setDomain] = useState<'froid' | 'elec' | 'plomb' | 'bat'>('froid');
  const [operation, setOperation] = useState<string>('split-install');
  const [volume, setVolume] = useState<number>(1);
  const [district, setDistrict] = useState<string>('Zoe Bruno / Marcory');

  // Map of operation options with authentic prices in FCFA
  const operationOptions: Record<string, { label: string; price: number; unit: string }> = {
    // Froid & Clim
    'split-install': { label: "Installation Climatiseur Split Neuf", price: 40000, unit: "unite" },
    'clim-gas': { label: "Dépannage Étancheité + Recharge Gaz", price: 30000, unit: "unite" },
    'clim-clean': { label: "Nettoyage Entretien Complet Filtres/Blocs", price: 15000, unit: "unite" },
    
    // Électricité
    'tableau-install': { label: "Pose & Câblage de Tableau Électrique", price: 65000, unit: "tableau" },
    'prise-cable': { label: "Raccordement de Prises & Éclairages LED", price: 4000, unit: "piece" },
    'elec-diagnostic': { label: "Audit de Sécurisation / Recherche Court-Circuit", price: 20000, unit: "intervention" },
    
    // Plomberie
    'sanitaire-install': { label: "Pose de Sanitaire & Robinetterie", price: 35000, unit: "unite" },
    'leak-repair': { label: "Détection de Fuite & Changement Tuyauterie PVC", price: 18000, unit: "heure" },
    'heater-install': { label: "Pose de Chauffe-Eau Électrique", price: 45000, unit: "unite" },
    
    // Bâtiment
    'carrelage': { label: "Pose de Carrelage / Revêtement Haute Résistance", price: 10000, unit: "m²" },
    'peinture': { label: "Peinture de Finition (Murs & Faux-plafond)", price: 5000, unit: "m²" },
    'maconnerie': { label: "Gros Œuvre / Cloisonnage Maçonné", price: 16000, unit: "m²" },
  };

  // Safe operation updates on domain change
  const handleDomainChange = (newDomain: 'froid' | 'elec' | 'plomb' | 'bat') => {
    setDomain(newDomain);
    if (newDomain === 'froid') setOperation('split-install');
    if (newDomain === 'elec') setOperation('tableau-install');
    if (newDomain === 'plomb') setOperation('sanitaire-install');
    if (newDomain === 'bat') setOperation('carrelage');
  };

  const currentOpDetail = operationOptions[operation] || { label: "", price: 0, unit: "" };
  const basePrice = currentOpDetail.price * volume;
  
  // Transport adjustment depending on neighborhood in Abidjan
  const getTransportFee = (loc: string) => {
    switch (loc) {
      case 'Zoe Bruno / Marcory': return 0; // Local
      case 'Koumassi / Treichville / Port-Bouet': return 3000;
      case 'Cocody / Riviera / Palmeraie': return 5000;
      case 'Plateau / Adjame': return 4000;
      case 'Yopougon / Abobo': return 7000;
      default: return 5000;
    }
  };

  const transportFee = getTransportFee(district);
  const totalPrice = basePrice + transportFee;

  // Pre-fill a customizable template explaining exact requirements for WhatsApp
  const makeWhatsAppMessage = () => {
    const text = `Bonjour ETS Kofroid, je viens de faire une estimation sur votre calculateur en ligne :
- *Service* : ${operationOptions[operation]?.label}
- *Quantité / Périmètre* : ${volume} ${currentOpDetail.unit}(s)
- *Localisation de l'intervention* : ${district}
- *Prix Indicatif calculé* : ${totalPrice.toLocaleString()} FCFA (dont transport)
Je souhaite qu'un technicien me rappelle pour confirmer le devis ou fixer un rendez-vous rapide. Merci !`;
    return `https://wa.me/2250505718945?text=${encodeURIComponent(text)}`;
  };

  // Map icon names
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className={className} />;
      case 'Award': return <Award className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="pourquoi-nous" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Visual Light Blobs backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Core Segment Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Strengths Value propositions */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold text-accent-orange bg-accent-orange/15 py-1.5 px-4 rounded-full tracking-wider">
                Pourquoi ETS Kofroid ?
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-100 tracking-tight leading-tight">
                La référence de confiance en <span className="text-accent-orange">génie technique</span> à Abidjan.
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Notre engagement va bien au-delà d'un simple dépannage. Nous cherchons constamment à bâtir une relation de confiance transparente avec nos clients résidentiels et professionnels à travers toute la Côte d'Ivoire.
              </p>
            </div>

            {/* Grid of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUE_PROPOSITIONS.map((prop) => (
                <div key={prop.id} className="p-5 rounded-lg bg-slate-800/50 border border-slate-805 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 space-y-3">
                  <div className="w-10 h-10 rounded-md bg-blue-500/15 flex items-center justify-center text-blue-400">
                    {renderIcon(prop.iconName, "w-5 h-5")}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-100">{prop.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Estimate Estimator widget */}
          <div id="calculateur" className="lg:col-span-6">
            <div className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-lg shadow-2xl relative">
              <div className="absolute top-0 right-4 -translate-y-1/2 bg-accent-orange text-white text-[10px] font-extrabold uppercase py-1 px-3.5 rounded-full tracking-wider flex items-center gap-1">
                <Calculator size={12} /> Exclusif Kofroid
              </div>
              
              <div className="space-y-2 border-b border-slate-800 pb-5 mb-6 text-left">
                <h3 className="font-display font-bold text-xl text-slate-100">Calculateur Devis Express</h3>
                <p className="text-xs text-slate-400 font-light leading-normal">
                  Estimez instantanément le budget initial de votre projet à Abidjan et prenez rendez-vous directement en un clic.
                </p>
              </div>

              {/* Step 1: Select domain category tab */}
              <div className="space-y-4 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">1. Domaine de Travaux</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'froid', label: "Froid/Clim" },
                    { id: 'elec', label: "Électricité" },
                    { id: 'plomb', label: "Plomberie" },
                    { id: 'bat', label: "Bâtiment" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleDomainChange(item.id as any)}
                      className={`py-2 px-3 text-xs font-bold rounded-md border transition-all cursor-pointer ${domain === item.id ? 'bg-accent-orange text-white border-orange-500 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'}`}
                      id={`calc-tab-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select specific action operation */}
              <div className="space-y-4 pt-4 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">2. Type d'Intervention</label>
                <select
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs focus:ring-1 focus:ring-accent-orange outline-none"
                  id="calc-operation-select"
                >
                  {domain === 'froid' && (
                    <>
                      <option value="split-install">Installation Climatiseur Split Neuf (40,000 FCFA)</option>
                      <option value="clim-gas">Recharge de Gaz + Diagnostic Fuite (30,000 FCFA)</option>
                      <option value="clim-clean">Nettoyage complet filtres/blocs (15,000 FCFA)</option>
                    </>
                  )}
                  {domain === 'elec' && (
                    <>
                      <option value="tableau-install">Pose & Raccordement Tableau Électrique (65,000 FCFA)</option>
                      <option value="prise-cable">Prises / Interrupteurs / Luminaires LED (4,000 FCFA / pce)</option>
                      <option value="elec-diagnostic">Recherche de panne / Mise aux normes (20,000 FCFA)</option>
                    </>
                  )}
                  {domain === 'plomb' && (
                    <>
                      <option value="sanitaire-install">Pose Sanitaires WC, Lavabo, douche (35,000 FCFA)</option>
                      <option value="leak-repair">Détection fuite et plomberie PVC (18,000 FCFA / h)</option>
                      <option value="heater-install">Montage Chauffe-Eau Électrique (45,000 FCFA)</option>
                    </>
                  )}
                  {domain === 'bat' && (
                    <>
                      <option value="carrelage">Pose de Carrelage haut standing (10,000 FCFA / m²)</option>
                      <option value="peinture">Travaux de Peinture intérieur/extérieur (5,000 FCFA / m²)</option>
                      <option value="maconnerie">Maçonnerie générale, chapes & briques (16,000 FCFA / m²)</option>
                    </>
                  )}
                </select>
              </div>

              {/* Step 3: Volume & Location config */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">
                    3. Quantité ({currentOpDetail?.unit || "u"}) : <span className="text-amber-400 font-extrabold">{volume}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                    id="calc-volume-slider"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase">4. Lieu d'intervention</label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full py-2 px-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs focus:ring-1 focus:ring-accent-orange outline-none"
                    id="calc-district-select"
                  >
                    <option value="Zoe Bruno / Marcory">Zoé Bruno / Marcory (Frais: Gratuit)</option>
                    <option value="Koumassi / Treichville / Port-Bouet">Koumassi/Port-Bouët (+3,000 FCFA)</option>
                    <option value="Cocody / Riviera / Palmeraie">Cocody / Riviera / Palmeraie (+5,000 FCFA)</option>
                    <option value="Plateau / Adjame">Plateau / Adjamé (+4,000 FCFA)</option>
                    <option value="Yopougon / Abobo">Yopougon / Abobo (+7,000 FCFA)</option>
                  </select>
                </div>
              </div>

              {/* Estimate Pricing display segment */}
              <div className="mt-6 p-4 rounded-lg bg-slate-900 border border-slate-800 flex flex-col items-center justify-between gap-3 text-center">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center gap-1 justify-center">
                    <Coins size={12} className="text-accent-orange animate-spin" /> Budget Initial Indicatif
                  </p>
                  <p className="font-display font-extrabold text-2xl lg:text-3xl text-emerald-400 mt-1">
                    {totalPrice.toLocaleString()} <span className="text-xs">FCFA</span>
                  </p>
                  <p className="text-[9px] text-slate-500 mt-0.5">
                    *Inclut déplacement ({transportFee.toLocaleString()} FCFA) et main d'œuvre initiale.
                  </p>
                </div>
                
                <a
                  href={makeWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/10"
                  id="calc-submit-whatsapp"
                >
                  <Wrench size={14} />
                  Valider mon estimation par WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
