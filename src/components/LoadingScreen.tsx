"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [textFade, setTextFade] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setTextFade(true), 500);
    const screenTimer = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(screenTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-zinc-950 z-100 transition-opacity duration-300 pointer-events-none`}
    >
      <h1
        className={`text-white text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center transition-opacity duration-500 ${
          textFade ? "opacity-0" : "opacity-100"
        }`}
      >
        ALMANZA <span className="font-thin">PORTFOLIO</span>
      </h1>
    </div>
  );
}