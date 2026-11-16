"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { SellCarSection } from "@/components/sell/SellCarSection";
import { FinanceSimulatorSection } from "@/components/finance/FinanceSimulatorSection";
import { TrustDifferentialsSection } from "@/components/trust/TrustDifferentialsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { LocationSection } from "@/components/location/LocationSection";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <div suppressHydrationWarning className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Remotion Kinetic Animation of carro.jpeg */}
        <HeroSection />

        {/* Sell / Trade-in Instant Valuation */}
        <SellCarSection />

        {/* Interactive Auto Financing Simulator */}
        <FinanceSimulatorSection initialVehiclePrice={120000} />

        {/* Trust Pillars & Quality Assurance */}
        <TrustDifferentialsSection />

        {/* About MB Veículos & Customer Reviews */}
        <AboutSection />

        {/* Store Physical Location, Schedule & Contacts */}
        <LocationSection />
      </main>

      {/* Complete Luxury Footer */}
      <Footer />

      {/* Pulsing Floating WhatsApp Widget */}
      <WhatsAppFloat />
    </div>
  );
}
