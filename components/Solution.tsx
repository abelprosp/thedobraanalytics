"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Conecte",
    text: "Integre os dados que já existem na sua empresa.",
  },
  {
    n: "02",
    title: "Organize",
    text: "Transforme informações dispersas em uma estrutura confiável.",
  },
  {
    n: "03",
    title: "Analise",
    text: "Utilize BI e Inteligência Artificial para encontrar padrões e relações.",
  },
  {
    n: "04",
    title: "Decida",
    text: "Transforme insights em ações concretas para o negócio.",
  },
];

export function Solution() {
  return (
    <section id="solucao" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">A solução</p>
          <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,5rem)]">
            Não entregamos apenas dashboards. Entregamos inteligência.
          </h2>
          <p className="lede mt-8 max-w-2xl text-[18px] text-graphite md:text-[21px]">
            A TheDobra conecta fontes de dados, organiza informações e utiliza
            IA para identificar padrões, anomalias, oportunidades e riscos.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-black/8 bg-black/8 md:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.05} className="bg-paper p-8 md:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[12px] tracking-[0.16em] text-mute">
                    {step.n}
                  </p>
                  <h3 className="mt-4 text-[2rem] tracking-[-0.04em]">{step.title}</h3>
                  <p className="body-copy mt-3 max-w-sm">{step.text}</p>
                </div>
                <StepMark index={index} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepMark({ index }: { index: number }) {
  const reduce = useReducedMotion();

  if (index === 0) {
    return (
      <svg viewBox="0 0 72 72" className="h-16 w-16 text-accent" aria-hidden="true">
        {[
          [16, 20],
          [56, 22],
          [20, 52],
          [50, 50],
          [36, 36],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={3}
            fill="currentColor"
            initial={reduce ? false : { opacity: 0.25 }}
            whileInView={{ opacity: [0.25, 1, 0.45] }}
            transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity }}
          />
        ))}
        <motion.path
          d="M16 20 L36 36 L56 22 M36 36 L20 52 M36 36 L50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 72 72" className="h-16 w-16 text-accent" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={18 + (i % 3) * 18}
            cy={18 + Math.floor(i / 3) * 18}
            r={2.4}
            fill="currentColor"
            initial={reduce ? false : { cx: 14 + ((i * 17) % 44), cy: 12 + ((i * 11) % 48) }}
            whileInView={{
              cx: 18 + (i % 3) * 18,
              cy: 18 + Math.floor(i / 3) * 18,
            }}
            transition={{ duration: 1.1, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 72 72" className="h-16 w-16 text-accent" aria-hidden="true">
        <motion.path
          d="M10 50 Q22 46 28 32 T46 28 T62 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="46"
          cy="28"
          r="5"
          fill="none"
          stroke="currentColor"
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 72" className="h-16 w-16 text-accent" aria-hidden="true">
      <motion.path
        d="M18 38 L32 50 L56 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
