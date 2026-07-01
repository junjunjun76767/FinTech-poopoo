import { MessageSquareText, UsersRound, FlaskConical, Sun, CloudOff, FileCheck as FileCheck2, Sparkles } from "lucide-react"
import type { CompanyData, EvidenceSignal } from "@/lib/esg-data"
import { DashboardCard, CardHeader } from "@/components/dashboard-card"

const iconMap = {
  sentiment: MessageSquareText,
  hiring: UsersRound,
  patent: FlaskConical,
  renewable: Sun,
  carbon: CloudOff,
  report: FileCheck2,
} as const

interface AiEvidenceProps {
  company: CompanyData
}

function SignalRow({ signal }: { signal: EvidenceSignal }) {
  const Icon = iconMap[signal.icon]
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-3 py-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
        <Icon className="h-4 w-4 text-accent" />
      </span>
      <span className="text-sm text-foreground">{signal.label}</span>
      <span className="ml-auto text-sm font-semibold text-accent">{signal.value}</span>
    </li>
  )
}

export function AiEvidence({ company }: AiEvidenceProps) {
  const { evidenceSignals, kpis } = company

  return (
    <DashboardCard>
      <CardHeader
        title="AI Evidence & Signals"
        subtitle="AI-derived indicators"
        action={<Sparkles className="h-4 w-4 text-accent" />}
      />
      <ul className="flex flex-col gap-2">
        {evidenceSignals.map((s) => (
          <SignalRow key={s.label} signal={s} />
        ))}
      </ul>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">AI Confidence Meter</span>
          <span className="font-semibold text-accent">{kpis.aiConfidence}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-accent" style={{ width: `${kpis.aiConfidence}%` }} />
        </div>
      </div>
    </DashboardCard>
  )
}
