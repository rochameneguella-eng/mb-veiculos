"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { STORE_INFO } from "@/data/mock-vehicles";
import {
  Car,
  Phone,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Estoque", href: "#estoque" },
    { label: "Venda Seu Carro", href: "#vender" },
    { label: "Financiamento", href: "#financiamento" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato & Localização", href: "#contato" },
  ];

  return (
    <>
      {/* Top Banner (Sumaré announcement & direct phone) */}
      <div className="bg-[#0b0d14] text-gray-400 text-xs border-b border-white/5 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Av. Rebouças, 1820 - Sumaré / SP
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Seg a Sex: 08:30 às 18:00 | Sáb: 08:30 às 13:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{STORE_INFO.phonePrimary}</span>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Plantão WhatsApp Ativo
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo MB Veículos (Original da Loja Física) */}
          <a href="#" className="flex items-center group">
            <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-white/20 hover:bg-gray-50 transition flex items-center">
              <Image
                src="/logo-mb-veiculos.png"
                alt="MB Veículos - Sumaré"
                width={170}
                height={35}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Olá! Acessei o site da MB Veículos e gostaria de tirar uma dúvida com um consultor."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#estoque"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <Car className="w-4 h-4" />
              <span>Ver Estoque</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e1018] border-b border-white/10 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-amber-400 flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white text-center font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Falar pelo WhatsApp
              </a>
              <a
                href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
                className="w-full py-3 bg-white/5 border border-white/10 text-gray-200 text-center font-medium rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                Ligar ({STORE_INFO.phonePrimary})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
