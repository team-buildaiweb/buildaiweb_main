"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Zap } from "lucide-react"

interface Stat {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

export function CompanyStats() {
  const [isVisible, setIsVisible] = useState(false)

  const stats: Stat[] = [
    {
      icon: Users,
      value: 100000,
      suffix: "+",
      label: "Active Users",
      description: "Creators building amazing websites",
      color: "text-purple-600",
    },
    {
      icon: Globe,
      value: 500000,
      suffix: "+",
      label: "Websites Created",
      description: "AI-generated sites and counting",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: "Uptime",
      description: "Reliable AI-powered platform",
      color: "text-green-600",
    },
    {
      icon: Zap,
      value: 30,
      suffix: "s",
      label: "Average Build Time",
      description: "From prompt to website",
      color: "text-orange-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("company-stats")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, value])

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section id="company-stats" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that showcase the growing community of creators using BuildAIWeb
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Growing Every Day</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our community continues to grow as more creators discover the power of AI-driven web development. Join
              thousands of entrepreneurs, designers, and businesses who are building their digital presence with
              BuildAIWeb.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
