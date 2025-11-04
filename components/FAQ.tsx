"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const questions = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Iniciamos com uma reunião estratégica para analisar o cenário, mapear riscos e recomendar o plano de ação jurídico mais adequado.",
  },
  {
    question: "Vocês atendem empresas de quais portes?",
    answer:
      "Prestamos consultoria para startups, médias empresas e grandes corporações que demandam suporte jurídico contínuo.",
  },
  {
    question: "O escritório atua em outras cidades?",
    answer:
      "Sim. Além de São Paulo, contamos com parceiros em capitais estratégicas e realizamos atendimentos híbridos e remotos.",
  },
  {
    question: "Quais áreas são cobertas?",
    answer:
      "Direito empresarial, societário, contratos, infraestrutura, contencioso estratégico, criminal corporativo e família.",
  },
  {
    question: "Como é definido o modelo de honorários?",
    answer:
      "Trabalhamos com modelos flexíveis: fee mensal, êxito, pacote de horas ou projetos específicos, sempre com transparência.",
  },
  {
    question: "Vocês oferecem consultoria preventiva?",
    answer:
      "Sim. Atuamos na criação de políticas, treinamentos de compliance e revisão periódica de contratos para prevenir litígios.",
  },
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="md:flex md:items-start md:justify-between">
        <div className="md:max-w-xl">
          <p className="text-sm uppercase tracking-[0.4em] text-brand/80">FAQ</p>
          <h2 className="section-title mt-4">Perguntas frequentes sobre nossa atuação</h2>
          <p className="section-subtitle">
            Transparência em cada etapa do relacionamento. Caso ainda tenha dúvidas, estamos disponíveis para uma conversa rápida.
          </p>
        </div>
      </div>
      <div className="mt-12 space-y-4" role="list">
        {questions.map((item, index) => {
          const isOpen = active === index;
          return (
            <div key={item.question} className="card-surface" role="listitem">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setActive(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="text-base font-semibold text-white">{item.question}</span>
                {isOpen ? <Minus className="h-5 w-5 text-brand" aria-hidden="true" /> : <Plus className="h-5 w-5 text-brand" aria-hidden="true" />}
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`px-6 pb-6 text-sm text-muted transition-[max-height] duration-300 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
