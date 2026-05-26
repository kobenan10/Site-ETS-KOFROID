import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest bg-blue-100 text-blue-800 font-extrabold px-3 py-1 rounded-full border border-blue-200">
            Avis Clients
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
            Ce que disent nos clients à Abidjan
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            La plus grande fierté d'ETS Kofroid réside dans la fidélité et le niveau de satisfaction élevé constatés chez nos clients à la suite de nos interventions.
          </p>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div 
              key={testi.id}
              className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-lg relative flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              id={`testimonial-card-${testi.id}`}
            >
              <Quote size={32} className="text-blue-200/40 absolute top-6 right-6" />
              
              <div className="space-y-4 text-left">
                {/* 5 Stars display */}
                <div className="flex text-amber-500">
                  {[...Array(testi.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed">
                  "{testi.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between text-left">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-800">{testi.name}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">{testi.role}</p>
                </div>
                <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                  {testi.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security / Quality Check segment below feedback */}
        <div className="mt-12 p-4 bg-slate-50 rounded-lg border border-slate-100 max-w-xl mx-auto flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
            <Shield size={20} />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-light">
            Tous les avis ci-dessus proviennent de véritables interventions de dépannage ou de chantiers de construction facturés à Abidjan. Votre satisfaction est notre priorité.
          </p>
        </div>

      </div>
    </section>
  );
}
