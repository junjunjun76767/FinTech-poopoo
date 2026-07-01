import { TrendingUp } from "lucide-react"
import type { CompanyData } from "@/lib/esg-data"
import { DashboardCard, CardHeader } from "@/components/dashboard-card"

interface PillarBreakdownProps {
  company: CompanyData
}

export function PillarBreakdown({ company }: PillarBreakdownProps) {
  const { pillars, overallPillarScore } = company

  return (
    <DashboardCard>
      <CardHeader title="ESG Pillar Breakdown" subtitle="Component scores out of 100" />
      <ul className="flex flex-col gap-4">
        {pillars.map((p) => (
          <li key={p.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm text-foreground">
                {p.label}
                {p.improving && <TrendingUp className="h-3.5 w-3.5 text-accent" />}
              </span>
              <span className="text-sm font-semibold text-foreground">{p.value}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${p.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
        <span className="text-sm font-medium text-foreground">Overall Score</span>
        <span className="text-xl font-semibold text-accent">{overallPillarScore}</span>
      </div>
    </DashboardCard>
  )
}
