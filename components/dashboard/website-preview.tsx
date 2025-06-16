"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Tablet, ExternalLink, Clock } from "lucide-react"
import { useState } from "react"
import { LoadingSpinner } from "@/components/loading/loading-spinner"
import { PulseLoader } from "@/components/loading/pulse-loader"

interface WebsitePreviewProps {
  website: any
  isGenerating: boolean
}

export function WebsitePreview({ website, isGenerating }: WebsitePreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")

  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center max-w-md">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto relative overflow-hidden">
              <LoadingSpinner size="lg" />
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border-2 border-blue-200 animate-ping animation-delay-200"></div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Generating your website...</h3>
          <p className="text-gray-600 mb-6">Our AI is crafting something amazing for you</p>

          {/* Progress Steps */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center space-x-3 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Analyzing your requirements</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Selecting optimal layout</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-yellow-600">
              <PulseLoader size="sm" color="yellow" />
              <span>Creating responsive design</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-400">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Optimizing for performance</span>
            </div>
          </div>

          {/* Estimated time */}
          <div className="mt-6 p-3 bg-white rounded-lg border border-purple-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Estimated time: 10-15 seconds</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!website) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to build your website</h3>
          <p className="text-gray-600">
            Describe your website in the chat and I'll generate a complete, responsive design for you.
          </p>
        </div>
      </div>
    )
  }

  const getPreviewWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm"
      case "tablet":
        return "max-w-2xl"
      default:
        return "max-w-full"
    }
  }

  return (
    <div className="h-full flex flex-col bg-gray-100">
      {/* Preview Controls */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{website.name}</h3>
            <span className="text-sm text-gray-500">• Live Preview</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Mode Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("desktop")}
                className={`p-2 rounded ${viewMode === "desktop" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("tablet")}
                className={`p-2 rounded ${viewMode === "tablet" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`p-2 rounded ${viewMode === "mobile" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto p-6">
        <div className={`mx-auto transition-all duration-300 ${getPreviewWidth()}`}>
          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-white" dangerouslySetInnerHTML={{ __html: website.html }} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Info */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{website.description}</span>
          <span>Generated in 2.3s</span>
        </div>
      </div>
    </div>
  )
}
