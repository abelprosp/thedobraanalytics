"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const plans = [
  {
    name: "Starter",
    description: "Para começar a transformar seus dados em decisões.",
    price: "R$ 147",
    period: "/mês",
    features: [
      "5 usuários",
      "15 datasets",
      "50 mil queries",
      "10 dashboards",
      "Conectores básicos",
      "500 créditos de IA",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Para times que precisam de escala, análise e autonomia.",
    price: "R$ 297",
    period: "/mês",
    features: [
      "25 usuários",
      "Datasets ilimitados",
      "Dashboards ilimitados",
      "Conectores avançados: ERPs e APIs",
      "5.000 créditos de IA",
      "White-label básico com logo",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para operações críticas que precisam de controle e suporte dedicado.",
    price: "R$ 697",
    period: "/mês",
    features: [
      "Usuários ilimitados",
      "IA ilimitada",
      "White-label completo",
      "SLA",
      "Suporte prioritário",
      "Onboarding dedicado",
    ],
    highlighted: false,
  },
] as const;

type Props = {
  onContact: () => void;
};

export function Pricing({ onContact }: Props) {
  return (
    <section id="planos" className="bg-void">
      <div className="mx-auto max-w-[1180px] px-5 py-28 md:px-8 md:py-40">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">Planos TheDobra</p>
          <h2 className="display mx-auto mt-6 max-w-[12ch] text-[clamp(2.4rem,6vw,5rem)]">
            Escolha o nível de inteligência da sua operação.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/52">
            Comece pequeno, evolua no seu ritmo e tenha clareza sobre cada
            etapa do negócio.
          </p>
        </Reveal>

        <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10] md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06} className="h-full">
              <article
                className={`relative flex h-full flex-col p-7 md:p-8 ${
                  index > 0 ? "border-t border-white/8 md:border-t-0 md:border-l" : ""
                } ${plan.highlighted ? "bg-white/[0.035]" : ""}`}
              >
                {plan.highlighted ? (
                  <span className="absolute right-6 top-6 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[10px] tracking-[0.12em] text-accent uppercase">
                    Mais escolhido
                  </span>
                ) : null}
                <p className="text-[17px] tracking-[-0.03em]">{plan.name}</p>
                <p className="mt-4 min-h-12 max-w-[18rem] text-[14px] leading-relaxed text-white/45">
                  {plan.description}
                </p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-[2.6rem] tracking-[-0.06em]">{plan.price}</span>
                  <span className="pb-2 text-[13px] text-white/40">{plan.period}</span>
                </div>
                <Button
                  onClick={onContact}
                  variant={plan.highlighted ? "primary" : "ghost"}
                  className="mt-7 w-full"
                >
                  Falar com um especialista
                </Button>
                <ul className="mt-8 space-y-4 border-t border-white/8 pt-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-[13px] text-white/65">
                      <span className="text-accent" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
