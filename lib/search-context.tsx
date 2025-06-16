"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { searchData, type SearchItem } from "./search-data"

interface SearchContextType {
  isSearchOpen: boolean
  searchQuery: string
  searchResults: SearchItem[]
  recentSearches: string[]
  isSearching: boolean
  selectedCategory: string
  openSearch: () => void
  closeSearch: () => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
  addRecentSearch: (query: string) => void
  clearRecentSearches: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchItem[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("buildaiweb-recent-searches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Save recent searches to localStorage
  useEffect(() => {
    localStorage.setItem("buildaiweb-recent-searches", JSON.stringify(recentSearches))
  }, [recentSearches])

  // Search function with debouncing
  const performSearch = useCallback((query: string, category: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate API delay for better UX
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim()

      let results = searchData.filter((item) => {
        // Category filter
        if (category !== "all" && item.category !== category) {
          return false
        }

        // Text matching
        const searchableText = `${item.title} ${item.description} ${item.content} ${item.tags.join(" ")}`.toLowerCase()

        // Check for exact phrase match (higher priority)
        if (searchableText.includes(normalizedQuery)) {
          return true
        }

        // Check for individual word matches
        const queryWords = normalizedQuery.split(" ").filter((word) => word.length > 2)
        return queryWords.some((word) => searchableText.includes(word))
      })

      // Sort by relevance
      results = results.sort((a, b) => {
        const aText = `${a.title} ${a.description}`.toLowerCase()
        const bText = `${b.title} ${b.description}`.toLowerCase()

        // Exact title match gets highest priority
        const aExactTitle = a.title.toLowerCase().includes(normalizedQuery)
        const bExactTitle = b.title.toLowerCase().includes(normalizedQuery)

        if (aExactTitle && !bExactTitle) return -1
        if (!aExactTitle && bExactTitle) return 1

        // Then by priority score
        if (a.priority !== b.priority) {
          return b.priority - a.priority
        }

        // Then by how early the match appears
        const aIndex = aText.indexOf(normalizedQuery)
        const bIndex = bText.indexOf(normalizedQuery)

        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex
        }

        return 0
      })

      setSearchResults(results.slice(0, 20)) // Limit to 20 results
      setIsSearching(false)
    }, 200)
  }, [])

  // Update search results when query or category changes
  useEffect(() => {
    performSearch(searchQuery, selectedCategory)
  }, [searchQuery, selectedCategory, performSearch])

  const openSearch = useCallback(() => {
    setIsSearchOpen(true)
  }, [])

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
    setSelectedCategory("all")
  }, [])

  const addRecentSearch = useCallback((query: string) => {
    if (!query.trim()) return

    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== query)
      return [query, ...filtered].slice(0, 10) // Keep only 10 recent searches
    })
  }, [])

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([])
  }, [])

  const value: SearchContextType = {
    isSearchOpen,
    searchQuery,
    searchResults,
    recentSearches,
    isSearching,
    selectedCategory,
    openSearch,
    closeSearch,
    setSearchQuery,
    setSelectedCategory,
    addRecentSearch,
    clearRecentSearches,
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
