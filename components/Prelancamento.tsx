"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  PRELAUNCH_CTA,
  PRELAUNCH_DATE,
  PRELAUNCH_GROUP_URL,
  prelaunchPlans,
} from "@/lib/prelancamento";
import Link from "next/link";
import { useEffect, useState } from "react";

const benefits = [
  {
    title: "Clareza antes do lançamento.",
    text: "Os mesmos planos da TheDobra, com a condição de quem entra antes. Sem aparecer no site.",
  },
  {
    title: "Decisão, não mais um painel.",
    text: "Você conecta os dados que já tem e vê onde agir primeiro — diretoria, comercial e financeiro.",
  },
  {
    title: "Acesso reservado ao grupo.",
    text: `A condição abre em ${PRELAUNCH_DATE}. Só recebe quem estiver no grupo nesse dia.`,
  },
] as const;

const feelings = [
  {
    title: "Saber, em vez de supor.",
    text: "A operação já gera o dado. O que falta é alguém interpretar o que ele está dizendo.",
  },
  {
    title: "Chegar antes da decisão dos outros.",
    text: "Não é pressa. É estar dentro no dia em que a porta abre — e não assistir de fora.",
  },
  {
    title: "Parar de decidir no escuro.",
    text: "A sensação de quem finalmente enxerga margem, risco e oportunidade no mesmo lugar.",
  },
] as const;

function GroupLink({
  variant = "primary",
  className,
  children = PRELAUNCH_CTA,
}: {
  variant?: "primary" | "ghost" | "light";
  className?: string;
  children?: string;
}) {
  return (
    <Button
      href={PRELAUNCH_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}

export function Prelancamento() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-colors duration-500",
          scrolled ? "glass border-b border-white/6" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5 md:h-16 md:px-8">
          <Link href="/" className="flex items-center" aria-label="TheDobra">
            <Logo height={26} priority />
          </Link>
          <GroupLink className="h-10 px-4 text-[13px] sm:px-5">
            Entrar no grupo
          </GroupLink>
        </div>
      </header>

      <main id="conteudo">
        <section className="bg-void">
          <div className="mx-auto max-w-[1080px] px-5 pb-28 pt-32 md:px-8 md:pb-40 md:pt-44">
            <Reveal>
              <p className="eyebrow text-accent">Objetivo 01 — Benefício</p>
              <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,7vw,5.6rem)]">
                Quem entra antes vê mais cedo. E paga menos.
              </h1>
              <p className="lede mt-8 max-w-2xl text-[18px] text-white/55 md:text-[21px]">
                O pré-lançamento não está no menu. A condição também não. Ela
                existe só para quem estiver no grupo em {PRELAUNCH_DATE}.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-12 border-t border-white/8 pt-16 md:mt-28 md:grid-cols-3 md:gap-10">
              {benefits.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-white/35">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 text-[1.45rem] leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[1.05rem] leading-7 tracking-[-0.01em] text-white/52">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <GroupLink />
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/35">
                O botão abre o grupo de WhatsApp. A condição vale somente para
                quem estiver nele em {PRELAUNCH_DATE}.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1080px] px-5 py-28 md:px-8 md:py-40">
            <Reveal>
              <p className="eyebrow">Objetivo 02 — Sentimento</p>
              <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,6.4vw,5.4rem)]">
                Não é só um preço. É a sensação de finalmente enxergar.
              </h2>
              <p className="lede mt-8 max-w-2xl text-[18px] text-graphite md:text-[21px]">
                Há um cansaço específico em decidir com planilha aberta e
                certeza nenhuma. O pré-lançamento é para quem quer sair desse
                lugar antes de todo mundo.
              </p>
            </Reveal>

            <div className="mt-20 grid gap-12 border-t border-black/8 pt-16 md:mt-28 md:grid-cols-3 md:gap-10">
              {feelings.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-[1.45rem] leading-tight tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-4">{item.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <GroupLink variant="light" />
            </Reveal>
          </div>
        </section>

        <section className="bg-void">
          <div className="mx-auto max-w-[1180px] px-5 py-28 md:px-8 md:py-40">
            <Reveal className="text-center">
              <p className="eyebrow text-accent">Objetivo 03 — Escassez</p>
              <h2 className="display mx-auto mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,5rem)]">
                Só em {PRELAUNCH_DATE}. Só para quem estiver no grupo.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/52">
                Estes valores não estão no site. Eles valem exclusivamente no
                pré-lançamento, e somente para quem estiver no grupo nesse dia.
              </p>
            </Reveal>

            <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10] md:grid-cols-3">
              {prelaunchPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 0.06} className="h-full">
                  <article
                    className={cn(
                      "relative flex h-full flex-col p-7 md:p-8",
                      index > 0 && "border-t border-white/8 md:border-t-0 md:border-l",
                      plan.highlighted && "bg-white/[0.035]",
                    )}
                  >
                    {plan.highlighted ? (
                      <span className="absolute right-6 top-6 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[10px] tracking-[0.12em] text-accent uppercase">
                        Pré-lançamento
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
                    <p className="mt-2 text-[13px] text-white/35">
                      Depois do pré-lançamento,{" "}
                      <span className="line-through">{plan.regular}</span>
                    </p>
                    <GroupLink
                      variant={plan.highlighted ? "primary" : "ghost"}
                      className="mt-7 w-full"
                    />
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

            <Reveal className="mx-auto mt-10 max-w-lg text-center">
              <p className="text-[13px] leading-relaxed text-white/38">
                Preços de pré-lançamento. Não aparecem no site público. A
                condição encerra para quem não estiver no grupo em {PRELAUNCH_DATE}.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-void">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <Logo height={28} />
            <p className="mt-4 text-[14px] text-white/40">
              Pré-lançamento · {PRELAUNCH_DATE}
            </p>
          </div>
          <Link href="/" className="text-[14px] text-white/50 transition-colors hover:text-white">
            Voltar ao site
          </Link>
        </div>
      </footer>
    </>
  );
}
