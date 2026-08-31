"use client";

import { Reveal } from "@/components/ui/Reveal";

const traditional = [
  "Mostra números",
  "Mostra gráficos",
  "Mostra históricos",
  "Exige interpretação humana",
];

const thedobra = [
  "Analisa",
  "Interpreta",
  "Identifica padrões",
  "Encontra oportunidades",
  "Detecta anomalias",
  "Gera insights",
  "Sugere ações",
];

export function Differentiator() {
  return (
    <section id="diferencial" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow">Diferencial</p>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.2rem,5.4vw,4.4rem)]">
            BI mostra o que aconteceu. A TheDobra ajuda você a entender o que
            fazer.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-[13px] text-mute">BI tradicional</p>
            <ComparisonList items={traditional} tone="muted" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[13px] text-accent-deep">TheDobra</p>
            <ComparisonList items={thedobra} tone="ink" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ComparisonList({
  items,
  tone,
}: {
  items: readonly string[];
  tone: "muted" | "ink";
}) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className={`border-t border-black/8 pt-4 text-[1.4rem] tracking-[-0.03em] ${
            tone === "muted" ? "text-graphite" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
