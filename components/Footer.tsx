import { Logo } from "@/components/Logo";

const links = [
  { href: "#solucao", label: "Produto" },
  { href: "#casos", label: "Soluções" },
  { href: "#ia", label: "Inteligência Artificial" },
  { href: "#dashboards", label: "BI" },
  { href: "#diferencial", label: "Empresa" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-void">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-10 px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Logo height={32} />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/45">
              Inteligência de dados para decisões extraordinárias.
            </p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-[13px] text-white/30">
          © 2026 TheDobra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
