import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { watchlist, type Category, type WatchRow } from "@/lib/esg-data"
import { DashboardCard, CardHeader } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

const categoryStyles: Record<Category, string> = {
  "Future Leader": "bg-primary/15 text-accent ring-primary/30",
  "Hidden Winner": "bg-[var(--info)]/15 text-[var(--info)] ring-[var(--info)]/30",
  "Overrated Leader": "bg-[var(--warning)]/15 text-[var(--warning)] ring-[var(--warning)]/30",
  "Value Trap": "bg-destructive/15 text-destructive ring-destructive/30",
}

function TrendIcon({ trend }: { trend: WatchRow["trend"] }) {
  if (trend === "up") return <TrendingUp className="h-4 w-4 text-accent" />
  if (trend === "down") return <TrendingDown className="h-4 w-4 text-destructive" />
  return <Minus className="h-4 w-4 text-muted-foreground" />
}

export function WatchlistTable() {
  return (
    <DashboardCard>
      <CardHeader title="Watchlist" subtitle="Tracked companies by ESG signal" />
      <div className="-mx-2 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-border text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <th className="px-3 py-2.5">Company</th>
              <th className="px-3 py-2.5">Current ESG</th>
              <th className="px-3 py-2.5">Momentum</th>
              <th className="px-3 py-2.5">Trend</th>
              <th className="px-3 py-2.5">Category</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((row) => (
              <tr
                key={row.ticker}
                className="border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40"
              >
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-xs font-semibold text-foreground">
                      {row.ticker.slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{row.company}</p>
                      <p className="text-[11px] text-muted-foreground">{row.ticker}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-sm font-medium text-foreground">{row.esg}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${row.momentum}%` }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{row.momentum}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <TrendIcon trend={row.trend} />
                </td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                      categoryStyles[row.category],
                    )}
                  >
                    {row.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  )
}
