import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-80" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-28 lg:flex-row lg:px-8 lg:pb-32 lg:pt-32">
        <div className="w-full lg:w-3/5">
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Advocacia premium</p>
          <h1 id="hero-title" className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Somos um grupo de advogados certificados
          </h1>
          <p className="mt-6 text-base text-muted sm:text-lg">
            Oferecemos soluções jurídicas sob medida para empresas e famílias que exigem precisão, velocidade e confidencialidade absoluta.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#contato" className="btn-primary">
              Agendar Consulta
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#contato" className="btn-outline">
              Entrar em Contato
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-sm text-muted sm:w-max sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-brand">Clientes Ativos</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">180+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-brand">Casos Concluídos</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">940</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-brand">Equipe Especialista</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">25</dd>
            </div>
          </dl>
        </div>
        <div className="relative w-full lg:w-2/5">
          <div className="card-surface relative overflow-hidden">
            <Image
              src="/images/hero-portrait.svg"
              alt="Sócio fundador do escritório de advocacia"
              width={720}
              height={880}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/40 to-transparent p-6">
              <p className="text-sm font-semibold text-white">Ricardo Menezes</p>
              <p className="text-xs text-muted">Sócio-fundador • OAB/SP 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
