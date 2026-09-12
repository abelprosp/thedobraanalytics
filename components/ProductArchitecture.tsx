"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ConnectorOrbit } from "@/components/ConnectorOrbit";
import { motion } from "framer-motion";

const sources = ["ERP", "CRM", "Excel", "APIs", "Google", "Financeiro"];
const outputs = ["KPIs", "Alertas", "Insights", "Previsões"];

export function ProductArchitecture() {
  return (
    <section id="produto" className="bg-[#07070a]">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow text-accent">A plataforma</p>
          <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.3rem,5.8vw,4.8rem)]">
            Uma camada inteligente sobre os dados que sua empresa já possui.
          </h2>
          <p className="lede mt-8 max-w-2xl text-[18px] text-white/58 md:text-[21px]">
            Conecte as fontes, valide o modelo e entregue para a liderança o
            que realmente precisa de atenção.
          </p>
        </Reveal>

        <Reveal className="mt-16" y={36}>
          <div className="rounded-[28px] border border-white/8 bg-[#0c0c11] p-6 md:p-10">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto_1fr_auto_1.2fr] lg:items-center">
              <ArchitectureColumn label="Suas fontes" items={sources} />
              <Arrow />
              <ArchitectureColumn label="TheDobra Data" items={["Modelo semântico", "Métricas + dimensões", "Governança"]} accent />
              <Arrow />
              <ArchitectureColumn label="O que você recebe" items={outputs} accent />
            </div>
            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="text-[13px] leading-relaxed text-white/45">
                Conectar → validar → analisar → compartilhar → agir.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal delay={0.08}>
            <BeforeAfter
              title="Antes da TheDobra"
              tone="muted"
              items={["ERP", "CRM", "Excel", "Financeiro", "Marketing"]}
              footer="Relatórios manuais · decisões por percepção"
            />
          </Reveal>
          <Reveal delay={0.14}>
            <BeforeAfter
              title="Depois da TheDobra"
              tone="accent"
              items={["Dashboard", "IA analítica", "Alertas", "Previsões", "Decisões"]}
              footer="Uma visão compartilhada · próxima ação clara"
            />
          </Reveal>
        </div>

        <ConnectorOrbit />
      </div>
    </section>
  );
}

function ArchitectureColumn({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div>
      <p className={`text-[12px] ${accent ? "text-accent" : "text-white/40"}`}>{label}</p>
      <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className={`rounded-xl border px-3 py-2 text-[13px] ${
              accent
                ? "border-accent/20 bg-accent/[0.07] text-white/80"
                : "border-white/8 bg-white/[0.03] text-white/55"
            }`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden text-center text-xl text-white/25 lg:block" aria-hidden="true">
      →
    </div>
  );
}

function BeforeAfter({
  title,
  items,
  footer,
  tone,
}: {
  title: string;
  items: readonly string[];
  footer: string;
  tone: "muted" | "accent";
}) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-[#0c0c11] p-6">
      <p className={`text-[13px] ${tone === "accent" ? "text-accent" : "text-white/40"}`}>
        {title}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-2 text-[13px] ${
              tone === "accent"
                ? "border-accent/20 bg-accent/[0.07] text-white/80"
                : "border-white/8 text-white/50"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-6 border-t border-white/8 pt-4 text-[13px] text-white/40">{footer}</p>
    </div>
  );
}
