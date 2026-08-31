"use client";

import { DataVisualization } from "@/components/DataVisualization";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const stages = ["Dados", "Processamento", "Análise", "Inteligência", "Decisão"];

export function CinematicTransition() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const stage = stages[Math.min(stages.length - 1, Math.floor(progress * stages.length))];
  const labelOpacity = useTransform(scrollYProgress, [0, 0.08, 0.82, 0.92], [0, 1, 1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.72, 0.88], [24, 0]);

  return (
    <section ref={ref} className="relative h-[340vh] bg-void">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
        <DataVisualization
          className="absolute inset-0 h-full w-full"
          progress={reduced ? 0.9 : progress}
          density={1.15}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void"
          aria-hidden="true"
        />

        <motion.p className="eyebrow relative z-10 text-accent" style={{ opacity: labelOpacity }}>
          {stage}
        </motion.p>

        <motion.h2
          className="display relative z-10 mx-auto mt-8 max-w-[18ch] px-5 text-center text-[clamp(2rem,5.6vw,4.4rem)]"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          Dados organizados. Inteligência aplicada. Decisões melhores.
        </motion.h2>
      </div>
    </section>
  );
}
