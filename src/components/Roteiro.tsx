const destinations = [
  {
    name: "Rússia",
    tag: "Europa / Ásia",
    description: "Palácios imperiais, arte monumental e a imensidão de duas civilizações em um só território.",
    color: "#208cf1",
  },
  {
    name: "Espanha",
    tag: "Europa",
    description: "Flamenco, Gaudí e séculos de história entre o Mediterrâneo e os Pireneus.",
    color: "#f7682b",
  },
  {
    name: "Japão",
    tag: "Ásia",
    description: "Tradição milenar e modernidade radical. Templos, cerejeiras e uma cultura única no mundo.",
    color: "#2ba2f2",
  },
  {
    name: "África do Sul",
    tag: "África",
    description: "Cultura, natureza e a potência do continente africano. Safáris, história e diversidade.",
    color: "#4e9424",
  },
  {
    name: "Grécia e Itália",
    tag: "Europa",
    description: "Berço da civilização ocidental. Ruínas, arte renascentista e paisagens inesquecíveis.",
    color: "#1f8de8",
  },
  {
    name: "Israel e Jordânia",
    tag: "Oriente Médio",
    description: "Terra Santa, Petra e o deserto. Espiritualidade, história bíblica e arqueologia viva.",
    color: "#ffa300",
  },
  {
    name: "Reino Unido",
    tag: "Europa",
    description: "Monarquia, museus de classe mundial e a efervescência cultural de Londres a Edimburgo.",
    color: "#f65a27",
  },
];

export default function Roteiro() {
  return (
    <section id="roteiro" className="relative overflow-hidden bg-gradient-to-b from-[#f65a27] to-[#f7682b] py-24 lg:py-32">
      {/* Subtle warm glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[60%] w-[80%] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,200,100,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <span
            data-reveal="up"
            className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-white/60"
          >
            Nossos Destinos
          </span>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-4xl font-bold leading-tight text-white lg:text-6xl"
          >
            O mundo inteiro como
            <br />
            sala de aula
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70"
          >
            Roteiros culturais e educativos em mais de 50 destinos, com
            imersão em história, ancestralidade e diversidade.
          </p>
        </div>

        {/* ── Destination cards — top row (4) ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.slice(0, 4).map((dest, i) => (
            <div
              key={dest.name}
              data-reveal="up"
              style={{ transitionDelay: `${i * 0.07}s` }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-7"
            >
              <div
                className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
                style={{ backgroundColor: dest.color }}
              />

              <span
                className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: dest.color }}
              >
                {dest.tag}
              </span>

              <h3 className="font-display text-xl font-bold text-[#111827] lg:text-2xl">
                {dest.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#111827]/50">
                {dest.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom row (3) — centered ── */}
        <div className="mt-4 flex justify-center">
          <div className="grid w-full max-w-[calc(75%-0.5rem)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(4).map((dest, i) => (
              <div
                key={dest.name}
                data-reveal="up"
                style={{ transitionDelay: `${(i + 4) * 0.07}s` }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-7"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: dest.color }}
                />

                <span
                  className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: dest.color }}
                >
                  {dest.tag}
                </span>

                <h3 className="font-display text-xl font-bold text-[#111827] lg:text-2xl">
                  {dest.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#111827]/50">
                  {dest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom stats ── */}
        <div
          data-reveal="up"
          style={{ transitionDelay: "0.2s" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {[
            { n: "50+", label: "destinos" },
            { n: "4", label: "continentes" },
            { n: "1.000+", label: "viajantes" },
            { n: "10+", label: "anos" },
          ].map((s, i) => (
            <div key={s.label} className="text-center">
              <span className="block font-display text-3xl font-black text-white lg:text-4xl">{s.n}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</span>
              {i < 3 && (
                <span className="ml-14 hidden text-white/20 md:inline">|</span>
              )}
            </div>
          ))}
        </div>

        <p
          data-reveal="fade"
          style={{ transitionDelay: "0.3s" }}
          className="mt-10 text-center text-sm text-white/50"
        >
          Todos os roteiros são personalizáveis conforme o perfil e interesse do grupo.
        </p>
      </div>
    </section>
  );
}
