"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Zap,
  BadgePercent,
  CheckCircle2,
  FileCheck,
  MessageCircle,
  Car,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const SellCarSection: React.FC = () => {
  const [brandModel, setBrandModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [condition, setCondition] = useState("Excelente");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");

  const handleValuationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá MB Veículos! Gostaria de uma avaliação para venda/troca do meu veículo:
- Modelo: ${brandModel || "Não especificado"}
- Ano: ${year || "Não especificado"}
- Km estimada: ${km || "Não especificada"}
- Estado de conservação: ${condition}
- Proprietário: ${ownerName || "Cliente"}
- Contato: ${ownerPhone || "Mesmo deste WhatsApp"}`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="vender" className="py-20 relative bg-[#0b0c13] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Dinheiro na Conta • Troca com Troco
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Quer vender seu veículo?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                Pagamos à vista via PIX.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Evite golpes de internet, visitas indesejadas e burocracia de cartório.
              Na <strong>MB Veículos</strong> você tem avaliação transparente e justa, transferência segura e pagamento imediato na conta.
            </p>

            {/* Benefit bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Avaliação em 30 Minutos</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Resposta ágil com base no valor real de mercado.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pagamento Instantâneo</h4>
                  <p className="text-xs text-gray-400 mt-0.5">PIX creditado assim que o laudo for aprovado.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Troca com Troco</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Troque por outro carro e leve a diferença em dinheiro.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Burocracia</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Cuidamos da transferência e de toda documentação.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Valuation Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#151824] to-[#0e1017] border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Pré-Avaliação Expressa
              </div>
              <h3 className="text-xl font-black text-white mb-1">
                Simule Quanto Vale o Seu Carro
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Preencha os dados abaixo e receba nossa proposta diretamente no WhatsApp.
              </p>

              <form onSubmit={handleValuationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Marca e Modelo do Veículo *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandModel}
                    onChange={(e) => setBrandModel(e.target.value)}
                    placeholder="Ex: Honda Civic 2.0 EXL ou Onix 1.0"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Ano de Fabricação *
                    </label>
                    <input
                      type="text"
                      required
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Ex: 2021"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Km Aproximada
                    </label>
                    <input
                      type="text"
                      value={km}
                      onChange={(e) => setKm(e.target.value)}
                      placeholder="Ex: 45.000"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Estado de Conservação
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 transition"
                  >
                    <option value="Excelente (Sem detalhes, revisado)">Excelente (Sem detalhes, revisado)</option>
                    <option value="Bom (Pequenos desgastes normais de uso)">Bom (Pequenos desgastes normais de uso)</option>
                    <option value="Regular (Precisa de pequenos reparos)">Regular (Precisa de pequenos reparos)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Seu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder="(19) 9..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar para Avaliação Imediata</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
