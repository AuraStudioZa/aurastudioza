"use client";

import { useId } from "react";

type AuraStudioZaMarkProps = {
  variant?: "compact" | "hero";
  className?: string;
};

const sans = "var(--font-display), 'Sora', 'Inter', Arial, sans-serif";

/** Crystalline 3D "A" — matches public/brand-mark.svg and public/brand-mark-icon.svg */
function CrystalMonogram({
  uid,
  x = 0,
  y = 0,
  scale = 1,
}: {
  uid: string;
  x?: number;
  y?: number;
  scale?: number;
}) {
  const leftFacet = `lf-${uid}`;
  const rightFacet = `rf-${uid}`;
  const topFacet = `tf-${uid}`;
  const ribbon = `rb-${uid}`;
  const auraGlow = `ag-${uid}`;
  const edgeGold = `eg-${uid}`;
  const auraBlur = `ab-${uid}`;
  const markShadow = `ms-${uid}`;

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} filter={`url(#${markShadow})`}>
      <defs>
        <linearGradient id={leftFacet} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a3f72" />
          <stop offset="100%" stopColor="#0d1528" />
        </linearGradient>
        <linearGradient id={rightFacet} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c547" />
          <stop offset="35%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#1e2a5a" />
        </linearGradient>
        <linearGradient id={topFacet} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f4e6b8" />
          <stop offset="100%" stopColor="#2f3f7a" />
        </linearGradient>
        <linearGradient id={ribbon} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4df7b" />
          <stop offset="50%" stopColor="#e8c547" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id={auraGlow} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b6cff" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#c9a227" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e8c547" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={edgeGold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#f4e6b8" />
        </linearGradient>
        <filter id={auraBlur} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id={markShadow} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0d1528" floodOpacity="0.32" />
        </filter>
      </defs>
      <ellipse cx="32" cy="12" rx="30" ry="12" fill={`url(#${auraGlow})`} filter={`url(#${auraBlur})`} opacity="0.9" />
      <ellipse cx="32" cy="58" rx="22" ry="3.5" fill="#0d1528" opacity="0.18" />
      <path d="M6 58 L32 4 L58 58 Z" fill="#0a1020" />
      <path d="M6 58 L32 4 L32 58 Z" fill={`url(#${leftFacet})`} />
      <path d="M32 4 L58 58 L32 58 Z" fill={`url(#${rightFacet})`} />
      <path d="M18 24 L32 4 L46 24 L32 32 Z" fill={`url(#${topFacet})`} opacity="0.95" />
      <path
        d="M12 36 C12 30 32 25 52 36 L52 41 C32 36 12 41 12 36 Z"
        fill={`url(#${ribbon})`}
        stroke="#f4e6b8"
        strokeWidth="0.6"
      />
      <path d="M22 46 H42" stroke="#fff8e7" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
      <path d="M6 58 L32 4 L58 58" fill="none" stroke={`url(#${edgeGold})`} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M6 58 L32 4" stroke="#6b8cff" strokeWidth="0.9" opacity="0.45" />
      <path d="M32 4 L58 58" stroke="#8a6b1a" strokeWidth="0.6" opacity="0.35" />
    </g>
  );
}

function Wordmark({
  uid,
  size,
  y,
  x,
  anchor = "start",
}: {
  uid: string;
  size: number;
  y: number;
  x: number;
  anchor?: "start" | "middle";
}) {
  const goldText = `wm-gold-${uid}`;

  return (
    <>
      <defs>
        <linearGradient id={goldText} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4df7b" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        fontFamily={sans}
        fontSize={size}
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        <tspan fill={`url(#${goldText})`}>Aura</tspan>
        <tspan fill="var(--logo-studio-fill, #1e2a5a)">Studio</tspan>
        <tspan fill={`url(#${goldText})`}>Za</tspan>
      </text>
    </>
  );
}

export function AuraStudioZaMark({ variant = "compact", className = "" }: AuraStudioZaMarkProps) {
  const isHero = variant === "hero";
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox={isHero ? "0 0 360 300" : "0 0 310 68"}
      role="img"
      aria-label="AuraStudioZa — Design, Media, Creative"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isHero ? (
        <>
          <CrystalMonogram uid={uid} x={116} y={8} scale={1.35} />
          <Wordmark uid={uid} size={34} x={180} y={198} anchor="middle" />
          <text
            x={180}
            y={228}
            textAnchor="middle"
            fill="var(--logo-tagline-fill, #4a5578)"
            fontFamily="var(--font-body), 'Inter', Arial, sans-serif"
            fontSize="12"
            fontWeight="600"
            letterSpacing="0.2em"
          >
            DESIGN • MEDIA • CREATIVE
          </text>
        </>
      ) : (
        <>
          <CrystalMonogram uid={uid} x={0} y={2} scale={1} />
          <Wordmark uid={uid} size={18} x={72} y={44} />
        </>
      )}
    </svg>
  );
}
