const testimonials = [
  {
    name: "Rafael Nascimento",
    trip: "África do Sul, 2024",
    initial: "R",
    color: "#208cf1",
    bg: "bg-[#208cf1]",
    quote:
      "Pela primeira vez me senti verdadeiramente acolhido em uma viagem. A Inclusive entende o que é diversidade na prática.",
  },
  {
    name: "Camila Souza",
    trip: "Egito, 2023",
    initial: "C",
    color: "#f65a27",
    bg: "bg-[#f65a27]",
    quote:
      "A viagem ao Egito foi uma imersão incrível. Cada detalhe do roteiro foi pensado para nos conectar com a história e a ancestralidade. Voltei transformada.",
  },
  {
    name: "Thiago Almeida",
    trip: "Portugal, 2024",
    initial: "T",
    color: "#2ba2f2",
    bg: "bg-[#2ba2f2]",
    quote:
      "O grupo era tão diverso e acolhedor que fiz amizades para a vida toda. Portugal nunca vai ser a mesma coisa depois dessa viagem.",
  },
];

const guides = [
  "Emílio Garcia", "Amanda Alves", "Bruno Augusta", "Carlos Ruas",
  "Davi Calazans", "Felipe Hime", "Bibi Bailas", "Mila Massuda",
  "Paulo Cacella", "Thiago de Melo", "Tupã Guerra", "Pauline Kisner",
  "João Pedro Rangel", "Marco André", "Lucas Fabrini", "Vitor Soares",
];

export default function Clientes() {
  return (
    <section id="clientes" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <span
            data-reveal="scale"
            className="mb-4 inline-block rounded-full bg-[#f65a27]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#f65a27]"
          >
            Depoimentos
          </span>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-4xl font-bold leading-tight text-[#111827] lg:text-5xl"
          >
            Quem já viajou{" "}
            <span className="text-[#f65a27]">com a gente</span>
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mt-5 text-lg leading-relaxed text-[#111827]/50"
          >
            Depoimentos reais de viajantes que viveram a experiência
            Inclusive Travel.
          </p>
        </div>

        {/* ── Testimonials — vibrant cards ── */}
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
              className="group rounded-2xl border border-[#111827]/5 bg-[#faf8f5] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="h-4 w-4 fill-[#ffa300]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-[15px] leading-relaxed text-[#111827]/65">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${t.bg} text-sm font-bold text-white`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-xs text-[#111827]/35">{t.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Guides ── */}
        <div
          data-reveal="up"
          className="mt-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full bg-[#4e9424]/10 px-3 py-1 text-xs font-bold text-[#4e9424]">
              16 Guias
            </span>
            <span className="text-sm text-[#111827]/35">
              Líderes de viagem especializados em curadoria cultural
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {guides.map((guide) => (
              <span
                key={guide}
                className="rounded-full border border-[#111827]/8 bg-white px-3.5 py-1.5 text-xs font-medium text-[#111827]/50 transition-all duration-200 hover:border-[#208cf1]/30 hover:text-[#208cf1]"
              >
                {guide}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
