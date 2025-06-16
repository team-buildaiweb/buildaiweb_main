"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Search,
  Clock,
  TrendingUp,
  X,
  ArrowRight,
  Loader2,
  FileText,
  Users,
  Settings,
  HelpCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useSearch } from "@/lib/search-context"

const categoryIcons = {
  page: FileText,
  blog: FileText,
  feature: Zap,
  help: HelpCircle,
  team: Users,
  other: Settings,
}

const popularSearches = [
  "AI website builder",
  "Dashboard features",
  "Pricing plans",
  "Getting started",
  "API documentation",
  "Team collaboration",
]

export function SearchModal() {
  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    recentSearches,
    isSearching,
    selectedCategory,
    closeSearch,
    setSearchQuery,
    setSelectedCategory,
    addRecentSearch,
    clearRecentSearches,
  } = useSearch()

  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch()
      }
    }

    if (isSearchOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isSearchOpen, closeSearch])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery.trim())
      closeSearch()
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleResultClick = (result: any) => {
    addRecentSearch(searchQuery)
    closeSearch()
  }

  const categories = [
    { id: "all", label: "All", count: searchResults.length },
    { id: "page", label: "Pages", count: searchResults.filter((r) => r.category === "page").length },
    { id: "blog", label: "Blog", count: searchResults.filter((r) => r.category === "blog").length },
    { id: "feature", label: "Features", count: searchResults.filter((r) => r.category === "feature").length },
    { id: "help", label: "Help", count: searchResults.filter((r) => r.category === "help").length },
  ]

  return (
    <Dialog open={isSearchOpen} onOpenChange={closeSearch}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">Search BuildAIWeb</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for pages, features, help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-0 focus:ring-0 focus:border-0 shadow-none"
            />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </form>

        {/* Category Filters */}
        {searchQuery && (
          <div className="px-6 pb-4">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto max-h-96">
          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
              <span className="ml-2 text-gray-600">Searching...</span>
            </div>
          ) : searchQuery && searchResults.length > 0 ? (
            <div className="px-6 pb-6">
              <div className="space-y-2">
                {searchResults.slice(0, 8).map((result) => {
                  const IconComponent = categoryIcons[result.category as keyof typeof categoryIcons] || Settings
                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={() => handleResultClick(result)}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 group-hover:text-purple-600 truncate">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{result.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                            {result.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  )
                })}
              </div>

              {searchResults.length > 8 && (
                <div className="mt-4 pt-4 border-t">
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => closeSearch()}
                    className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View all {searchResults.length} results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="px-6 pb-6 text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find anything matching "{searchQuery}". Try different keywords or browse our popular
                searches.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularSearches.slice(0, 4).map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(search)}
                    className="text-xs"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="px-6 pb-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Recent Searches
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearRecentSearches}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </Button>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.slice(0, 5).map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => setSearchQuery(search)}
                        className="w-full justify-start text-left font-normal text-gray-600 hover:text-gray-900"
                      >
                        <Clock className="w-3 h-3 mr-2 text-gray-400" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </h3>
                <div className="space-y-1">
                  {popularSearches.map((search) => (
                    <Button
                      key={search}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="w-full justify-start text-left font-normal text-gray-600 hover:text-gray-900"
                    >
                      <TrendingUp className="w-3 h-3 mr-2 text-gray-400" />
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t text-xs text-gray-500 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Press Enter to search</span>
            <span>ESC to close</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <Zap className="w-3 h-3 text-purple-600" />
            <span className="font-medium">BuildAIWeb</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
