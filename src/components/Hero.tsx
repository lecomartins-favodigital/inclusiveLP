"use client";

import { m } from "framer-motion";

/* ── Kinetic name — letter-by-letter reveal ── */
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
        style={{ height: "100vh", minHeight: "600px" }}
      >
        {/* ── Video background ── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/inclusivetravel.mp4" type="video/mp4" />
        </video>

        {/* ── Layered overlay for depth ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* ── Top bar — logo + badge ── */}
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8"
        >
          <img
            src="https://inclusivetravel.com.br/static/logo_inclusive_branco.svg"
            alt="Inclusive Travel"
            className="h-5 opacity-80 sm:h-6"
          />
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 backdrop-blur-sm">
            Apresentação Comercial
          </span>
        </m.div>

        {/* ── Main content — bottom-aligned ── */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16 lg:pb-20">
          {/* Tagline acima do nome */}
          <m.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#f65a27] sm:text-xs"
          >
            <span className="h-px w-8 bg-[#f65a27]/50 sm:w-12" />
            Turismo Cultural & Inclusivo
          </m.p>

          {/* Nome principal */}
          <h1 className="font-display leading-[0.85] tracking-tight">
            <span className="block text-[clamp(3.2rem,10vw,8.5rem)] font-extralight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
              <KineticName text="INCLUSIVE" delay={0.5} />
            </span>
            <span className="block text-[clamp(3.2rem,10vw,8.5rem)] font-black text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
              <KineticName text="TRAVEL" delay={0.85} />
            </span>
          </h1>

          {/* Descrição + stats + CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mt-8 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between"
          >
            {/* Left — copy + mini stats */}
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-white/60 sm:text-lg">
                Roteiros sob medida em mais de{" "}
                <span className="font-semibold text-white/90">50 destinos</span>.
                Cuidamos de tudo — do planejamento à venda — para que
                você foque em <span className="font-semibold text-white/90">liderar</span>.
              </p>

              {/* Mini stats */}
              <div className="mt-6 flex gap-6 sm:gap-8">
                {[
                  { value: "1.000+", label: "Viajantes" },
                  { value: "10+", label: "Anos" },
                  { value: "50+", label: "Destinos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-display text-xl font-black text-white sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/30">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#apresentacao"
                onClick={(e) => handleScroll(e, "#apresentacao")}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#111827] shadow-2xl shadow-black/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-white/10 active:scale-[0.97]"
              >
                Conheça a proposta
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f65a27] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="h-3 w-3 text-white"
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
              <a
                href="https://wa.me/551150264723?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens%20da%20Inclusive%20Travel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar conosco
              </a>
            </div>
          </m.div>
        </div>

        {/* ── Scroll indicator ── */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
            Scroll
          </span>
          <m.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1.5px] rounded-full bg-gradient-to-b from-white/30 to-transparent"
          />
        </m.div>
      </section>
    </>
  );
}
