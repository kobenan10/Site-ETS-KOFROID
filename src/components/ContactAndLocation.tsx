import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { motion } from 'motion/react';

export default function ContactAndLocation() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Climatisation / Froid',
    message: '',
    urgent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    
    setLoading(true);
    // Simulate short submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const getWhatsAppLink = () => {
    const urgencyText = formData.urgent ? '🚨 URGENCE ABSOLUE SIGNALÉE !' : 'Standard';
    const text = `Bonjour ETS Kofroid,
Je m'appelle *${formData.name}* et je viens de remplir le formulaire du site.

*Détails de ma demande :*
• *Service :* ${formData.service}
• *Contact :* ${formData.contact}
• *Urgence :* ${urgencyText}
• *Description :* ${formData.message || "Aucune description de panne fournie."}

Merci de me recontacter très rapidement !`;
    return `https://wa.me/2250505718945?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const urgencyText = formData.urgent ? '🚨 URGENCE ABSOLUE !' : 'Standard / Normal';
    const subject = `Nouvelle demande de service : ${formData.service} - ${formData.name}`;
    const body = `Bonjour ETS Kofroid,

Vous avez reçu une nouvelle demande de service depuis le formulaire de contact de votre site web :

• Nom complet : ${formData.name}
• Moyen de contact : ${formData.contact}
• Service requis : ${formData.service}
• Niveau d'urgence : ${urgencyText}

Description du besoin :
${formData.message || "Aucune description de panne fournie."}

