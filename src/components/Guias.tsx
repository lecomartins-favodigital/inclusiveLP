import Image from "next/image";

/* ── YouTube icon ── */
function YtIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ── Featured creators (spotlight cards) ── */
const featured = [
  {
    name: "3 Elementos",
    members: "Emilio Garcia, Carlos Ruas & Mila Massuda",
    channel: "3 Elementos",
    subs: "192K",
    img: "/guias/elementos.webp",
    gradient: "from-[#f65a27] to-[#f7682b]",
  },
  {
    name: "Blablalogia",
    members: "Emilio Garcia",
    channel: "Blablalogia",
    subs: "307K",
    img: "/guias/blabla.webp",
    gradient: "from-[#208cf1] to-[#1f8de8]",
  },
  {
    name: "Felipe Hime",
    members: "Astrofísico & Divulgador",
    channel: "Felipe Hime",
    subs: "244K",
    img: "/guias/hime.webp",
    gradient: "from-[#2ba2f2] to-[#1f8de8]",
  },
];

/* ── Other creators (grid) ── */
const others = [
  { name: "Amanda Alves Gomes", img: "/guias/amanda.webp", pos: "center" },
  { name: "Bruno Gonçalves Augusta", img: "/guias/bruno.webp", pos: "30% 10%" },
  { name: "Davi Calazans", img: "/guias/davi.webp", pos: "center" },
  { name: "Bibi Bailas", img: "/guias/bailas.webp", pos: "top" },
  { name: "Paulo Cacella", img: "/guias/paulo.webp", pos: "50% 20%" },
  { name: "Thiago de Melo", img: "/guias/thiago.webp", pos: "center" },
  { name: "Tupá Guerra", img: "/guias/tupa.webp", pos: "top" },
];

export default function Guias() {
  return (
    <section id="clientes-destaque" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="mb-14 max-w-2xl">
          <div
            data-reveal="scale"
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px flex-1 max-w-[60px] bg-[#4e9424]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#4e9424]">
              Nossos Clientes
            </span>
          </div>

          <h2
            data-reveal="up"
            style={{ transitionDelay: "0.1s" }}
            className="font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl"
          >
            Criadores que já{" "}
            <span className="text-[#f65a27]">embarcaram</span>
          </h2>

          <p
            data-reveal="up"
            style={{ transitionDelay: "0.2s" }}
            className="mt-5 text-lg leading-relaxed text-[#111827]/50"
          >
            Canais e personalidades que confiaram na Inclusive Travel para
            criar experiências inesquecíveis com seus públicos.
          </p>
        </div>

        {/* ── Spotlight — featured channels ── */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {featured.map((f, i) => (
            <div
              key={f.channel}
              data-reveal="up-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${f.gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Photo — top portion */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Subscriber badge */}
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  <YtIcon className="h-3.5 w-3.5 text-red-500" />
                  <span className="text-xs font-bold text-white">{f.subs}</span>
                </div>
              </div>

              {/* Info — bottom */}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <YtIcon className="h-4 w-4 text-white/80" />
                  <h3 className="text-lg font-bold text-white">{f.channel}</h3>
                </div>
                <p className="mt-1.5 text-sm text-white/60">{f.members}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Grid — other creators ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {others.map((o, i) => (
            <div
              key={o.name}
              data-reveal="scale"
              style={{ transitionDelay: `${(i % 4) * 0.05}s` }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={o.img}
                alt={o.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: o.pos }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-bold text-white drop-shadow-sm">
                  {o.name}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#f65a27] to-[#ffa300] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* ── Badge ── */}
        <div
          data-reveal="up"
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-bold text-white">
            <span className="text-[#ffa300]">743K+</span> inscritos combinados
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-bold text-white">
            <span className="text-[#208cf1]">1.000+</span> viajantes atendidos
          </span>
        </div>
      </div>
    </section>
  );
}
