"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroVideo } from "@/remotion/HeroVideo";

// Dynamically import Player from @remotion/player with SSR disabled to prevent window/browser hydration issues
const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] bg-[#07080c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-widest text-amber-500/70 font-semibold">
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

  if (!isMounted) {
    return (
      <div className="w-full h-full min-h-[420px] bg-[#07080c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-widest text-amber-500/70 font-semibold">
            Carregando Experiência MB...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-[16/9] md:aspect-[21/9] max-h-[520px]">
      <Player
        component={HeroVideo}
        durationInFrames={180}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        loop
        autoPlay
        controls={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
