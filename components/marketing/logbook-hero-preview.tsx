"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const LIGHT_WEBP = "/logbook-live-preview-light.webp";
const LIGHT_PNG = "/logbook-live-preview-light.png";
const DARK_PNG = "/logbook-live-preview-dark.png";

function getTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getServerTheme(): Theme {
  return "light";
}

export function LogbookHeroPreview() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  if (theme === "dark") {
    return (
      <img
        className="logbook-preview"
        src={DARK_PNG}
        alt="Vehicle Logbook dashboard in dark mode — period stats and today's business and private stops."
        width={390}
        height={844}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <picture>
      <source srcSet={LIGHT_WEBP} type="image/webp" />
      <img
        className="logbook-preview"
        src={LIGHT_PNG}
        alt="Vehicle Logbook dashboard in light mode — period stats and today's business and private stops."
        width={390}
        height={844}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}
