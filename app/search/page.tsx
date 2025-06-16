"use client"

import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SearchProvider } from "@/lib/search-context"
import { SearchModal } from "@/components/search/search-modal"
import { SearchResults } from "@/components/search/search-results"

export default function SearchPage() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <SearchModal />

        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Search BuildAIWeb</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find everything you need to know about AI-powered web development
              </p>
            </div>

            <Suspense fallback={<SearchPageSkeleton />}>
              <SearchResults />
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </SearchProvider>
  )
}

function SearchPageSkeleton() {
  return (
    <div className="space-y-8">
      {/* Search Bar Skeleton */}
      <div className="max-w-2xl mx-auto">
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-4" />
        <div className="flex gap-2 justify-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
      </div>

      {/* Results Skeleton */}
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
    </div>
  )
}
