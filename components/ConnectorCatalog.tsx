"use client";

import { Reveal } from "@/components/ui/Reveal";
import { connectorGroups } from "@/lib/content";
import { useState } from "react";

export function ConnectorCatalog() {
  const [active, setActive] = useState(0);
  const group = connectorGroups[active];

  return (
    <Reveal className="mt-16">
      <div id="conectores" className="border-t border-white/8 pt-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-white/40">Conectores</p>
            <h3 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.05em]">
              Comece com o que já está na sua empresa.
            </h3>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-white/40">
            Bases, arquivos, APIs, sistemas brasileiros, publicidade, SaaS e
            eventos em um catálogo organizado.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {connectorGroups.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-full border px-3 py-2 text-[12px] transition-colors ${
                active === index
                  ? "border-accent/40 bg-accent/10 text-white"
                  : "border-white/10 text-white/45 hover:border-white/25 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-3xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-[12px] text-accent">{group.name}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/8 px-3 py-2 text-[13px] text-white/65"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
