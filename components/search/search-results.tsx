"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, SortAsc, FileText, Users, Settings, HelpCircle, Zap, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { searchData, type SearchItem } from "@/lib/search-data"

const categoryIcons = {
  page: FileText,
  blog: FileText,
  feature: Zap,
  help: HelpCircle,
  team: Users,
  other: Settings,
}

export function SearchResults() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams?.get("q") || "")
  const [results, setResults] = useState<SearchItem[]>([])
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [isSearching, setIsSearching] = useState(false)

  // Perform search
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setFilteredResults([])
      return
    }

    setIsSearching(true)

    setTimeout(() => {
      const normalizedQuery = searchQuery.toLowerCase().trim()

      let searchResults = searchData.filter((item) => {
        const searchableText = `${item.title} ${item.description} ${item.content} ${item.tags.join(" ")}`.toLowerCase()

        // Check for exact phrase match
        if (searchableText.includes(normalizedQuery)) {
          return true
        }

        // Check for individual word matches
        const queryWords = normalizedQuery.split(" ").filter((word) => word.length > 2)
        return queryWords.some((word) => searchableText.includes(word))
      })

      // Sort by relevance
      searchResults = searchResults.sort((a, b) => {
        const aText = `${a.title} ${a.description}`.toLowerCase()
        const bText = `${b.title} ${b.description}`.toLowerCase()

        // Exact title match gets highest priority
        const aExactTitle = a.title.toLowerCase().includes(normalizedQuery)
        const bExactTitle = b.title.toLowerCase().includes(normalizedQuery)

        if (aExactTitle && !bExactTitle) return -1
        if (!aExactTitle && bExactTitle) return 1

        // Then by priority score
        return b.priority - a.priority
      })

      setResults(searchResults)
      setIsSearching(false)
    }, 300)
  }

  // Filter and sort results
  useEffect(() => {
    let filtered = results

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Apply sorting
    if (sortBy === "date") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.lastModified || "").getTime() - new Date(a.lastModified || "").getTime(),
      )
    } else if (sortBy === "title") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
    }

    setFilteredResults(filtered)
  }, [results, selectedCategory, sortBy])

  // Search on query change
  useEffect(() => {
    performSearch(query)
  }, [query])

  // Update query from URL params
  useEffect(() => {
    const urlQuery = searchParams?.get("q")
    if (urlQuery && urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [searchParams, query])

  const categories = [
    { id: "all", label: "All Results", count: results.length },
    { id: "page", label: "Pages", count: results.filter((r) => r.category === "page").length },
    { id: "blog", label: "Blog Posts", count: results.filter((r) => r.category === "blog").length },
    { id: "feature", label: "Features", count: results.filter((r) => r.category === "feature").length },
    { id: "help", label: "Help Articles", count: results.filter((r) => r.category === "help").length },
    { id: "team", label: "Team", count: results.filter((r) => r.category === "team").length },
  ]

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 focus:border-purple-500"
          />
        </div>
      </div>

      {query && (
        <>
          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
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
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">
                    <div className="flex items-center gap-2">
                      <SortAsc className="w-4 h-4" />
                      Relevance
                    </div>
                  </SelectItem>
                  <SelectItem value="date">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Date
                    </div>
                  </SelectItem>
                  <SelectItem value="title">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Title
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          {isSearching ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded mb-4 w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredResults.length > 0 ? (
            <>
              <div className="text-sm text-gray-600 mb-4">
                Found {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} for "{query}"
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((result) => {
                  const IconComponent = categoryIcons[result.category as keyof typeof categoryIcons] || Settings
                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      className="bg-white p-6 rounded-lg border hover:border-purple-200 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1 line-clamp-2">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-3 mb-3">{result.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                          {result.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find anything matching "{query}". Try adjusting your search terms or browse our popular
                content below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {searchData.slice(0, 6).map((item) => {
                  const IconComponent = categoryIcons[item.category as keyof typeof categoryIcons] || Settings
                  return (
                    <Link
                      key={item.id}
                      href={item.url}
                      className="bg-white p-4 rounded-lg border hover:border-purple-200 hover:shadow-md transition-all group text-left"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        <h4 className="font-medium text-gray-900 group-hover:text-purple-600 truncate">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}

      {!query && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h3>
          <p className="text-gray-600 mb-6">Enter a search term above to find pages, blog posts, features, and more.</p>
        </div>
      )}
    </div>
  )
}
