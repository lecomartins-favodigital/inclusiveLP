"use client";

import { m } from "framer-motion";

/* ── Kinetic name — only animation that uses framer (runs once) ── */
function KineticName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <m.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </m.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[#0a0a0a]"
        style={{ height: "65vh", minHeight: "420px" }}
      >
        {/* ── Video background ── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/inclusivetravel.mp4" type="video/mp4" />
        </video>

        {/* ── Overlay — stronger gradient for text contrast ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* ── Text content ── */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-10 sm:px-6 sm:pb-14">
          {/* Logo + badge */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-5 flex items-center gap-3"
          >
            <img
              src="https://inclusivetravel.com.br/static/logo_inclusive_branco.svg"
              alt="Inclusive Travel"
              className="h-5 opacity-90"
            />
            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f65a27]">
              Apresentação
            </span>
          </m.div>

          {/* Name */}
          <h1 className="font-display leading-[0.88] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            <span className="block text-[clamp(2.8rem,8vw,7rem)] font-extralight text-white">
              <KineticName text="INCLUSIVE" delay={0.5} />
            </span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)] font-black text-white">
              <KineticName text="TRAVEL" delay={0.85} />
            </span>
          </h1>

          {/* Subtitle + CTA */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-sm font-display text-base italic leading-relaxed text-white/70 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-lg">
              Turismo cultural e inclusivo que
              <br className="hidden sm:block" /> transforma vidas pelo mundo.
            </p>

            <a
              href="#apresentacao"
              onClick={(e) => handleScroll(e, "#apresentacao")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-[#111827] shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-xl active:scale-[0.97]"
            >
              Conheça a empresa
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f65a27] transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-2.5 w-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </m.div>
        </div>

      </section>
    </>
  );
}
