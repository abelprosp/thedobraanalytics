"use client";

import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/lib/content";
import { motion } from "framer-motion";

export function AIAnalyst() {
  return (
    <section id="ia" className="relative overflow-hidden bg-void">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow text-ai">Inteligência Artificial</p>
          <h2 className="display mt-6 max-w-[13ch] text-[clamp(2.4rem,6vw,5rem)]">
            Seu negócio tem um novo analista.
          </h2>
          <p className="lede mt-8 max-w-2xl text-[18px] text-white/58 md:text-[21px]">
            A IA da TheDobra analisa seus dados continuamente para encontrar
            aquilo que pode passar despercebido por uma análise convencional.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {insights.map((insight, index) => (
            <Reveal key={insight} delay={index * 0.06}>
              <blockquote className="rounded-3xl border border-white/8 bg-white/[0.03] px-6 py-6 text-[17px] leading-relaxed tracking-[-0.02em] text-white/80">
                “{insight}”
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" y={40}>
          <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#0b0b10]">
            <div className="flex items-center justify-between border-b border-white/6 px-6 py-4">
              <div>
                <p className="text-[13px] text-white/45">Analista TheDobra</p>
                <p className="text-[15px] tracking-[-0.02em]">Briefing executivo</p>
              </div>
              <span className="flex items-center gap-2 text-[12px] text-ai">
                <span className="h-1.5 w-1.5 rounded-full bg-ai" />
                Ao vivo
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 p-6 md:p-8">
                <div>
                  <p className="text-[12px] tracking-[0.14em] text-white/35 uppercase">
                    Pergunta
                  </p>
                  <p className="mt-2 text-[1.35rem] tracking-[-0.03em]">
                    Por que nossas vendas caíram este mês?
                  </p>
                </div>
                <div>
                  <p className="text-[12px] tracking-[0.14em] text-ai uppercase">
                    Inteligência
                  </p>
                  <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-white/70">
                    A queda está concentrada em três regiões e está relacionada
                    principalmente à redução da conversão no estágio de
                    proposta. Identifiquei também aumento de 12% no tempo médio
                    de fechamento.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/6 p-6 lg:border-t-0 lg:border-l lg:p-8">
                <p className="text-[12px] text-white/35">Conversão por estágio</p>
                <ConversationChart />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <MiniStat label="Queda" value="−9%" />
                  <MiniStat label="Ciclo" value="+12%" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
      <p className="text-[11px] text-white/35">{label}</p>
      <p className="mt-1 text-xl tracking-[-0.04em]">{value}</p>
    </div>
  );
}

function ConversationChart() {
  const bars = [86, 74, 61, 44, 27, 19];
  return (
    <div className="mt-5 flex h-36 items-end gap-2">
      {bars.map((value, index) => (
        <motion.div
          key={value}
          className="flex-1 rounded-t-md bg-accent/80"
          initial={{ height: 0, opacity: 0.3 }}
          whileInView={{ height: `${value}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}
