"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  BadgeDollarSign,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ArrowRight,
  MessageCircle,
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

  // Approximate automotive financing monthly interest rate (around 1.45% per month)
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
      `Olá! Fiz uma simulação de financiamento no site da MB Veículos:
- Valor do Veículo: ${formatCurrency(vehiclePrice)}
- Entrada: ${formatCurrency(downPaymentValue)} (${downPaymentPercent}%)
- Saldo Financiado: ${formatCurrency(financedAmount)}
- Prazo Escolhido: ${months}x de aproximadamente ${formatCurrency(installment)}
Gostaria de verificar a aprovação do meu CPF com os bancos parceiros.`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  const banks = [
    { name: "Santander", detail: "Líder em Financiamento Automotivo" },
    { name: "BV Financeira", detail: "Aprovação Rápida e Flexível" },
    { name: "Itaú", detail: "Taxas Especiais para Correntistas" },
    { name: "Bradesco", detail: "Condições Diferenciadas" },
    { name: "Banco PAN", detail: "Entrada Facilitada" },
  ];

  return (
    <section id="financiamento" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Financiamento MB
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Aprovação Rápida com as Menores Taxas
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Trabalhamos integrados com os principais bancos do país para garantir a melhor parcela para o seu bolso.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#12141d] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              {/* Slider 1: Valor do Veículo */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-semibold text-gray-300">
                    Valor Estimado do Veículo
                  </label>
                  <span className="text-lg font-black text-white">
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
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>R$ 30 mil</span>
                  <span>R$ 350 mil</span>
                </div>
              </div>

              {/* Slider 2: Valor da Entrada */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-semibold text-gray-300">
                    Valor de Entrada ({downPaymentPercent}%)
                  </label>
                  <span className="text-lg font-black text-amber-400">
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
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>Sem entrada (0%)</span>
                  <span>Entrada de 70%</span>
                </div>
              </div>

              {/* Selector 3: Prazo / Parcelas */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2.5">
                  Número de Parcelas
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((term) => (
                    <button
                      key={term}
                      onClick={() => setMonths(term)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition ${
                        months === term
                          ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/25"
                          : "bg-white/5 text-gray-300 border-white/5 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {term}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Note on simulation */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Simulação ilustrativa. A taxa real depende do score e análise de crédito bancária.</span>
            </div>
          </div>

          {/* Result Calculation Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181b28] to-[#10121a] border border-amber-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Resultado da Pré-Simulação
              </span>
              <h3 className="text-lg font-black text-white mb-6">
                Condição Personalizada
              </h3>

              <div className="space-y-3.5 mb-6 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5 text-gray-300">
                  <span>Valor do Carro:</span>
                  <span className="font-bold text-white">{formatCurrency(vehiclePrice)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5 text-gray-300">
                  <span>Entrada ({downPaymentPercent}%):</span>
                  <span className="font-bold text-amber-400">{formatCurrency(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5 text-gray-300">
                  <span>Saldo a Financiar:</span>
                  <span className="font-bold text-gray-200">{formatCurrency(financedAmount)}</span>
                </div>
              </div>

              {/* Big Estimate Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center mb-6">
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                  Parcela Estimada em {months}x
                </span>
                <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">
                  {formatCurrency(installment)}
                </span>
                <span className="text-[11px] text-gray-400 mt-1 block">
                  Com carência de até 60 dias para a 1ª parcela
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsappFinancing}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Aprovar Meu Crédito no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Banking Partners strip */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Parceiros Financeiros Credenciados
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {banks.map((b, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 text-center transition flex flex-col items-center justify-center"
              >
                <Building2 className="w-5 h-5 text-amber-400 mb-1.5" />
                <span className="text-xs font-bold text-white block">{b.name}</span>
                <span className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{b.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
