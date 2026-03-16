export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1117] pt-16 pb-10">
      {/* Subtle top gradient line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#208cf1]/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Top row — logo + nav */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <img
              src="https://inclusivetravel.com.br/static/logo_inclusive_branco.svg"
              alt="Inclusive Travel"
              className="h-6 opacity-70"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/30">
              Turismo cultural e inclusivo que transforma vidas pelo mundo.
              Roteiros educativos em mais de 50 destinos.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 sm:gap-16">
            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-wider text-white/20">
                Navegação
              </span>
              <ul className="space-y-2.5">
                {[
                  { label: "Quem Somos", id: "apresentacao" },
                  { label: "Parceiros", id: "clientes-destaque" },
                  { label: "Destinos", id: "roteiro" },
                  { label: "Como Funciona", id: "como-funciona" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-wider text-white/20">
                Contato
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.instagram.com/inclusivetravel_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70"
                  >
                    @inclusivetravel_
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+551150264723"
                    className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70"
                  >
                    (11) 5026-4723
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/551150264723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/15">
            DL Viagens e Turismo Ltda. &mdash; CNPJ: 13.331.093/0001-89
          </p>
          <p className="text-[11px] text-white/15">
            Inclusive Travel &mdash; Todos os direitos reservados
          </p>
        </div>

        <div className="mt-6 h-px bg-white/[0.04]" />

        <p className="mt-5 text-center text-[11px] text-white/15">
          &copy; 2026 favo.digital &mdash; Todos os direitos reservados. &nbsp;&nbsp; Construído com o cuidado de uma colmeia.
        </p>
      </div>
    </footer>
  );
}
