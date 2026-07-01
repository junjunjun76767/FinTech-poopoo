import { Leaf, Recycle, UsersRound, ShieldCheck } from "lucide-react"
import { alerts, type Alert } from "@/lib/esg-data"
import { DashboardCard, CardHeader } from "@/components/dashboard-card"

const iconFor: Record<string, typeof Leaf> = {
  Tesla: Leaf,
  Apple: Recycle,
  NVIDIA: UsersRound,
  Microsoft: ShieldCheck,
}

function AlertCard({ alert }: { alert: Alert }) {
  const Icon = iconFor[alert.company] ?? Leaf
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3.5">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
        <Icon className="h-4.5 w-4.5 text-accent" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{alert.company}</span> {alert.message}
        </p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">{alert.time}</p>
      </div>
    </li>
  )
}

export function RecentAlerts() {
  return (
    <DashboardCard>
      <CardHeader title="Recent Alerts" subtitle="Latest ESG activity" />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {alerts.map((a) => (
          <AlertCard key={a.company} alert={a} />
        ))}
      </ul>
    </DashboardCard>
  )
}
