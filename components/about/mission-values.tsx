"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Zap, Globe, Users, Shield } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      icon: Heart,
      title: "Human-Centered AI",
      description:
        "We believe AI should amplify human creativity, not replace it. Every feature we build puts the user's vision at the center.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We're constantly pushing the boundaries of what's possible with AI and web development, staying ahead of the curve.",
    },
    {
      icon: Globe,
      title: "Accessibility for All",
      description:
        "Great web development shouldn't be limited by technical knowledge, budget, or location. We're democratizing digital creation.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our users are our partners. We listen, learn, and build based on real needs and feedback from our community.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We handle your data and projects with the highest standards of security and privacy protection.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            To empower every person and organization to create beautiful, functional websites through the power of
            artificial intelligence, making professional web development accessible to everyone, regardless of technical
            background.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            A world where every great idea can become a beautiful website in minutes, not months. Where creativity is
            the only limit, and technology serves as the perfect creative partner.
          </p>
        </div>
      </div>
    </section>
  )
}
