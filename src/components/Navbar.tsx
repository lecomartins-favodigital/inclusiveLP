"use client";

import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Início" },
  { id: "apresentacao", label: "Quem Somos" },
  { id: "clientes-destaque", label: "Clientes" },
  { id: "roteiro", label: "Destinos" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "contato", label: "Contato" },
];

export default function ScrollPill() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't show on hero
      if (window.scrollY < 200) {
        setVisible(false);
        return;
      }

      // Show pill
      setVisible(true);

      // Detect active section
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i].id);
          break;
        }
      }

      // Reset hide timer - keep visible while scrolling, hide 2.5s after stop
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);

      scrollTimer.current = setTimeout(() => {
        hideTimer.current = setTimeout(() => {
          setVisible(false);
        }, 2000);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const activeLabel = sections.find((s) => s.id === active)?.label || "";
  const activeIndex = sections.findIndex((s) => s.id === active);
  const progress =
    activeIndex >= 0 ? ((activeIndex + 1) / sections.length) * 100 : 0;
  const circumference = 2 * Math.PI * 8;

  return (
    <AnimatePresence>
      {visible && activeLabel && (
        <m.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-[#111827]/8 rounded-full px-5 py-2.5 shadow-lg shadow-black/5">
            {/* Progress ring */}
            <div className="relative w-5 h-5 flex-shrink-0">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20">
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="2"
                />
                <m.circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="#208cf1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  animate={{
                    strokeDashoffset: circumference * (1 - progress / 100),
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#111827]/40 font-medium">
                {activeIndex + 1}
              </span>
            </div>

            {/* Label with crossfade */}
            <AnimatePresence mode="wait">
              <m.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-[13px] text-[#111827]/60 font-medium tracking-wide whitespace-nowrap"
              >
                {activeLabel}
              </m.span>
            </AnimatePresence>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
