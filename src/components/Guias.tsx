import Image from "next/image";

/* ── YouTube icon ── */
function YtIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ── PRINCIPAIS — spotlight cards ── */
const principais = [
  {
    channel: "Inteligência Ltda",
    desc: "Podcast & Entretenimento",
    subs: "5.61M",
    logo: "/guias/ltda.svg",
    gradient: "from-[#003770] to-[#208cf1]",
  },
  {
    channel: "Ponto em Comum",
    desc: "Debates & Cultura",
    subs: "1.12M",
    logo: "/guias/davi.webp",
    gradient: "from-[#f65a27] to-[#ffa300]",
  },
  {
    channel: "3 Elementos",
    desc: "Emilio Garcia, Carlos Ruas & Mila Massuda",
    subs: "192K",
    logo: "/guias/elementos.webp",
    gradient: "from-[#2ba2f2] to-[#4e9424]",
  },
];

/* ── OUTRAS — secondary grid ── */
const outras = [
  { channel: "Vem a mim língua russa", subs: "640K", logo: "/guias/thiago.webp" },
  { channel: "Blablalogia", subs: "307K", logo: "/guias/blabla.svg" },
  { channel: "Felipe Hime", subs: "244K", logo: "/guias/hime.webp" },
  { channel: "Zoomundo", subs: "212K", logo: "/guias/zoomundo.svg" },
  { channel: "Física e Afins", subs: "480K", logo: "/guias/bibi.svg" },
  { channel: "Uma Tupã no Tempo", subs: "27K", logo: "/guias/tupa.svg" },
];

export default function Guias() {
  return (
    <section id="clientes-destaque" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* ── Header ── */}
        <div className="mb-14 max-w-2xl">
          <div data-reveal="scale" className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 max-w-[60px] bg-[#4e9424]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#4e9424]">
              Nossos Parceiros
            </span>
          </div>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl"
          >
            Parceiros que já{" "}
            <span className="text-[#f65a27]">embarcaram</span>
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[#111827]/50"
          >
            Canais e personalidades que confiaram na Inclusive Travel para
            criar experiências inesquecíveis com seus públicos.
          </p>
        </div>

        {/* ── 3M+ stat banner ── */}
        <div
          data-reveal="up-scale"
          className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#003770] to-[#208cf1] p-6 sm:p-10 text-white"
        >
          <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-8 sm:text-left">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              8.8M<span className="text-[#ffa300]">+</span>
            </span>
            <div>
              <p className="text-lg sm:text-xl font-bold">inscritos somados</p>
              <p className="mt-1 text-sm text-white/60">
                São quase 9 milhões de pessoas alcançadas pelos nossos parceiros.
                Produzimos experiências para os maiores canais do Brasil.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5 hidden sm:block" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 hidden sm:block" />
        </div>

        {/* ── Principais — 3 spotlight cards ── */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {principais.map((p, i) => (
            <div
              key={p.channel}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Logo — hero area */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.logo}
                  alt={p.channel}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info — bottom bar */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{p.channel}</h3>
                    <p className="mt-0.5 text-sm text-white/50">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5">
                    <YtIcon className="h-3.5 w-3.5 text-red-500" />
                    <span className="text-sm font-bold text-white">{p.subs}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Outras — secondary grid ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {outras.map((o, i) => (
            <div
              key={o.channel}
              data-reveal="scale"
              style={{ transitionDelay: `${(i % 3) * 0.05}s` }}
              className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-[#111827]/5 bg-[#faf8f5] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Logo */}
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={o.logo}
                  alt={o.channel}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-bold text-[#111827] truncate">
                  {o.channel}
                </p>
                <div className="mt-0.5 flex items-center gap-1">
                  <YtIcon className="h-3 w-3 text-red-500" />
                  <span className="text-xs text-[#111827]/40 font-medium">{o.subs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
