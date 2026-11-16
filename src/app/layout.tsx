import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbveiculos.com"),
  title: "MB Veículos | Seminovos com Laudo Cautelar Aprovado em Sumaré - SP",
  description:
    "Compre ou venda seu veículo na MB Veículos em Sumaré - SP. Seminovos selecionados com Laudo Cautelar 100% aprovado, garantia, financiamento facilitado em até 60x e troca com troco com pagamento via PIX.",
  keywords: [
    "MB Veículos",
    "MB Veículos Sumaré",
    "carros em Sumaré",
    "seminovos Sumaré",
    "comprar carro Sumaré",
    "vender carro Sumaré",
    "loja de carros Sumaré",
    "revenda de veículos Sumaré SP",
    "financiamento de carros Sumaré",
    "laudo cautelar 100% aprovado",
    "troca com troco Sumaré",
    "carros usados Campinas e Sumaré",
  ],
  authors: [{ name: "MB Veículos", url: "https://mbveiculos.com" }],
  creator: "MB Veículos",
  publisher: "MB Veículos",
  alternates: {
    canonical: "https://mbveiculos.com",
  },
  openGraph: {
    title: "MB Veículos | Seminovos com Laudo Cautelar Aprovado em Sumaré - SP",
    description:
      "A melhor escolha em veículos seminovos em Sumaré e RMC: laudo pericial 100% aprovado, revisão, financiamento em até 60x e pagamento imediato via PIX.",
    url: "https://mbveiculos.com",
    siteName: "MB Veículos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/carro.jpg",
        width: 1200,
        height: 630,
        alt: "MB Veículos - Seminovos Selecionados em Sumaré",
      },
      {
        url: "/fachada-loja.jpg",
        width: 1200,
        height: 800,
        alt: "Loja física MB Veículos em Sumaré - SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Veículos | Seminovos Selecionados em Sumaré - SP",
    description:
      "Seminovos periciados com Laudo Cautelar 100% aprovado, garantia mecânica e financiamento em até 60x em Sumaré.",
    images: ["/carro.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Sumaré",
    "geo.position": "-22.8005391;-47.2721868",
    "ICBM": "-22.8005391, -47.2721868",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(el) {
                    if (el && el.removeAttribute) {
                      if (el.hasAttribute('bis_skin_checked')) el.removeAttribute('bis_skin_checked');
                      if (el.hasAttribute('bis_register')) el.removeAttribute('bis_register');
                    }
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        clean(m.target);
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node.nodeType === 1) {
                            clean(node);
                            if (node.querySelectorAll) {
                              var items = node.querySelectorAll('[bis_skin_checked],[bis_register]');
                              for (var k = 0; k < items.length; k++) clean(items[k]);
                            }
                          }
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register'],
                    childList: true,
                    subtree: true
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#090a0f] text-gray-100 antialiased selection:bg-amber-500 selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
