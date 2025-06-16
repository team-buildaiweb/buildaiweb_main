"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Command } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchTriggerProps {
  variant?: "default" | "compact" | "icon"
  className?: string
}

export function SearchTrigger({ variant = "default", className = "" }: SearchTriggerProps) {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        router.push("/search")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [router])

  const handleSearchClick = () => {
    router.push("/search")
  }

  // Don't render on server
  if (!isClient) {
    return null
  }

  if (variant === "icon") {
    return (
      <Button variant="ghost" size="sm" onClick={handleSearchClick} className={`p-2 ${className}`} aria-label="Search">
        <Search className="w-5 h-5" />
      </Button>
    )
  }

  if (variant === "compact") {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={handleSearchClick}
        className={`flex items-center gap-2 text-gray-600 hover:text-purple-600 ${className}`}
      >
        <Search className="w-4 h-4" />
        Search
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      onClick={handleSearchClick}
      className={`flex items-center justify-between w-full max-w-sm text-left text-gray-600 hover:text-purple-600 ${className}`}
    >
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4" />
        <span>Search...</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-400">
        <Command className="w-3 h-3" />
        <span>K</span>
      </div>
    </Button>
  )
}
