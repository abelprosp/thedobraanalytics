"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const kpis = [
  { label: "Receita", value: "R$ 4,28 mi", delta: "+18%", up: true },
  { label: "Margem", value: "37,2%", delta: "−6%", up: false },
  { label: "CAC", value: "R$ 186", delta: "−9%", up: true },
  { label: "LTV", value: "R$ 4.120", delta: "+11%", up: true },
];

export function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();

  return (
    <section id="dashboards" className="bg-[#07070a]">
      <div className="mx-auto max-w-[1180px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Dashboards inteligentes</p>
          <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.3rem,5.6vw,4.6rem)]">
            Números grandes. Poucos elementos. Decisão imediata.
          </h2>
        </Reveal>

        <div ref={ref} className="mt-16 rounded-[28px] border border-white/8 bg-[#0c0c11] p-4 md:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[13px] text-white/40">
                TheDobra · Visão executiva
              </p>
              <p className="text-[17px] tracking-[-0.02em]">Performance consolidada</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-ai/25 bg-ai/8 px-3 py-1.5 text-[11px] text-ai">
                Exemplo ilustrativo
              </span>
              {["30 dias", "Unidade", "Canal"].map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full border px-3 py-1.5 text-[12px] ${
                    index === 0
                      ? "border-accent/40 bg-accent/10 text-white"
                      : "border-white/10 text-white/45"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi, index) => (
              <motion.article
                key={kpi.label}
                className="rounded-3xl border border-white/6 bg-white/[0.03] p-5"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[12px] text-white/40">{kpi.label}</p>
                <p className="mt-3 text-[1.7rem] tracking-[-0.045em]">{kpi.value}</p>
                <p className={`mt-2 text-[12px] ${kpi.up ? "text-accent" : "text-[#ff8b8b]"}`}>
                  {kpi.delta}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
            <motion.article
              className="rounded-3xl border border-white/6 bg-white/[0.03] p-5 md:p-6"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.28, duration: 0.8 }}
            >
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[12px] text-white/40">Receita e previsão</p>
                  <p className="mt-1 text-[15px] text-white/70">Metas · histórico · forecast</p>
                </div>
                <p className="text-[12px] text-ai">Projeção +7%</p>
              </div>
              <RevenueChart active={inView} />
            </motion.article>

            <motion.article
              className="rounded-3xl border border-white/6 bg-white/[0.03] p-5 md:p-6"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.36, duration: 0.8 }}
            >
              <p className="text-[12px] text-white/40">Indicadores estratégicos</p>
              <ul className="mt-5 space-y-4">
                {[
                  ["Conversão", "19%", 0.19],
                  ["Churn", "2,4%", 0.24],
                  ["Meta comercial", "104%", 1],
                  ["Operacional", "97%", 0.97],
                ].map(([label, value, width], index) => (
                  <li key={label}>
                    <div className="flex justify-between text-[13px]">
                      <span className="text-white/55">{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="mt-2 h-px overflow-hidden bg-white/8">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${Number(width) * 100}%` } : undefined}
                        transition={{ delay: 0.45 + index * 0.08, duration: 0.8 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevenueChart({ active }: { active: boolean }) {
  const d =
    "M8 118 C 40 110, 70 92, 100 96 S 160 70, 190 74 S 250 48, 280 52 S 340 36, 372 28";
  return (
    <svg viewBox="0 0 380 140" className="mt-6 h-40 w-full" aria-hidden="true">
      <motion.path
        d={`${d} L372 140 L8 140 Z`}
        fill="rgba(91,140,255,0.12)"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="#5b8cff"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
