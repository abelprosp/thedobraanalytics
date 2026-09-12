"use client";

import { AIAnalyst } from "@/components/AIAnalyst";
import { AskData } from "@/components/AskData";
import { ContactModal } from "@/components/ContactModal";
import { CTA } from "@/components/CTA";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Problem } from "@/components/Problem";
import { PowerBIComparison } from "@/components/PowerBIComparison";
import { Pricing } from "@/components/Pricing";
import { ProductArchitecture } from "@/components/ProductArchitecture";
import { Solution } from "@/components/Solution";
import { UseCases } from "@/components/UseCases";
import { useCallback, useState } from "react";

export function Landing() {
  const [contact, setContact] = useState(false);
  const openContact = useCallback(() => setContact(true), []);
  const closeContact = useCallback(() => setContact(false), []);

  return (
    <>
      <Navbar onContact={openContact} />
      <main id="conteudo">
        <Hero onContact={openContact} />
        <Problem />
        <ProductArchitecture />
        <Solution />
        <AIAnalyst />
        <DashboardPreview />
        <HowItWorks />
        <UseCases />
        <AskData />
        <PowerBIComparison />
        <FAQ />
        <Pricing onContact={openContact} />
        <CTA onContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contact} onClose={closeContact} />
    </>
  );
}
