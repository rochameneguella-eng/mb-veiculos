"use client";

import React from "react";
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
    <footer className="bg-[#050608] text-gray-400 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-black font-black text-xl tracking-tighter">MB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white">
                  MB VEÍCULOS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold -mt-1">
                  Sumaré • SP
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Tradição, transparência e segurança na compra e venda de veículos seminovos. Laudo cautelar pericial aprovado e as melhores condições de financiamento do interior paulista.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Loja Verificada
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#estoque" className="hover:text-amber-400 transition">
                  Estoque de Seminovos
                </a>
              </li>
              <li>
                <a href="#vender" className="hover:text-amber-400 transition">
                  Venda ou Troque Seu Veículo
                </a>
              </li>
              <li>
                <a href="#financiamento" className="hover:text-amber-400 transition">
                  Simulação de Financiamento
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-amber-400 transition">
                  Diferenciais & Laudo Cautelar
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition">
                  Sobre a MB Veículos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-amber-400 transition">
                  Localização e Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Banking Partners */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Financeiras Parceiras
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Santander Financiamentos</li>
              <li>• BV Financeira</li>
              <li>• Itaú Veículos</li>
              <li>• Bradesco Financiamentos</li>
              <li>• Banco PAN & Safra</li>
            </ul>

            <div className="mt-6">
              <span className="text-[11px] text-gray-500 block">
                Financiamentos sujeitos à análise de crédito pelos bancos correspondentes.
              </span>
            </div>
          </div>

          {/* Col 4: Store Info & Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Unidade Sumaré
            </h4>
            <div className="flex items-start gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}, Sumaré - SP</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{STORE_INFO.phonePrimary} / {STORE_INFO.phoneSecondary}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{STORE_INFO.email}</span>
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2 border border-white/5 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                Plantão WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and to-top button */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} MB Veículos Sumaré. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-amber-400 transition"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
