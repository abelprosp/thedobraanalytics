"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  onContact: () => void;
};

export function CTA({ onContact }: Props) {
  return (
    <section id="contato" className="bg-void">
      <div className="mx-auto flex min-h-[80svh] max-w-[980px] flex-col justify-center px-5 py-32 text-center md:px-8">
        <Reveal>
          <h2 className="display text-[clamp(2.6rem,7vw,5.8rem)]">
            Pare de apenas olhar para seus dados.
          </h2>
          <p className="lede mx-auto mt-8 max-w-xl text-[18px] text-white/55 md:text-[22px]">
            Comece a tomar decisões guiadas por inteligência.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="https://app.thedobra.cc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testar grátis
            </Button>
            <Button variant="ghost" onClick={onContact}>
              Falar com um especialista
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
