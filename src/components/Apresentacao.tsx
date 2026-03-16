"use client";

import { useEffect, useRef, useState } from "react";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          const steps = Math.min(target, 60);
          const step = Math.max(Math.floor(2000 / steps), 20);
          let cur = 0;
          const inc = Math.ceil(target / steps);
          const t = setInterval(() => {
            cur += inc;
            if (cur >= target) { cur = target; clearInterval(t); }
            setCount(cur);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, started]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 1000, suffix: "+", label: "Viajantes atendidos", gradient: "from-[#f65a27] to-[#f7682b]", icon: "✈" },
  { target: 50, suffix: "+", label: "Destinos culturais", gradient: "from-[#2ba2f2] to-[#1f8de8]", icon: "🌍" },
  { target: 10, suffix: "+", label: "Anos de mercado", gradient: "from-[#4e9424] to-[#347318]", icon: "⏳" },
  { target: 16, suffix: "", label: "Guias especializados", gradient: "from-[#ffa300] to-[#ff9700]", icon: "🧭" },
];

const pillars = [
  {
    number: "01",
    title: "Segurança e Confiança",
    text: "Planejamento detalhado, suporte 24h e total transparência. Mais de uma década de operação segura.",
    accent: "#ffa300",
  },
  {
    number: "02",
    title: "Experiências Exclusivas",
    text: "Roteiros curados com conteúdo em ciência, cultura, espiritualidade e saberes ancestrais.",
    accent: "#f65a27",
  },
  {
    number: "03",
    title: "Inclusão de Verdade",
    text: "Acolhemos todas as pessoas. Diversidade não é slogan, é nossa essência desde o primeiro dia.",
    accent: "#2ba2f2",
  },
];

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="relative overflow-hidden bg-[#111827] py-16 sm:py-28 lg:py-36">
      {/* Colored gradient blobs — hidden on mobile for performance */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div
          className="absolute -left-[15%] top-[-10%] h-[60%] w-[50%] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(32,140,241,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] h-[55%] w-[45%] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(246,90,39,0.2) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-20">
          <div
            data-reveal="scale"
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px flex-1 max-w-[60px] bg-[#f65a27]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f65a27]">
              Quem Somos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <h2
              data-reveal="up"
              style={{ transitionDelay: "0.1s" }}
              className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05]"
            >
              <span className="text-white">Conheça a</span>
              <br />
              <span className="bg-gradient-to-r from-[#208cf1] via-[#2ba2f2] to-[#f65a27] bg-clip-text text-transparent">
                Inclusive Travel
              </span>
            </h2>

            <p
              data-reveal="up"
              style={{ transitionDelay: "0.2s" }}
              className="max-w-lg text-base leading-relaxed text-white/50 lg:pb-2"
            >
              Nascemos para celebrar a diversidade humana através de viagens
              culturais e educativas. Mais de 10 anos transformando vidas,
              conectando pessoas e criando memórias coletivas pelo mundo.
            </p>
          </div>
        </div>

        {/* ── Stats — gradient cards grid ── */}
        <div className="mb-20 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.08}s` }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.gradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-7`}
            >
              <span className="pointer-events-none absolute -right-2 -top-2 text-[4rem] leading-none opacity-20">
                {s.icon}
              </span>

              <span className="relative block font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-none text-white">
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="relative mt-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Pillars — glassmorphic cards ── */}
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />

              <span
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-white"
                style={{ backgroundColor: p.accent }}
              >
                {p.number}
              </span>

              <h3 className="mb-3 text-lg font-bold text-white">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/45">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Pull quote ── */}
        <div
          data-reveal="up"
          style={{ transitionDelay: "0.15s" }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-[#208cf1]/10 via-transparent to-[#f65a27]/10 px-8 py-8 lg:px-12"
        >
          <p className="font-display text-xl leading-relaxed text-white/70 lg:text-2xl">
            &ldquo;Onde há diversidade, há potência. Onde há acolhimento, há
            transformação. Onde há inclusão, há{" "}
            <span className="font-bold text-[#208cf1]">vida</span>.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
