"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, User, Bot, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/loading/loading-spinner"
import { PulseLoader } from "@/components/loading/pulse-loader"

const sampleApps = {
  fitness: {
    id: "fitness-1",
    name: "FitTracker Pro",
    type: "Fitness & Health",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics",
    features: ["Workout Tracking", "Nutrition Logging", "Progress Analytics", "Social Sharing", "Wearable Integration"],
    platforms: ["iOS", "Android"],
    preview: "Modern fitness app with dark theme, workout timers, and progress charts",
  },
  ecommerce: {
    id: "ecommerce-1",
    name: "ShopEasy",
    type: "E-commerce",
    description: "Full-featured shopping app with product catalog, cart, payments, and order tracking",
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Tracking", "User Reviews"],
    platforms: ["iOS", "Android"],
    preview: "Clean e-commerce app with product grids, search functionality, and checkout flow",
  },
  social: {
    id: "social-1",
    name: "ConnectHub",
    type: "Social Media",
    description: "Social networking app with posts, messaging, stories, and community features",
    features: ["News Feed", "Direct Messaging", "Stories", "Live Chat", "Community Groups"],
    platforms: ["iOS", "Android"],
    preview: "Modern social media app with feed, stories, and messaging interface",
  },
  productivity: {
    id: "productivity-1",
    name: "TaskMaster",
    type: "Productivity",
    description: "Task management app with projects, deadlines, team collaboration, and time tracking",
    features: [
      "Task Management",
      "Project Organization",
      "Team Collaboration",
      "Time Tracking",
      "Calendar Integration",
    ],
    platforms: ["iOS", "Android"],
    preview: "Clean productivity app with task lists, calendar view, and team features",
  },
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface PromptInterfaceProps {
  messages: Message[]
  setMessages: (messages: Message[]) => void
  setCurrentApp: (app: any) => void
  setIsGenerating: (generating: boolean) => void
  isGenerating: boolean
}

export function PromptInterface({
  messages,
  setMessages,
  setCurrentApp,
  setIsGenerating,
  isGenerating,
}: PromptInterfaceProps) {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isGenerating) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsGenerating(true)

    // Simulate AI processing
    setTimeout(() => {
      let selectedApp
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("fitness") || lowerInput.includes("health") || lowerInput.includes("workout")) {
        selectedApp = sampleApps.fitness
      } else if (lowerInput.includes("shop") || lowerInput.includes("ecommerce") || lowerInput.includes("store")) {
        selectedApp = sampleApps.ecommerce
      } else if (lowerInput.includes("social") || lowerInput.includes("chat") || lowerInput.includes("messaging")) {
        selectedApp = sampleApps.social
      } else if (lowerInput.includes("task") || lowerInput.includes("productivity") || lowerInput.includes("todo")) {
        selectedApp = sampleApps.productivity
      } else {
        selectedApp = sampleApps.fitness // Default
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Perfect! I've created ${selectedApp.name}, a ${selectedApp.type} app for you. The app includes ${selectedApp.features.join(", ")}. It's optimized for both ${selectedApp.platforms.join(" and ")} platforms. You can see the mobile preview on the right and switch to the Code tab to view the generated React Native/Flutter code. Would you like me to make any adjustments to the app?`,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setCurrentApp(selectedApp)
      setIsGenerating(false)
    }, 3000)
  }

  const quickPrompts = [
    "Create a fitness tracking app with workout plans",
    "Build an e-commerce shopping app with payments",
    "Design a social media app with messaging",
    "Make a productivity app with task management",
    "Create a food delivery app with GPS tracking",
    "Build a meditation app with guided sessions",
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
          AI Mobile App Builder
        </h2>
        <p className="text-sm text-gray-600 mt-1">Describe your mobile app and I'll build it instantly</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-purple-600 ml-3" : "bg-gray-200 mr-3"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <Card className={message.role === "user" ? "bg-purple-600 text-white" : "bg-white"}>
                <CardContent className="p-3">
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.role === "user" ? "text-purple-200" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}

        {isGenerating && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <PulseLoader size="sm" color="purple" />
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600 font-medium">AI is generating your mobile app...</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Analyzing app requirements</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Creating app architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Designing mobile UI/UX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span>Generating native code...</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-gray-100 rounded-lg h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg animate-pulse"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length <= 1 && (
        <div className="px-6 pb-4">
          <p className="text-xs text-gray-500 mb-2">Try these mobile app ideas:</p>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInput(prompt)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <div className="p-6 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the mobile app you want to build... (e.g., 'Create a fitness app with workout tracking and nutrition logging')"
            className="flex-1 min-h-[60px] resize-none"
            disabled={isGenerating}
          />
          <Button type="submit" disabled={!input.trim() || isGenerating} className="bg-purple-600 hover:bg-purple-700">
            {isGenerating ? (
              <div className="flex items-center">
                <LoadingSpinner size="sm" className="mr-2" />
                <span>Building...</span>
              </div>
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
