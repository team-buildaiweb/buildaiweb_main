"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Palette, Smartphone, Zap } from "lucide-react"

const showcaseFeatures = [
  {
    id: "speed",
    icon: "Zap",
    title: "Lightning Fast Generation",
    traditional: {
      title: "Traditional Development",
      time: "2-4 weeks",
      process: [
        "Requirements gathering",
        "Wireframing",
        "Design mockups",
        "Frontend coding",
        "Testing & debugging",
        "Deployment setup",
      ],
      cost: "$5,000 - $15,000",
    },
    ai: {
      title: "AI-Powered BuildAIWeb",
      time: "2-5 minutes",
      process: ["Describe your website", "AI generates layout", "Preview & customize", "Export or deploy"],
      cost: "$0 - $20/month",
    },
  },
  {
    id: "responsive",
    icon: "Smartphone",
    title: "Automatic Responsive Design",
    traditional: {
      title: "Manual Responsive Coding",
      time: "1-2 weeks",
      process: [
        "Desktop design first",
        "Mobile breakpoint planning",
        "CSS media queries",
        "Cross-device testing",
        "Bug fixes",
        "Performance optimization",
      ],
      cost: "30-40% of project time",
    },
    ai: {
      title: "AI Responsive Intelligence",
      time: "Automatic",
      process: ["AI analyzes content", "Generates breakpoints", "Optimizes for all devices", "Built-in accessibility"],
      cost: "Included automatically",
    },
  },
  {
    id: "design",
    icon: "Palette",
    title: "Professional Design System",
    traditional: {
      title: "Manual Design Process",
      time: "1-3 weeks",
      process: [
        "Brand research",
        "Color palette creation",
        "Typography selection",
        "Component design",
        "Style guide creation",
        "Design reviews",
      ],
      cost: "$2,000 - $8,000",
    },
    ai: {
      title: "AI Design Intelligence",
      time: "Instant",
      process: ["Industry analysis", "Brand-appropriate colors", "Professional typography", "Consistent styling"],
      cost: "Built-in feature",
    },
  },
]

const iconMap = {
  Zap,
  Smartphone,
  Palette,
}

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)

  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference AI Makes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare traditional web development with our AI-powered approach. The results speak for themselves.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {showcaseFeatures.map((feature, index) => {
            const IconComponent = getIcon(feature.icon)
            return (
              <Button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                variant={activeFeature === index ? "default" : "outline"}
                className={`${
                  activeFeature === index
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {feature.title}
              </Button>
            )
          })}
        </div>

        {/* Active Feature Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Traditional Way */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {showcaseFeatures[activeFeature].traditional.title}
                  </h3>
                  <Badge variant="outline" className="mt-1">
                    Time: {showcaseFeatures[activeFeature].traditional.time}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {showcaseFeatures[activeFeature].traditional.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="text-red-800 font-semibold mb-2">Total Investment:</div>
                <div className="text-red-900 text-lg font-bold">{showcaseFeatures[activeFeature].traditional.cost}</div>
              </div>
            </CardContent>
          </Card>

          {/* AI Way */}
          <Card className="shadow-lg border-2 border-purple-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  {(() => {
                    const IconComponent = getIcon(showcaseFeatures[activeFeature].icon)
                    return <IconComponent className="w-6 h-6 text-purple-600" />
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{showcaseFeatures[activeFeature].ai.title}</h3>
                  <Badge className="mt-1 bg-green-100 text-green-800">
                    Time: {showcaseFeatures[activeFeature].ai.time}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {showcaseFeatures[activeFeature].ai.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-green-800 font-semibold mb-2">Total Investment:</div>
                <div className="text-green-900 text-lg font-bold">{showcaseFeatures[activeFeature].ai.cost}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <ArrowRight className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the AI Advantage?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who have already transformed their web development process with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Building for Free
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}