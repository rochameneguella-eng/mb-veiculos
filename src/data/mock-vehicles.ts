import { Vehicle } from "@/types/vehicle";

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: "jeep-compass-2023",
    title: "Jeep Compass",
    version: "Longitude 1.3 Turbo T270 Flex Aut.",
    category: "suv",
    brand: "Jeep",
    yearModel: "2023/2023",
    km: 24500,
    transmission: "Automático",
    fuel: "Flex",
    price: 148900,
    monthlyEstimate: 1890,
    plateEnd: "8",
    color: "Cinza Granite Metálico",
    engine: "1.3 Turbo 185cv",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Laudo 100% Aprovado", "Único Dono", "Garantia de Fábrica"],
    highlight: "Interior em couro premium e central de 10.1'' com Apple CarPlay sem fio",
    features: [
      "Quadro de instrumentos digital 7 polegadas",
      "Faróis Full LED com assinatura DRL",
      "Ar-condicionado digital Dual Zone",
      "Sensor de ponto cego e alerta de mudança de faixa",
      "Câmera de ré e sensores dianteiros/traseiros",
      "Rodas de liga leve aro 18 diamantadas"
    ]
  },
  {
    id: "toyota-corolla-hybrid-2022",
    title: "Toyota Corolla",
    version: "Altis Premium 1.8 Hybrid Flex CVT",
    category: "sedan",
    brand: "Toyota",
    yearModel: "2022/2022",
    km: 38200,
    transmission: "CVT",
    fuel: "Híbrido",
    price: 142500,
    monthlyEstimate: 1780,
    plateEnd: "4",
    color: "Branco Pérola",
    engine: "1.8 Híbrido Autorecarregável",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Super Econômico", "Todas Revisões na Toyota", "IPVA Pago"],
    highlight: "Consumo de até 18 km/l na cidade com pacote Toyota Safety Sense completo",
    features: [
      "Controle de cruzeiro adaptativo (ACC)",
      "Teto solar elétrico com acionamento one-touch",
      "Bancos elétricos revestidos em couro claro",
      "Frenagem autônoma de emergência",
      "7 Airbags e nota máxima Latin NCAP",
      "Carregador de celular por indução"
    ]
  },
  {
    id: "bmw-320i-msport-2023",
    title: "BMW 320i",
    version: "2.0 TwinPower M Sport ActiveFlex",
    category: "premium",
    brand: "BMW",
    yearModel: "2023/2023",
    km: 19800,
    transmission: "Automático",
    fuel: "Flex",
    price: 298000,
    monthlyEstimate: 3690,
    plateEnd: "9",
    color: "Preto Sapphire Metálico",
    engine: "2.0 Turbo 184cv Traseira",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Pacote M Sport Original", "Estado de Zero Km", "Laudo Pericial A+"],
    highlight: "Display BMW Curved Screen gigante com sistema iDrive 8 e volante M",
    features: [
      "Cockpit Curvado BMW Live Cockpit Professional",
      "Volante M esportivo em couro com paddle shifts",
      "Sistema de som Harman Kardon surround",
      "Faróis Full LED adaptativos",
      "Suspensão M Sport calibrada",
      "Chave presencial com abertura de porta-malas por aproximação"
    ]
  },
  {
    id: "vw-tcross-highline-2023",
    title: "Volkswagen T-Cross",
    version: "Highline 250 TSI 1.4 Turbo Flex Aut.",
    category: "suv",
    brand: "Volkswagen",
    yearModel: "2023/2023",
    km: 27900,
    transmission: "Automático",
    fuel: "Flex",
    price: 129900,
    monthlyEstimate: 1620,
    plateEnd: "1",
    color: "Azul Norway Metálico",
    engine: "1.4 250 TSI 150cv",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Painel Active Info Display", "Revisado", "Excelente Custo/Benefício"],
    highlight: "Potente motor 1.4 TSI com teto solar panorâmico Sky View e painel digital",
    features: [
      "Painel 100% digital Active Info Display 10.25''",
      "Teto solar panorâmico elétrico",
      "Park Assist 3.0 (estacionamento autônomo)",
      "Sistema multimídia VW Play de 10 polegadas",
      "Seletor de modos de condução",
      "Detector de fadiga e sensor de pressão dos pneus"
    ]
  },
  {
    id: "ford-ranger-limited-2023",
    title: "Ford Ranger",
    version: "Limited 3.0 V6 Turbo Diesel 4x4 Aut.",
    category: "picape",
    brand: "Ford",
    yearModel: "2023/2024",
    km: 21000,
    transmission: "Automático",
    fuel: "Diesel",
    price: 279900,
    monthlyEstimate: 3450,
    plateEnd: "5",
    color: "Laranja Terra Metálico",
    engine: "3.0 V6 Turbo Diesel 250cv",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Motor V6 Turbo Diesel", "Tração 4x4 Integral", "Impecável"],
    highlight: "Nova geração com tela vertical de 12'', tração com reduzida e torque brutal de 61 kgfm",
    features: [
      "Tela multimídia vertical SYNC 4 de 12 polegadas",
      "Piloto automático adaptativo com Stop & Go",
      "Câmeras 360 graus para manobras e trilha",
      "Capota marítima e santantônio integrado original",
      "Assistente de permanência em faixa com correção ativa",
      "Bancos em couro legítimo com ajuste elétrico de 8 posições"
    ]
  },
  {
    id: "honda-civic-touring-2021",
    title: "Honda Civic",
    version: "Touring 1.5 Turbo Gasolina Aut.",
    category: "sedan",
    brand: "Honda",
    yearModel: "2021/2021",
    km: 44000,
    transmission: "CVT",
    fuel: "Gasolina",
    price: 139800,
    monthlyEstimate: 1750,
    plateEnd: "3",
    color: "Prata Platinum Metálico",
    engine: "1.5 Turbo 173cv",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Versão Topo de Linha Touring", "Laudo Pericial A+", "Revisões em Dia"],
    highlight: "Visual esportivo aerodinâmico, escapamento duplo e sistema de áudio premium de 452W",
    features: [
      "Teto solar com acionamento elétrico",
      "Sistema LaneWatch (câmera no retrovisor direito)",
      "Carregador de celular por indução",
      "Faróis Full LED com acendimento automático",
      "Partida remota do motor pela chave",
      "Sistema de som premium com 10 alto-falantes e subwoofer"
    ]
  },
  {
    id: "chevrolet-onix-premier-2023",
    title: "Chevrolet Onix",
    version: "Premier II 1.0 Turbo Flex Aut.",
    category: "hatch",
    brand: "Chevrolet",
    yearModel: "2023/2023",
    km: 31000,
    transmission: "Automático",
    fuel: "Flex",
    price: 88900,
    monthlyEstimate: 1150,
    plateEnd: "6",
    color: "Vermelho Carmim Metálico",
    engine: "1.0 Turbo 116cv",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Baixa Quilometragem", "Wi-Fi Nativo", "Garantia MB"],
    highlight: "Extremamente ágil e econômico com assistente de estacionamento semi-autônomo",
    features: [
      "Easy Park (assistente de estacionamento automático)",
      "Alerta de ponto cego nos retrovisores",
      "Wi-Fi a bordo 4G com antena amplificada",
      "Carregador sem fio para smartphone",
      "Central multimídia MyLink com espelhamento sem fio",
      "6 Airbags de série e controle de estabilidade"
    ]
  },
  {
    id: "porsche-macan-2022",
    title: "Porsche Macan",
    version: "2.0 Turbo PDK Tração Integral",
    category: "premium",
    brand: "Porsche",
    yearModel: "2022/2022",
    km: 26000,
    transmission: "Automático",
    fuel: "Gasolina",
    price: 459000,
    monthlyEstimate: 5800,
    plateEnd: "7",
    color: "Crayon Especial Porsche",
    engine: "2.0 Turbo 265cv Tração Integral",
    doors: 4,
    featuredImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Exclusivo", "Configuração Crayon", "Revisado na Stuttgart"],
    highlight: "Aceleração 0-100 km/h em 6.2s com transmissão esportiva PDK de 7 velocidades",
    features: [
      "Câmbio PDK de dupla embreagem ultrarrápido",
      "Interior todo revestido em couro e alcântara",
      "Escapamento esportivo com ponteiras duplas ativas",
      "Teto panorâmico em vidro duplo",
      "Faróis PDLS Plus em LED Matrix",
      "Rodas Macan Sport Classic aro 21"
    ]
  }
];

export const STORE_INFO = {
  name: "MB Veículos",
  tagline: "A sua melhor escolha em seminovos e veículos de procedência",
  address: "Av. Rebouças, 1820 - Jardim Alvorada / Centro",
  city: "Sumaré - SP",
  cep: "13170-540",
  phonePrimary: "(19) 3828-7179",
  phoneSecondary: "(19) 3828-5907",
  whatsappNumber: "551938287179",
  whatsappDisplay: "(19) 3828-7179",
  email: "vendas@mbveiculos.com",
  hoursWeekday: "Segunda a Sexta: 08:30 às 18:00",
  hoursSaturday: "Sábado: 08:30 às 13:00",
  yearsActive: 16,
  carsSold: "8.500+",
  googleRating: 4.9,
  reviewsCount: 380,
  googleMapsUrl: "https://maps.google.com/?q=Av.+Rebouças,+1820+-+Jardim+Alvorada,+Sumaré+-+SP"
};
