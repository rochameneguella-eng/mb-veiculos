"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { STORE_INFO } from "@/data/mock-vehicles";
import Image from "next/image";
import {
  X,
  Check,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  ShieldCheck,
  MessageCircle,
  Palette,
  Key,
} from "lucide-react";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onSimulateFinance: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onSimulateFinance,
}) => {
  if (!vehicle) return null;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedKm = new Intl.NumberFormat("pt-BR").format(vehicle.km);

  const whatsappMessage = encodeURIComponent(
    `Olá, tenho interesse no ${vehicle.title} ${vehicle.version} (${vehicle.yearModel}) anunciado por ${formattedPrice} na MB Veículos. Gostaria de saber mais informações.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#13161c] border border-white/[0.1] rounded-xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.06] bg-[#0d0f12]">
          <div>
            <span className="text-xs text-[#d99b38] font-medium block">
              {vehicle.brand}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {vehicle.title}
            </h2>
            <p className="text-xs text-[#9ca3af]">{vehicle.version}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9ca3af] hover:text-white rounded-lg bg-[#1a1e26] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Main Photo Frame */}
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-white/[0.08] bg-[#0a0c10]">
            <Image
              src={vehicle.featuredImage}
              alt={vehicle.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              {vehicle.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#0d0f12]/90 backdrop-blur-sm text-xs font-medium text-[#d99b38] border border-white/[0.08]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-[#0d0f12]/90 backdrop-blur-sm border border-white/[0.1]">
              <span className="text-[11px] text-[#9ca3af] block">Valor à vista</span>
              <span className="text-xl font-bold text-white tabular-nums">
                {formattedPrice}
              </span>
            </div>
          </div>

          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.04] space-y-0.5">
              <span className="text-[11px] text-[#6b7280] block">Ano/modelo</span>
              <span className="text-xs font-semibold text-white tabular-nums">{vehicle.yearModel}</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.04] space-y-0.5">
              <span className="text-[11px] text-[#6b7280] block">Quilometragem</span>
              <span className="text-xs font-semibold text-white tabular-nums">{formattedKm} km</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.04] space-y-0.5">
              <span className="text-[11px] text-[#6b7280] block">Câmbio</span>
              <span className="text-xs font-semibold text-white">{vehicle.transmission}</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.04] space-y-0.5">
              <span className="text-[11px] text-[#6b7280] block">Combustível</span>
              <span className="text-xs font-semibold text-white">{vehicle.fuel}</span>
            </div>
          </div>

          {/* Highlight Note */}
          <div className="p-3.5 rounded-lg bg-[#161a22] border border-white/[0.06] text-xs text-[#d1d5db] flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#d99b38] shrink-0" />
            <span>
              <strong>Destaque MB:</strong> {vehicle.highlight}
            </span>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#9ca3af]">
            <div className="p-2.5 rounded-lg bg-[#0d0f12] flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-[#6b7280]" />
              <span>Cor: <strong className="text-white">{vehicle.color}</strong></span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0d0f12] flex items-center gap-2">
              <Key className="w-3.5 h-3.5 text-[#6b7280]" />
              <span>Placa: <strong className="text-white">Final {vehicle.plateEnd}</strong></span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0d0f12] flex items-center gap-2">
              <Settings className="w-3.5 h-3.5 text-[#6b7280]" />
              <span>Motor: <strong className="text-white">{vehicle.engine}</strong></span>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-white">
              Itens de série e opcionais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9ca3af]">
              {vehicle.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded bg-[#0d0f12] border border-white/[0.04]"
                >
                  <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 border-t border-white/[0.06] bg-[#0d0f12] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSimulateFinance(vehicle);
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#1a1e26] hover:bg-[#232733] text-white font-medium text-xs transition-colors"
          >
            Simular financiamento deste veículo
          </button>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com consultor no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
