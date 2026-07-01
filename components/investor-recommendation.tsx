import { TrendingUp, Bookmark } from "lucide-react"
import type { CompanyData } from "@/lib/esg-data"
import { DashboardCard, CardHeader } from "@/components/dashboard-card"

interface InvestorRecommendationProps {
  company: CompanyData
}

function Gauge({ value }: { value: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="relative h-36 w-36 shrink-0">
      <svg className="h-36 w-36 -rotate-90" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r={radius} fill="none" stroke="var(--secondary)" strokeWidth="10" />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-foreground">{value}</span>
        <span className="text-[11px] text-muted-foreground">Momentum</span>
      </div>
    </div>
  )
}

export function InvestorRecommendation({ company }: InvestorRecommendationProps) {
  const { kpis, recommendation } = company

  return (
    <DashboardCard>
      <CardHeader title="Investor Recommendation" subtitle="AI-generated signal" />
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Gauge value={kpis.momentumScore} />

        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 shadow-lg shadow-primary/30">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
            <span className="text-lg font-bold tracking-wide text-primary-foreground">
              {recommendation.action}
            </span>
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">
            {recommendation.headline}
          </p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
            <Bookmark className="h-4 w-4 text-accent" />
            {recommendation.note}
          </p>
        </div>
      </div>
    </DashboardCard>
  )
}
