"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, RotateCcw, Play, Pause } from "lucide-react"
import { LoadingSpinner } from "@/components/loading/loading-spinner"

interface AppPreviewProps {
  app: any
  isGenerating: boolean
}

export function AppPreview({ app, isGenerating }: AppPreviewProps) {
  const [selectedDevice, setSelectedDevice] = useState<"phone" | "tablet" | "desktop">("phone")
  const [isPlaying, setIsPlaying] = useState(false)

  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="w-32 h-64 bg-gray-800 rounded-3xl mx-auto mb-6 relative overflow-hidden">
            <div className="absolute inset-2 bg-gray-900 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating your mobile app...</h3>
          <p className="text-gray-600 mb-4">Creating native iOS and Android interfaces</p>
          <LoadingSpinner size="md" className="text-purple-600" />

          {/* Generation steps */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>App architecture created</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>UI components generated</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Optimizing for mobile devices...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!app) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-48 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Smartphone className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No app generated yet</h3>
          <p className="text-gray-600">Describe your mobile app idea and I'll create it for you instantly.</p>
        </div>
      </div>
    )
  }

  const getDeviceClass = () => {
    switch (selectedDevice) {
      case "phone":
        return "w-80 h-[640px]"
      case "tablet":
        return "w-96 h-[512px]"
      case "desktop":
        return "w-full h-[600px]"
      default:
        return "w-80 h-[640px]"
    }
  }

  const getDeviceFrame = () => {
    if (selectedDevice === "desktop") {
      return "rounded-lg border-8 border-gray-800"
    }
    return selectedDevice === "tablet" ? "rounded-3xl border-8 border-gray-800" : "rounded-3xl border-8 border-gray-800"
  }

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Preview Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="font-semibold text-gray-900">{app.name}</h3>
            <span className="text-sm text-gray-500">{app.type}</span>
            <div className="flex space-x-1">
              {app.platforms.map((platform: string) => (
                <span key={platform} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Device Selection */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedDevice("phone")}
                className={`p-2 rounded ${selectedDevice === "phone" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedDevice("tablet")}
                className={`p-2 rounded ${selectedDevice === "tablet" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedDevice("desktop")}
                className={`p-2 rounded ${selectedDevice === "desktop" ? "bg-white shadow-sm" : "hover:bg-gray-200"}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            <Button variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refresh
            </Button>

            <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? "Pause" : "Demo"}
            </Button>
          </div>
        </div>
      </div>

      {/* Device Preview */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className={`${getDeviceClass()} ${getDeviceFrame()} bg-black relative overflow-hidden shadow-2xl`}>
          {/* Device Screen */}
          <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
            {/* Status Bar */}
            {selectedDevice !== "desktop" && (
              <div className="h-6 bg-gray-900 flex items-center justify-between px-4 text-white text-xs">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            )}

            {/* App Content */}
            <div className="flex-1 bg-gradient-to-br from-purple-500 to-blue-600 p-6 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{app.name}</h2>
                <p className="text-purple-100 mb-6">{app.description}</p>

                {/* Feature List */}
                <div className="space-y-3">
                  {app.features.slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="bg-white/20 rounded-lg p-3 text-left">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg">Get Started</button>
                  <button className="w-full border border-white/30 text-white font-semibold py-3 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Device Details */}
          {selectedDevice === "phone" && (
            <>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
            </>
          )}
        </div>
      </div>

      {/* App Info */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Platform: {app.platforms.join(", ")}</span>
            <span>Features: {app.features.length}</span>
            <span>Type: {app.type}</span>
          </div>
          <span className="text-green-600">✓ Ready for Export</span>
        </div>
      </div>
    </div>
  )
}
