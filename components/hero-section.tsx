"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Mobile App Development Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Build AI-Generated
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Mobile Apps with Just
            </span>
            <span className="block">One Prompt</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            The fastest way to go from idea to live mobile app — powered entirely by AI. Create stunning, native iOS and
            Android apps in minutes, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Link href="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Try the Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Start for Free
            </Button>
          </div>

          {/* AI Bot Animation Placeholder */}
          <div className="relative max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-800 font-medium">AI Building App...</span>
                </div>
              </div>

              {/* Simulated Mobile App Components Being Assembled */}
              <div className="space-y-4">
                <div className="flex justify-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 rounded animate-pulse"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded animate-pulse animation-delay-200"></div>
                  <div className="w-4 h-4 bg-pink-400 rounded animate-pulse animation-delay-400"></div>
                </div>

                {/* Mobile App Screen Mockup */}
                <div className="mx-auto w-48 h-80 bg-gray-900 rounded-3xl p-2">
                  <div className="w-full h-full bg-white rounded-2xl p-4">
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-gray-200 rounded animate-pulse animation-delay-100"></div>
                        <div className="h-16 bg-gray-200 rounded animate-pulse animation-delay-200"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse animation-delay-300"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-gray-500 text-sm">Generating native mobile app...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
