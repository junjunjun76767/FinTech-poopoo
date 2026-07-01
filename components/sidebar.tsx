"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Search,
  Grid2x2,
  Star,
  Sparkles,
  Bell,
  Briefcase,
  Settings,
  Leaf,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Company Search", icon: Search },
  { label: "Momentum Matrix", icon: Grid2x2 },
  { label: "Watchlist", icon: Star },
  { label: "AI Insights", icon: Sparkles },
  { label: "Alerts", icon: Bell },
  { label: "Portfolio", icon: Briefcase },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
          <Leaf className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">ESG AI</p>
          <p className="text-[11px] text-muted-foreground">Investment Intelligence</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5">
        <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Menu
        </p>
        <ul className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = active === label
            return (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => setActive(label)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[18px] w-[18px] transition-colors",
                      isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  {label}
                  {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="m-3 rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-4">
        <p className="text-xs font-semibold text-foreground">AI Analyst Pro</p>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
          Unlock deeper momentum signals and unlimited company reports.
        </p>
        <button className="mt-3 w-full rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-accent">
          Upgrade
        </button>
      </div>
    </aside>
  )
}
