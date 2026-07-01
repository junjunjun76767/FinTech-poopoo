import { DashboardCard, CardHeader } from "@/components/dashboard-card"
import type { CompanyData } from "@/lib/esg-data"

interface MomentumMatrixProps {
  company: CompanyData
}

const quadrants = [
  {
    title: "Hidden Winners",
    desc: "Low ESG · High Momentum",
    tone: "text-[var(--info)]",
    align: "items-start text-left",
  },
  {
    title: "Future Leaders",
    desc: "High ESG · High Momentum",
    tone: "text-accent",
    align: "items-end text-right",
  },
  {
    title: "Value Traps",
    desc: "Low ESG · Low Momentum",
    tone: "text-destructive",
    align: "items-start text-left",
  },
  {
    title: "Overrated Leaders",
    desc: "High ESG · Low Momentum",
    tone: "text-[var(--warning)]",
    align: "items-end text-right",
  },
]

export function MomentumMatrix({ company }: MomentumMatrixProps) {
  const { name, matrixPosition } = company

  return (
    <DashboardCard>
      <CardHeader title="ESG Momentum Matrix" subtitle="Positioning by score & momentum" />
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl">
          {quadrants.map((q) => (
            <div
              key={q.title}
              className={`flex min-h-[104px] flex-col justify-between rounded-lg border border-border bg-secondary/40 p-3.5 ${q.align}`}
            >
              <p className={`text-sm font-semibold ${q.tone}`}>{q.title}</p>
              <p className="text-[11px] text-muted-foreground">{q.desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute" style={{ left: matrixPosition.left, top: matrixPosition.top, transform: "translate(-50%, -50%)" }}>
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent shadow-[0_0_14px_4px_var(--accent)]" />
          </span>
          <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-0.5 text-[11px] font-medium text-foreground shadow-lg ring-1 ring-border">
            {name.split(" ")[0]}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Lower ESG Score</span>
        <span>Higher Momentum</span>
      </div>
    </DashboardCard>
  )
}
