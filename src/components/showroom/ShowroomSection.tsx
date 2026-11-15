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
  Sparkles,
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
    { label: "Todos os Carros", value: "todos" },
    { label: "SUVs", value: "suv" },
    { label: "Sedãs", value: "sedan" },
    { label: "Hatches", value: "hatch" },
    { label: "Picapes & 4x4", value: "picape" },
    { label: "Premium / Esportivos", value: "premium" },
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
    <section id="estoque" className="py-20 relative">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Estoque Curado • Laudo Cautelar Aprovado
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Seminovos Selecionados
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-2">
              Veículos periciados, revisados e prontos para rodar com garantia de procedência.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            Exibindo <span className="text-amber-400 font-bold">{filteredVehicles.length}</span> veículos disponíveis
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-[#12141c] border border-white/10 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.value
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/25 font-bold"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Price Slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por marca, modelo (ex: Compass, Corolla, BMW)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Max Price Slider */}
            <div className="flex items-center gap-4 px-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Preço máximo:</span>
                  <span className="text-white font-bold">
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
                  step={10000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-16 bg-[#11131b] rounded-2xl border border-white/5">
            <p className="text-gray-400 text-lg mb-2">Nenhum veículo encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory("todos");
                setSearchTerm("");
                setMaxPrice(500000);
              }}
              className="text-amber-400 font-semibold text-sm hover:underline"
            >
              Limpar filtros de busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => {
              const formattedPrice = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(vehicle.price);

              const formattedKm = new Intl.NumberFormat("pt-BR").format(vehicle.km);

              const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Olá! Gostei do ${vehicle.title} ${vehicle.version} (${vehicle.yearModel}) anunciado por ${formattedPrice} na MB Veículos. Gostaria de mais fotos e informações.`
              )}`;

              return (
                <div
                  key={vehicle.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#151722] to-[#0f1118] border border-white/10 overflow-hidden shadow-xl hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-black/60">
                    <Image
                      src={vehicle.featuredImage}
                      alt={vehicle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/75 backdrop-blur-md text-amber-400 border border-amber-500/30">
                        {vehicle.badges[0]}
                      </span>
                    </div>

                    {/* Category tag top-right */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 text-gray-300 backdrop-blur-sm">
                        {vehicle.category}
                      </span>
                    </div>

                    {/* Quick view button on hover */}
                    <button
                      onClick={() => setSelectedVehicle(vehicle)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-[2px]"
                    >
                      <Eye className="w-4 h-4 text-amber-400" />
                      Ver Ficha Completa
                    </button>
                  </div>

                  {/* Vehicle Information */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                        <span>{vehicle.brand}</span>
                        <span>Placa final {vehicle.plateEnd}</span>
                      </div>

                      <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                        {vehicle.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1 mb-3">
                        {vehicle.version}
                      </p>

                      {/* Specs pills */}
                      <div className="grid grid-cols-3 gap-1.5 py-2.5 my-2 border-y border-white/5 text-[11px] text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{vehicle.yearModel.split("/")[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{formattedKm} km</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{vehicle.fuel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="pt-2">
                      <div className="mb-3">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                          Valor à vista
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-white">
                            {formattedPrice}
                          </span>
                        </div>
                        <span className="text-[11px] text-emerald-400 block font-medium">
                          ou entrada + R$ {vehicle.monthlyEstimate}/mês*
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedVehicle(vehicle)}
                          className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10 transition"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          Detalhes
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          Proposta
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for full vehicle details */}
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onSimulateFinance={(vehicle) => {
            if (onSelectVehicleForFinance) {
              onSelectVehicleForFinance(vehicle);
            }
            const el = document.getElementById("financiamento");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
};
