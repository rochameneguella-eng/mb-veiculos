"use client";

import React from "react";
import {
  ShieldCheck,
  Wrench,
  FileCheck2,
  BadgeDollarSign,
  Repeat,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

export const TrustDifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Laudo Cautelar 100% Aprovado",
      description:
        "Todos os nossos veículos passam por rigorosa perícia técnica. Garantia contra sinistros, histórico de leilão e adulterações estruturais.",
      highlight: "Perícia Certificada",
    },
    {
      icon: Wrench,
      title: "Revisão de 100+ Itens",
      description:
        "Inspeção minuciosa de suspensão, freios, parte elétrica, ar-condicionado e fluidos antes de qualquer entrega.",
      highlight: "Pronto para Rodar",
    },
    {
      icon: FileCheck2,
      title: "Garantia Mecânica Completa",
      description:
        "Garantia por escrito de motor e câmbio, com possibilidade de extensão de cobertura para sua total segurança.",
      highlight: "Tranquilidade Total",
    },
    {
      icon: Repeat,
      title: "A Melhor Avaliação no Seu Usado",
      description:
        "Pagamos preço justo pelo seu seminovo na troca ou na compra direta. Aceitamos veículos como entrada com opção de troca com troco.",
      highlight: "Avaliação Justa",
    },
    {
      icon: BadgeDollarSign,
      title: "Taxas de Financiamento Exclusivas",
      description:
        "Parceria estratégica com os maiores bancos (Santander, Itaú, BV) permitindo aprovação rápida e prazos de até 60 parcelas.",
      highlight: "Até 60x",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Consultivo e Honesto",
      description:
        "Mais de 16 anos construindo amizades e relações duradouras com nossos clientes em Sumaré e em todo o interior paulista.",
      highlight: "16+ Anos em Sumaré",
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-[#0a0b10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            Padrão de Excelência MB
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Por Que Escolher a MB Veículos?
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Comprar ou vender um carro é uma decisão importante. Veja como garantimos segurança e transparência em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[#13151f] to-[#0d0e14] border border-white/5 hover:border-amber-500/30 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {diff.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
