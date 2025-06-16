"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Smartphone, FileText, Download, Globe, History } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "AI App Architecture Generator",
    description: "Intelligent algorithms create optimal app structures and navigation flows based on your description",
  },
  {
    icon: Smartphone,
    title: "Native iOS & Android Development",
    description: "Cross-platform apps that feel native on both iOS and Android with platform-specific optimizations",
  },
  {
    icon: FileText,
    title: "AI Content & Copy Writer",
    description: "Generate compelling app content, user flows, and App Store descriptions optimized for downloads",
  },
  {
    icon: Download,
    title: "Export to React Native / Flutter",
    description: "Download clean, production-ready code in React Native, Flutter, or native iOS/Android",
  },
  {
    icon: Globe,
    title: "One-click App Store Deployment",
    description: "Deploy your app directly to Apple App Store and Google Play Store with automated submissions",
  },
  {
    icon: History,
    title: "Prompt History and Iterations",
    description: "Iterate and refine your app designs with version control and A/B testing capabilities",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to build
            <span className="block text-purple-600">amazing mobile apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform handles every aspect of mobile app development, from UI design to app store
            deployment, so you can focus on your ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
