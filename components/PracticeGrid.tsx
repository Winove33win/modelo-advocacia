import Link from "next/link";

const practices = [
  {
    title: "Business",
    description: "Estruturação societária, M&A, governança e blindagem patrimonial para empresas de alto crescimento.",
  },
  {
    title: "Construction",
    description: "Contratos EPC, compliance regulatório e resolução de disputas para obras de infraestrutura.",
  },
  {
    title: "Car Accident",
    description: "Defesa estratégica e acordos ágeis em litígios envolvendo responsabilidade civil e seguros.",
  },
  {
    title: "Wrongful Death",
    description: "Representação sensível e assertiva em casos de responsabilidade médica e indenizações complexas.",
  },
  {
    title: "Criminal",
    description: "Atuação em investigações corporativas, defesa de executivos e programas de integridade.",
  },
  {
    title: "Family",
    description: "Planejamento sucessório, gestão de holdings familiares e soluções em direito de família de alta complexidade.",
  },
];

export function PracticeGrid() {
  return (
    <section id="atuacao" className="mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="md:flex md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Áreas de atuação</p>
          <h2 className="section-title mt-4">Competência para navegar os cenários mais exigentes</h2>
          <p className="section-subtitle">
            Cada núcleo é liderado por sócios especialistas, integrando conhecimento jurídico profundo e visão de negócios.
          </p>
        </div>
        <Link href="#contato" className="btn-outline mt-8 md:mt-0">
          Falar com um especialista
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => (
          <article key={practice.title} className="card-surface group flex h-full flex-col justify-between p-6">
            <div>
              <h3 className="font-serif text-2xl text-white">{practice.title}</h3>
              <p className="mt-4 text-sm text-muted">{practice.description}</p>
            </div>
            <Link
              href="#contato"
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand transition-colors group-hover:text-white"
            >
              Ver mais
              <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
