import React from "react";
import { STORE_INFO } from "@/data/mock-vehicles";

export const JsonLd: React.FC = () => {
  const baseUrl = "https://mbveiculos.com";

  // 1. AutoDealer / LocalBusiness Schema for Google Search, Maps & Generative AI (GEO/AGE)
  const autoDealerSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${baseUrl}/#autodealer`,
    name: "MB Veículos",
    alternateName: ["MB Veículos Sumaré", "MB Veiculos Multimarcas"],
    url: baseUrl,
    logo: `${baseUrl}/logo-mb-veiculos.png`,
    image: [
      `${baseUrl}/fachada-loja.jpg`,
      `${baseUrl}/carro.jpg`,
    ],
    description:
      "Loja e revenda de veículos seminovos em Sumaré - SP. Seminovos selecionados com Laudo Cautelar 100% aprovado, garantia de motor e câmbio, financiamento em até 60x e compra de veículos com PIX imediato.",
    telephone: STORE_INFO.phonePrimary,
    email: STORE_INFO.email,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "PIX, Financiamento Bancário, Cartão de Crédito, Transferência Bancária, Dinheiro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Rebouças, 1820",
      addressLocality: "Sumaré",
      addressRegion: "SP",
      postalCode: "13170-540",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.8005391,
      longitude: -47.2721868,
    },
    hasMap: STORE_INFO.googleMapsUrl,
    areaServed: [
      { "@type": "City", name: "Sumaré" },
      { "@type": "City", name: "Campinas" },
      { "@type": "City", name: "Americana" },
      { "@type": "City", name: "Hortolândia" },
      { "@type": "City", name: "Nova Odessa" },
      { "@type": "City", name: "Paulínia" },
      { "@type": "AdministrativeArea", name: "Região Metropolitana de Campinas (RMC)" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "380",
    },
    sameAs: [
      "https://maps.google.com/?q=Av.+Rebouças,+1820+-+Jardim+Alvorada,+Sumaré+-+SP",
      "https://www.facebook.com",
      "https://www.instagram.com",
    ],
  };

  // 2. FAQPage Schema for Answer Engine Optimization (AEO & Google AI Overviews)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona a compra e venda de veículos na MB Veículos em Sumaré?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A MB Veículos atua na compra, venda e troca de automóveis seminovos em Sumaré - SP. Para quem deseja vender, realizamos avaliação transparente em até 30 minutos com pagamento imediato via PIX e quitação de débitos. Para quem deseja comprar, oferecemos veículos 100% periciados com laudo cautelar aprovado e garantia de procedência.",
        },
      },
      {
        "@type": "Question",
        name: "Todos os veículos possuem Laudo Cautelar e garantia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, 100% do nosso estoque passa por perícia técnica cautelar minuciosa que certifica a originalidade da estrutura, longarinas, ausência de sinistros, leilões e histórico de enchente. Além disso, todos os veículos contam com garantia legal e contratual de motor e câmbio.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o financiamento de veículos na MB Veículos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabalhamos em parceria direta com as maiores instituições financeiras do Brasil, como Santander Financiamentos, BV Financeira, Itaú Veículos, Bradesco e Banco PAN. É possível simular e aprovar o crédito com ou sem entrada, parcelando em até 60 vezes com taxas competitivas e carência de até 60 dias para a 1ª parcela.",
        },
      },
      {
        "@type": "Question",
        name: "A MB Veículos aceita meu carro usado na troca? O que é troca com troco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Aceitamos seu veículo usado como parte do pagamento com uma das melhores avaliações da Região Metropolitana de Campinas. Na modalidade 'Troca com Troco', você pode trocar seu veículo por outro de menor valor ou renegociar o saldo e sair com a diferença em dinheiro na sua conta bancária na hora.",
        },
      },
      {
        "@type": "Question",
        name: "Onde fica a loja física da MB Veículos e qual o horário de funcionamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A MB Veículos está localizada na Av. Rebouças, 1820 - Jardim Alvorada / Centro, Sumaré - SP (CEP: 13170-540). O horário de atendimento presencial é de segunda a sexta-feira, das 08:30 às 18:00, e aos sábados, das 08:30 às 13:00, contando também com plantão online via WhatsApp.",
        },
      },
    ],
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "MB Veículos",
    description: "Seminovos selecionados, compra, venda e financiamento em Sumaré - SP",
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
