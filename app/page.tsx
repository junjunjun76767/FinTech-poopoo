"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { CompanyHeader } from "@/components/company-header"
import { KpiCards } from "@/components/kpi-cards"
import { MomentumTrend } from "@/components/momentum-trend"
import { MomentumMatrix } from "@/components/momentum-matrix"
import { PillarBreakdown } from "@/components/pillar-breakdown"
import { AiEvidence } from "@/components/ai-evidence"
import { AiSummary } from "@/components/ai-summary"
import { InvestorRecommendation } from "@/components/investor-recommendation"
import { WatchlistTable } from "@/components/watchlist-table"
import { RecentAlerts } from "@/components/recent-alerts"
import { getCompanyData, type CompanyData } from "@/lib/esg-data"

export default function Page() {
  const [company, setCompany] = useState<CompanyData>(() => getCompanyData("Tesla")!)

  const handleCompanySearch = (companyName: string) => {
    const data = getCompanyData(companyName)
    if (data) {
      setCompany(data)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav onCompanySearch={handleCompanySearch} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <CompanyHeader company={company} />
            <KpiCards company={company} />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <MomentumTrend company={company} />
              <MomentumMatrix company={company} />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <PillarBreakdown company={company} />
              <AiEvidence company={company} />
              <AiSummary company={company} />
            </div>

            <InvestorRecommendation company={company} />
            <WatchlistTable />
            <RecentAlerts />
          </div>

          <footer className="mx-auto mt-8 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
            Powered by <span className="font-semibold text-accent">ESG AI</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
