"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { STORE_INFO } from "@/data/mock-vehicles";
import Image from "next/image";
import {
  X,
  CheckCircle,
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
    `Olá! Tenho interesse no ${vehicle.title} ${vehicle.version} (${vehicle.yearModel}) anunciado por ${formattedPrice} no site da MB Veículos. O carro ainda está disponível para visita?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#11131b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#161924]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              {vehicle.brand} • {vehicle.category.toUpperCase()}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {vehicle.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">{vehicle.version}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Photo & Badges */}
          <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-white/10">
            <Image
              src={vehicle.featuredImage}
              alt={vehicle.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {vehicle.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="absolute bottom-3 right-3 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20">
              <span className="text-xs text-gray-400 block">Preço à vista</span>
              <span className="text-2xl font-black text-emerald-400">
                {formattedPrice}
              </span>
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Ano/Modelo</span>
                <span className="text-sm font-bold text-white">{vehicle.yearModel}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Gauge className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Quilometragem</span>
                <span className="text-sm font-bold text-white">{formattedKm} km</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Settings className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Câmbio</span>
                <span className="text-sm font-bold text-white">{vehicle.transmission}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Fuel className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Combustível</span>
                <span className="text-sm font-bold text-white">{vehicle.fuel}</span>
              </div>
            </div>
          </div>

          {/* Highlight Note */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong>Destaque MB:</strong> {vehicle.highlight}
            </span>
          </div>

          {/* Additional Technical Attributes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-300">
            <div className="p-3 rounded-lg bg-white/5 flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-400" />
              <span>Cor: <strong>{vehicle.color}</strong></span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-400" />
              <span>Final de Placa: <strong>{vehicle.plateEnd}</strong></span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 flex items-center gap-2">
              <Settings className="w-4 h-4 text-amber-400" />
              <span>Motorização: <strong>{vehicle.engine}</strong></span>
            </div>
          </div>

          {/* Equipments & Features List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
              Itens de Série e Opcionais Inclusos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/5"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-5 border-t border-white/10 bg-[#161924] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSimulateFinance(vehicle);
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition"
          >
            Simular Financiamento Deste Veículo
          </button>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Negociar no WhatsApp com Consultor
          </a>
        </div>
      </div>
    </div>
  );
};
