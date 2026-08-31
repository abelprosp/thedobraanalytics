"use client";

import { Reveal } from "@/components/ui/Reveal";

const chain = ["Dados", "Informação", "Insight", "Decisão", "Resultado"];

export function DataProduct() {
  return (
    <section id="decisao" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-32 md:px-8 md:py-44">
        <Reveal>
          <h2 className="display text-[clamp(3rem,9vw,7.5rem)]">
            O dado não é o produto.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="display mt-6 text-[clamp(2.4rem,6vw,5rem)] text-graphite">
            A decisão é.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lede mt-10 max-w-xl text-[18px] text-graphite md:text-[22px]">
            A TheDobra existe para eliminar a distância entre informação e ação.
          </p>
        </Reveal>

        <div className="mt-20 space-y-0">
          {chain.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="flex items-end justify-between border-t border-black/8 py-7">
                <p className="text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.04em]">
                  {item}
                </p>
                <p className="font-mono text-[12px] text-mute">0{index + 1}</p>
              </div>
              {index < chain.length - 1 ? (
                <p className="pb-2 text-center text-mute" aria-hidden="true">
                  ↓
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
