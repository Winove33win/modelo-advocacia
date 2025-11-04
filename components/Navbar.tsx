"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#atuacao" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-lg font-semibold uppercase tracking-[0.2em] text-brand">
          Seu Escritório
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Menu principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-text focus-visible:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#contato" className="btn-outline">
            Fale Conosco
          </a>
          <a href="#contato" className="btn-primary">
            Agendar Consulta
          </a>
        </div>
        <button
          type="button"
          className="btn-outline h-11 w-11 rounded-full border border-white/10 p-0 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menu</span>
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "max-h-screen border-t border-white/10" : "max-h-0 overflow-hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <nav className="space-y-4 px-6 py-6" aria-label="Menu móvel">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a href="#contato" className="btn-outline w-full text-center">
              Fale Conosco
            </a>
            <a href="#contato" className="btn-primary w-full text-center">
              Agendar Consulta
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
