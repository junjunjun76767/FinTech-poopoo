import companiesData from "@/data/companies.json";

export type EvidenceSignal = {
  label: string;
  value: string;
  positive: boolean;
  icon: "sentiment" | "hiring" | "patent" | "renewable" | "carbon" | "report";
};

export type Pillar = {
  label: string;
  value: number;
  improving: boolean;
};

export type TrendPoint = {
  month: string;
  esg: number;
  momentum: number;
};

export type CompanyData = {
  name: string;
  ticker: string;
  industry: string;
  country: string;
  type: string;
  icon: string;
  kpis: {
    esgScore: number;
    momentumScore: number;
    aiConfidence: number;
  };
  trend: string;
  trendData: TrendPoint[];
  pillars: Pillar[];
  overallPillarScore: number;
  evidenceSignals: EvidenceSignal[];
  summaryHighlights: string[];
  category: string;
  summary: string;
  recommendation: {
    action: string;
    headline: string;
    note: string;
  };
  riskLevel: string;
  riskNote: string;
  trendLabel: string;
  trendChange: string;
  matrixPosition: { left: string; top: string };
};

export type Category = "Future Leader" | "Hidden Winner" | "Overrated Leader" | "Value Trap";

export type WatchRow = {
  company: string;
  ticker: string;
  esg: number;
  momentum: number;
  trend: "up" | "down" | "flat";
  category: Category;
};

export type Alert = {
  company: string;
  message: string;
  time: string;
  tone: "positive" | "neutral" | "info";
};

export function getCompanyData(companyName: string): CompanyData | null {
  const normalized = companyName.charAt(0).toUpperCase() + companyName.slice(1).toLowerCase();
  return (companiesData.companies as Record<string, CompanyData>)[normalized] || null;
}

export function getAvailableCompanies(): string[] {
  return Object.keys(companiesData.companies);
}

export const watchlist: WatchRow[] = companiesData.watchlist as WatchRow[];

export const alerts: Alert[] = companiesData.alerts as Alert[];

export const company = {
  name: "Tesla Inc.",
  ticker: "TSLA",
  industry: "Automotive",
  country: "United States",
  type: "Public Company",
};

export const kpis = {
  esgScore: 48,
  momentumScore: 82,
  aiConfidence: 87,
};

export const trendData = [
  { month: "Jan", esg: 39, momentum: 58 },
  { month: "Feb", esg: 41, momentum: 64 },
  { month: "Mar", esg: 43, momentum: 69 },
  { month: "Apr", esg: 44, momentum: 74 },
  { month: "May", esg: 46, momentum: 79 },
  { month: "Jun", esg: 48, momentum: 82 },
];

export const pillars = [
  { label: "Environmental", value: 72, improving: true },
  { label: "Social", value: 61, improving: true },
  { label: "Governance", value: 68, improving: false },
  { label: "Innovation & Digital", value: 81, improving: true },
];

export const overallPillarScore = 74;

export const evidenceSignals: EvidenceSignal[] = [
  { label: "Positive News Sentiment", value: "82%", positive: true, icon: "sentiment" },
  { label: "ESG Hiring Growth", value: "+38%", positive: true, icon: "hiring" },
  { label: "Green Patent Filings", value: "+24%", positive: true, icon: "patent" },
  { label: "Renewable Energy Investment", value: "High", positive: true, icon: "renewable" },
  { label: "Carbon Emissions Reduction", value: "-12%", positive: true, icon: "carbon" },
  { label: "ESG Report Improvement", value: "Strong", positive: true, icon: "report" },
];

export const summaryHighlights = [
  "Positive sustainability news",
  "Increased green hiring",
  "Patent growth",
  "Reduced controversies",
  "Improved governance",
];
