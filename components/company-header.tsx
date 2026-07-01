import { Car, MapPin, Building2, Plus, Share2, Monitor, Cpu, Zap } from "lucide-react"
import type { CompanyData } from "@/lib/esg-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Monitor,
  Cpu,
  Zap,
}

interface CompanyHeaderProps {
  company: CompanyData
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  const Icon = iconMap[company.icon] || Car

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary ring-1 ring-border">
          <Icon className="h-7 w-7 text-accent" />
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
              {company.name}
            </h1>
            <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {company.ticker}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5" />
              {company.industry}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {company.country}
            </span>
            <span className="hidden sm:inline">{company.type}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Share</span>
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent">
          <Plus className="h-4 w-4" />
          Add to Watchlist
        </button>
      </div>
    </div>
  )
}
