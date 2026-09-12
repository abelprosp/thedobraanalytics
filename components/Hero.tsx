"use client";

import { DataVisualization } from "@/components/DataVisualization";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { Fingerprint, Sparkles } from "lucide-react";

type Props = {
  onContact: () => void;
};

export function Hero({ onContact }: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-24"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <linearGradient id="ai-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#5b8cff" />
          </linearGradient>
        </defs>
      </svg>
      <DataVisualization className="absolute inset-0 h-full w-full" progress={0.28} />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-void/55 to-void"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-5 text-center md:px-8">
        <motion.p
          className="eyebrow text-white/35"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          AI Business Intelligence
        </motion.p>
        <motion.h1
          className="display mx-auto mt-6 max-w-[11ch] text-[clamp(3.5rem,10.5vw,8.8rem)] text-white"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white/25">O futuro</span>
          <span className="block text-white/25">das decisões</span>
          <span className="mt-1 flex flex-wrap items-center justify-center gap-x-3 text-white">
            é{" "}
            <Fingerprint
              className="h-[0.8em] w-[0.8em] shrink-0 text-accent md:h-[0.72em] md:w-[0.72em]"
              strokeWidth={1.8}
              aria-label="Digital"
            />{" "}
            humano <span className="text-white/35">+</span>{" "}
            <span className="inline-flex items-center gap-2 text-accent">
              <Sparkles
                className="h-[0.68em] w-[0.68em] shrink-0"
                strokeWidth={1.8}
                stroke="url(#ai-icon-gradient)"
                aria-label="Inteligência artificial"
              />
              IA
            </span>
          </span>
        </motion.h1>
        <motion.p
          className="lede mx-auto mt-8 max-w-[39rem] text-[17px] text-white/52 md:text-[20px]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.36 }}
        >
          A TheDobra conecta seus dados e mostra onde agir primeiro.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button onClick={onContact}>Falar com um especialista</Button>
        </motion.div>
        <motion.div
          className="mx-auto mt-10 flex items-center justify-center gap-3 text-[11px] tracking-[0.16em] text-white/30 uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.72 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_16px_rgba(91,140,255,0.9)]" />
          Inteligência humana, ampliada por IA
        </motion.div>
        <motion.p
          className="mx-auto mt-7 max-w-2xl text-[12px] tracking-[0.02em] text-white/38"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          Comece com os dados que você já tem · implantação orientada · sem
          compromisso
        </motion.p>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] tracking-[0.22em] text-white/30 uppercase md:block">
        Role para organizar
      </div>
    </section>
  );
}
