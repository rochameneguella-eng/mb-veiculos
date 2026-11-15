"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MOCK_VEHICLES, STORE_INFO } from "@/data/mock-vehicles";
import { Vehicle, VehicleCategory } from "@/types/vehicle";
import { VehicleDetailModal } from "./VehicleDetailModal";
import {
  Calendar,
  Gauge,
  Fuel,
  ArrowRight,
  MessageCircle,
  Eye,
  SlidersHorizontal,
  Search,
  ShieldCheck,
} from "lucide-react";

interface ShowroomSectionProps {
  onSelectVehicleForFinance?: (vehicle: Vehicle) => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  onSelectVehicleForFinance,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(500000);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const categories: { label: string; value: VehicleCategory }[] = [
    { label: "Todos os carros", value: "todos" },
    { label: "SUVs", value: "suv" },
    { label: "Sedãs", value: "sedan" },
    { label: "Hatches", value: "hatch" },
    { label: "Picapes e 4x4", value: "picape" },
    { label: "Premium", value: "premium" },
  ];

  const filteredVehicles = useMemo(() => {
    return MOCK_VEHICLES.filter((vehicle) => {
      const matchCategory =
        selectedCategory === "todos" || vehicle.category === selectedCategory;
      const matchSearch =
        vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.version.toLowerCase().includes(searchTerm.toLowerCase());
      const matchPrice = vehicle.price <= maxPrice;
      return matchCategory && matchSearch && matchPrice;
    });
  }, [selectedCategory, searchTerm, maxPrice]);

  return (
    <section id="estoque" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d99b38]" />
              <span>Estoque inspecionado com laudo cautelar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Seminovos selecionados
            </h2>
            <p className="text-[#9ca3af] text-sm max-w-xl">
              Veículos periciados, revisados e disponíveis para test-drive em nossa loja física em Sumaré.
            </p>
          </div>

          <div className="text-xs text-[#9ca3af]">
            Exibindo <span className="text-white font-semibold tabular-nums">{filteredVehicles.length}</span> veículos disponíveis
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-4 sm:p-5 mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.value
                    ? "bg-[#d99b38] text-[#0d0f12] font-semibold"
                    : "bg-[#1a1e26] text-[#9ca3af] hover:text-white hover:bg-[#232733]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Price Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/[0.04]">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#6b7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por marca ou modelo (ex: Compass, Corolla)..."
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white placeholder-[#6b7280] text-xs focus:outline-none focus:border-[#d99b38] transition-colors"
              />
            </div>

            {/* Max Price Slider */}
            <div className="flex items-center gap-3 px-1">
              <SlidersHorizontal className="w-4 h-4 text-[#9ca3af] shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs text-[#9ca3af] mb-1">
                  <span>Preço máximo:</span>
                  <span className="text-white font-semibold tabular-nums">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      maximumFractionDigits: 0,
                    }).format(maxPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={80000}
                  max={500000}
                  step={5000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#d99b38] cursor-pointer h-1.5 bg-[#232733] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-16 bg-[#13161c] rounded-xl border border-white/[0.08] space-y-2">
            <p className="text-[#9ca3af] text-sm">Nenhum veículo encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory("todos");
                setSearchTerm("");
                setMaxPrice(500000);
              }}
              className="text-[#d99b38] font-medium text-xs hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredVehicles.map((vehicle) => {
              const formattedPrice = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(vehicle.price);

              const formattedKm = new Intl.NumberFormat("pt-BR").format(vehicle.km);

              const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Olá, tenho interesse no ${vehicle.title} ${vehicle.version} (${vehicle.yearModel}) anunciado por ${formattedPrice} na MB Veículos.`
              )}`;

              return (
                <div
                  key={vehicle.id}
                  className="rounded-xl bg-[#13161c] border border-white/[0.08] hover:border-white/[0.16] transition-colors flex flex-col overflow-hidden"
                >
                  {/* Photo Frame */}
                  <div className="relative w-full h-48 bg-[#0a0c10] overflow-hidden">
                    <Image
                      src={vehicle.featuredImage}
                      alt={vehicle.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#0d0f12]/90 backdrop-blur-sm text-[11px] font-medium text-[#d99b38] border border-white/[0.08]">
                        {vehicle.badges[0]}
                      </span>
                    </div>

                    {/* Quick view button */}
                    <button
                      onClick={() => setSelectedVehicle(vehicle)}
                      className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-[#0d0f12]/90 hover:bg-[#0d0f12] text-white text-xs font-medium border border-white/[0.1] transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#9ca3af]" />
                      <span>Ficha completa</span>
                    </button>
                  </div>

                  {/* Vehicle Information */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#9ca3af] mb-1">
                        <span>{vehicle.brand}</span>
                        <span className="tabular-nums">Final de placa {vehicle.plateEnd}</span>
                      </div>

                      <h3 className="text-base font-bold text-white line-clamp-1">
                        {vehicle.title}
                      </h3>
                      <p className="text-xs text-[#9ca3af] line-clamp-1 mt-0.5">
                        {vehicle.version}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-2 mt-3 border-y border-white/[0.04] text-xs text-[#9ca3af]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#6b7280] shrink-0" />
                          <span className="tabular-nums">{vehicle.yearModel.split("/")[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5 text-[#6b7280] shrink-0" />
                          <span className="tabular-nums">{formattedKm} km</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel className="w-3.5 h-3.5 text-[#6b7280] shrink-0" />
                          <span className="truncate">{vehicle.fuel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="space-y-3 pt-1">
                      <div>
                        <span className="text-[11px] text-[#9ca3af] block">
                          Valor à vista
                        </span>
                        <div className="flex items-baseline justify-between">
                          <span className="text-lg font-bold text-white tabular-nums">
                            {formattedPrice}
                          </span>
                          <span className="text-xs text-[#9ca3af] tabular-nums">
                            ou 48x de R$ {vehicle.monthlyEstimate}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 rounded-lg bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={() => {
                            if (onSelectVehicleForFinance) {
                              onSelectVehicleForFinance(vehicle);
                              document.getElementById("financiamento")?.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="py-2 rounded-lg bg-[#1a1e26] hover:bg-[#232733] border border-white/[0.08] text-[#d1d5db] hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Simular</span>
                          <ArrowRight className="w-3 h-3 text-[#9ca3af]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onSimulateFinance={(veh: Vehicle) => {
            if (onSelectVehicleForFinance) {
              onSelectVehicleForFinance(veh);
              setSelectedVehicle(null);
              document.getElementById("financiamento")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      )}
    </section>
  );
};
