"use client";

import React from "react";
import {
  ShieldCheck,
  Wrench,
  FileCheck2,
  BadgeDollarSign,
  Repeat,
  HeartHandshake,
} from "lucide-react";

export const TrustDifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Laudo cautelar 100% aprovado",
      description:
        "Todos os nossos veículos passam por perícia técnica especializada. Garantia contra sinistros, histórico de leilão ou adulterações estruturais.",
      highlight: "Perícia certificada",
    },
    {
      icon: Wrench,
      title: "Revisão preventiva completa",
      description:
        "Inspeção técnica de suspensão, freios, parte elétrica, ar-condicionado e fluidos antes de qualquer entrega.",
      highlight: "Pronto para rodar",
    },
    {
      icon: FileCheck2,
      title: "Garantia mecânica formalizada",
      description:
        "Garantia por escrito de motor e câmbio, com suporte técnico ágil e possibilidade de cobertura estendida.",
      highlight: "Segurança total",
    },
    {
      icon: Repeat,
      title: "Avaliação justa no seu usado",
      description:
        "Proposta transparente com base no mercado real para troca ou compra direta. Opção de troca com troco na hora.",
      highlight: "Troca com troco",
    },
    {
      icon: BadgeDollarSign,
      title: "Taxas diretas com bancos parceiros",
      description:
        "Integração com Santander, Itaú e BV Financeira para agilidade na análise de crédito e prazos em até 60 parcelas.",
      highlight: "Até 60x",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento consultivo e transparente",
      description:
        "Mais de 16 anos atuando com respeito, clareza e credibilidade junto aos clientes de Sumaré e da Região Metropolitana de Campinas.",
      highlight: "16+ anos em Sumaré",
    },
  ];

  return (
    <section id="vantagens" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d99b38]" />
            <span>Padrão de qualidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Por que escolher a MB Veículos
          </h2>
          <p className="text-[#9ca3af] text-sm">
            Comprar ou vender um automóvel exige segurança. Conheça os pilares que garantem tranquilidade em cada negociação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#13161c] border border-white/[0.08] hover:border-white/[0.16] transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1e26] border border-white/[0.06] flex items-center justify-center text-[#d99b38]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-[#9ca3af] bg-[#0d0f12] px-2.5 py-1 rounded border border-white/[0.06]">
                      {diff.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
