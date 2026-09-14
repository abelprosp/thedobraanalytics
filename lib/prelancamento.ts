/**
 * Convite do grupo de pré-lançamento.
 * Troque pelo link real no formato https://chat.whatsapp.com/...
 */
export const PRELAUNCH_GROUP_URL =
  "https://chat.whatsapp.com/EmWVagELzWXG7r0n4GTqbF?s=cl&p=i&mlu=4&ilr=4";

export const PRELAUNCH_DATE = "23 de setembro";

export const PRELAUNCH_CTA = "Entrar no grupo do pré-lançamento";

export const prelaunchPlans = [
  {
    name: "Starter",
    description: "Para começar a transformar seus dados em decisões.",
    price: "R$ 129",
    regular: "R$ 147",
    period: "/mês",
    features: [
      "5 usuários",
      "15 datasets",
      "50 mil queries",
      "10 dashboards",
      "Conectores básicos",
      "200 créditos de IA",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Para times que precisam de escala, análise e autonomia.",
    price: "R$ 239",
    regular: "R$ 297",
    period: "/mês",
    features: [
      "25 usuários",
      "Datasets ilimitados",
      "Dashboards ilimitados",
      "Conectores avançados: ERPs e APIs",
      "1.000 créditos de IA",
      "White-label básico com logo",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para operações críticas que precisam de controle e suporte dedicado.",
    price: "R$ 589",
    regular: "R$ 697",
    period: "/mês",
    features: [
      "Usuários ilimitados",
      "Créditos de IA sob demanda",
      "White-label completo",
      "SLA",
      "Suporte prioritário",
      "Onboarding dedicado",
    ],
    highlighted: false,
  },
] as const;
