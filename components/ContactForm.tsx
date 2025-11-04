"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(3, "Informe seu nome completo."),
  email: z.string().email("Digite um e-mail válido."),
  phone: z
    .string()
    .min(10, "Informe um telefone com DDD.")
    .regex(/^[0-9()+\s-]+$/, "Use apenas números e símbolos válidos."),
  message: z.string().min(20, "Compartilhe detalhes do seu caso."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário autorizar o uso dos dados conforme a LGPD." }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setStatus("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">Contato</p>
          <h2 className="section-title mt-4">Pronto para orientar seus próximos movimentos</h2>
          <p className="section-subtitle">
            Envie uma mensagem com o contexto do seu caso. Retornamos em até 24 horas úteis com um diagnóstico inicial e proposta de atuação.
          </p>
          <div className="mt-8 space-y-4 text-sm text-muted">
            <p>
              <strong className="text-white">Endereço:</strong> Av. Paulista, 1000, 15º andar, São Paulo - SP
            </p>
            <p>
              <strong className="text-white">Telefone:</strong> <a href="tel:+551140001234">+55 (11) 4000-1234</a>
            </p>
            <p>
              <strong className="text-white">E-mail:</strong> <a href="mailto:contato@seuescritorio.com">contato@seuescritorio.com</a>
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-surface space-y-6 p-8" noValidate>
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-white">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                placeholder="Como deseja ser chamado?"
                {...register("name")}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-2 text-xs text-brand">{errors.name.message}</p>}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  E-mail corporativo
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  placeholder="nome@empresa.com"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-2 text-xs text-brand">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-white">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                  placeholder="(11) 90000-0000"
                  {...register("phone")}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <p className="mt-2 text-xs text-brand">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                placeholder="Conte brevemente o contexto do seu caso."
                {...register("message")}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-2 text-xs text-brand">{errors.message.message}</p>}
            </div>
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border border-white/20 bg-bg/60 text-brand focus:ring-brand/60"
                {...register("consent")}
              />
              <label htmlFor="consent" className="text-xs text-muted">
                Autorizo o tratamento dos meus dados pessoais para fins de contato, conforme a <a href="#" className="underline">Política de Privacidade</a>.
              </label>
            </div>
            {errors.consent && <p className="text-xs text-brand">{errors.consent.message}</p>}
            <button
              type="submit"
              className="btn-primary w-full justify-center"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>
            {status === "success" && (
              <div
                className="rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
                role="status"
                aria-live="polite"
              >
                Recebemos sua mensagem. Nossa equipe retornará em breve.
              </div>
            )}
            {status === "error" && (
              <div
                className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                role="status"
                aria-live="assertive"
              >
                Não foi possível enviar a mensagem. Tente novamente em instantes ou escreva para contato@seuescritorio.com.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
