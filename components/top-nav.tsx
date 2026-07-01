"use client"

import { Search, Bell, Circle as HelpCircle, Leaf } from "lucide-react"
import { useState } from "react"
import { getAvailableCompanies } from "@/lib/esg-data"

interface TopNavProps {
  onCompanySearch: (companyName: string) => void
}

export function TopNav({ onCompanySearch }: TopNavProps) {
  const [searchValue, setSearchValue] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const companies = getAvailableCompanies()

  const handleSearch = (value: string) => {
    setSearchValue(value)
    if (value.trim()) {
      const filtered = companies.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSelectCompany = (company: string) => {
    setSearchValue(company)
    setShowSuggestions(false)
    onCompanySearch(company)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSelectCompany(suggestions[0])
    }
  }

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-2 lg:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Leaf className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold">ESG AI</span>
      </div>

      <div className="relative flex-1 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search Company..."
          aria-label="Search company"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchValue.trim() && setShowSuggestions(suggestions.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="h-10 w-full rounded-lg border border-input bg-secondary/60 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-border bg-popover shadow-lg overflow-hidden z-50">
            {suggestions.map((company) => (
              <li key={company}>
                <button
                  type="button"
                  className="w-full px-4 py-2.5 text-left text-sm text-foreground hover:bg-secondary transition-colors"
                  onClick={() => handleSelectCompany(company)}
                >
                  {company}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
        </button>
        <button
          type="button"
          aria-label="Help"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <HelpCircle className="h-[18px] w-[18px]" />
        </button>
        <button
          type="button"
          aria-label="User profile"
          className="ml-1 flex items-center gap-2.5 rounded-lg pl-1 pr-2.5 py-1 transition-colors hover:bg-secondary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">
            AK
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-medium text-foreground">Alex Kim</span>
            <span className="block text-[11px] text-muted-foreground">Portfolio Analyst</span>
          </span>
        </button>
      </div>
    </header>
  )
}
