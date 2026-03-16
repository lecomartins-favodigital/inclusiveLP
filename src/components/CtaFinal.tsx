import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551150264723?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20viagens%20da%20Inclusive%20Travel.";

export default function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-[#208cf1] via-[#1f8de8] to-[#2ba2f2] py-28 lg:py-36">
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm blob — CSS animation */}
      <div
        className="pointer-events-none absolute -right-[10%] bottom-[-15%] h-[60%] w-[45%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(246,90,39,0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
          animation: "orb-breathe-1 16s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -left-[8%] top-[10%] h-[50%] w-[35%] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,163,0,0.12) 0%, transparent 60%)",
          filter: "blur(70px)",
          animation: "orb-breathe-2 14s ease-in-out infinite",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Left */}
          <div>
            <div
              data-reveal="scale"
              className="mb-5 inline-flex items-center gap-2"
            >
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                Contato
              </span>
            </div>

            <h2
              data-reveal="up"
              style={{ transitionDelay: "0.05s" }}
              className="font-display text-4xl font-bold leading-tight text-white lg:text-5xl"
            >
              Vamos criar sua
              <br />
              próxima aventura?
            </h2>

            <p
              data-reveal="up"
              style={{ transitionDelay: "0.1s" }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-white/65"
            >
              Entre em contato e descubra como a Inclusive Travel pode
              transformar a sua próxima viagem.
            </p>

            {/* CTA buttons */}
            <div
              data-reveal="up"
              style={{ transitionDelay: "0.2s" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#111827] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.97]"
              >
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="tel:+551150264723"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                (11) 5026-4723
              </a>
            </div>
          </div>

          {/* Right — glass card */}
          <div
            data-reveal="up-scale"
            style={{ transitionDelay: "0.15s" }}
            className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
          >
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50">
              <span className="h-px w-5 bg-white/30" />
              Por que confiar
            </p>
            {[
              { value: "10+", label: "Anos de mercado" },
              { value: "1.000+", label: "Viajantes atendidos" },
              { value: "50+", label: "Destinos culturais" },
              { value: "16", label: "Guias especializados" },
            ].map((item, i) => (
              <div
                key={item.label}
                data-reveal="right"
                style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
                className={`flex items-baseline gap-3 py-3.5 ${
                  i > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-display text-2xl font-black text-white">
                  {item.value}
                </span>
                <span className="text-sm text-white/45">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
