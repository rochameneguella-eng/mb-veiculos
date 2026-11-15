"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Banknote,
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
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

    const text = `Olá, gostaria de uma avaliação para venda ou troca do meu veículo na MB Veículos:
- Modelo: ${brandModel || "A definir"}
- Ano: ${year || "A definir"}
- Quilometragem aproximada: ${km || "A definir"}
- Conservação: ${condition}
- Nome: ${ownerName || "Cliente"}
- Contato: ${ownerPhone || "Mesmo deste número"}`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="vender" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
              <Banknote className="w-3.5 h-3.5 text-[#d99b38]" />
              <span>Avaliação transparente e pagamento à vista</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Venda seu veículo ou troque com troco
            </h2>

            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
              Evite riscos de negociações particulares, visitas desconhecidas e burocracia de cartório. Na MB Veículos você recebe proposta justa com base no mercado e pagamento imediato na conta após laudo aprovado.
            </p>

            {/* Benefits 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#13161c] border border-white/[0.08] space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Clock className="w-4 h-4 text-[#d99b38]" />
                  <span>Avaliação rápida</span>
                </div>
                <p className="text-xs text-[#9ca3af]">
                  Retorno em até 30 minutos com valores baseados no mercado real.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#13161c] border border-white/[0.08] space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Banknote className="w-4 h-4 text-[#10b981]" />
                  <span>Pagamento à vista</span>
                </div>
                <p className="text-xs text-[#9ca3af]">
                  Transferência bancária imediata assim que a documentação for conferida.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#13161c] border border-white/[0.08] space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <RefreshCw className="w-4 h-4 text-[#d99b38]" />
                  <span>Troca com troco</span>
                </div>
                <p className="text-xs text-[#9ca3af]">
                  Entregue seu usado como parte do pagamento e saia de carro novo com dinheiro no bolso.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#13161c] border border-white/[0.08] space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>Segurança jurídica</span>
                </div>
                <p className="text-xs text-[#9ca3af]">
                  Transferência formalizada pela loja, sem pendências posteriores.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Valuation Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-base font-bold text-white">
                  Solicitar avaliação do meu veículo
                </h3>
                <p className="text-xs text-[#9ca3af] mt-1">
                  Preencha os dados abaixo para receber uma proposta preliminar pelo WhatsApp.
                </p>
              </div>

              <form onSubmit={handleValuationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                    Marca e modelo do seu veículo
                  </label>
                  <input
                    type="text"
                    required
                    value={brandModel}
                    onChange={(e) => setBrandModel(e.target.value)}
                    placeholder="Ex: Honda Civic EXL 2.0"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                      Ano de fabricação / modelo
                    </label>
                    <input
                      type="text"
                      required
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Ex: 2021/2021"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                      Quilometragem aproximada
                    </label>
                    <input
                      type="text"
                      value={km}
                      onChange={(e) => setKm(e.target.value)}
                      placeholder="Ex: 45.000 km"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                    Estado de conservação
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#d99b38] transition-colors"
                  >
                    <option value="Excelente">Excelente (sem detalhes, revisões em dia)</option>
                    <option value="Muito Bom">Muito bom (pequenos desgastes de uso)</option>
                    <option value="Regular">Regular (precisa de pequenos reparos)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9ca3af] mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder="(19) 99999-9999"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0d0f12] border border-white/[0.08] text-white text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#d99b38] hover:bg-[#e4a844] text-[#0d0f12] font-semibold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <span>Enviar para avaliação no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
