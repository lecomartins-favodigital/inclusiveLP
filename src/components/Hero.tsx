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
        className="relative overflow-hidden bg-[#faf8f5]"
        style={{ height: "65vh", minHeight: "520px" }}
      >
        {/* ── Gradient blobs — pure CSS animations, GPU-accelerated ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
          <div className="hero-blob hero-blob-4" />
        </div>

        {/* ── Dot grid ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ── Geometric shapes — CSS animated ── */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="hero-shape hero-float-1 absolute rounded-full bg-[#208cf1]" style={{ width: 90, height: 90, left: "70%", top: "8%", opacity: 0.1 }} />
          <div className="hero-shape hero-float-2 absolute rounded-full bg-[#f65a27]" style={{ width: 130, height: 130, left: "85%", top: "45%", opacity: 0.06 }} />
          <div className="hero-shape hero-float-3 absolute rounded-full border-2 border-[#2ba2f2]" style={{ width: 65, height: 65, left: "55%", top: "75%", opacity: 0.18 }} />
          <div className="hero-shape hero-float-1 absolute rounded-full bg-[#ffa300]" style={{ width: 45, height: 45, left: "92%", top: "18%", opacity: 0.14 }} />
          <div className="hero-shape hero-float-2 absolute rounded-full border-2 border-[#208cf1]" style={{ width: 100, height: 100, left: "48%", top: "38%", opacity: 0.08 }} />
          <div className="hero-shape hero-float-3 absolute rotate-45 rounded-sm bg-[#f65a27]" style={{ width: 28, height: 28, left: "78%", top: "62%", opacity: 0.13 }} />
          <div className="hero-shape hero-float-1 absolute rounded-full bg-[#4e9424]" style={{ width: 35, height: 35, left: "65%", top: "22%", opacity: 0.12 }} />
        </div>

        {/* ── Floating pill badges — CSS animated ── */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          <div className="hero-badge hero-float-2" style={{ position: "absolute", left: "58%", top: "10%" }}>
            <span className="rounded-full bg-[#208cf1] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg">Turismo Inclusivo</span>
          </div>
          <div className="hero-badge hero-float-3" style={{ position: "absolute", left: "75%", top: "32%" }}>
            <span className="rounded-full bg-[#2ba2f2] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg">50+ Destinos</span>
          </div>
          <div className="hero-badge hero-float-1" style={{ position: "absolute", left: "62%", top: "58%" }}>
            <span className="rounded-full bg-[#4e9424] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg">1.000+ Viajantes</span>
          </div>
          <div className="hero-badge hero-float-2" style={{ position: "absolute", left: "80%", top: "72%" }}>
            <span className="rounded-full bg-[#f65a27] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-lg">Curadoria Cultural</span>
          </div>
        </div>

        {/* ── Glass card — CSS float ── */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="pointer-events-none absolute z-20 hidden lg:block"
          style={{ right: "12%", top: "28%" }}
        >
          <div className="hero-float-3 w-[210px] rounded-2xl border border-white/50 bg-white/70 p-5 shadow-2xl shadow-black/5 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#208cf1] to-[#2ba2f2]" />
              <div>
                <p className="text-xs font-bold text-[#111827]">Inclusive Travel</p>
                <p className="text-[10px] text-[#111827]/35">Turismo cultural e inclusivo</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#111827]/35">Destinos</span>
                <span className="rounded-full bg-[#4e9424]/15 px-2 py-0.5 text-[9px] font-bold text-[#4e9424]">50+ países</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#111827]/35">Viajantes</span>
                <span className="rounded-full bg-[#f65a27]/15 px-2 py-0.5 text-[9px] font-bold text-[#f65a27]">1.000+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#111827]/35">Experiência</span>
                <span className="rounded-full bg-[#208cf1]/15 px-2 py-0.5 text-[9px] font-bold text-[#208cf1]">10+ anos</span>
              </div>
            </div>
          </div>
        </m.div>

        {/* ── Text content ── */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-12">
          {/* Logo + badge */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-5 flex items-center gap-3"
          >
            <img
              src="https://www.inclusivetravel.com.br/static/logo_inclusive.svg"
              alt="Inclusive Travel"
              className="h-5"
            />
            <span className="rounded-full bg-[#f65a27]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f65a27]">
              Apresentação
            </span>
          </m.div>

          {/* Name */}
          <h1 className="font-display leading-[0.88] tracking-tight">
            <span className="block text-[clamp(3.5rem,8vw,7rem)] font-extralight text-[#111827]">
              <KineticName text="INCLUSIVE" delay={0.5} />
            </span>
            <span className="block text-[clamp(3.5rem,8vw,7rem)] font-black text-[#111827]">
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
            <p className="max-w-sm font-display text-lg italic leading-relaxed text-[#111827]/40">
              Turismo cultural e inclusivo que
              <br className="hidden sm:block" /> transforma vidas pelo mundo.
            </p>

            <a
              href="#apresentacao"
              onClick={(e) => handleScroll(e, "#apresentacao")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.97]"
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

        {/* ── Mobile gradients ── */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div
            className="absolute -right-[20%] top-[5%] h-[60%] w-[60%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(32,140,241,0.2) 0%, transparent 65%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute bottom-[0%] left-[10%] h-[40%] w-[50%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(246,90,39,0.15) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />
        </div>
      </section>


      {/* ── All looping animations via CSS (GPU-accelerated, no JS) ── */}
      <style jsx>{`
        /* Gradient blobs — pure CSS, will-change for GPU layer */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
        }
        .hero-blob-1 {
          left: 40%; top: -15%; width: 65%; height: 80%;
          background: radial-gradient(ellipse at center, rgba(32,140,241,0.3) 0%, transparent 60%);
          filter: blur(50px);
          animation: blob1 16s ease-in-out infinite;
        }
        .hero-blob-2 {
          right: -5%; bottom: -10%; width: 55%; height: 65%;
          background: radial-gradient(ellipse at center, rgba(246,90,39,0.25) 0%, rgba(255,163,0,0.1) 50%, transparent 60%);
          filter: blur(55px);
          animation: blob2 20s ease-in-out infinite;
        }
        .hero-blob-3 {
          left: 55%; top: 30%; width: 45%; height: 50%;
          background: radial-gradient(ellipse at center, rgba(43,162,242,0.22) 0%, transparent 55%);
          filter: blur(40px);
          animation: blob3 14s ease-in-out infinite;
        }
        .hero-blob-4 {
          left: 65%; top: 15%; width: 20%; height: 20%;
          background: radial-gradient(ellipse at center, rgba(255,163,0,0.2) 0%, transparent 55%);
          filter: blur(25px);
          animation: blob4 12s ease-in-out infinite;
        }

        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.12); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(0.92); }
          66% { transform: translate(15px, -10px) scale(1.08); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -25px); }
        }
        @keyframes blob4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }

        /* Shapes & badges — lightweight CSS float */
        .hero-shape, .hero-badge {
          will-change: transform;
        }
        .hero-float-1 {
          animation: heroFloat1 6s ease-in-out infinite;
        }
        .hero-float-2 {
          animation: heroFloat2 7s ease-in-out infinite;
        }
        .hero-float-3 {
          animation: heroFloat3 5.5s ease-in-out infinite;
        }

        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* Staggered entrance for shapes and badges */
        .hero-shape {
          opacity: 0;
          animation-delay: 0s;
          animation-fill-mode: both;
        }
        .hero-shape:nth-child(1) { animation: heroFloat1 6s ease-in-out 0.8s infinite, heroFadeIn 0.6s ease-out 0.8s both; }
        .hero-shape:nth-child(2) { animation: heroFloat2 7s ease-in-out 0.95s infinite, heroFadeIn 0.6s ease-out 0.95s both; }
        .hero-shape:nth-child(3) { animation: heroFloat3 5.5s ease-in-out 1.1s infinite, heroFadeIn 0.6s ease-out 1.1s both; }
        .hero-shape:nth-child(4) { animation: heroFloat1 5s ease-in-out 1.25s infinite, heroFadeIn 0.6s ease-out 1.25s both; }
        .hero-shape:nth-child(5) { animation: heroFloat2 7.5s ease-in-out 1.4s infinite, heroFadeIn 0.6s ease-out 1.4s both; }
        .hero-shape:nth-child(6) { animation: heroFloat3 6.5s ease-in-out 1.55s infinite, heroFadeIn 0.6s ease-out 1.55s both; }
        .hero-shape:nth-child(7) { animation: heroFloat1 5.8s ease-in-out 1.7s infinite, heroFadeIn 0.6s ease-out 1.7s both; }

        .hero-badge {
          opacity: 0;
        }
        .hero-badge:nth-child(1) { animation: heroFloat2 4s ease-in-out 1.6s infinite, heroBadgeIn 0.5s ease-out 1.6s both; }
        .hero-badge:nth-child(2) { animation: heroFloat3 4.7s ease-in-out 1.8s infinite, heroBadgeIn 0.5s ease-out 1.8s both; }
        .hero-badge:nth-child(3) { animation: heroFloat1 5.1s ease-in-out 2.0s infinite, heroBadgeIn 0.5s ease-out 2.0s both; }
        .hero-badge:nth-child(4) { animation: heroFloat2 4.4s ease-in-out 2.2s infinite, heroBadgeIn 0.5s ease-out 2.2s both; }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(0.3) translateY(10px); }
          to { opacity: var(--tw-opacity, 1); transform: scale(1) translateY(0); }
        }
        @keyframes heroBadgeIn {
          from { opacity: 0; transform: scale(0.7) translateY(15px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
