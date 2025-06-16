"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Smartphone, Zap, Shield, Globe, TrendingUp, Download } from "lucide-react"

interface AIAssistantProps {
  currentApp: any
  isGenerating: boolean
}

export function AIAssistant({ currentApp, isGenerating }: AIAssistantProps) {
  const [activeSection, setActiveSection] = useState<"features" | "performance" | "deployment">("features")

  const appFeatures = [
    {
      icon: <Smartphone className="w-4 h-4" />,
      title: "Cross-Platform",
      description: "Works on iOS and Android",
      status: "active",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Native Performance",
      description: "60fps smooth animations",
      status: "active",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Secure by Default",
      description: "End-to-end encryption",
      status: "active",
    },
    {
      icon: <Globe className="w-4 h-4" />,
      title: "Offline Support",
      description: "Works without internet",
      status: "suggested",
    },
  ]

  const performanceMetrics = [
    { label: "App Load Time", value: "1.2s", status: "excellent" },
    { label: "Memory Usage", value: "45MB", status: "good" },
    { label: "Battery Impact", value: "Low", status: "excellent" },
    { label: "Bundle Size", value: "12MB", status: "good" },
  ]

  const deploymentSteps = [
    { step: "Code Generation", status: "completed" },
    { step: "Testing & QA", status: "completed" },
    { step: "App Store Review", status: "pending" },
    { step: "Production Deploy", status: "pending" },
  ]

  const suggestions = [
    "Add push notifications for user engagement",
    "Implement biometric authentication",
    "Add dark mode support",
    "Integrate analytics tracking",
    "Add offline data synchronization",
  ]

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 flex items-center">
          <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
          AI Assistant
        </h3>
        <p className="text-sm text-gray-600 mt-1">Mobile app insights & suggestions</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!currentApp && !isGenerating ? (
          <div className="p-4 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">No app selected</h4>
            <p className="text-sm text-gray-600">Generate a mobile app to see AI insights and suggestions.</p>
          </div>
        ) : (
          <div className="p-4 space-y-6">
            {/* App Overview */}
            {currentApp && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center justify-between">
                    <span>{currentApp.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {currentApp.type}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-3">{currentApp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {currentApp.platforms?.map((platform: string) => (
                      <Badge key={platform} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Section Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveSection("features")}
                className={`flex-1 text-xs py-2 px-3 rounded ${
                  activeSection === "features" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveSection("performance")}
                className={`flex-1 text-xs py-2 px-3 rounded ${
                  activeSection === "performance" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveSection("deployment")}
                className={`flex-1 text-xs py-2 px-3 rounded ${
                  activeSection === "deployment" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                Deploy
              </button>
            </div>

            {/* Features Section */}
            {activeSection === "features" && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900">App Features</h4>
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{feature.title}</p>
                        <Badge variant={feature.status === "active" ? "default" : "secondary"} className="text-xs">
                          {feature.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Performance Section */}
            {activeSection === "performance" && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900">Performance Metrics</h4>
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{metric.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{metric.value}</span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          metric.status === "excellent"
                            ? "bg-green-500"
                            : metric.status === "good"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Optimization Tips</span>
                  </div>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Enable code splitting for faster load times</li>
                    <li>• Optimize images for mobile devices</li>
                    <li>• Use lazy loading for better performance</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Deployment Section */}
            {activeSection === "deployment" && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900">Deployment Status</h4>
                {deploymentSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        step.status === "completed"
                          ? "bg-green-500"
                          : step.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-gray-300"
                      }`}
                    />
                    <span className="text-sm text-gray-700">{step.step}</span>
                    <Badge variant="outline" className="text-xs ml-auto">
                      {step.status}
                    </Badge>
                  </div>
                ))}

                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Deploy to App Stores
                </Button>
              </div>
            )}

            {/* AI Suggestions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {suggestions.slice(0, 3).map((suggestion, index) => (
                    <div key={index} className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                      {suggestion}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View All Suggestions
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
