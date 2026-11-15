"use client";

import React from "react";
import { HeroRemotionPlayer } from "./HeroRemotionPlayer";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  ShieldCheck,
  Zap,
  BadgeDollarSign,
  Star,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-4 pb-16 md:py-12 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges / Trust Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Referência em Seminovos em Sumaré e Região</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>
              <strong>{STORE_INFO.googleRating}</strong> no Google ({STORE_INFO.reviewsCount} avaliações)
            </span>
          </div>
        </div>

        {/* Hero Remotion Animated Showcase */}
        <div className="mb-10">
          <HeroRemotionPlayer />
        </div>

        {/* Action Grid & Quick Search Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Card 1: Comprar */}
          <a
            href="#estoque"
            className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#161922] to-[#0f1118] border border-white/10 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                Catálogo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Quero Comprar</h3>
            <p className="text-sm text-gray-400">
              Carros periciados, revisados e com garantia de até 1 ano.
            </p>
          </a>

          {/* Card 2: Vender */}
          <a
            href="#vender"
            className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#161922] to-[#0f1118] border border-white/10 hover:border-emerald-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                PIX na Conta <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Venda Seu Carro</h3>
            <p className="text-sm text-gray-400">
              Avaliação justa em até 30 minutos e pagamento imediato à vista.
            </p>
          </a>

          {/* Card 3: Simulação */}
          <a
            href="#financiamento"
            className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#161922] to-[#0f1118] border border-white/10 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <BadgeDollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                Até 60x <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Simular Financiamento</h3>
            <p className="text-sm text-gray-400">
              Taxas reduzidas pelos maiores bancos: Santander, Itaú e BV.
            </p>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-black text-amber-400 mb-1">
              +{STORE_INFO.yearsActive} Anos
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Tradição e seriedade em Sumaré
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-black text-white mb-1">
              {STORE_INFO.carsSold}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Carros entregues e clientes satisfeitos
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-black text-emerald-400 mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Laudo Pericial Cautelar aprovado
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl lg:text-3xl font-black text-amber-400 mb-1">
              Troca com Troco
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">
              Melhor avaliação do seu seminovo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
