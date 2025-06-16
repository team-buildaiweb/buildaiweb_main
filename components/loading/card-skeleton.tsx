import { Skeleton } from "@/components/ui/skeleton"

interface CardSkeletonProps {
  showImage?: boolean
  showBadge?: boolean
  lines?: number
  className?: string
}

export function CardSkeleton({ showImage = true, showBadge = false, lines = 3, className = "" }: CardSkeletonProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      {/* Header with optional image and badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {showImage && <Skeleton className="h-10 w-10 rounded-lg" />}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            {showBadge && <Skeleton className="h-4 w-16" />}
          </div>
        </div>
        <Skeleton className="h-6 w-6 rounded" />
      </div>

      {/* Content lines */}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  )
}
