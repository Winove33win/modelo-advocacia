const footerLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-surface/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-brand">Seu Escritório</p>
          <p className="mt-4 text-sm text-muted">
            Av. Paulista, 1000 · São Paulo/SP · <a href="tel:+551140001234" className="hover:text-white">+55 (11) 4000-1234</a>
          </p>
          <p className="mt-1 text-sm text-muted">
            <a href="mailto:contato@seuescritorio.com" className="hover:text-white">
              contato@seuescritorio.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm text-muted sm:flex-row sm:items-center">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted/70">© {new Date().getFullYear()} Seu Escritório. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
