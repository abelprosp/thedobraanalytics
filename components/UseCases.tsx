"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { useCases } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const featuredUseCases = useCases.slice(0, 3);

export function UseCases() {
  const [active, setActive] = useState(0);
  const current = featuredUseCases[active];

  return (
    <section id="casos" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Casos de uso</p>
          <h2 className="display mt-6 max-w-[12ch] text-[clamp(2.3rem,5.4vw,4.6rem)]">
            Comece por onde a decisão pesa mais.
          </h2>
          <p className="lede mt-7 max-w-2xl text-[18px] text-graphite md:text-[21px]">
            A TheDobra começa perto da liderança: visão executiva, receita,
            margem e os pontos onde sua operação está perdendo dinheiro.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {featuredUseCases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-left text-[15px] tracking-[-0.02em] transition-colors lg:rounded-2xl lg:px-4 lg:py-4",
                  active === index
                    ? "bg-ink text-white"
                    : "text-graphite hover:text-ink",
                )}
              >
                {item.title}
              </button>
            ))}
          </div>

          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-black/8 bg-white p-7 md:p-10"
              >
                <h3 className="text-[2rem] tracking-[-0.04em]">{current.title}</h3>
                <p className="body-copy mt-3 max-w-md">{current.text}</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {current.kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl bg-mist px-3 py-4">
                      <p className="text-[11px] text-mute">{kpi.label}</p>
                      <p className="mt-2 text-[1.15rem] tracking-[-0.04em] md:text-[1.35rem]">
                        {kpi.value}
                      </p>
                    </div>
                  ))}
                </div>
                <UseCaseChart id={current.id} />
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function UseCaseChart({ id }: { id: string }) {
  const series: Record<string, number[]> = {
    diretoria: [70, 72, 76, 81, 86, 90],
    comercial: [24, 32, 30, 44, 52, 61],
    financeiro: [40, 38, 42, 47, 45, 53],
    marketing: [18, 28, 24, 36, 41, 48],
    operacoes: [62, 58, 64, 70, 74, 79],
    gestao: [70, 72, 76, 81, 86, 90],
    rh: [88, 86, 90, 91, 93, 94],
  };
  const values = series[id] ?? series.comercial;

  return (
    <div className="mt-8 flex h-28 items-end gap-2">
      {values.map((value, index) => (
        <motion.div
          key={`${id}-${index}`}
          className="flex-1 rounded-t-md bg-ink/90"
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}
