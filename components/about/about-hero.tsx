"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown, Zap, Users, Globe, Heart } from "lucide-react"

export function AboutHero() {
  const scrollToStory = () => {
    document.getElementById("company-story")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-16 w-16 text-purple-600 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              BuildAIApp
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Democratizing Mobile App Development with AI
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We believe everyone should have the power to bring their mobile app ideas to life. Our mission is to make
            professional mobile app development accessible to everyone through the power of artificial intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-semibold">50+ Team Members</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Globe className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold">Global Impact</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Heart className="h-5 w-5 text-pink-600 mr-2" />
              <span className="font-semibold">AI-First Approach</span>
            </div>
          </div>

          <Button
            onClick={scrollToStory}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Our Story
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
