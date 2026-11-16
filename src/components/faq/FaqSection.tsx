"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck } from "lucide-react";
import { STORE_INFO } from "@/data/mock-vehicles";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "compra-venda",
    category: "Negociação",
    question: "Como funciona a compra e venda de veículos na MB Veículos em Sumaré?",
    answer:
      "A MB Veículos atua na compra, venda e troca de automóveis seminovos em Sumaré - SP. Para quem deseja vender, realizamos avaliação transparente em até 30 minutos com pagamento imediato via PIX e quitação de eventuais débitos/financiamentos. Para quem deseja comprar, oferecemos veículos 100% periciados com laudo cautelar aprovado e garantia de procedência.",
  },
  {
    id: "laudo-cautelar",
    category: "Garantia & Procedência",
    question: "Todos os veículos possuem Laudo Cautelar e garantia?",
    answer:
      "Sim, 100% do nosso estoque passa por perícia técnica cautelar minuciosa que certifica a originalidade da estrutura, longarinas, ausência de sinistros, leilões e histórico de enchente. Além disso, todos os veículos contam com garantia legal e contratual de motor e câmbio, além de revisão preventiva de entrega.",
  },
  {
    id: "financiamento",
    category: "Financiamento",
    question: "Como funciona o financiamento de veículos na MB Veículos?",
    answer:
      "Trabalhamos em parceria direta com as maiores instituições financeiras do Brasil: Santander Financiamentos, BV Financeira, Itaú Veículos, Bradesco e Banco PAN. É possível simular e aprovar o crédito com ou sem entrada, parcelando em até 60 vezes com taxas competitivas e carência de até 60 dias para a 1ª parcela.",
  },
  {
    id: "troca-com-troco",
    category: "Troca",
    question: "A MB Veículos aceita meu carro usado na troca? O que é troca com troco?",
    answer:
      "Sim! Aceitamos seu veículo usado como parte do pagamento com uma das melhores avaliações da Região Metropolitana de Campinas. Na modalidade 'Troca com Troco', você pode trocar seu veículo por outro de menor valor ou renegociar o saldo e sair com a diferença em dinheiro na sua conta bancária na hora.",
  },
  {
    id: "localizacao-horarios",
    category: "Atendimento & Loja Física",
    question: "Onde fica a loja física da MB Veículos e qual o horário de funcionamento?",
    answer:
      "A MB Veículos está localizada na Av. Rebouças, 1820 - Jardim Alvorada / Centro, Sumaré - SP (CEP: 13170-540), com estacionamento próprio no local. Nosso atendimento presencial é de segunda a sexta-feira, das 08:30 às 18:00, e aos sábados, das 08:30 às 13:00. Também mantemos plantão online 24h via WhatsApp.",
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("compra-venda");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsappHelpUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Estive no site da MB Veículos e gostaria de tirar uma dúvida sobre compra, venda ou financiamento."
  )}`;

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-white/[0.06] bg-[#0f1218] relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d99b38]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181c27] border border-white/[0.08] text-xs text-[#d99b38] font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9ca3af] max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre compra, venda, avaliação imediata, laudo cautelar e financiamento na MB Veículos em Sumaré.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#181c28] border-[#d99b38]/40 shadow-xl shadow-black/40"
                    : "bg-[#141721] border-white/[0.06] hover:border-white/[0.12] hover:bg-[#181c28]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d99b38]">
                      {item.category}
                    </span>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#d99b38] text-black rotate-180"
                        : "bg-white/[0.06] text-[#9ca3af]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-[#9ca3af] leading-relaxed border-t border-white/[0.04]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141721] via-[#1a1f2e] to-[#141721] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Ainda tem alguma dúvida específica?
              </h4>
              <p className="text-xs sm:text-sm text-[#9ca3af]">
                Nossos consultores especializados estão online para te atender agora.
              </p>
            </div>
          </div>

          <a
            href={whatsappHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com Consultor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
