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
    <html lang="pt-BR" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
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
