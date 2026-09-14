import { Prelancamento } from "@/components/Prelancamento";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pré-lançamento",
  description:
    "Condição de pré-lançamento da TheDobra, exclusiva para quem estiver no grupo em 23 de setembro.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "/prelancamento",
  },
};

export default function PrelancamentoPage() {
  return <Prelancamento />;
}
