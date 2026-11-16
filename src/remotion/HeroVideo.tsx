"use client";

import React, { useMemo } from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

export const HeroVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Total duration: 240 frames (8 seconds at 30 fps)
  const loopFrame = frame % 240;

  // Ultra-smooth Camera Zoom (Ken Burns effect) on carro.jpeg
  const carScale = interpolate(loopFrame, [0, 240], [1.01, 1.09], {
    extrapolateRight: "clamp",
  });

  const carTranslateX = interpolate(loopFrame, [0, 120, 240], [0, -10, 0], {
    extrapolateRight: "clamp",
  });

  const carTranslateY = interpolate(loopFrame, [0, 120, 240], [0, -6, 0], {
    extrapolateRight: "clamp",
  });

  // Dynamic light flare sweeping across the car body
  const lightBeamX = interpolate(loopFrame, [0, 240], [-25, 125]);
  const lightBeamOpacity = interpolate(
    loopFrame,
    [0, 25, 90, 140, 205, 240],
    [0.15, 0.45, 0.2, 0.5, 0.2, 0.15]
  );

  // ACT 1: Frame 0 -> 80
  const act1Spring = spring({
    frame: loopFrame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });
  const act1Opacity = interpolate(
    loopFrame,
    [0, 10, 68, 78],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ACT 2: Frame 80 -> 160
  const act2Spring = spring({
    frame: loopFrame - 80,
    fps,
    config: { damping: 14, mass: 0.8 },
  });
  const act2Opacity = interpolate(
    loopFrame,
    [78, 88, 148, 158],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ACT 3: Frame 160 -> 240
  const act3Spring = spring({
    frame: loopFrame - 160,
    fps,
    config: { damping: 14, mass: 0.8 },
  });
  const act3Opacity = interpolate(
    loopFrame,
    [158, 168, 228, 238],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Floating HUD needle
  const hudRotate = interpolate(
    loopFrame,
    [0, 60, 120, 180, 240],
    [-25, 45, 5, 55, -25]
  );

  // Floating ambient ember particles (deterministic positions)
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: (i * 59) % 100,
      baseY: (i * 37) % 100,
      size: 2 + (i % 3),
      speed: 0.2 + (i % 5) * 0.1,
      opacity: 0.2 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#050608",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* 1. LAYER: CAR IMAGE (KEN BURNS ZOOM & PARALLAX DRIFT) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${carScale}) translate(${carTranslateX}px, ${carTranslateY}px)`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/carro.jpeg"
          alt="Veículo Selecionado MB Veículos"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "contrast(1.1) brightness(0.94)",
          }}
        />
      </div>

      {/* 2. LAYER: ATMOSPHERIC AMBIENT DRIFTING PARTICLES */}
      {particles.map((p) => {
        const currentY = (p.baseY - (loopFrame * p.speed)) % 100;
        const normalizedY = currentY < 0 ? currentY + 100 : currentY;
        const pulse = Math.sin((loopFrame + p.id * 10) * 0.08) * 0.2;

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${normalizedY}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: p.id % 2 === 0 ? "#d99b38" : "#ffffff",
              boxShadow: `0 0 6px ${p.id % 2 === 0 ? "#f59e0b" : "#ffffff"}`,
              opacity: p.opacity + pulse,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* 3. LAYER: GRADIENT OVERLAYS (BLENDS SEAMLESSLY INTO SURROUNDING DARK THEME) */}
      {/* Top subtle vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "35%",
          background: "linear-gradient(180deg, rgba(5,6,8,0.92) 0%, rgba(5,6,8,0.3) 65%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom heavy vignette for typography contrast */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background: "linear-gradient(0deg, rgba(5,6,8,0.98) 0%, rgba(5,6,8,0.7) 45%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial center dark vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 45%, rgba(5,6,8,0.1) 20%, rgba(5,6,8,0.8) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 4. LAYER: LIGHT BEAM / LENS FLARE */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: `${lightBeamX}%`,
          width: "550px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(217, 155, 56, 0.4) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 75%)",
          filter: "blur(50px)",
          transform: "translate(-50%, -50%) rotate(-12deg)",
          opacity: lightBeamOpacity,
          pointerEvents: "none",
        }}
      />

      {/* 5. LAYER: HUD BADGES (TOP CORNERS) */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "999px",
          background: "rgba(9, 11, 16, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(217, 155, 56, 0.35)",
        }}
      >
        <div
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "#10b981",
            boxShadow: "0 0 8px #10b981",
          }}
        />
        <span
          style={{
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          MB VEÍCULOS • SUMARÉ - SP
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "999px",
          background: "rgba(9, 11, 16, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "2px dashed #d99b38",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "2px",
              background: "#ffffff",
              transform: `rotate(${hudRotate}deg)`,
              transformOrigin: "left center",
            }}
          />
        </div>
        <span
          style={{
            color: "#d99b38",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          SUPER DESTAQUE
        </span>
      </div>

      {/* 6. LAYER: KINETIC TYPOGRAPHY CYCLES */}

      {/* ACT 1: O CARRO DOS SEUS SONHOS */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "24px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: act1Opacity,
          transform: `scale(${interpolate(act1Spring, [0, 1], [0.95, 1])}) translateY(${interpolate(
            act1Spring,
            [0, 1],
            [14, 0]
          )}px)`,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 14px",
            borderRadius: "999px",
            background: "rgba(217, 155, 56, 0.2)",
            border: "1px solid rgba(217, 155, 56, 0.5)",
            color: "#f59e0b",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "10px",
            backdropFilter: "blur(8px)",
          }}
        >
          <span>★ VEÍCULO SELECIONADO DA SEMANA</span>
        </div>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: "0 0 8px 0",
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          SEU PRÓXIMO CARRO ESTÁ NA <span style={{ color: "#d99b38" }}>MB VEÍCULOS</span>
        </h1>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            color: "#e5e7eb",
            maxWidth: "720px",
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Seminovos periciados com <strong>Laudo Cautelar 100% Aprovado</strong> e procedência garantida.
        </p>
      </div>

      {/* ACT 2: COMPRA COM PIX IMEDIATO */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "24px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: act2Opacity,
          transform: `scale(${interpolate(act2Spring, [0, 1], [0.95, 1])}) translateY(${interpolate(
            act2Spring,
            [0, 1],
            [14, 0]
          )}px)`,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 14px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.2)",
            border: "1px solid rgba(16, 185, 129, 0.5)",
            color: "#10b981",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "10px",
            backdropFilter: "blur(8px)",
          }}
        >
          <span>⚡ AVALIAÇÃO EM ATÉ 30 MINUTOS</span>
        </div>

        <h2
          style={{
            fontSize: "40px",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: "0 0 8px 0",
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          COMPRAMOS SEU USADO COM <span style={{ color: "#10b981" }}>PAGAMENTO VIA PIX</span>
        </h2>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            color: "#e5e7eb",
            maxWidth: "720px",
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Troca com troco, avaliação justa de mercado e quitação imediata de débitos do seu veículo.
        </p>
      </div>

      {/* ACT 3: FINANCIAMENTO FACILITADO */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "24px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: act3Opacity,
          transform: `scale(${interpolate(act3Spring, [0, 1], [0.95, 1])}) translateY(${interpolate(
            act3Spring,
            [0, 1],
            [14, 0]
          )}px)`,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 14px",
            borderRadius: "999px",
            background: "rgba(217, 155, 56, 0.2)",
            border: "1px solid rgba(217, 155, 56, 0.5)",
            color: "#f59e0b",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "10px",
            backdropFilter: "blur(8px)",
          }}
        >
          <span>💳 FINANCIAMENTO ATÉ 60X</span>
        </div>

        <h2
          style={{
            fontSize: "40px",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: "0 0 8px 0",
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          PARCELAS QUE CABEM NO BOLSO <span style={{ color: "#d99b38" }}>COM PRÉ-APROVAÇÃO</span>
        </h2>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 500,
            color: "#e5e7eb",
            maxWidth: "720px",
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Parceria direta com Santander, Itaú, BV e Bradesco. Simule seu crédito em menos de 1 minuto.
        </p>
      </div>

      {/* 7. BOTTOM GOLD PROGRESS TIMELINE */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          background: "linear-gradient(90deg, #d99b38, #10b981)",
          width: `${(loopFrame / 240) * 100}%`,
          boxShadow: "0 0 10px rgba(217, 155, 56, 0.7)",
        }}
      />
    </div>
  );
};
