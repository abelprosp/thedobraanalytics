"use client";

import { Reveal } from "@/components/ui/Reveal";

export function PowerBIComparison() {
  return (
    <section id="diferencial" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">O que muda</p>
          <h2 className="display mt-6 max-w-[15ch] text-[clamp(2.3rem,5.6vw,4.7rem)]">
            Não é apenas Power BI.
          </h2>
          <p className="lede mt-7 max-w-2xl text-[18px] text-graphite md:text-[21px]">
            Dashboards mostram o que aconteceu. A TheDobra conecta o contexto
            e aponta o que merece uma ação.
          </p>
        </Reveal>

        <Reveal className="mt-16" y={32}>
          <div className="grid overflow-hidden rounded-[28px] border border-black/8 bg-white md:grid-cols-2">
            <div className="border-b border-black/8 p-7 md:border-b-0 md:border-r md:p-10">
              <p className="text-[13px] text-graphite">BI / Power BI</p>
              <p className="mt-7 text-[1.4rem] leading-snug tracking-[-0.03em]">
                “A receita caiu 12%.”
              </p>
              <div className="mt-8 space-y-3 text-[14px] text-graphite">
                <p>Mostra números e históricos</p>
                <p>Exige interpretação humana</p>
                <p>Depende de quem sabe onde procurar</p>
              </div>
            </div>
            <div className="bg-ink p-7 text-white md:p-10">
              <p className="text-[13px] text-accent">TheDobra</p>
              <p className="mt-7 text-[1.4rem] leading-snug tracking-[-0.03em]">
                “A receita caiu 12% porque a conversão entre proposta e
                fechamento caiu 21%, concentrada em três vendedores.”
              </p>
              <div className="mt-8 space-y-3 text-[14px] text-white/55">
                <p>Interpreta contexto e relações</p>
                <p>Detecta padrões, riscos e oportunidades</p>
                <p>Sugere onde agir primeiro</p>
              </div>
              <p className="mt-8 text-[10px] tracking-[0.12em] text-white/30 uppercase">
                Exemplo ilustrativo
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