---
Cet e-mail est généré automatiquement par le formulaire de contact de ETS Kofroid pour faciliter la communication immédiate.`;
    return `mailto:ets.kofroid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      service: 'Climatisation / Froid',
      message: '',
      urgent: false
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 text-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest bg-blue-100 text-blue-800 font-extrabold px-3 py-1 rounded-full border border-blue-200">
            Une question ? Un projet ?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-950 tracking-tight">
            Contactez Notre Bureau d'Abidjan
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto font-light leading-relaxed">
            Écrivez-nous pour demander un rendez-vous ou posez vos questions à notre équipe technique basée à Zoé Bruno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Information details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 border-b border-slate-100 pb-3">
                Coordonnées Directes
              </h3>
              
              <div className="space-y-6">
                {/* Physical address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-700 shrink-0 border border-blue-100">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Siège Social & Ateliers</h4>
                    <p className="text-xs text-slate-600 leading-normal mt-0.5">{COMPANY_INFO.location}</p>
                    <p className="text-[10px] text-amber-600 font-semibold mt-1">Zone Marcory - Face au carrefour Zoé Bruno</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Ligne Téléphonique Directe</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-extrabold text-blue-700 hover:text-blue-600 block mt-0.5">
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <p className="text-[10px] text-slate-500">Appels, SMS & WhatsApp</p>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">E-mail Équipe Technique</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-slate-650 font-medium hover:underline block mt-0.5">
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-[10px] text-slate-500">Réponse commerciale sous 24h maximum</p>
                  </div>
                </div>

                {/* Working hours address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-100">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Heures d'Intervention Standard</h4>
                    <p className="text-xs text-slate-600 leading-normal mt-0.5">{COMPANY_INFO.workingHours}</p>
                    <p className="text-[10px] text-emerald-600 font-semibold mt-1">Sauf urgences climatiques/électriques majeures (24h/7)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic representation of proximity Map representation block */}
            <div className="bg-slate-900 text-white rounded-lg p-6 border border-slate-800 space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Proximité Abidjan Nord / Sud</h4>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                Notre position clé à <strong>Zoé Bruno</strong> nous permet d'atteindre le Plateau, Cocody ou la Zone Industrielle de Yopougon très facilement par les grands axes routiers (pont Henri Konan Bédié, VGE).
              </p>
              <div className="flex items-center gap-2 text-[10px] text-blue-400 font-semibold">
                <ShieldCheck size={14} className="text-blue-450 animate-pulse" />
                Interventions d'urgence garanties sous 60 minutes
              </div>
            </div>

          </div>

          {/* Right Column: Interaction Form widget */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-205 rounded-lg p-6 md:p-8 shadow-xl relative h-full flex flex-col justify-center">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-display font-bold text-xl text-slate-900">Soumettre Une Demande</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Laissez-nous vos coordonnées et le type de travaux recherché, un artisan qualifié vous recontactera sous peu.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700">Votre Nom Complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Kouame Koffi"
                        className="w-full py-2.5 px-3 border border-slate-250 rounded-md text-xs focus:ring-1 focus:ring-blue-600 focus:border-blue-600 outline-none"
                        id="form-name-input"
                      />
                    </div>

                    {/* Contact Number/Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700">Téléphone ou Adresse E-mail *</label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Ex: 07 45 89 ... / email@abc.com"
                        className="w-full py-2.5 px-3 border border-slate-250 rounded-md text-xs focus:ring-1 focus:ring-blue-600 focus:border-blue-600 outline-none"
                        id="form-contact-input"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Service concerné</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full py-2.5 px-3 border border-slate-250 rounded-md text-xs focus:ring-1 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white"
                      id="form-service-select"
                    >
                      <option>Climatisation / Froid (Installation & Dépannage)</option>
                      <option>Électricité (Tableaux, Normes, Raccordement)</option>
                      <option>Plomberie & Sanitaires</option>
                      <option>Travaux de Bâtiment & Maçonnerie</option>
                      <option>Autre Demande Technique</option>
                    </select>
                  </div>

                  {/* Comment / Explanations statement */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">Description de Votre Besoin</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement les détails ou spécificités de votre panne / chantier..."
                      className="w-full py-2.5 px-3 border border-slate-250 rounded-md text-xs focus:ring-1 focus:ring-blue-600 focus:border-blue-600 outline-none"
                      id="form-message-input"
                    />
                  </div>

                  {/* Urgency activation flag checkbox */}
                  <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 p-3 rounded-md">
                    <input
                      type="checkbox"
                      checked={formData.urgent}
                      onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                      className="w-4 h-4 text-rose-600 accent-rose-500 cursor-pointer rounded"
                      id="form-urgency-checkbox"
                    />
                    <div className="text-left text-xs">
                      <label htmlFor="form-urgency-checkbox" className="font-bold text-rose-900 cursor-pointer block">
                        🚨 Signalement d'URGENCE ABSOLUE
                      </label>
                      <p className="text-[10px] text-rose-800">
                        Cochez cette case si vous subissez une coupure électrique totale ou une fuite majeure en court-circuit.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-accent-orange hover:bg-orange-650 text-white font-bold text-xs rounded-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="form-submit-btn"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send size={14} />
                        Envoyer ma demande à l'équipe
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Animated Success state view block */
                <div className="text-center py-12 space-y-6 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-xl text-slate-900">Demande Enregistrée !</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Merci <strong className="text-slate-800">{formData.name}</strong>. Notre secrétariat technique situé à Zoé Bruno (Abidjan) vient de réceptionner votre fiche de demande concernant la catégorie <strong>{formData.service}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-left space-y-2">
                    <p className="font-bold text-slate-700">Prochaines Étapes :</p>
                    <div className="flex gap-2 text-slate-600 items-start">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <p className="text-[11px]">Un électricien/technicien vous appelle au <strong>{formData.contact}</strong> sous 2h max.</p>
                    </div>
                    <div className="flex gap-2 text-slate-600 items-start">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <p className="text-[11px]">Transmettez ce récapitulatif via un des canaux ci-dessous pour accélérer le traitement :</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-emerald-650 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-md text-xs transition-colors cursor-pointer w-full shadow-sm"
                      id="submit-success-whatsapp"
                    >
                      💬 Envoyer via WhatsApp (+225 05 05 71 89 45)
                    </a>
                    <a
                      href={getEmailLink()}
                      className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-850 text-white font-bold py-2.5 px-4 rounded-md text-xs transition-colors cursor-pointer w-full shadow-sm"
                      id="submit-success-email"
                    >
                      ✉️ Envoyer via E-mail (ets.kofroid@gmail.com)
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-md text-[11px] font-semibold cursor-pointer transition-colors inline-block mx-auto"
                    id="form-reset-btn"
                  >
                    Faire une autre demande
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
