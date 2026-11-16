/**
 * MB VEÍCULOS — DESIGN SYSTEM & TOKENS DE DESIGN
 * 
 * Este é o ÚNICO arquivo responsável pela definição de todas as cores,
 * formatos (border-radius), tipografia, sombras e padrões visuais do app.
 * 
 * Qualquer alteração visual em cores, espaçamentos ou estilos deve ser
 * centralizada e configurada aqui para garantir consistência em 100% da aplicação.
 */

export const THEME = {
  /**
   * 1. PALETA DE CORES (COLORS)
   */
  colors: {
    // Fundos e Superfícies (Dark Grafite Sofisticado)
    bg: {
      /** Fundo principal do site (body e container geral) */
      base: "#0f1218",
      /** Superfície padrão para cards, containers e módulos */
      surface: "#141721",
      /** Superfície destacada (cartões em foco, modais, itens ativos do FAQ) */
      elevated: "#181c28",
      /** Fundo de campos de formulário, inputs e seletores */
      input: "#0e1117",
      /** Faixa superior informativa do topo (endereço e contatos) */
      topbar: "#0e1117",
      /** Fundo sólido do rodapé */
      footer: "#0c0e14",
      /** Camada semitransparente para overlays e backdrops com blur */
      overlay: "rgba(15, 18, 24, 0.85)",
    },

    // Cor Assinatura: Dourado Automotivo Nobre (MB Veículos Brand)
    gold: {
      /** Cor primária dourada (estrelas, badges de destaque, botões nobres) */
      DEFAULT: "#d99b38",
      /** Estado de hover em botões e links dourados */
      hover: "#e4a844",
      /** Fundo com brilho sutil para ícones e avisos */
      subtle: "rgba(217, 155, 56, 0.15)",
      /** Aura ambiente difusa para o hero e seções */
      glow: "rgba(217, 155, 56, 0.10)",
    },

    // Verde Sucesso & Garantias (Laudo Aprovado, Venda Rápida e WhatsApp)
    emerald: {
      /** Verde oficial de certificação e laudo cautelar 100% aprovado */
      DEFAULT: "#10b981",
      /** Hover em botões de ação verde */
      hover: "#059669",
      /** Fundo sutil para chips de certificação */
      subtle: "rgba(16, 185, 129, 0.15)",
      /** Verde oficial de marca do WhatsApp */
      whatsapp: "#25d366",
      /** Verde hover do WhatsApp */
      whatsappHover: "#20ba59",
    },

    // Cores de Apoio / Status
    accent: {
      blue: "#3b82f6",
      blueFacebook: "#60a5fa",
      purple: "#8b5cf6",
    },

    // Tipografia / Contraste de Texto
    text: {
      /** Títulos de alto impacto, valores numéricos e textos principais */
      primary: "#ffffff",
      /** Subtítulos, textos de ênfase e leitura em cards */
      secondary: "#d1d5db",
      /** Descrições, parágrafos explicativos e labels de formulário */
      muted: "#9ca3af",
      /** Micro-legendas, termos secundários e placeholders */
      faint: "#6b7280",
      /** Texto dourado de destaque */
      gold: "#d99b38",
      /** Texto verde de aprovação */
      emerald: "#10b981",
    },

    // Bordas e Divisórias
    border: {
      /** Divisórias sutis entre seções e linhas de tabela */
      subtle: "rgba(255, 255, 255, 0.06)",
      /** Bordas estruturais de cartões e blocos informativos */
      card: "rgba(255, 255, 255, 0.08)",
      /** Estado de hover ao passar o cursor sobre cartões interativos */
      hover: "rgba(255, 255, 255, 0.16)",
      /** Borda dourada em cartões de destaque ou inputs focados */
      gold: "rgba(217, 155, 56, 0.35)",
      /** Borda verde para laudo cautelar e garantia pericial */
      emerald: "rgba(16, 185, 129, 0.30)",
    },
  },

  /**
   * 2. FORMATOS E BORDAS ARREDONDADAS (BORDER RADII)
   */
  radii: {
    /** Badges, tags e etiquetas de status: 6px */
    badge: "0.375rem",
    /** Botões de ação, inputs e seletores: 12px */
    button: "0.75rem",
    input: "0.75rem",
    /** Cartões padrão, contêineres e blocos de conteúdo: 16px */
    card: "1rem",
    /** Cartões grandes, simuladores e modais: 20px */
    cardLg: "1.25rem",
    /** Pílulas e botões circulares: 9999px */
    full: "9999px",
  },

  /**
   * 3. TIPOGRAFIA E FONTES (TYPOGRAPHY)
   */
  typography: {
    fontFamily: {
      sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    hierarchy: {
      /** Título principal do Hero */
      heroTitle: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.15]",
      /** Títulos de seções principais */
      sectionTitle: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white",
      /** Títulos de cartões e módulos */
      cardTitle: "text-base sm:text-lg font-bold text-white",
      /** Corpo de texto e descrições */
      body: "text-sm sm:text-base text-[#9ca3af] leading-relaxed",
      /** Legendas e dados complementares */
      caption: "text-xs text-[#9ca3af]",
      /** Micro-legendas e metadados */
      micro: "text-[11px] text-[#6b7280]",
    },
  },

  /**
   * 4. CLASSES SEMÂNTICAS REUTILIZÁVEIS (PRESETS)
   * Facilita aplicar as regras visuais corretas em novos componentes sem inconsistências.
   */
  classes: {
    // Seções
    section: "py-16 sm:py-24 border-b border-white/[0.06] bg-[#0f1218] relative",
    sectionAlt: "py-14 sm:py-20 border-b border-white/[0.06] bg-[#10131a] relative",

    // Cartões
    card: "rounded-2xl bg-[#141721] border border-white/[0.08] shadow-xl",
    cardInteractive: "rounded-2xl bg-[#141721] border border-white/[0.08] hover:border-white/[0.16] transition-all shadow-xl",
    cardElevated: "rounded-2xl bg-[#181c28] border border-[#d99b38]/40 shadow-2xl",

    // Formulários
    input: "w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#0e1117] border border-white/[0.08] text-white text-base sm:text-xs placeholder-[#6b7280] focus:outline-none focus:border-[#d99b38] transition-colors",

    // Badges / Tags
    badgeGold: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#181c27] border border-white/[0.08] text-xs text-[#d99b38] font-medium",
    badgeNeutral: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#181c27] border border-white/[0.08] text-xs text-[#d1d5db] font-medium",
    badgeEmerald: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium",

    // Botões
    btnPrimaryEmerald: "w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer",
    btnSecondary: "w-full sm:w-auto px-5 py-3 rounded-xl bg-[#181c27] hover:bg-[#1f2433] border border-white/[0.08] text-[#d1d5db] hover:text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer",
    btnGold: "w-full sm:w-auto px-5 py-3 rounded-xl bg-[#d99b38] hover:bg-[#e4a844] text-black font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#d99b38]/20 cursor-pointer",
    btnWhatsApp: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer",
  },
} as const;

export type ThemeTokens = typeof THEME;
