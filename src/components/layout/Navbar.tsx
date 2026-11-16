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
    { label: "Venda seu carro", href: "#vender" },
    { label: "Financiamento", href: "#financiamento" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Sobre a MB", href: "#sobre" },
    { label: "Contato e localização", href: "#contato" },
  ];

  return (
    <>
      {/* Top Banner (Address, hours and primary contact) */}
      <div className="bg-[#0b0c10] text-[#9ca3af] text-xs border-b border-white/[0.06] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#d1d5db]">
              <MapPin className="w-3.5 h-3.5 text-[#d99b38]" />
              Av. Rebouças, 1820 - Sumaré / SP
            </span>
            <span className="flex items-center gap-1.5 text-[#9ca3af]">
              <Clock className="w-3.5 h-3.5 text-[#9ca3af]" />
              Seg a sex: 08:30 às 18:00 | Sáb: 08:30 às 13:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-[#d1d5db] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9ca3af]" />
              <span className="tabular-nums">{STORE_INFO.phonePrimary}</span>
            </a>
            <span className="text-[#374151]">|</span>
            <span className="text-[#10b981] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Atendimento WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-[background-color,border-color,padding] duration-150 ${
          isScrolled
            ? "bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/[0.08] py-3"
            : "bg-transparent py-4 border-b border-white/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo MB Veículos */}
          <a href="#" className="flex items-center">
            <div className="bg-white px-3 py-1.5 rounded-lg border border-white/20 hover:bg-neutral-100 transition-colors flex items-center">
              <Image
                src="/logo-mb-veiculos.png"
                alt="MB Veículos - Sumaré"
                width={150}
                height={32}
                className="h-7 sm:h-8 w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
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
                className="text-sm text-[#9ca3af] hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Olá, gostaria de falar com um consultor da MB Veículos."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a1e26] hover:bg-[#232733] text-[#d1d5db] hover:text-white font-medium text-xs px-3.5 py-2 rounded-lg border border-white/[0.08] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#10b981]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#vender"
              className="inline-flex items-center gap-1.5 bg-[#d99b38] hover:bg-[#e4a844] text-[#0d0f12] font-semibold text-xs px-3.5 py-2 rounded-lg transition-colors"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Avaliar meu carro</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9ca3af] hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d0f12] border-b border-white/[0.08] px-5 py-5 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#d1d5db] hover:text-white flex items-center justify-between py-2.5 border-b border-white/[0.04]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#6b7280]" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#10b981] hover:bg-[#059669] text-white text-center font-medium text-xs rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
              <a
                href={`tel:${STORE_INFO.phonePrimary.replace(/\D/g, "")}`}
                className="w-full py-2.5 bg-[#13161c] border border-white/[0.08] text-[#d1d5db] text-center font-medium text-xs rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9ca3af]" />
                Ligar ({STORE_INFO.phonePrimary})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
