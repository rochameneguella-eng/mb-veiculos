"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Estou navegando no site da MB Veículos e gostaria de falar com um consultor."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 relative bg-[#121520] border border-emerald-500/30 text-white text-xs px-3.5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="font-bold text-white leading-tight">Consultor Online</p>
              <p className="text-[10px] text-gray-400">Resposta em poucos minutos</p>
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a MB Veículos"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 transition-transform transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
