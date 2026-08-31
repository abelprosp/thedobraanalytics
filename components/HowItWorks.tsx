"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { n: "01", title: "Conectamos seus dados" },
  { n: "02", title: "Estruturamos sua informação" },
  { n: "03", title: "Construímos seus indicadores" },
  { n: "04", title: "Aplicamos Inteligência Artificial" },
  { n: "05", title: "Entregamos insights acionáveis" },
  { n: "06", title: "Você toma decisões melhores" },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="como-funciona" className="bg-void">
      <div className="mx-auto max-w-[1180px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Como funciona</p>
          <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.3rem,5.4vw,4.6rem)]">
            Uma jornada. Do caos à decisão.
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 border-t border-white/8 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.n}
              className="flex gap-5 border-b border-white/8 py-6 lg:block lg:border-b-0 lg:pr-5 lg:pt-10"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[12px] text-accent">{step.n}</p>
              <h3 className="text-[1.35rem] leading-snug tracking-[-0.03em] lg:mt-4 lg:text-[1.15rem]">
                {step.title}
              </h3>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
