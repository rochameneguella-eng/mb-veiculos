"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Star,
  Check,
  BadgeDollarSign,
  FileCheck2,
  MessageCircle,
  Zap,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#d99b38]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#d1d5db]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d99b38]" />
            <span>Referência em seminovos em Sumaré e região</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#d1d5db]">
            <div className="flex text-[#d99b38]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#d99b38] text-[#d99b38]" />
              ))}
            </div>
            <span>
              <strong>{STORE_INFO.googleRating}</strong> no Google Business ({STORE_INFO.reviewsCount} avaliações)
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#d1d5db]">
            <span className="font-semibold text-[#60a5fa]">5/5</span>
            <span>no Facebook</span>
          </div>
        </div>

        {/* Hero Grid: Headline Copy on Left + Car Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: High-converting proposition */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Seu próximo carro com procedência garantida em Sumaré
            </h1>

            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed">
              Veículos seminovos inspecionados com laudo cautelar 100% aprovado, revisão preventiva, garantia e condições diretas de financiamento ou troca com troco.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#vender"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Vender meu usado (PIX)</span>
              </a>

              <a
                href="#financiamento"
                className="px-5 py-3 rounded-xl bg-[#14171d] hover:bg-[#1b1e26] border border-white/[0.08] text-[#d1d5db] hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <BadgeDollarSign className="w-4 h-4 text-[#d99b38]" />
                <span>Simular financiamento</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Laudo cautelar 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Financiamento até 60x</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Avaliação justa no usado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Vehicle Showcase using carro.jpg */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-[#07080c] group">
              <div
                className="relative w-full aspect-[1265/672] min-h-[260px] overflow-hidden"
                style={{ position: "relative" }}
              >
                <Image
                  src="/carro.jpg"
                  alt="Veículo em Destaque na MB Veículos"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Subtle gradient vignettes for luxury feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/95 via-[#08090d]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/40 via-transparent to-transparent pointer-events-none" />

                {/* Top badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090d]/80 backdrop-blur-md border border-[#d99b38]/40 text-xs font-bold text-white uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    MB Veículos • Sumaré
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090d]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#d99b38] uppercase tracking-wider">
                    ★ Super Destaque
                  </span>
                </div>

                {/* Bottom title and approved badge */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-4 pointer-events-none">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d99b38] block mb-0.5">
                      Seminovo Selecionado
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                      Qualidade & Procedência Garantida
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold backdrop-blur-md">
                      Laudo 100% Aprovado
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card with Inspection & Direct WhatsApp Negotation */}
            <div className="p-4 rounded-xl bg-[#12151e] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">
                      Laudo Cautelar Pericial
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      100% Aprovado
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">
                    Estrutura original, sem sinistros e sem leilão.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Olá! Vi o veículo em destaque na página da MB Veículos e gostaria de mais informações e proposta."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 transition shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Numerical Strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl font-bold text-white tabular-nums block">
              +{STORE_INFO.yearsActive} anos
            </span>
            <span className="text-xs text-[#9ca3af]">
              Tradição e seriedade em Sumaré
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl font-bold text-[#d99b38] tabular-nums block">
              {STORE_INFO.googleRating}
            </span>
            <span className="text-xs text-[#9ca3af]">
              Nota média no Google Business
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl font-bold text-[#60a5fa] tabular-nums block">
              5/5
            </span>
            <span className="text-xs text-[#9ca3af]">
              Avaliação máxima no Facebook
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl font-bold text-[#10b981] tabular-nums block">
              100%
            </span>
            <span className="text-xs text-[#9ca3af]">
              Laudos cautelares periciados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
