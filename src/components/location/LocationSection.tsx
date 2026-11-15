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
    <section id="contato" className="py-20 relative bg-[#07080d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Loja Física em Sumaré - SP
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Venha Tomar um Café Conosco
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Estamos localizados em ponto nobre e de fácil acesso na principal avenida de Sumaré.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact & Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#12141d] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Endereço
                  </span>
                  <p className="text-base font-bold text-white leading-snug">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {STORE_INFO.city} — CEP: {STORE_INFO.cep}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <a
                      href={STORE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Google Maps
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                      href="https://waze.com/ul?q=Av.+Rebouças,+1820+-+Sumaré"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#12141d] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Horário de Funcionamento
                  </span>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between text-gray-300">
                      <span>{STORE_INFO.hoursWeekday}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span>{STORE_INFO.hoursSaturday}</span>
                    </div>
                    <div className="text-xs text-amber-400/80 pt-1 font-medium">
                      * Plantão de atendimento online via WhatsApp aos domingos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Phones Card */}
            <div className="p-6 rounded-2xl bg-[#12141d] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Fale Conosco
                  </span>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <a
                      href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold text-center border border-white/5 transition"
                    >
                      {STORE_INFO.phonePrimary}
                    </a>
                    <a
                      href={`tel:${STORE_INFO.phoneSecondary.replace(/\D/g, "")}`}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold text-center border border-white/5 transition"
                    >
                      {STORE_INFO.phoneSecondary}
                    </a>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{STORE_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[380px]">
            <iframe
              title="Mapa de Localização MB Veículos Sumaré"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.07765103437!2d-47.2721868!3d-22.8005391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8990c74fb3be7%3A0xe7261ea681286c4f!2sAv.%20Rebou%C3%A7as%2C%201820%20-%20Jardim%20Alvorada%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-540!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px]"
            />

            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0e1017]/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black text-white block">MB Veículos</span>
                <span className="text-[11px] text-gray-400 block">Av. Rebouças, 1820 • Sumaré</span>
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1 transition"
              >
                <span>Traçar Rota</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
