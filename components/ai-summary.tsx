import { Sparkles, Check, ArrowRight } from "lucide-react"
import type { CompanyData } from "@/lib/esg-data"
import { DashboardCard } from "@/components/dashboard-card"

interface AiSummaryProps {
  company: CompanyData
}

export function AiSummary({ company }: AiSummaryProps) {
  const { summaryHighlights, category, summary } = company

  return (
    <DashboardCard className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="h-4 w-4 text-accent" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-foreground">AI Explanation</h3>
            <p className="text-xs text-muted-foreground">Generated summary</p>
          </div>
        </div>
        <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-primary/30">
          {category}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {summary}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {summaryHighlights.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
              <Check className="h-3 w-3 text-accent" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-primary/20 mt-5">
        View AI Evidence
        <ArrowRight className="h-4 w-4" />
      </button>
    </DashboardCard>
  )
}
