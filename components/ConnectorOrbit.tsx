"use client";

import {
  SiGithub,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesheets,
  SiHubspot,
  SiInstagram,
  SiMeta,
  SiPostgresql,
  SiSap,
  SiSnowflake,
  SiStripe,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; color?: string }>;

const connectors: Array<{ name: string; Icon: IconComponent; color: string }> = [
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Instagram", Icon: SiInstagram, color: "#E4405F" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
  { name: "SAP", Icon: SiSap, color: "#0FAAFF" },
  { name: "Meta", Icon: SiMeta, color: "#0668E1" },
  { name: "WhatsApp", Icon: SiWhatsapp, color: "#25D366" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Snowflake", Icon: SiSnowflake, color: "#29B5E8" },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
  { name: "Google Sheets", Icon: SiGooglesheets, color: "#34A853" },
];

const spots = [
  {
    className: "left-[1%] top-[36%] w-[92px] sm:left-[3%] sm:top-[34%] sm:w-[118px]",
    rotate: -11,
    delay: 0,
  },
  {
    className: "left-[14%] top-[6%] w-[104px] sm:left-[17%] sm:top-[4%] sm:w-[136px]",
    rotate: 8,
    delay: 0.4,
  },
  {
    className: "right-[14%] top-[4%] w-[104px] sm:right-[16%] sm:top-[2%] sm:w-[132px]",
    rotate: -6,
    delay: 0.15,
  },
  {
    className: "right-[1%] top-[34%] w-[92px] sm:right-[3%] sm:top-[32%] sm:w-[120px]",
    rotate: 10,
    delay: 0.55,
  },
  {
    className: "left-[8%] top-[68%] hidden w-[86px] sm:block sm:w-[104px]",
    rotate: -4,
    delay: 0.25,
  },
  {
    className: "right-[9%] top-[66%] hidden w-[90px] sm:block sm:w-[110px]",
    rotate: 6,
    delay: 0.7,
  },
  {
    className: "left-[38%] top-[2%] hidden w-[78px] md:block",
    rotate: -3,
    delay: 0.9,
  },
  {
    className: "right-[36%] top-[74%] hidden w-[82px] md:block",
    rotate: 4,
    delay: 1.05,
  },
];

export function ConnectorOrbit() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const featured = connectors[active];
  const around = connectors.filter((item) => item.name !== featured.name);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % connectors.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <Reveal className="mt-20" y={28}>
      <div id="conectores" className="bg-[#050506] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-white/40">Conectores</p>
          <h3 className="display mx-auto mt-5 max-w-[12ch] text-[clamp(2.4rem,5.4vw,4.4rem)]">
            Tudo conectado à
            <span className="block">TheDobra.</span>
          </h3>
        </div>

        <div className="relative mx-auto mt-8 h-[460px] max-w-[980px] sm:mt-4 sm:h-[540px]">
          {spots.map((spot, index) => {
            const item = around[index % around.length];
            return (
              <motion.div
                key={spot.className}
                className={`absolute ${spot.className}`}
                aria-label={item.name}
                animate={
                  reduce
                    ? { rotate: spot.rotate }
                    : { y: [0, -12, 0], rotate: [spot.rotate, spot.rotate + 1.6, spot.rotate] }
                }
                transition={{
                  duration: 7.5,
                  delay: spot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex aspect-square items-center justify-center rounded-[28px] bg-[#f6f3ec] shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                  <item.Icon size={34} color={item.color} />
                </div>
              </motion.div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-10 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center gap-5 rounded-[36px] bg-white px-6 py-7 shadow-[0_30px_80px_rgba(40,70,160,0.22)] sm:gap-7 sm:px-8 sm:py-8">
              <Image
                src="/thedobra-mark.png"
                alt="TheDobra"
                width={120}
                height={120}
                className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <span className="h-14 w-px bg-black/10 sm:h-16" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured.name}
                  className="flex h-16 w-16 items-center justify-center sm:h-[4.5rem] sm:w-[4.5rem]"
                  aria-label={featured.name}
                  initial={reduce ? false : { opacity: 0, rotate: -16, scale: 0.86 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, rotate: 16, scale: 0.86 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <featured.Icon size={42} color={featured.color} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
