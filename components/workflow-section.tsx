"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Cpu, Eye, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Describe your mobile app",
    description: "Tell our AI what kind of mobile app you want to build using natural language",
  },
  {
    icon: Cpu,
    title: "AI Generates App + UI/UX",
    description: "Our advanced AI creates a complete mobile app with screens, navigation, and functionality",
  },
  {
    icon: Eye,
    title: "Preview & Customize",
    description: "Review your generated app in our mobile simulator and make any adjustments you need",
  },
  {
    icon: Rocket,
    title: "Export / Deploy to App Stores",
    description: "Download your code or deploy directly to Apple App Store and Google Play Store",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From idea to mobile app in
            <span className="block text-purple-600">4 simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined workflow makes mobile app development accessible to everyone, regardless of technical
            expertise.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 text-white">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">STEP {index + 1}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Step Number Circle */}
                <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
