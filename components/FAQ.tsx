"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";

const questions = [
  {
    q: "Quanto tempo leva para começar?",
    a: "O início depende das fontes e do nível de organização dos dados. Na conversa inicial, mapeamos o cenário e definimos o primeiro recorte de valor.",
  },
  {
    q: "Quais fontes posso conectar?",
    a: "A TheDobra trabalha com bases de dados, arquivos, APIs, sistemas brasileiros, publicidade, CRM, marketplaces, dados públicos, cloud e streaming. O catálogo é apresentado na seção de produto.",
  },
  {
    q: "Preciso reorganizar minha empresa antes?",
    a: "Não. Partimos dos dados que sua empresa já possui, validamos o modelo e mostramos o que precisa ser estruturado para gerar uma análise confiável.",
  },
  {
    q: "A TheDobra substitui meu dashboard atual?",
    a: "Pode complementar ou substituir partes do fluxo atual. O objetivo é reduzir a distância entre indicador, interpretação e ação.",
  },
  {
    q: "Como funciona o suporte?",
    a: "O formato de suporte e acompanhamento é definido conforme o escopo da implantação. Isso é detalhado na proposta comercial.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento depende de fontes, áreas, volume e profundidade da análise. Após entender o cenário, apresentamos uma proposta com escopo claro.",
  },
] as const;

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-paper text-ink">
      <div className="mx-auto max-w-[900px] px-5 py-28 md:px-8 md:py-36">
        <Reveal>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="display mt-6 max-w-[12ch] text-[clamp(2.3rem,5.4vw,4.5rem)]">
            Antes de começar.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-black/8">
          {questions.map((item, index) => {
            const isActive = index === active;
            return (
              <Reveal key={item.q} delay={index * 0.03}>
                <div className="border-b border-black/8">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setActive(isActive ? -1 : index)}
                  >
                    <span className="text-[1.15rem] tracking-[-0.03em]">{item.q}</span>
                    <span className="text-xl text-graphite">{isActive ? "−" : "+"}</span>
                  </button>
                  {isActive ? (
                    <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-graphite">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
