export const navLinks = [
  { href: "#produto", label: "Produto" },
  { href: "#ia", label: "Inteligência" },
  { href: "#dashboards", label: "BI" },
  { href: "#casos", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
] as const;

export const insights = [
  "A receita cresceu 18%, mas a margem caiu 6%.",
  "O produto X apresenta crescimento acima da média nas últimas 4 semanas.",
  "A região Sul apresenta uma oportunidade de expansão.",
  "O comportamento atual indica risco de queda nas vendas no próximo período.",
] as const;

export const askQuestions = [
  {
    id: "produto",
    question: "Qual produto mais cresceu este mês?",
    answer:
      "O produto Atlas liderou com +34% em volume. O crescimento está concentrado no canal direto e em contratos acima de R$ 12 mil. Recomendo ampliar estoque e investimento nesse SKU nas próximas duas semanas.",
    metric: { label: "Crescimento", value: "+34%", hint: "vs. mês anterior" },
    bars: [28, 36, 41, 48, 62, 74],
  },
  {
    id: "vendas",
    question: "Onde estamos perdendo vendas?",
    answer:
      "A perda está concentrada no estágio de proposta: a conversão caiu de 27% para 19%. Três regiões respondem por 68% da queda. O tempo médio de fechamento subiu 12%.",
    metric: { label: "Conversão proposta", value: "19%", hint: "era 27%" },
    bars: [72, 68, 61, 54, 47, 41],
  },
  {
    id: "regiao",
    question: "Qual região possui maior potencial?",
    answer:
      "O Sul combina demanda reprimida e CAC 22% menor que a média nacional. A penetração atual é de 11%, com espaço para dobrar sem degradação de margem.",
    metric: { label: "Potencial Sul", value: "2,1×", hint: "vs. penetração atual" },
    bars: [18, 22, 27, 33, 41, 52],
  },
  {
    id: "margem",
    question: "Por que nossa margem caiu?",
    answer:
      "A margem bruta recuou 6 pontos. 61% da pressão vem de desconto comercial no segmento enterprise. O custo variável permaneceu estável. Sem o desconto médio extra de 4,2%, a margem teria se mantido.",
    metric: { label: "Margem", value: "−6 pp", hint: "pressão de desconto" },
    bars: [41, 40, 38, 36, 33, 31],
  },
  {
    id: "receita",
    question: "Qual será nossa receita no próximo mês?",
    answer:
      "O modelo projeta R$ 4,8 mi, com intervalo de R$ 4,4 a 5,1 mi. O cenário-base assume conversão estável e um atraso sazonal de 6% no fechamento da segunda quinzena.",
    metric: { label: "Projeção", value: "R$ 4,8 mi", hint: "intervalo ±7%" },
    bars: [38, 42, 40, 46, 49, 53],
  },
  {
    id: "churn",
    question: "Quais clientes apresentam risco de churn?",
    answer:
      "14 contas enterprise mostram queda de uso e tickets em aberto há mais de 18 dias. Juntas, representam R$ 1,2 mi de receita anual. Três delas já reduziram seats no último ciclo.",
    metric: { label: "Receita em risco", value: "R$ 1,2 mi", hint: "14 contas" },
    bars: [12, 14, 16, 21, 28, 34],
  },
] as const;

export const useCases = [
  {
    id: "diretoria",
    title: "CEO / Diretoria",
    text: "Saiba o que está acontecendo na empresa sem abrir 15 planilhas.",
    kpis: [
      { label: "Meta", value: "104%" },
      { label: "Receita", value: "R$ 4,2 mi" },
      { label: "Forecast", value: "R$ 4,8 mi" },
    ],
  },
  {
    id: "comercial",
    title: "Comercial",
    text: "Descubra onde seu funil está perdendo dinheiro.",
    kpis: [
      { label: "Pipeline", value: "R$ 12,4 mi" },
      { label: "Win rate", value: "31%" },
      { label: "Ciclo", value: "18 dias" },
    ],
  },
  {
    id: "financeiro",
    title: "Financeiro",
    text: "Entenda o que está movimentando sua margem e seu caixa.",
    kpis: [
      { label: "Receita", value: "R$ 4,2 mi" },
      { label: "Margem", value: "38%" },
      { label: "Runway", value: "19 meses" },
    ],
  },
  {
    id: "operacoes",
    title: "Operações",
    text: "Identifique gargalos e oportunidades de eficiência.",
    kpis: [
      { label: "SLA", value: "97,4%" },
      { label: "Lead time", value: "−11%" },
      { label: "Ociosidade", value: "6%" },
    ],
  },
  {
    id: "gestao",
    title: "Gestão",
    text: "Tenha uma visão executiva completa do negócio.",
    kpis: [
      { label: "Meta", value: "104%" },
      { label: "NPS", value: "71" },
      { label: "Forecast", value: "R$ 4,8 mi" },
    ],
  },
  {
    id: "rh",
    title: "RH",
    text: "Analise indicadores de pessoas, produtividade e retenção.",
    kpis: [
      { label: "Retenção", value: "93%" },
      { label: "eNPS", value: "64" },
      { label: "Time to hire", value: "21d" },
    ],
  },
] as const;

export const connectorGroups = [
  {
    name: "Bases de dados",
    items: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "MariaDB",
      "SQL Server",
      "Oracle",
      "Amazon Redshift",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "MongoDB",
      "ODBC / DSN",
    ],
  },
  {
    name: "Ficheiros e entrada manual",
    items: ["Manual", "CSV", "Excel", "Google Sheets", "JSON / NDJSON", "Parquet", "PDF"],
  },
  {
    name: "Web e APIs",
    items: ["REST JSON", "URL JSON", "OData", "Webhook"],
  },
  {
    name: "Negócios e sistemas brasileiros",
    items: ["Asaas", "Conta Azul", "Bitrix24", "Omie", "TOTVS Protheus", "SAP Business One", "Senior"],
  },
  {
    name: "Publicidade",
    items: ["Google Ads", "Meta Ads"],
  },
  {
    name: "Redes sociais, CRM e marketplaces",
    items: ["Instagram", "Facebook", "Google Meu Negócio", "Salesforce", "Mercado Livre"],
  },
  {
    name: "Dados econômicos e públicos",
    items: ["IBGE", "Contabilidade / OFX", "Inflação / IPCA", "Expectativa de mercado", "Câmbio em tempo real"],
  },
  {
    name: "Cloud e SaaS",
    items: ["Google Analytics", "GitHub", "Stripe"],
  },
  {
    name: "Streaming e eventos",
    items: ["Kafka", "MQTT"],
  },
] as const;
