import { Skeleton } from "@/components/ui/skeleton"

interface PageSkeletonProps {
  showHeader?: boolean
  showSidebar?: boolean
  rows?: number
}

export function PageSkeleton({ showHeader = true, showSidebar = false, rows = 6 }: PageSkeletonProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      {showHeader && (
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`grid ${showSidebar ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"} gap-8`}>
          {/* Sidebar Skeleton */}
          {showSidebar && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Skeleton className="h-6 w-24 mb-4" />
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Skeleton className="h-6 w-20 mb-4" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Content Skeleton */}
          <div className={showSidebar ? "lg:col-span-3" : ""}>
            {/* Title */}
            <div className="mb-8">
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-4 w-96" />
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-3">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex space-x-2 pt-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
