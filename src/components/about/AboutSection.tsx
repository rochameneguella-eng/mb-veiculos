"use client";

import React from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle,
  Building,
  Users,
  Award,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rodrigo Almeida",
      city: "Sumaré - SP",
      car: "Comprou Jeep Compass 2022",
      rating: 5,
      comment:
        "Melhor experiência de compra que já tive. O carro veio impecável, com laudo cautelar 100% detalhado e polimento de primeira. Atendimento nota 10 do time da MB Veículos!",
    },
    {
      name: "Mariana S. Fagundes",
      city: "Campinas - SP",
      car: "Vendeu Toyota Yaris e comprou Corolla",
      rating: 5,
      comment:
        "Fizeram a melhor avaliação no meu usado em toda a região de Campinas e Sumaré. Todo o processo de troca foi transparente e o financiamento foi aprovado no mesmo dia.",
    },
    {
      name: "Carlos Eduardo Mendes",
      city: "Americana - SP",
      car: "Comprou Ford Ranger Limited",
      rating: 5,
      comment:
        "Loja de confiança com pessoas sérias. Não tem pegadinha nem taxa oculta. O que prometeram cumpriram à risca. Recomendo de olhos fechados!",
    },
  ];

  return (
    <section id="sobre" className="py-20 relative bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              Nossa Trajetória
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Mais de {STORE_INFO.yearsActive} anos construindo histórias sobre quatro rodas.
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Fundada com o compromisso de trazer honestidade e tranquilidade para o mercado de seminovos, a <strong>MB Veículos</strong> se consolidou como uma das lojas mais tradicionais e respeitadas de Sumaré e de toda a Região Metropolitana de Campinas.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Aqui, cada carro é selecionado a dedo. Antes de entrar em nosso showroom, passa por laudo cautelar pericial, revisão preventiva minuciosa e preparação estética profissional. Nosso objetivo não é apenas vender um automóvel, mas realizar seu sonho com procedência e segurança.
            </p>

            {/* Badges row */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-xl sm:text-2xl font-black text-amber-400 block">
                  +{STORE_INFO.yearsActive} Anos
                </span>
                <span className="text-[11px] text-gray-400">Em Sumaré</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-xl sm:text-2xl font-black text-blue-400 block">
                  5/5
                </span>
                <span className="text-[11px] text-gray-400">No Facebook</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                  100%
                </span>
                <span className="text-[11px] text-gray-400">Laudos Periciados</span>
              </div>
            </div>
          </div>

          {/* Right: Dealership Quality Visual Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#141722] to-[#0c0e14] border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Compromisso MB Veículos</h3>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Certificação de Procedência
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Documentação 100% livre de ônus, multas ou restrições judiciais.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Histórico veicular verificado junto aos órgãos de trânsito e seguradoras.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Veículos sem histórico de leilão, furto, roubo ou enchente.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Atendimento pós-venda humanizado com suporte ágil para garantia.</span>
                </div>
              </div>

              {/* Location Banner inside card */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Visite nosso showroom:</span>
                  <span className="text-sm font-bold text-white">Av. Rebouças, 1820 - Sumaré / SP</span>
                </div>
                <a
                  href="#contato"
                  className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-xs font-bold border border-amber-500/30 transition"
                >
                  Como Chegar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              O Que Dizem Nossos Clientes
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Avaliação <strong>{STORE_INFO.googleRating} estrelas</strong> no Google Business • <strong>5/5</strong> no Facebook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#11131c] border border-white/5 relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-500/30 mb-3" />
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <span className="text-xs text-amber-400/90 block">{item.car}</span>
                    </div>
                    <span className="text-[11px] text-gray-500">{item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
