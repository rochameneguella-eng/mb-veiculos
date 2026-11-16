"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Olá, estou navegando no site da MB Veículos e gostaria de falar com um consultor."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-[#141721] border border-white/[0.08] text-white text-xs px-3 py-2 rounded-lg shadow-xl flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <div>
              <p className="font-medium text-white leading-tight">Atendimento WhatsApp</p>
              <p className="text-[10px] text-[#9ca3af]">Loja física aberta em Sumaré</p>
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#6b7280] hover:text-white p-0.5 transition-colors"
            aria-label="Fechar aviso"
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
        className="w-12 h-12 rounded-full bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg transition-colors"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
