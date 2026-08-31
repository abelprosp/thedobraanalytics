"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { askQuestions } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export function AskData() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [phase, setPhase] = useState<"idle" | "thinking" | "ready">("idle");
  const timer = useRef<number | null>(null);
  const active = askQuestions.find((item) => item.id === activeId);

  const ask = (id: string) => {
    setActiveId(id);
    setPhase("thinking");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPhase("ready"), 1100);
  };

  return (
    <section id="pergunte" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow text-ai">Pergunte aos seus dados</p>
          <h2 className="display mt-6 max-w-[13ch] text-[clamp(2.3rem,5.8vw,4.8rem)]">
            Faça perguntas. Seus dados respondem.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-2">
          {askQuestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => ask(item.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-left text-[14px] tracking-[-0.015em] transition-colors",
                activeId === item.id
                  ? "border-accent/50 bg-accent/10 text-white"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white",
              )}
            >
              {item.question}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[280px] rounded-[28px] border border-white/8 bg-[#0b0b10] p-6 md:p-10">
          <AnimatePresence mode="wait">
            {phase === "idle" || !active ? (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[18px] text-white/40"
              >
                Escolha uma pergunta. A inteligência analisa o contexto e
                devolve a decisão, não só o número.
              </motion.p>
            ) : phase === "thinking" ? (
              <motion.div
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-48 flex-col justify-center"
              >
                <p className="font-mono text-[12px] text-ai">
                  Analisando 2,4 milhões de registros
                </p>
                <p className="mt-3 text-[22px] tracking-[-0.03em] text-white/80">
                  Cruzando fontes, padrões e anomalias…
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div>
                  <p className="text-[12px] tracking-[0.14em] text-white/35 uppercase">
                    Resposta
                  </p>
                  <p className="mt-3 text-[1.15rem] leading-relaxed tracking-[-0.02em] text-white/78 md:text-[1.3rem]">
                    {active.answer}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] text-white/35">{active.metric.label}</p>
                  <p className="mt-2 text-[2.4rem] tracking-[-0.05em]">
                    {active.metric.value}
                  </p>
                  <p className="text-[13px] text-white/40">{active.metric.hint}</p>
                  <div className="mt-6 flex h-24 items-end gap-1.5">
                    {active.bars.map((value, index) => (
                      <motion.div
                        key={`${active.id}-${index}`}
                        className="flex-1 rounded-t bg-accent/80"
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ delay: index * 0.05, duration: 0.6 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
