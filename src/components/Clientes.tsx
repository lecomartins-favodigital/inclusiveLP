const mainPartners = [
  {
    channel: "Emílio Garcia",
    handle: "@emiliogarcia",
    initial: "EG",
    color: "#208cf1",
  },
  {
    channel: "Davi Calazans",
    handle: "@davicalazans",
    initial: "DC",
    color: "#f65a27",
  },
  {
    channel: "Inteligência Limitada",
    handle: "@inteligencialimitada",
    initial: "IL",
    color: "#4e9424",
  },
  {
    channel: "Amanda Alves",
    handle: "@amandaalves",
    initial: "AA",
    color: "#2ba2f2",
  },
  {
    channel: "Bruno Augusta",
    handle: "@brunoaugusta",
    initial: "BA",
    color: "#ffa300",
  },
  {
    channel: "Carlos Ruas",
    handle: "@carlosruas",
    initial: "CR",
    color: "#003770",
  },
];

const secondaryPartners = [
  "Blablalogia",
  "Felipe Hime",
  "Bibi Bailas",
  "Mila Massuda",
  "Thiago de Melo",
  "Tupã Guerra",
  "Pauline Kisner",
  "João Pedro Rangel",
  "Marco André",
  "Lucas Fabrini",
  "Vitor Soares",
];

export default function Clientes() {
  return (
    <section id="clientes" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* ── Header ── */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <span
            data-reveal="scale"
            className="mb-4 inline-block rounded-full bg-[#208cf1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#208cf1]"
          >
            Parceiros
          </span>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl"
          >
            Canais que <span className="text-[#208cf1]">confiam</span> na
            Inclusive Travel
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[#111827]/50"
          >
            Trabalhamos com criadores de conteúdo e canais que compartilham
            nossos valores de inclusão e diversidade.
          </p>
        </div>

        {/* ── Big stat ── */}
        <div
          data-reveal="up-scale"
          className="relative mb-12 sm:mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#003770] to-[#208cf1] p-8 sm:p-12 text-white"
        >
          <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-8 sm:text-left">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              3M<span className="text-[#ffa300]">+</span>
            </span>
            <div>
              <p className="text-xl sm:text-2xl font-bold">
                inscritos somados
              </p>
              <p className="mt-1 text-sm sm:text-base text-white/60">
                Nossos parceiros alcançam milhões de pessoas com conteúdo
                autêntico sobre viagem, cultura e diversidade.
              </p>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5 hidden sm:block" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 hidden sm:block" />
        </div>

        {/* ── Main partners grid ── */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {mainPartners.map((p, i) => (
            <div
              key={p.channel}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.08}s` }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#111827]/5 bg-[#faf8f5] p-5 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Channel logo placeholder */}
              <div
                className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl text-lg sm:text-xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: p.color }}
              >
                {p.initial}
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#111827]">
                  {p.channel}
                </p>
                <p className="mt-0.5 text-xs text-[#111827]/35">
                  {p.handle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Secondary partners ── */}
        <div data-reveal="up" className="mt-10 sm:mt-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-[#4e9424]/10 px-3 py-1 text-xs font-bold text-[#4e9424]">
              + {secondaryPartners.length} parceiros
            </span>
            <span className="text-xs sm:text-sm text-[#111827]/35">
              E muitos outros criadores incríveis
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {secondaryPartners.map((name) => (
              <span
                key={name}
                className="rounded-full border border-[#111827]/8 bg-white px-3 sm:px-3.5 py-1.5 text-xs font-medium text-[#111827]/50 transition-all duration-200 hover:border-[#208cf1]/30 hover:text-[#208cf1]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
