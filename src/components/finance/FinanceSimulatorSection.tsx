"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Calculator,
  ShieldCheck,
  Building2,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface FinanceSimulatorSectionProps {
  initialVehiclePrice?: number;
}

export const FinanceSimulatorSection: React.FC<FinanceSimulatorSectionProps> = ({
  initialVehiclePrice = 120000,
}) => {
  const [vehiclePrice, setVehiclePrice] = useState<number>(initialVehiclePrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% default
  const [months, setMonths] = useState<number>(48); // 48x default

  const downPaymentValue = (vehiclePrice * downPaymentPercent) / 100;
  const financedAmount = Math.max(0, vehiclePrice - downPaymentValue);

  // Approximate automotive financing monthly interest rate (~1.45% per month)
  const monthlyRate = 0.0145;
  const installment =
    financedAmount > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);

  const pricePercent = Math.min(
    100,
    Math.max(0, ((vehiclePrice - 30000) / (350000 - 30000)) * 100)
  );

  const downPaymentSliderPercent = Math.min(
    100,
    Math.max(0, (downPaymentPercent / 70) * 100)
  );

  const handleWhatsappFinancing = () => {
    const message = encodeURIComponent(
      `Olá! Fiz uma simulação de financiamento no site da MB Veículos:
• Valor do veículo: ${formatCurrency(vehiclePrice)}
• Entrada: ${formatCurrency(downPaymentValue)} (${downPaymentPercent}%)
• Saldo financiado: ${formatCurrency(financedAmount)}
• Prazo escolhido: ${months}x de aproximadamente ${formatCurrency(installment)}
Gostaria de verificar a aprovação do meu CPF com os bancos credenciados.`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  const banks = [
    { name: "Santander", detail: "Líder automotivo" },
    { name: "BV Financeira", detail: "Aprovação ágil" },
    { name: "Itaú Veículos", detail: "Taxas reduzidas" },
    { name: "Bradesco", detail: "Condições especiais" },
    { name: "Banco PAN", detail: "Entrada facilitada" },
  ];

  return (
    <section id="financiamento" className="py-20 border-b border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[300px] bg-[#d99b38]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161a22] border border-white/[0.08] text-xs text-[#d99b38] font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Financiamento MB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Calcule sua parcela estimada
          </h2>
          <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
            Condições personalizadas com as menores taxas do mercado através dos maiores bancos credenciados.
          </p>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/[0.08] shadow-xl flex flex-col justify-between space-y-7">
            <div className="space-y-7">
              {/* Slider 1: Valor do Veículo */}
              <div>
                <div className="flex justify-between items-baseline mb-2.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
                    Valor estimado do veículo
                  </label>
                  <span className="text-xl font-bold text-white tabular-nums">
                    {formatCurrency(vehiclePrice)}
                  </span>
                </div>
                <div className="relative py-2">
                  <input
                    type="range"
                    min={30000}
                    max={350000}
                    step={5000}
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full h-2 rounded-lg"
                    style={{
                      background: `linear-gradient(to right, #d99b38 0%, #d99b38 ${pricePercent}%, rgba(255,255,255,0.08) ${pricePercent}%, rgba(255,255,255,0.08) 100%)`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#6b7280] font-medium tabular-nums">
                  <span>R$ 30.000</span>
                  <span>R$ 350.000</span>
                </div>
              </div>

              {/* Slider 2: Valor da Entrada */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
                    Valor de entrada ({downPaymentPercent}%)
                  </label>
                  <span className="text-xl font-bold text-[#d99b38] tabular-nums">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <div className="relative py-2">
                  <input
                    type="range"
                    min={0}
                    max={70}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 rounded-lg"
                    style={{
                      background: `linear-gradient(to right, #d99b38 0%, #d99b38 ${downPaymentSliderPercent}%, rgba(255,255,255,0.08) ${downPaymentSliderPercent}%, rgba(255,255,255,0.08) 100%)`,
                    }}
                  />
                </div>

                {/* Quick Presets Buttons */}
                <div className="flex items-center gap-2 mt-2 pt-1">
                  <span className="text-[11px] text-[#6b7280]">Sugestões:</span>
                  {[0, 20, 30, 50].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setDownPaymentPercent(preset)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition ${
                        downPaymentPercent === preset
                          ? "bg-[#d99b38]/20 border-[#d99b38] text-[#d99b38]"
                          : "bg-white/[0.03] border-white/[0.06] text-[#9ca3af] hover:text-white"
                      }`}
                    >
                      {preset === 0 ? "Sem entrada" : `${preset}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 3: Prazo / Parcelas */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                  Número de parcelas
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setMonths(term)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                        months === term
                          ? "bg-[#d99b38] text-[#08090d] border-[#d99b38] shadow-md shadow-[#d99b38]/25 scale-[1.02]"
                          : "bg-white/[0.03] text-[#9ca3af] border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {term}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-[#9ca3af] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#d99b38] shrink-0" />
              <span>Simulação estimada sujeita à aprovação de crédito pelas instituições financeiras.</span>
            </div>
          </div>

          {/* Result Calculation Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#161a26] to-[#0e1017] border border-[#d99b38]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#d99b38]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d99b38] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Resultado da Simulação
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Condição Personalizada
              </h3>

              <div className="space-y-3 mb-6 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-white/[0.05] text-[#9ca3af]">
                  <span>Valor do Veículo:</span>
                  <span className="font-bold text-white tabular-nums">{formatCurrency(vehiclePrice)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.05] text-[#9ca3af]">
                  <span>Entrada ({downPaymentPercent}%):</span>
                  <span className="font-bold text-[#d99b38] tabular-nums">{formatCurrency(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.05] text-[#9ca3af]">
                  <span>Saldo a Financiar:</span>
                  <span className="font-bold text-gray-200 tabular-nums">{formatCurrency(financedAmount)}</span>
                </div>
              </div>

              {/* Big Estimate Box */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.08] text-center mb-6 shadow-inner">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider block mb-1">
                  Parcela Estimada ({months}x)
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#10b981] block tabular-nums">
                  {formatCurrency(installment)}
                </span>
                <span className="text-[11px] text-[#6b7280] mt-1.5 block">
                  1ª parcela com carência de até 60 dias
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsappFinancing}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Aprovar meu crédito no WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Banking Partners strip */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6b7280]">
              Instituições Financeiras Parceiras
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {banks.map((b, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#12141c] border border-white/[0.06] hover:border-[#d99b38]/30 text-center transition-all flex flex-col items-center justify-center group"
              >
                <Building2 className="w-5 h-5 text-[#d99b38] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-white block">{b.name}</span>
                <span className="text-[10px] text-[#9ca3af] mt-0.5">{b.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
