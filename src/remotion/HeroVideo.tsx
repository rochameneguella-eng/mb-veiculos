"use client";

import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const HeroVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Total duration: 180 frames (6 seconds at 30 fps)
  // Segment 1: 0 to 60 (Brand & Prestige)
  // Segment 2: 60 to 120 (Quality, Inspection & Warranty)
  // Segment 3: 120 to 180 (Buy, Sell & Fast Approval)

  // Segment 1 calculations
  const seg1Progress = spring({
    frame: frame % 180,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const seg1Opacity = interpolate(
    frame % 180,
    [0, 10, 50, 60],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Segment 2 calculations
  const seg2Progress = spring({
    frame: (frame % 180) - 60,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const seg2Opacity = interpolate(
    frame % 180,
    [58, 68, 110, 120],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Segment 3 calculations
  const seg3Progress = spring({
    frame: (frame % 180) - 120,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const seg3Opacity = interpolate(
    frame % 180,
    [118, 128, 170, 180],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Background dynamic light beam animation
  const lightPosition = interpolate(
    frame % 180,
    [0, 180],
    [-20, 120]
  );

  // Speedometer needle rotation simulation (0 to 180 deg)
  const needleRot = interpolate(
    frame % 180,
    [0, 45, 90, 135, 180],
    [-45, 65, 30, 85, -45]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#07080c",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Dynamic Background Carbon / Dark Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(229, 169, 59, 0.08) 0%, transparent 60%),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      {/* Moving Headlight Sweep / Lens Flare */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: `${lightPosition}%`,
          width: "400px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.22) 0%, rgba(229, 169, 59, 0.05) 50%, transparent 75%)",
          filter: "blur(50px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Futuristic HUD Horizon Lines */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          right: "5%",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(229, 169, 59, 0.6) 50%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      {/* Decorative Speed HUD Circle (Right side) */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "2px dashed rgba(229, 169, 59, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
          }}
        >
          {/* Animated Needle */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "48px",
              height: "2px",
              background: "#e5a93b",
              transformOrigin: "0% 50%",
              transform: `rotate(${needleRot}deg)`,
              boxShadow: "0 0 8px #f59e0b",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* ==============================================
          SEGMENT 1: BRAND INTRO & SUMARÉ PRESTIGE
      =============================================== */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: seg1Opacity,
          transform: `scale(${interpolate(seg1Progress, [0, 1], [0.92, 1])})`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "rgba(229, 169, 59, 0.12)",
            border: "1px solid rgba(229, 169, 59, 0.35)",
            color: "#f59e0b",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          <span>✦ Sumaré - SP • Desde 2008</span>
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            color: "#ffffff",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
            textShadow: "0 4px 24px rgba(0,0,0,0.8)",
          }}
        >
          MB VEÍCULOS
        </h1>

        <p
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#d1d5db",
            maxWidth: "680px",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          A sua melhor escolha em <strong style={{ color: "#e5a93b" }}>seminovos selecionados</strong> com transparência e procedência garantida.
        </p>
      </div>

      {/* ==============================================
          SEGMENT 2: LAUDO CAUTELAR & GARANTIA
      =============================================== */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: seg2Opacity,
          transform: `scale(${interpolate(seg2Progress, [0, 1], [0.94, 1])})`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#10b981",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          <span>✓ Perícia e Procedência</span>
        </div>

        <h2
          style={{
            fontSize: "50px",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: "0 0 12px 0",
            lineHeight: 1.15,
          }}
        >
          LAUDO CAUTELAR <span style={{ color: "#10b981" }}>100% APROVADO</span>
        </h2>

        <p
          style={{
            fontSize: "21px",
            color: "#d1d5db",
            maxWidth: "700px",
            margin: 0,
          }}
        >
          Sem leilão, sem sinistro. Mais de 100 itens inspecionados para sua total tranquilidade.
        </p>
      </div>

      {/* ==============================================
          SEGMENT 3: COMPRA, VENDA & FINANCIAMENTO
      =============================================== */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: seg3Opacity,
          transform: `scale(${interpolate(seg3Progress, [0, 1], [0.94, 1])})`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "rgba(229, 169, 59, 0.15)",
            border: "1px solid rgba(229, 169, 59, 0.4)",
            color: "#e5a93b",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          <span>⚡ Troca com Troco & Financiamento</span>
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: "0 0 12px 0",
            lineHeight: 1.15,
          }}
        >
          COMPRAMOS SEU USADO <span style={{ color: "#e5a93b" }}>COM PIX NA HORA</span>
        </h2>

        <p
          style={{
            fontSize: "21px",
            color: "#d1d5db",
            maxWidth: "720px",
            margin: 0,
          }}
        >
          Melhor avaliação de Sumaré e região. Parcelamento em até 60x pelos maiores bancos.
        </p>
      </div>

      {/* Bottom Progress Indicator Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "4px",
          background: "linear-gradient(90deg, #f59e0b, #e5a93b)",
          width: `${((frame % 180) / 180) * 100}%`,
          boxShadow: "0 0 10px rgba(245, 158, 11, 0.8)",
        }}
      />
    </div>
  );
};
