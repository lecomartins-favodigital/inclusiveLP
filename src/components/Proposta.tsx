"use client";

import { m, useScroll, useTransform, useInView, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const spring = { type: "spring" as const, stiffness: 200, damping: 25 };

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    import("framer-motion").then(({ animate }) => {
      animate(val, to, { duration: 2.5, ease: "easeOut" });
    });
  }, [inView, val, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toLocaleString("pt-BR") + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Proposta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.6], [0, 1, 0.6]);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative overflow-hidden bg-[#faf8f5] py-32 lg:py-44"
    >
      {/* ── Grid background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,24,39,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #faf8f5 70%)",
          }}
        />
      </div>

      {/* ── Moving gradient orbs ── */}
      <m.div
        className="pointer-events-none absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(246,90,39,0.07) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" as const }}
      />
      <m.div
        className="pointer-events-none absolute bottom-[10%] right-[5%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(32,140,241,0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" as const }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-28 lg:mb-36">
          <m.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block overflow-hidden text-xs font-bold uppercase tracking-[0.4em] text-[#f65a27]"
          >
            Como Funciona
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="max-w-3xl font-display text-5xl font-bold leading-[1.1] text-[#111827] lg:text-7xl"
          >
            Do sonho ao{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#f65a27] to-[#ffa300] bg-clip-text text-transparent">
                embarque
              </span>
              <m.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#f65a27] to-[#ffa300]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              />
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.25 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[#111827]/45"
          >
            Três etapas simples separam você da viagem mais
            transformadora da sua vida.
          </m.p>
        </div>

        {/* ── Timeline with SVG path ── */}
        <div className="relative">
          {/* Animated SVG path — central line */}
          <div className="pointer-events-none absolute left-8 top-0 hidden h-full w-px lg:left-1/2 lg:block lg:-translate-x-1/2">
            <svg
              className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2"
              preserveAspectRatio="none"
              viewBox="0 0 16 100"
              fill="none"
            >
              <m.line
                x1="8" y1="0" x2="8" y2="100"
                stroke="url(#timeline-grad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="timeline-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#208cf1" />
                  <stop offset="50%" stopColor="#f65a27" />
                  <stop offset="100%" stopColor="#2ba2f2" />
                </linearGradient>
              </defs>
            </svg>
            <m.div
              className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2"
              style={{
                background: "linear-gradient(to bottom, rgba(32,140,241,0.1), rgba(246,90,39,0.1), rgba(43,162,242,0.1))",
                filter: "blur(15px)",
                opacity: glowOpacity,
              }}
            />
          </div>

          {/* Step 1 — left */}
          <div className="relative grid items-center gap-8 pb-24 lg:grid-cols-2 lg:pb-32">
            <m.div
              className="absolute left-[26px] top-8 z-10 hidden lg:left-1/2 lg:block lg:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
            >
              <span className="relative flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#208cf1] opacity-30" />
                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#208cf1] bg-[#faf8f5]">
                  <span className="h-2 w-2 rounded-full bg-[#208cf1]" />
                </span>
              </span>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="lg:pr-16 lg:text-right"
            >
              <span className="font-display text-[120px] font-black leading-none text-[#111827]/[0.04] lg:text-[160px]">
                01
              </span>
              <div className="-mt-16 lg:-mt-20">
                <span className="mb-3 inline-block rounded-full bg-[#208cf1]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#208cf1]">
                  Etapa 1
                </span>
                <h3 className="font-display text-3xl font-bold text-[#111827] lg:text-4xl">
                  Contato
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#111827]/45">
                  Conversamos sobre seus interesses, datas e o destino ideal.
                  Entendemos o perfil do grupo para criar algo verdadeiramente sob medida.
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.25 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-[#111827]/[0.06] bg-white p-8 shadow-lg shadow-black/[0.04]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="space-y-3">
                  <m.div
                    className="h-3 rounded-full bg-[#208cf1]/15"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  />
                  <m.div
                    className="h-3 rounded-full bg-[#208cf1]/10"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  />
                  <m.div
                    className="h-3 rounded-full bg-[#208cf1]/12"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
                  />
                </div>
                <div className="mt-6 flex gap-3">
                  <m.div
                    className="rounded-lg bg-[#208cf1]/10 px-4 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  >
                    <span className="text-xs font-semibold text-[#208cf1]">Destino definido</span>
                  </m.div>
                  <m.div
                    className="rounded-lg bg-[#111827]/[0.04] px-4 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                  >
                    <span className="text-xs font-semibold text-[#111827]/40">Datas confirmadas</span>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>

          {/* Step 2 — right (reversed) */}
          <div className="relative grid items-center gap-8 pb-24 lg:grid-cols-2 lg:pb-32">
            <m.div
              className="absolute left-[26px] top-8 z-10 hidden lg:left-1/2 lg:block lg:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
            >
              <span className="relative flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f65a27] opacity-30" />
                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#f65a27] bg-[#faf8f5]">
                  <span className="h-2 w-2 rounded-full bg-[#f65a27]" />
                </span>
              </span>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.25 }}
              className="relative lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-[#111827]/[0.06] bg-white p-8 shadow-lg shadow-black/[0.04]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f65a27]">Roteiro</span>
                  <span className="rounded-full bg-[#f65a27]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#f65a27]">Personalizado</span>
                </div>
                {[
                  { day: "Dia 1-2", place: "Chegada + City Tour", w: "100%" },
                  { day: "Dia 3-4", place: "Imersão Cultural", w: "88%" },
                  { day: "Dia 5-6", place: "Experiência Local", w: "75%" },
                  { day: "Dia 7", place: "Encerramento", w: "50%" },
                ].map((item, idx) => (
                  <m.div
                    key={item.day}
                    className="flex items-center gap-4 border-t border-[#111827]/[0.05] py-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.15 }}
                  >
                    <span className="w-16 flex-shrink-0 text-[11px] font-semibold text-[#111827]/30">{item.day}</span>
                    <span className="text-sm text-[#111827]/60">{item.place}</span>
                    <m.div
                      className="ml-auto h-1.5 rounded-full bg-[#f65a27]/20"
                      initial={{ width: "0%" }}
                      whileInView={{ width: item.w }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                      style={{ maxWidth: "80px" }}
                    />
                  </m.div>
                ))}
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="lg:order-2 lg:pl-16"
            >
              <span className="font-display text-[120px] font-black leading-none text-[#111827]/[0.04] lg:text-[160px]">
                02
              </span>
              <div className="-mt-16 lg:-mt-20">
                <span className="mb-3 inline-block rounded-full bg-[#f65a27]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#f65a27]">
                  Etapa 2
                </span>
                <h3 className="font-display text-3xl font-bold text-[#111827] lg:text-4xl">
                  Planejamento
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#111827]/45">
                  Nossa equipe monta o roteiro personalizado com todos os detalhes:
                  hospedagem, guias especializados, experiências culturais e logística completa.
                </p>
              </div>
            </m.div>
          </div>

          {/* Step 3 — left */}
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <m.div
              className="absolute left-[26px] top-8 z-10 hidden lg:left-1/2 lg:block lg:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.2 }}
            >
              <span className="relative flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ba2f2] opacity-30" />
                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#2ba2f2] bg-[#faf8f5]">
                  <span className="h-2 w-2 rounded-full bg-[#2ba2f2]" />
                </span>
              </span>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="lg:pr-16 lg:text-right"
            >
              <span className="font-display text-[120px] font-black leading-none text-[#111827]/[0.04] lg:text-[160px]">
                03
              </span>
              <div className="-mt-16 lg:-mt-20">
                <span className="mb-3 inline-block rounded-full bg-[#2ba2f2]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2ba2f2]">
                  Etapa 3
                </span>
                <h3 className="font-display text-3xl font-bold text-[#111827] lg:text-4xl">
                  Embarque
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#111827]/45">
                  Tudo acertado, é só embarcar. Suporte 24h, seguro viagem internacional
                  e a certeza de viver a experiência mais transformadora da sua vida.
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.25 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-[#111827]/[0.06] bg-white p-8 shadow-lg shadow-black/[0.04]">
                {/* Boarding pass style */}
                <div className="mb-6 flex items-center justify-between border-b border-dashed border-[#111827]/10 pb-5">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#111827]/30">Passageiro</span>
                    <span className="mt-1 block text-sm font-bold text-[#111827]/80">Seu Nome Aqui</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#111827]/30">Destino</span>
                    <span className="mt-1 block text-sm font-bold text-[#2ba2f2]">O Mundo</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#111827]/30">Status</span>
                    <m.span
                      className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#28c840]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#28c840]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                      Confirmado
                    </m.span>
                  </div>
                  <m.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    {[...Array(5)].map((_, idx) => (
                      <m.div
                        key={idx}
                        className="h-8 w-[3px] rounded-full bg-[#2ba2f2]/25"
                        animate={{ scaleY: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1,
                          delay: idx * 0.1,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                        }}
                      />
                    ))}
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        </div>

        {/* ── Bottom — O que está incluso ── */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring }}
          className="mt-32 overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] to-[#1a2332] lg:mt-40"
        >
          <div className="p-10 pb-0 text-center lg:p-14 lg:pb-0">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#f65a27]">
              Incluso em cada viagem
            </span>
            <h3 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Tudo pensado pra você
            </h3>
          </div>

          <div className="mt-10 grid gap-px bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Roteiros exclusivos", desc: "Cada viagem é única e planejada sob medida para o grupo.", color: "#208cf1" },
              { title: "Hospedagem premium", desc: "Hotéis selecionados com conforto e localização privilegiada.", color: "#f65a27" },
              { title: "Guias especializados", desc: "Profissionais com curadoria cultural e conhecimento local.", color: "#2ba2f2" },
              { title: "Conteúdo educativo", desc: "Experiências que vão além do turismo convencional.", color: "#ffa300" },
              { title: "Suporte 24h", desc: "Assistência completa durante toda a viagem.", color: "#4e9424" },
              { title: "Seguro viagem", desc: "Cobertura internacional para sua tranquilidade.", color: "#1f8de8" },
            ].map((item, i) => (
              <m.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-[#111827] p-7 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <m.div
                  className="mb-4 h-1 w-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                  whileInView={{ width: "24px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                />
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/35">{item.desc}</p>
              </m.div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-10 border-t border-white/[0.06] px-10 py-10">
            {[
              { n: 1000, suffix: "+", label: "Viajantes atendidos" },
              { n: 16, suffix: "", label: "Guias especializados" },
              { n: 10, suffix: "+", label: "Anos de experiência" },
              { n: 50, suffix: "+", label: "Destinos culturais" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-display text-3xl font-black text-white lg:text-4xl">
                  <Counter to={s.n} suffix={s.suffix} />
                </span>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-white/25">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
