const milestones = [
  { year: "2013", title: "O Início", text: "Nasce a DL Viagens com o sonho de viagens inclusivas e culturais.", color: "#208cf1", bg: "bg-[#208cf1]/10" },
  { year: "2016", title: "Novos Horizontes", text: "Primeiros roteiros internacionais para África, Europa e América do Sul.", color: "#2ba2f2", bg: "bg-[#2ba2f2]/10" },
  { year: "2021", title: "1.000 Viajantes", text: "Marco histórico: mais de mil pessoas transformadas pelas experiências.", color: "#f65a27", bg: "bg-[#f65a27]/10" },
  { year: "Hoje", title: "Referência", text: "50+ destinos, 16 guias especializados, referência em turismo inclusivo.", color: "#4e9424", bg: "bg-[#4e9424]/10" },
];

export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-[#faf8f5] py-24 lg:py-32">
      {/* Decorative gradient blob */}
      <div
        className="pointer-events-none absolute -right-[15%] top-[5%] h-[60%] w-[50%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(32,140,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <span
            data-reveal="scale"
            className="mb-4 inline-block rounded-full bg-[#f65a27]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#f65a27]"
          >
            Nossa Trajetória
          </span>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-4xl font-bold leading-tight text-[#111827] lg:text-5xl"
          >
            Uma década transformando{" "}
            <span className="text-[#f65a27]">vidas</span> pelo mundo
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mt-5 text-lg leading-relaxed text-[#111827]/50"
          >
            A Inclusive Travel nasceu com um propósito claro: democratizar o
            turismo cultural e criar conexões que transformam.
          </p>
        </div>

        {/* ── Pull quote ── */}
        <div
          data-reveal="left"
          style={{ transitionDelay: "0.15s" }}
          className="mb-16 rounded-2xl bg-white p-8 shadow-sm"
        >
          <p className="font-display text-xl leading-relaxed text-[#111827]/70 lg:text-2xl">
            &ldquo;Onde há diversidade, há potência. Onde há acolhimento, há
            transformação. Onde há inclusão, há{" "}
            <span className="font-bold text-[#208cf1]">vida</span>.&rdquo;
          </p>
        </div>

        {/* ── Timeline — horizontal colorful cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((ms, i) => (
            <div
              key={ms.year}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
              className={`group rounded-2xl ${ms.bg} border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Year badge */}
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: ms.color }}
              >
                {ms.year}
              </span>

              <h3 className="mt-4 text-lg font-bold text-[#111827]">
                {ms.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#111827]/45">
                {ms.text}
              </p>
            </div>
          ))}
        </div>

        {/* Company info */}
        <p
          data-reveal="fade"
          style={{ transitionDelay: "0.3s" }}
          className="mt-12 text-center text-xs text-[#111827]/25"
        >
          DL Viagens e Turismo Ltda. — CNPJ: 13.331.093/0001-89
        </p>
      </div>
    </section>
  );
}
