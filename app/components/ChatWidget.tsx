"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  CHAT_WIDGET_ENABLED,
  CHAT_WIDGET_EXCLUDED_PREFIXES,
  CHAT_WIDGET_ID,
  CHAT_WIDGET_RESOURCES,
  CHAT_WIDGET_SCRIPT,
} from "../config";

// Bulle de chat de l'assistant virtuel. Chargée après l'affichage de la page
// (lazyOnload) pour ne pas peser sur les Core Web Vitals.
// Limite connue : une fois le script chargé, la bulle reste visible si le visiteur
// navigue côté client vers une page exclue (le widget ne se décharge pas).
export default function ChatWidget() {
  const pathname = usePathname();
  if (!CHAT_WIDGET_ENABLED) return null;
  if (CHAT_WIDGET_EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  return (
    <Script
      id="ghl-chat-widget"
      src={CHAT_WIDGET_SCRIPT}
      strategy="lazyOnload"
      data-resources-url={CHAT_WIDGET_RESOURCES}
      data-widget-id={CHAT_WIDGET_ID}
    />
  );
}
