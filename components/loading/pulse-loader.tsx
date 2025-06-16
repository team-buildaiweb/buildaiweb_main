import { cn } from "@/lib/utils"

interface PulseLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "purple" | "blue" | "green" | "gray"
}

export function PulseLoader({ className, size = "md", color = "purple" }: PulseLoaderProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const colorClasses = {
    purple: "bg-purple-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
    gray: "bg-gray-600",
  }

  return (
    <div className={cn("flex space-x-1", className)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={cn("rounded-full animate-pulse", sizeClasses[size], colorClasses[color])}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  )
}
