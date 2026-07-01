import { Gauge, TrendingUp, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react"
import type { CompanyData } from "@/lib/esg-data"
import { DashboardCard } from "@/components/dashboard-card"

interface KpiCardsProps {
  company: CompanyData
}

function ScoreRing({ value, tone }: { value: number; tone: "info" | "accent" }) {
  const radius = 22
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  const color = tone === "accent" ? "var(--accent)" : "var(--info)"
  return (
    <div className="relative h-14 w-14 shrink-0">
      <svg className="h-14 w-14 -rotate-90" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r={radius} fill="none" stroke="var(--secondary)" strokeWidth="5" />
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
        {value}
      </span>
    </div>
  )
}

export function KpiCards({ company }: KpiCardsProps) {
  const { kpis, trendLabel, trendChange, riskLevel, riskNote } = company

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <DashboardCard className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Gauge className="h-3.5 w-3.5" />
            Current ESG Score
          </div>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {kpis.esgScore}
            <span className="ml-1 text-base font-normal text-muted-foreground">/100</span>
          </p>
        </div>
        <ScoreRing value={kpis.esgScore} tone="info" />
      </DashboardCard>

      <DashboardCard className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" />
            ESG Momentum Score
          </div>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            {kpis.momentumScore}
            <span className="ml-1 text-base font-normal text-muted-foreground">/100</span>
          </p>
        </div>
        <ScoreRing value={kpis.momentumScore} tone="accent" />
      </DashboardCard>

      <DashboardCard>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <ArrowUpRight className="h-3.5 w-3.5" />
          Trend
        </div>
        <p className="mt-2 text-lg font-semibold text-accent">{trendLabel}</p>
        <div className="mt-2 flex items-center gap-1 text-xs text-accent">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span>{trendChange}</span>
        </div>
      </DashboardCard>

      <DashboardCard>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" />
          AI Confidence
        </div>
        <p className="mt-2 text-3xl font-semibold text-foreground">{kpis.aiConfidence}%</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-accent" style={{ width: `${kpis.aiConfidence}%` }} />
        </div>
      </DashboardCard>

      <DashboardCard>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" />
          Risk Level
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
            <ShieldCheck className="h-5 w-5 text-accent" />
          </span>
          <span className="text-lg font-semibold text-accent">{riskLevel}</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{riskNote}</p>
      </DashboardCard>
    </div>
  )
}
