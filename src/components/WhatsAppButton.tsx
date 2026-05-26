import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Trigger preview tooltip after 5 seconds to invite user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Welcoming Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800"
            id="whatsapp-chatbox"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg border border-emerald-400">
                    K
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Service Client ETS Kofroid</h4>
                  <p className="text-xs text-emerald-100">En ligne • Répond rapidement</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-emerald-100 hover:text-white transition-colors cursor-pointer"
                id="close-whatsapp-chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 bg-slate-50 text-xs space-y-3">
              <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-balance max-w-[85%] border border-slate-100">
                <p className="text-slate-600 mb-1 font-medium">Équipe Kofroid</p>
                <p className="text-slate-700 leading-relaxed">
                  Bonjour ! Bienvenue chez ETS Kofroid. Que pouvons-nous faire pour vous aujourd'hui ? Climatisation, électricité, plomberie ou autres travaux ? 🇨🇮
                </p>
                <p className="text-[10px] text-slate-400 mt-1 text-right">Instantane</p>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="p-4 bg-white border-t border-slate-50">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 cursor-pointer text-sm"
                id="whatsapp-direct-link"
              >
                <MessageSquare size={16} />
                Discuter sur WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop-up Initial Informative Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-16 bottom-2 mr-2 bg-slate-900 text-white text-xs py-2 px-4 rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap border border-slate-800"
            id="whatsapp-tooltip"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
            Besoin d'un dépannage ? Cliquez ici !
            <button 
              onClick={() => setShowTooltip(false)} 
              className="text-slate-400 hover:text-white ml-1 font-bold cursor-pointer"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rounded Glow Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: ["0 4px 10px rgba(16, 185, 129, 0.2)", "0 4px 20px rgba(16, 185, 129, 0.4)", "0 4px 10px rgba(16, 185, 129, 0.2)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer z-50 focus:outline-none"
        aria-label="Contacter sur WhatsApp"
        id="whatsapp-floating-trigger"
      >
        <MessageSquare size={28} className="animate-pulse" />
      </motion.button>
    </div>
  );
}
