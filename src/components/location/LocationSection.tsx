"use client";

import React from "react";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161a22] border border-white/[0.08] text-xs text-[#9ca3af]">
            <MapPin className="w-3.5 h-3.5 text-[#d99b38]" />
            <span>Loja física em Sumaré - SP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Venha conhecer nosso showroom
          </h2>
          <p className="text-[#9ca3af] text-sm">
            Estamos localizados na principal avenida de Sumaré, com estacionamento e fácil acesso pela rodovia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-5 rounded-xl bg-[#13161c] border border-white/[0.08]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1a1e26] border border-white/[0.06] flex items-center justify-center text-[#d99b38] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#9ca3af] block mb-0.5">
                    Endereço
                  </span>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-0.5 tabular-nums">
                    {STORE_INFO.city} — CEP: {STORE_INFO.cep}
                  </p>
                  <div className="mt-3">
                    <a
                      href={STORE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d99b38] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir no Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-5 rounded-xl bg-[#13161c] border border-white/[0.08]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1a1e26] border border-white/[0.06] flex items-center justify-center text-[#9ca3af] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <span className="font-medium text-[#9ca3af] block">
                    Horário de atendimento
                  </span>
                  <p className="font-semibold text-white">{STORE_INFO.hoursWeekday}</p>
                  <p className="text-[#9ca3af]">{STORE_INFO.hoursSaturday}</p>
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="p-5 rounded-xl bg-[#13161c] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-2 text-[#9ca3af]">
                  <Phone className="w-4 h-4 text-[#9ca3af]" />
                  <span>Telefone fixo</span>
                </div>
                <a
                  href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
                  className="font-semibold text-white hover:text-[#d99b38] tabular-nums transition-colors"
                >
                  {STORE_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-2 text-[#9ca3af]">
                  <MessageCircle className="w-4 h-4 text-[#10b981]" />
                  <span>WhatsApp comercial</span>
                </div>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#10b981] hover:underline tabular-nums"
                >
                  {STORE_INFO.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#9ca3af]">
                  <Mail className="w-4 h-4 text-[#9ca3af]" />
                  <span>E-mail</span>
                </div>
                <span className="text-[#d1d5db]">{STORE_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/[0.08] relative min-h-[360px] bg-[#0d0f12]">
            <iframe
              title="Mapa de localização MB Veículos Sumaré"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.07765103437!2d-47.2721868!3d-22.8005391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8990c74fb3be7%3A0xe7261ea681286c4f!2sAv.%20Rebou%C3%A7as%2C%201820%20-%20Jardim%20Alvorada%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-540!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px]"
            />

            {/* Map Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#0d0f12]/95 backdrop-blur-md p-3.5 rounded-lg border border-white/[0.1] flex items-center justify-between gap-4">
              <div className="text-xs">
                <span className="font-semibold text-white block">MB Veículos</span>
                <span className="text-[11px] text-[#9ca3af] block">Av. Rebouças, 1820 • Sumaré</span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-[#d99b38] hover:bg-[#e4a844] text-[#0d0f12] font-semibold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Traçar rota</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
