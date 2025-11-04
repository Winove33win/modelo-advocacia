import Image from "next/image";

export function Stats() {
  return (
    <section className="mx-auto -mt-12 max-w-4xl px-6 lg:-mt-20 lg:px-0" aria-label="Indicadores do escritório">
      <div className="card-surface flex flex-col gap-8 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/founder-avatar.svg"
            alt="Retrato do sócio fundador"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-brand/50"
          />
          <div>
            <p className="text-sm font-semibold text-white">Ricardo Menezes</p>
            <p className="text-xs text-muted">Sócio-fundador • OAB/SP 12345</p>
          </div>
        </div>
        <dl className="grid flex-1 grid-cols-2 gap-6 text-center text-sm sm:grid-cols-3">
          <div>
            <dt className="uppercase tracking-[0.2em] text-brand">Êxito</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">95%</dd>
            <dd className="mt-1 text-xs text-muted">Casos estratégicos concluídos</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-brand">Experiência</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">35+</dd>
            <dd className="mt-1 text-xs text-muted">Anos de atuação combinada</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-brand">Reconhecimento</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">12</dd>
            <dd className="mt-1 text-xs text-muted">Prêmios nacionais recentes</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
