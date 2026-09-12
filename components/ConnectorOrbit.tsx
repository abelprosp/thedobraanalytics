"use client";

import {
  SiGithub,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesheets,
  SiInstagram,
  SiMeta,
  SiMongodb,
  SiPostgresql,
  SiSap,
  SiStripe,
  SiSupabase,
} from "@icons-pack/react-simple-icons";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; color?: string }>;

const orbitConnectors: Array<{
  name: string;
  Icon: IconComponent;
  color: string;
  orbit: number;
  angle: number;
}> = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", orbit: 0, angle: 18 },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", orbit: 1, angle: 82 },
  { name: "Google Sheets", Icon: SiGooglesheets, color: "#34A853", orbit: 2, angle: 150 },
  { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400", orbit: 1, angle: 228 },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4", orbit: 0, angle: 286 },
  { name: "Meta", Icon: SiMeta, color: "#0866FF", orbit: 2, angle: 332 },
  { name: "Instagram", Icon: SiInstagram, color: "#E4405F", orbit: 1, angle: 42 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", orbit: 2, angle: 198 },
  { name: "SAP", Icon: SiSap, color: "#0FAAFF", orbit: 0, angle: 112 },
  { name: "GitHub", Icon: SiGithub, color: "#181717", orbit: 1, angle: 170 },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF", orbit: 2, angle: 260 },
];

export function ConnectorOrbit() {
  const reduce = useReducedMotion();

  return (
    <Reveal className="mt-16" y={36}>
      <div className="relative isolate min-h-[540px] overflow-hidden rounded-[32px] border border-white/8 bg-[#fafbff] text-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.18),transparent_30%,transparent_60%)]" />
        <div className="relative z-10 flex flex-col items-center px-5 pt-12 text-center">
          <p className="eyebrow text-graphite">Conectores TheDobra</p>
          <h3 className="display mt-4 max-w-[14ch] text-[clamp(2rem,4vw,3.4rem)]">
            Seus dados, no mesmo lugar.
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-graphite">
            ERP, CRM, planilhas, APIs e plataformas que sua empresa já usa.
          </p>
        </div>

        <div className="absolute left-1/2 top-[58%] aspect-square w-[min(760px,140vw)] -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((orbit) => (
            <motion.div
              key={orbit}
              className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.08]"
              style={{ width: `${52 + orbit * 23}%` }}
              animate={reduce ? undefined : { rotate: orbit % 2 ? -360 : 360 }}
              transition={{ duration: 80 + orbit * 25, repeat: Infinity, ease: "linear" }}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] bg-white shadow-[0_20px_70px_rgba(50,80,180,0.22)] ring-1 ring-black/5 md:h-40 md:w-40">
            <div className="text-center">
              <div className="mx-auto flex h-8 items-end justify-center gap-1.5">
                <span className="h-3 w-1.5 rounded-full bg-[#7b2ff7]" />
                <span className="h-5 w-1.5 rounded-full bg-[#4b68f5]" />
                <span className="h-7 w-1.5 rounded-full bg-[#00a3ff]" />
              </div>
              <p className="mt-3 text-[13px] font-medium tracking-[-0.03em]">TheDobra Data</p>
              <p className="mt-1 text-[10px] text-graphite">conectado</p>
            </div>
          </div>

          {orbitConnectors.map(({ name, Icon, color, orbit, angle }) => {
            const radius = 26 + orbit * 11;
            const radians = (angle * Math.PI) / 180;
            const left = 50 + Math.cos(radians) * radius;
            const top = 50 + Math.sin(radians) * radius;

            return (
              <motion.div
                key={name}
                className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-[0_8px_25px_rgba(30,40,80,0.12)] ring-1 ring-black/[0.06] md:h-14 md:w-14"
                style={{ left: `${left}%`, top: `${top}%` }}
                whileHover={reduce ? undefined : { scale: 1.12, y: -3 }}
                title={name}
                aria-label={name}
              >
                <Icon size={24} color={color} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
