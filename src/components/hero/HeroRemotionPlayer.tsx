"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroVideo } from "@/remotion/HeroVideo";

// Dynamically import Player from @remotion/player with SSR disabled
const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[1584/672] min-h-[280px] bg-[#07080c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#d99b38]/30 border-t-[#d99b38] rounded-full animate-spin" />
          <span className="text-[11px] uppercase tracking-wider text-[#d99b38]/80 font-medium">
            Carregando Experiência MB...
          </span>
        </div>
      </div>
    ),
  }
);

export const HeroRemotionPlayer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/90 bg-[#06070a]"
    >
      {!isMounted ? (
        <div className="w-full aspect-[1584/672] min-h-[280px] bg-[#07080c] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#d99b38]/30 border-t-[#d99b38] rounded-full animate-spin" />
            <span className="text-[11px] uppercase tracking-wider text-[#d99b38]/80 font-medium">
              Carregando Experiência MB...
            </span>
          </div>
        </div>
      ) : (
        <Player
          acknowledgeRemotionLicense
          component={HeroVideo}
          durationInFrames={240}
          compositionWidth={1584}
          compositionHeight={672}
          fps={30}
          loop
          autoPlay
          controls={false}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "1584 / 672",
            display: "block",
          }}
        />
      )}
    </div>
  );
};
