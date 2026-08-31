"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="bg-void">
      <div className="mx-auto max-w-[880px] px-5 py-28 text-center md:px-8 md:py-36">
        <Reveal>
          <p className="display text-[clamp(1.9rem,4.6vw,3.4rem)] text-white/90">
            Seus dados já sabem a resposta. A TheDobra mostra onde ela está.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
