"use client";

import { Reveal } from "@/components/ui/Reveal";

const shifts = [
  {
    title: "A decisão muda.",
    today: "Cada área discute um número diferente, tirado de uma planilha ou de um sistema.",
    after: "A liderança vê o mesmo fato e sabe qual é a próxima ação.",
  },
  {
    title: "A receita muda.",
    today: "Meta, funil e perda de venda vivem em lugares que ninguém atualiza juntos.",
    after: "Dá para ver onde a venda trava e onde o dinheiro está crescendo.",
  },
  {
    title: "A margem muda.",
    today: "O aperto no caixa e na margem aparece tarde, no fechamento.",
    after: "A pressão aparece enquanto ainda dá para agir — não depois.",
  },
] as const;

export function WhatItIs() {
  return (
    <section id="o-que-e" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">O que é a TheDobra</p>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,6.4vw,5.4rem)]">
            Inteligência de dados para mudar a forma como o negócio decide.
          </h2>
          <p className="lede mt-8 max-w-2xl text-[18px] text-graphite md:text-[21px]">
            A TheDobra conecta o que sua empresa já usa — ERP, CRM, planilhas,
            financeiro, marketing — e interpreta esses dados com Business
            Intelligence e Inteligência Artificial. O resultado não é mais um
            painel. É saber o que está acontecendo e onde agir primeiro.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-black/8 pt-16 md:mt-28 md:grid-cols-3 md:gap-10">
          {shifts.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-[1.45rem] leading-tight tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="body-copy mt-4">{item.today}</p>
              <p className="mt-4 text-[1.05rem] leading-7 tracking-[-0.01em] text-ink">
                {item.after}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
