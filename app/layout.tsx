import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedobra.cc"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "TheDobra — Inteligência de dados para decisões extraordinárias",
    template: "%s · TheDobra",
  },
  description:
    "A TheDobra utiliza Business Intelligence e Inteligência Artificial para transformar dados complexos em insights claros, precisos e valiosos para o seu negócio.",
  keywords: [
    "TheDobra",
    "Business Intelligence",
    "Inteligência Artificial",
    "Data Analytics",
    "dashboards inteligentes",
    "tomada de decisão",
  ],
  authors: [{ name: "TheDobra" }],
  openGraph: {
    title: "TheDobra — Transforme dados em decisões.",
    description:
      "Seus dados já sabem a resposta. A TheDobra mostra onde ela está.",
    type: "website",
    locale: "pt_BR",
    siteName: "TheDobra",
    url: "https://www.thedobra.cc",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheDobra — Transforme dados em decisões.",
    description:
      "Business Intelligence e Inteligência Artificial para decisões extraordinárias.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-[#f5f5f7]">
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <div className="grain" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.thedobra.cc/#organization",
                name: "TheDobra",
                description:
                  "Inteligência de dados para decisões extraordinárias. Business Intelligence e Inteligência Artificial.",
                url: "https://www.thedobra.cc",
                slogan:
                  "Seus dados já sabem a resposta. A TheDobra mostra onde ela está.",
              },
              {
                "@type": "WebSite",
                "@id": "https://www.thedobra.cc/#website",
                name: "TheDobra",
                url: "https://www.thedobra.cc",
                publisher: {
                  "@id": "https://www.thedobra.cc/#organization",
                },
                inLanguage: "pt-BR",
              },
              {
                "@type": "SoftwareApplication",
                name: "TheDobra",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                  "Plataforma de inteligência de dados com Business Intelligence, dashboards e análise assistida por Inteligência Artificial.",
                url: "https://www.thedobra.cc",
                publisher: {
                  "@id": "https://www.thedobra.cc/#organization",
                },
              },
            ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
