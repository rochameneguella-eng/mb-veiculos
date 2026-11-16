"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Star,
  Quote,
  Building,
  Check,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rodrigo Almeida",
      city: "Sumaré - SP",
      car: "Jeep Compass 2022",
      rating: 5,
      comment:
        "Experiência de compra muito tranquila. O carro foi entregue impecável, com laudo cautelar 100% detalhado e higienização completa. Atendimento transparente do time.",
    },
    {
      name: "Mariana S. Fagundes",
      city: "Campinas - SP",
      car: "Toyota Corolla",
      rating: 5,
      comment:
        "Avaliação justa no meu usado. O processo de troca foi transparente e o financiamento foi aprovado com rapidez pelas opções bancárias da loja.",
    },
    {
      name: "Carlos Eduardo Mendes",
      city: "Americana - SP",
      car: "Ford Ranger",
      rating: 5,
      comment:
        "Loja de confiança com pessoas sérias. Sem taxas ocultas nem surpresas na documentação. O combinado na negociação foi cumprido à risca.",
    },
  ];

  return (
    <section id="sobre" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
              <Building className="w-3.5 h-3.5 text-[#d99b38]" />
              <span>Nossa trajetória</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Mais de {STORE_INFO.yearsActive} anos de tradição em Sumaré
            </h2>

            <p className="text-[#d1d5db] text-sm sm:text-base leading-relaxed">
              Fundada com o compromisso de trazer honestidade e clareza para o mercado de seminovos, a <strong>MB Veículos</strong> se consolidou como ponto de referência na principal avenida de Sumaré e em toda a Região Metropolitana de Campinas.
            </p>

            <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
              Cada veículo do showroom é selecionado individualmente, passando por laudo pericial cautelar, checagem minuciosa de quilometragem e histórico de manutenção antes de ser colocado à venda.
            </p>

            {/* Badges row */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-[#13161c] border border-white/[0.08] text-center">
                <span className="text-xl font-bold text-[#d99b38] block tabular-nums">
                  +{STORE_INFO.yearsActive} anos
                </span>
                <span className="text-[11px] text-[#9ca3af]">Em Sumaré</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#13161c] border border-white/[0.08] text-center">
                <span className="text-xl font-bold text-[#60a5fa] block tabular-nums">
                  5/5
                </span>
                <span className="text-[11px] text-[#9ca3af]">No Facebook</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#13161c] border border-white/[0.08] text-center">
                <span className="text-xl font-bold text-[#10b981] block tabular-nums">
                  100%
                </span>
                <span className="text-[11px] text-[#9ca3af]">Periciados</span>
              </div>
            </div>
          </div>

          {/* Right: Real Storefront Photo + Commitments */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#13161c] border border-white/[0.08] overflow-hidden space-y-4">
              <div
                className="relative w-full h-56 sm:h-64 bg-[#0a0c10]"
                style={{ position: "relative" }}
              >
                <Image
                  src="/fachada-loja.jpg"
                  alt="Fachada física da MB Veículos na Av. Rebouças, Sumaré"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 bg-[#0d0f12]/90 backdrop-blur-sm px-3 py-1.5 rounded border border-white/[0.1] text-xs text-[#d1d5db]">
                  <span className="font-semibold text-white">Loja física:</span> Av. Rebouças, 1820 - Sumaré / SP
                </div>
              </div>

              <div className="p-5 pt-1 space-y-2.5 text-xs text-[#9ca3af]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Documentação regularizada e livre de restrições ou gravames.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Veículos sem histórico de leilão, sinistro ou danos estruturais.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Garantia formalizada por escrito com suporte pós-venda direto da loja.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="text-center mb-8 space-y-2">
            <div className="flex items-center justify-center gap-1 text-[#d99b38]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d99b38] text-[#d99b38]" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Depoimentos de clientes
            </h3>
            <p className="text-xs text-[#9ca3af]">
              Avaliação de <strong>{STORE_INFO.googleRating} estrelas</strong> no Google Business e <strong>5/5</strong> no Facebook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between space-y-4"
              >
                <div>
                  <Quote className="w-5 h-5 text-[#6b7280] mb-2" />
                  <p className="text-xs text-[#d1d5db] leading-relaxed">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-[11px] text-[#9ca3af]">{item.city}</span>
                  </div>
                  <span className="text-[11px] text-[#6b7280]">{item.car}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
