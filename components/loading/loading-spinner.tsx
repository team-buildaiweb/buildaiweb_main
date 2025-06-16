import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  text?: string
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div
        className={cn("animate-spin rounded-full border-2 border-gray-300 border-t-purple-600", sizeClasses[size])}
      />
      {text && <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>}
    </div>
  )
}
