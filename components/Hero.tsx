"use client";

import { DataVisualization } from "@/components/DataVisualization";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  onDiscover: () => void;
};

export function Hero({ onDiscover }: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-24"
    >
      <DataVisualization className="absolute inset-0 h-full w-full" progress={0.28} />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-void/55 to-void"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-5 text-center md:px-8">
        <motion.p
          className="eyebrow text-white/40"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Inteligência de dados
        </motion.p>
        <motion.h1
          className="display mx-auto mt-6 max-w-[16ch] text-[clamp(3.1rem,9vw,7.4rem)] text-white"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Transforme dados em decisões.
        </motion.h1>
        <motion.p
          className="lede mx-auto mt-7 max-w-[42rem] text-[17px] text-white/58 md:text-[21px]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.36 }}
        >
          A TheDobra utiliza Business Intelligence e Inteligência Artificial
          para transformar dados complexos em insights claros, precisos e
          valiosos para o seu negócio.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button onClick={onDiscover}>Descobrir a TheDobra</Button>
          <Button href="#como-funciona" variant="ghost">
            Ver como funciona
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] tracking-[0.22em] text-white/30 uppercase md:block">
        Role para organizar
      </div>
    </section>
  );
}
