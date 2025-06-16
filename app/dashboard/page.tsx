"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { PromptInterface } from "@/components/dashboard/prompt-interface"
import { AppPreview } from "@/components/dashboard/app-preview"
import { CodePreview } from "@/components/dashboard/code-preview"
import { AIAssistant } from "@/components/dashboard/ai-assistant"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [currentApp, setCurrentApp] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [messages, setMessages] = useState<
    Array<{
      id: string
      role: "user" | "assistant"
      content: string
      timestamp: Date
    }>
  >([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi! I'm your AI mobile app developer. Describe the mobile app you'd like to build and I'll create it for you instantly. Try something like 'Create a fitness tracking app with workout plans and nutrition logging' or 'Build an e-commerce shopping app with payment integration'.",
      timestamp: new Date(),
    },
  ])

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Chat Interface */}
        <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
          <PromptInterface
            messages={messages}
            setMessages={setMessages}
            setCurrentApp={setCurrentApp}
            setIsGenerating={setIsGenerating}
            isGenerating={isGenerating}
          />
        </div>

        {/* Right Panel - Preview/Code */}
        <div className="flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 bg-white px-6 py-3">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "preview" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                App Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "code" ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "preview" ? (
              <AppPreview app={currentApp} isGenerating={isGenerating} />
            ) : (
              <CodePreview app={currentApp} isGenerating={isGenerating} />
            )}
          </div>
        </div>

        {/* AI Assistant Panel */}
        <AIAssistant currentApp={currentApp} isGenerating={isGenerating} />
      </div>
    </div>
  )
}
