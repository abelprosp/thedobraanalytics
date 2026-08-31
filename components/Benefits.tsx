"use client";

import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    title: "Mais clareza",
    text: "Tenha uma visão completa do seu negócio.",
  },
  {
    title: "Mais velocidade",
    text: "Encontre respostas sem passar horas analisando planilhas.",
  },
  {
    title: "Mais precisão",
    text: "Tome decisões baseadas em evidências.",
  },
  {
    title: "Mais oportunidades",
    text: "Identifique padrões e oportunidades antes dos concorrentes.",
  },
  {
    title: "Menos desperdício",
    text: "Encontre gargalos, perdas e ineficiências.",
  },
  {
    title: "Inteligência contínua",
    text: "Faça seus dados trabalharem pela empresa.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-[#efeff3] text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Benefícios</p>
          <h2 className="display mt-6 max-w-[12ch] text-[clamp(2.3rem,5.4vw,4.4rem)]">
            O que muda quando os dados passam a decidir.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-black/8 bg-black/8 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="bg-[#efeff3] p-8 md:p-10">
              <h3 className="text-[1.6rem] tracking-[-0.035em]">{item.title}</h3>
              <p className="body-copy mt-3 max-w-sm">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
