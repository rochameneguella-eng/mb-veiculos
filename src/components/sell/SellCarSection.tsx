"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Banknote,
  Clock,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  MessageCircle,
  Lock,
  Sparkles,
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

    const text = `Olá! Gostaria de uma avaliação para venda ou troca do meu veículo na MB Veículos:
• Modelo: ${brandModel || "A definir"}
• Ano: ${year || "A definir"}
• Quilometragem aproximada: ${km || "A definir"}
• Estado de conservação: ${condition}
• Nome do proprietário: ${ownerName || "Cliente"}
• Telefone/WhatsApp: ${ownerPhone || "Mesmo deste número"}
Gostaria de receber uma proposta prévia.`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="vender" className="py-14 sm:py-20 border-b border-white/[0.06] relative overflow-hidden bg-[#10131a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c27] border border-white/[0.08] text-xs text-[#10b981] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>Avaliação Transparente • PIX na Conta</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
              Venda seu veículo ou troque com troco
            </h2>

            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
              Evite golpes de internet, visitas de estranhos e burocracia de cartório. Na <strong>MB Veículos</strong> você tem avaliação justa de mercado, quitação de débitos e transferência imediata sem complicação.
            </p>

            {/* Benefits 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141721] border border-white/[0.06] hover:border-[#d99b38]/30 transition space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <div className="w-6 h-6 rounded-md bg-[#d99b38]/10 flex items-center justify-center text-[#d99b38]">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span>Avaliação em 30 Minutos</span>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Retorno ágil com base no valor real de mercado e estado do carro.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141721] border border-white/[0.06] hover:border-[#10b981]/30 transition space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <div className="w-6 h-6 rounded-md bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                    <Banknote className="w-3.5 h-3.5" />
                  </div>
                  <span>Pagamento Imediato via PIX</span>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Dinheiro creditado na sua conta assim que o laudo for aprovado.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141721] border border-white/[0.06] hover:border-[#d99b38]/30 transition space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <div className="w-6 h-6 rounded-md bg-[#d99b38]/10 flex items-center justify-center text-[#d99b38]">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                  <span>Troca com Troco</span>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Entregue seu usado como entrada e leve a diferença em dinheiro no bolso.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#141721] border border-white/[0.06] hover:border-[#10b981]/30 transition space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <div className="w-6 h-6 rounded-md bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Segurança Jurídica Total</span>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Transferência formalizada pela loja, com comunicação de venda instantânea.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Valuation Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#141721] border border-white/[0.08] rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5 shadow-2xl relative">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d99b38] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pré-Avaliação Expressa
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Solicite a avaliação do seu carro
                </h3>
                <p className="text-xs text-[#9ca3af] mt-1">
                  Preencha os dados e receba uma estimativa preliminar pelo WhatsApp sem compromisso.
                </p>
              </div>

              <form onSubmit={handleValuationSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                    Marca e modelo do seu veículo *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandModel}
                    onChange={(e) => setBrandModel(e.target.value)}
                    placeholder="Ex: Honda Civic EXL 2.0 ou Jeep Compass"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Ano de fabricação *
                    </label>
                    <input
                      type="text"
                      required
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Ex: 2022"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Km aproximada
                    </label>
                    <input
                      type="text"
                      value={km}
                      onChange={(e) => setKm(e.target.value)}
                      placeholder="Ex: 42.000 km"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                    Estado de conservação
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs focus:outline-none focus:border-[#d99b38] transition-colors"
                  >
                    <option value="Excelente">Excelente (sem detalhes, revisões em dia)</option>
                    <option value="Muito Bom">Muito bom (pequenos desgastes normais de uso)</option>
                    <option value="Regular">Regular (precisa de pequenos reparos)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Seu nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder="(19) 99999-9999"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-1"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar para avaliação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6b7280] pt-1">
                  <Lock className="w-3 h-3" />
                  <span>Seus dados são protegidos e usados apenas para a sua avaliação.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
