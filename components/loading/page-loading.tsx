"use client"

import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"
import { Zap } from "lucide-react"

interface PageLoadingProps {
  isLoading: boolean
  message?: string
}

export function PageLoading({ isLoading, message = "Loading..." }: PageLoadingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 15
        })
      }, 200)

      return () => clearInterval(interval)
    } else {
      setProgress(100)
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-ping"></div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">{message}</h3>
        <LoadingSpinner size="md" className="mb-4" />

        {/* Progress bar */}
        <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{Math.round(progress)}% complete</p>
      </div>
    </div>
  )
}
