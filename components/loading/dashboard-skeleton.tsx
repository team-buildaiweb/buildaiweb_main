import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar Skeleton */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-8">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-6 w-24" />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-3 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex">
          {/* Chat/Input Panel */}
          <div className="w-1/2 border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>

            <div className="flex-1 p-6 space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`flex max-w-[80%] ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <Skeleton className="h-8 w-8 rounded-full flex-shrink-0 mx-3" />
                    <div className="space-y-2">
                      <Skeleton className="h-16 w-48 rounded-lg" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-2">
                <Skeleton className="flex-1 h-12 rounded-lg" />
                <Skeleton className="h-12 w-12 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-1/2 flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <div className="flex space-x-2">
                  <Skeleton className="h-8 w-8 rounded" />
                  <Skeleton className="h-8 w-8 rounded" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
            </div>

            <div className="flex-1 p-6">
              <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
