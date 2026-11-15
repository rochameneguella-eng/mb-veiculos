"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO, MOCK_VEHICLES } from "@/data/mock-vehicles";
import {
  ShieldCheck,
  Star,
  Search,
  ArrowRight,
  Check,
  BadgeDollarSign,
  FileCheck2,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const featuredCar = MOCK_VEHICLES[0]; // Jeep Compass

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(featuredCar.price);

  return (
    <section className="relative pt-8 pb-16 border-b border-white/[0.06]">
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
              <strong>{STORE_INFO.googleRating}</strong> no Google Business
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#d1d5db]">
            <span className="font-semibold text-[#60a5fa]">5/5</span>
            <span>no Facebook</span>
          </div>
        </div>

        {/* Hero Grid: Split Headline + Real Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clear, deliberate copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Seu próximo carro com procedência garantida em Sumaré
            </h1>

            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
              Veículos seminovos inspecionados com laudo cautelar 100% aprovado, revisão mecânica preventiva, garantia de fábrica ou loja e condições diretas de financiamento.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#estoque"
                className="px-5 py-2.5 rounded-lg bg-[#d99b38] hover:bg-[#e4a844] text-[#0d0f12] font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Ver estoque disponível</span>
              </a>

              <a
                href="#financiamento"
                className="px-5 py-2.5 rounded-lg bg-[#14171d] hover:bg-[#1b1e26] border border-white/[0.08] text-[#d1d5db] hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <BadgeDollarSign className="w-4 h-4 text-[#d99b38]" />
                <span>Simular financiamento</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Laudo cautelar aprovado</span>
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

          {/* Right Column: Grounded Product Moment (Featured Vehicle with Cautelar Certificate) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#13161c] border border-white/[0.08] overflow-hidden">
              {/* Image Frame */}
              <div className="relative w-full h-56 sm:h-64 bg-[#0a0c10]">
                <Image
                  src={featuredCar.featuredImage}
                  alt={featuredCar.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#0d0f12]/90 backdrop-blur-sm border border-white/[0.1] text-xs font-medium text-[#d99b38]">
                    Destaque do showroom
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded bg-[#0d0f12]/90 backdrop-blur-sm border border-white/[0.1] text-xs font-medium text-[#d1d5db]">
                    {featuredCar.yearModel}
                  </span>
                </div>
              </div>

              {/* Details & Inspection Highlights */}
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-white leading-snug">
                      {featuredCar.title}
                    </h2>
                    <p className="text-xs text-[#9ca3af] mt-0.5">
                      {featuredCar.version}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-white tabular-nums block">
                      {formattedPrice}
                    </span>
                    <span className="text-[11px] text-[#9ca3af] tabular-nums">
                      {new Intl.NumberFormat("pt-BR").format(featuredCar.km)} km
                    </span>
                  </div>
                </div>

                {/* Technical Cautelar Status Box */}
                <div className="p-3 rounded-lg bg-[#0d0f12] border border-white/[0.06] space-y-1.5 text-xs text-[#9ca3af]">
                  <div className="flex items-center justify-between text-[#d1d5db] font-medium pb-1 border-b border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-xs">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#10b981]" />
                      Laudo pericial cautelar
                    </span>
                    <span className="text-[11px] text-[#10b981] font-semibold">100% Aprovado</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Estrutura e longarinas</span>
                    <span className="text-[#9ca3af]">Originais de fábrica</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Histórico de sinistro / leilão</span>
                    <span className="text-[#9ca3af]">Nenhum registro</span>
                  </div>
                </div>

                <a
                  href={`#estoque`}
                  className="w-full py-2.5 rounded-lg bg-[#1a1e26] hover:bg-[#232733] border border-white/[0.08] text-[#d1d5db] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Ver detalhes deste veículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Numerical Strip (Tabular numbers, no exaggerated claims) */}
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
