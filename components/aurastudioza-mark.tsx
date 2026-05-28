"use client";

import { useId } from "react";

type AuraStudioZaMarkProps = {
  variant?: "compact" | "hero";
  className?: string;
};

export function AuraStudioZaMark({ variant = "compact", className = "" }: AuraStudioZaMarkProps) {
  const isHero = variant === "hero";
  const uid = useId().replace(/:/g, "");
  const auraAGradient = `auraAGradient-${uid}`;
  const auraGlow = `auraGlow-${uid}`;
  const goldText = `goldText-${uid}`;

  return (
    <svg
      className={className}
      viewBox={isHero ? "0 0 420 200" : "0 0 280 72"}
      role="img"
      aria-label="AuraStudioZa — Design, Media, Creative"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={auraAGradient} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2a5a" />
          <stop offset="55%" stopColor="#2f3f7a" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id={auraGlow} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b6cff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e8c547" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={goldText} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8c547" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>

      {isHero ? (
        <>
          <ellipse cx="72" cy="52" rx="54" ry="20" fill={`url(#${auraGlow})`} />
          <path
            d="M42 118 L72 38 L102 118 Z"
            fill={`url(#${auraAGradient})`}
            stroke="#c9a227"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M54 98 H90" stroke="#f4e6b8" strokeWidth="3" strokeLinecap="round" />
          <text
            x="130"
            y="78"
            fill={`url(#${goldText})`}
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="42"
            fontWeight="700"
          >
            Aura
          </text>
          <text
            x="130"
            y="118"
            fill="var(--logo-studio-fill, #1e2a5a)"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="42"
            fontWeight="700"
          >
            Studio
          </text>
          <text
            x="292"
            y="118"
            fill={`url(#${goldText})`}
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="42"
            fontWeight="700"
          >
            Za
          </text>
          <text
            x="130"
            y="152"
            fill="var(--logo-tagline-fill, #4a5578)"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="13"
            letterSpacing="2.5"
          >
            DESIGN • MEDIA • CREATIVE
          </text>
        </>
      ) : (
        <>
          <ellipse cx="28" cy="18" rx="22" ry="8" fill={`url(#${auraGlow})`} />
          <path
            d="M14 52 L28 14 L42 52 Z"
            fill={`url(#${auraAGradient})`}
            stroke="#c9a227"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M19 44 H37" stroke="#f4e6b8" strokeWidth="2" strokeLinecap="round" />
          <text x="52" y="28" fill={`url(#${goldText})`} fontFamily="Georgia, serif" fontSize="17" fontWeight="700">
            Aura
          </text>
          <text
            x="52"
            y="48"
            fill="var(--logo-studio-fill, #1e2a5a)"
            fontFamily="Georgia, serif"
            fontSize="17"
            fontWeight="700"
          >
            Studio
          </text>
          <text x="118" y="48" fill={`url(#${goldText})`} fontFamily="Georgia, serif" fontSize="17" fontWeight="700">
            Za
          </text>
        </>
      )}
    </svg>
  );
}
