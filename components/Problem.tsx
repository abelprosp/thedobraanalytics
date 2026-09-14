"use client";

import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    title: "Dados espalhados.",
    text: "ERP, CRM, planilhas, sistemas financeiros, plataformas comerciais e diversas outras fontes.",
  },
  {
    title: "Dashboards que apenas mostram números.",
    text: "Informação sem contexto não gera decisão.",
  },
  {
    title: "Decisões baseadas em percepção.",
    text: "Quando os dados não são interpretados corretamente, oportunidades são perdidas.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="border-t border-black/8 bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Por que o negócio não muda sozinho</p>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,6.4vw,5.4rem)]">
            Os dados já estão na empresa. O que falta é alguém interpretá-los.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-black/8 pt-16 md:mt-28 md:grid-cols-3 md:gap-10">
          {problems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-[1.45rem] leading-tight tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="body-copy mt-4">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
