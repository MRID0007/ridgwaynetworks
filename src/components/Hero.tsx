"use client";

import { useState, useEffect } from "react";
import { ASCII_ART, TAGLINE } from "@/lib/constants";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TAGLINE.length) {
        setDisplayedText(TAGLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 scanlines overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <pre
          className="ascii-glow text-terminal font-[family-name:var(--font-jetbrains)] leading-[1.15] select-none text-[0.35rem] sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.85rem] text-left"
          aria-label="Ridgway Networks"
        >
          {ASCII_ART}
        </pre>

        <div className="mt-8 h-8">
          <span className="font-[family-name:var(--font-jetbrains)] text-text-secondary text-sm md:text-base tracking-widest uppercase">
            {displayedText}
            {showCursor && (
              <span className="cursor-blink text-terminal">|</span>
            )}
          </span>
        </div>

        <div className="mt-12">
          <a
            href="#portfolio"
            className="inline-block font-[family-name:var(--font-jetbrains)] text-sm border border-terminal/40 text-terminal px-6 py-3 hover:bg-terminal/10 hover:border-terminal transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-secondary"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
