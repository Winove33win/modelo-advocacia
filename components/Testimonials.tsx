"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Camila Andrade",
    role: "CEO, Grupo Horizonte",
    quote:
      "Excelência técnica e presença constante. Em menos de 90 dias, concluímos uma reestruturação societária complexa com total segurança.",
  },
  {
    name: "Fernando Lima",
    role: "Diretor Jurídico, Atlas Infra",
    quote:
      "A equipe combinou visão de negócios e domínio regulatório para reduzir em 40% nosso passivo trabalhista nos últimos 12 meses.",
  },
  {
    name: "Juliana Costa",
    role: "Fundadora, Instituto Lumina",
    quote:
      "Comunicação impecável e estratégias claras. Sentimos o escritório como uma extensão do nosso conselho.",
  },
];

const clients = ["LUMIN", "ATLAS", "HORIZON", "NEXA", "PRIME"];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="lg:w-1/3">
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Provas sociais</p>
          <h2 className="section-title mt-4">Confiança de quem lidera mercados estratégicos</h2>
          <p className="section-subtitle">
            Resultados consistentes nos permitem acompanhar empresas em ciclos completos de expansão, captação e governança.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5" aria-hidden="true">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-16 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-xs font-semibold tracking-[0.3em] text-white/70"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="card-surface relative overflow-hidden p-10">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Depoimentos</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  className="btn-outline h-11 w-11 rounded-full p-0"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="btn-outline h-11 w-11 rounded-full p-0"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-8 min-h-[220px]" aria-live="polite">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <blockquote
                    key={testimonial.name}
                    className={`transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "pointer-events-none absolute opacity-0"
                    }`}
                    aria-hidden={!isActive}
                    style={!isActive ? { position: "absolute", inset: 0 } : undefined}
                  >
                    <p className="text-xl leading-relaxed text-white">“{testimonial.quote}”</p>
                    <footer className="mt-6 text-sm text-muted">
                      <span className="font-semibold text-white">{testimonial.name}</span> · {testimonial.role}
                    </footer>
                  </blockquote>
                );
              })}
            </div>
            <div className="mt-8 flex gap-2" role="tablist" aria-label="Selecionar depoimento">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Exibir depoimento de ${testimonial.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 flex-1 rounded-full transition-colors ${
                    activeIndex === index ? "bg-brand" : "bg-white/10 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
