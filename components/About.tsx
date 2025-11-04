import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Sobre o escritório</p>
          <h2 className="section-title mt-4">Estratégia jurídica guiada por resultados mensuráveis</h2>
          <p className="section-subtitle">
            Atuamos ao lado dos principais executivos, conselhos e famílias empresárias para antecipar riscos, proteger patrimônio e impulsionar decisões de alto impacto.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-surface p-6">
              <h3 className="font-serif text-xl text-white">Governança orientada a dados</h3>
              <p className="mt-3 text-sm text-muted">
                Utilizamos tecnologia proprietária para monitorar indicadores jurídicos em tempo real e propor ações preventivas.
              </p>
            </div>
            <div className="card-surface p-6">
              <h3 className="font-serif text-xl text-white">Equipe multidisciplinar</h3>
              <p className="mt-3 text-sm text-muted">
                Advogados especialistas com experiência em M&A, infraestrutura, contencioso estratégico e direito de família.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="card-surface overflow-hidden">
            <Image
              src="/images/boardroom.svg"
              alt="Equipe jurídica em reunião estratégica"
              width={760}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
