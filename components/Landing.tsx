"use client";

import { AIAnalyst } from "@/components/AIAnalyst";
import { AskData } from "@/components/AskData";
import { Benefits } from "@/components/Benefits";
import { CinematicTransition } from "@/components/CinematicTransition";
import { ContactModal } from "@/components/ContactModal";
import { CTA } from "@/components/CTA";
import { DashboardPreview } from "@/components/DashboardPreview";
import { DataProduct } from "@/components/DataProduct";
import { Differentiator } from "@/components/Differentiator";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Problem } from "@/components/Problem";
import { Quote } from "@/components/Quote";
import { Solution } from "@/components/Solution";
import { UseCases } from "@/components/UseCases";
import { useCallback, useState } from "react";

export function Landing() {
  const [contact, setContact] = useState(false);
  const openContact = useCallback(() => setContact(true), []);
  const closeContact = useCallback(() => setContact(false), []);
  const discover = useCallback(() => {
    document.getElementById("solucao")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar onContact={openContact} />
      <main id="conteudo">
        <Hero onDiscover={discover} />
        <Quote />
        <Problem />
        <CinematicTransition />
        <Solution />
        <AIAnalyst />
        <DashboardPreview />
        <DataProduct />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <AskData />
        <Differentiator />
        <CTA onContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contact} onClose={closeContact} />
    </>
  );
}
