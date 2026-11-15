import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MB Veículos | Seminovos Selecionados, Compra e Venda em Sumaré - SP",
  description:
    "Compre ou venda seu veículo na MB Veículos em Sumaré - SP. Seminovos com Laudo Cautelar 100% aprovado, garantia mecânica, financiamento em até 60x e troca com troco.",
  keywords: [
    "MB Veículos",
    "carros em Sumaré",
    "seminovos Sumaré",
    "comprar carro Sumaré",
    "vender carro Sumaré",
    "financiamento automotivo",
    "laudo cautelar",
    "troca com troco",
  ],
  openGraph: {
    title: "MB Veículos | Seminovos Selecionados em Sumaré - SP",
    description:
      "A sua melhor escolha em veículos seminovos com laudo cautelar aprovado e garantia de procedência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#0d0f12] text-[#f3f4f6] antialiased selection:bg-[#d99b38] selection:text-[#0d0f12]">
        {children}
      </body>
    </html>
  );
}
