"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c0e14] text-[#9ca3af] pt-14 pb-10 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-3.5">
            <div className="inline-block bg-white px-3 py-1.5 rounded-lg border border-white/20">
              <Image
                src="/logo-mb-veiculos.png"
                alt="MB Veículos - Sumaré"
                width={140}
                height={30}
                className="h-7 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Tradição, transparência e segurança na compra, venda e troca de veículos seminovos. Laudo cautelar pericial aprovado e suporte direto na loja física em Sumaré.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141721] text-[#10b981] text-xs font-medium border border-white/[0.06]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Loja física verificada
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-3">
              Navegação rápida
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#vender" className="hover:text-white transition-colors">
                  Venda seu veículo (PIX na hora)
                </a>
              </li>
              <li>
                <a href="#financiamento" className="hover:text-white transition-colors">
                  Simulação de financiamento
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-white transition-colors">
                  Diferenciais e laudo cautelar
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a MB Veículos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Localização e horários
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Banking Partners */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-3">
              Financeiras parceiras
            </h3>
            <ul className="space-y-1.5 text-xs text-[#9ca3af]">
              <li>Santander Financiamentos</li>
              <li>BV Financeira</li>
              <li>Itaú Veículos</li>
              <li>Bradesco Financiamentos</li>
              <li>Banco PAN</li>
            </ul>

            <div className="mt-4">
              <span className="text-[11px] text-[#6b7280] block">
                Financiamentos sujeitos à análise e aprovação de crédito pelas instituições financeiras.
              </span>
            </div>
          </div>

          {/* Col 4: Store Info & Address */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-semibold text-white mb-3">
              Unidade Sumaré
            </h3>
            <div className="flex items-start gap-2 text-xs text-[#d1d5db]">
              <MapPin className="w-4 h-4 text-[#9ca3af] shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}, Sumaré - SP</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#d1d5db]">
              <Phone className="w-4 h-4 text-[#9ca3af] shrink-0" />
              <span className="tabular-nums">{STORE_INFO.phonePrimary} / {STORE_INFO.phoneSecondary}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#d1d5db]">
              <Mail className="w-4 h-4 text-[#9ca3af] shrink-0" />
              <span>{STORE_INFO.email}</span>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141721] hover:bg-[#1c2130] border border-white/[0.08] text-xs text-[#10b981] font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp de plantão</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <p>
            &copy; {new Date().getFullYear()} MB Veículos. Todos os direitos reservados. CNPJ regularizado em Sumaré - SP.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#9ca3af] hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
