"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coffee, Lightbulb, Users, Globe, Zap } from "lucide-react"

export function CultureSection() {
  const cultureValues = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "We believe great work comes from happy, well-rested people. Flexible hours, unlimited PTO, and mental health support.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Lightbulb,
      title: "Innovation Time",
      description:
        "Every team member gets 20% time to work on passion projects and explore new ideas that could shape our future.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description:
        "We celebrate diversity and create an environment where everyone can bring their authentic selves to work.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description:
        "Built for the future of work. Our team spans the globe, connected by shared purpose and cutting-edge collaboration tools.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Coffee,
      title: "Learning Culture",
      description:
        "Continuous learning budget, conference attendance, and internal knowledge sharing sessions to keep growing.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description:
        "We ship quickly, learn from feedback, and iterate. Bias toward action while maintaining high quality standards.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const perks = [
    "Competitive salary + equity",
    "Comprehensive health insurance",
    "Unlimited PTO policy",
    "$2,000 learning budget",
    "Top-tier equipment",
    "Home office stipend",
    "Annual team retreats",
    "Mental health support",
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building not just great products, but a great place to work
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureValues.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Perks & Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Perks & Benefits</h3>
            <p className="text-xl text-gray-600">We invest in our team because they're our most valuable asset</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "At BuildAIWeb, we're not just building a product – we're building the future of how people create on the
            web. Our culture reflects that ambition: innovative, inclusive, and always pushing boundaries."
          </blockquote>
          <div className="mt-6">
            <cite className="text-lg font-semibold text-purple-600">Sarah Chen</cite>
            <p className="text-gray-500">CEO & Co-Founder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
