"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Calculator,
  ShieldCheck,
  Building2,
  MessageCircle,
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

  const handleWhatsappFinancing = () => {
    const message = encodeURIComponent(
      `Olá, fiz uma simulação de financiamento no site da MB Veículos:
- Valor estimado: ${formatCurrency(vehiclePrice)}
- Entrada: ${formatCurrency(downPaymentValue)} (${downPaymentPercent}%)
- Saldo a financiar: ${formatCurrency(financedAmount)}
- Prazo pretendido: ${months}x de aproximadamente ${formatCurrency(installment)}
Gostaria de verificar as condições de aprovação do meu CPF.`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  const banks = [
    { name: "Santander", detail: "Financiamento automotivo" },
    { name: "BV Financeira", detail: "Aprovação rápida" },
    { name: "Itaú", detail: "Condições para correntistas" },
    { name: "Bradesco", detail: "Taxas diferenciadas" },
    { name: "Banco PAN", detail: "Entrada facilitada" },
  ];

  return (
    <section id="financiamento" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
            <Calculator className="w-3.5 h-3.5 text-[#d99b38]" />
            <span>Simulador de financiamento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Calcule sua parcela estimada
          </h2>
          <p className="text-[#9ca3af] text-sm">
            Trabalhamos com os principais bancos do mercado para viabilizar as menores taxas para seu perfil.
          </p>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Slider 1: Valor do Veículo */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs font-medium text-[#9ca3af]">
                    Valor do veículo
                  </label>
                  <span className="text-base font-bold text-white tabular-nums">
                    {formatCurrency(vehiclePrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={30000}
                  max={350000}
                  step={5000}
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  className="w-full accent-[#d99b38] cursor-pointer h-1.5 bg-[#232733] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#6b7280] mt-1 tabular-nums">
                  <span>R$ 30.000</span>
                  <span>R$ 350.000</span>
                </div>
              </div>

              {/* Slider 2: Valor da Entrada */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs font-medium text-[#9ca3af]">
                    Entrada ({downPaymentPercent}%)
                  </label>
                  <span className="text-base font-bold text-[#d99b38] tabular-nums">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={70}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#d99b38] cursor-pointer h-1.5 bg-[#232733] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#6b7280] mt-1 tabular-nums">
                  <span>Sem entrada (0%)</span>
                  <span>70% de entrada</span>
                </div>
              </div>

              {/* Selector 3: Prazo / Parcelas */}
              <div>
                <label className="block text-xs font-medium text-[#9ca3af] mb-2">
                  Prazo de pagamento
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((term) => (
                    <button
                      key={term}
                      onClick={() => setMonths(term)}
                      className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                        months === term
                          ? "bg-[#d99b38] text-[#0d0f12] border-[#d99b38] font-semibold"
                          : "bg-[#0d0f12] text-[#9ca3af] border-white/[0.08] hover:text-white hover:bg-[#1a1e26]"
                      }`}
                    >
                      {term}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.04] text-[11px] text-[#9ca3af] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#6b7280] shrink-0" />
              <span>Simulação estimada. As taxas finais dependem da análise cadastral e score bancário.</span>
            </div>
          </div>

          {/* Result Calculation Column */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium text-[#9ca3af] block">
                Resultado da estimativa
              </span>
              <h3 className="text-base font-bold text-white mb-4 mt-0.5">
                Condições simuladas
              </h3>

              <div className="space-y-2.5 mb-6 text-xs text-[#9ca3af]">
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span>Valor do veículo</span>
                  <span className="font-semibold text-white tabular-nums">{formatCurrency(vehiclePrice)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span>Entrada ({downPaymentPercent}%)</span>
                  <span className="font-semibold text-[#d99b38] tabular-nums">{formatCurrency(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span>Saldo financiado</span>
                  <span className="font-semibold text-white tabular-nums">{formatCurrency(financedAmount)}</span>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="p-4 rounded-lg bg-[#0d0f12] border border-white/[0.06] text-center mb-6 space-y-1">
                <span className="text-xs text-[#9ca3af] block">
                  Parcela aproximada em {months}x
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#10b981] tabular-nums block">
                  {formatCurrency(installment)}
                </span>
                <span className="text-[11px] text-[#6b7280] block">
                  Opção de carência para início do pagamento
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsappFinancing}
              className="w-full py-2.5 px-4 rounded-lg bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar simulação pelo WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Banking Partners */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs text-[#6b7280]">
              Parceiros financeiros credenciados
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {banks.map((b, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-[#13161c] border border-white/[0.06] text-center flex flex-col items-center justify-center space-y-1"
              >
                <Building2 className="w-4 h-4 text-[#9ca3af]" />
                <span className="text-xs font-semibold text-white block">{b.name}</span>
                <span className="text-[10px] text-[#6b7280]">{b.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
