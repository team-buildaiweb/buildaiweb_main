"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Shield, Users, Zap } from "lucide-react"

export function PricingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl font-bold mb-4">Ready to Build Your First AI Website?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI to create stunning websites in minutes. Start free, no
              credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">30-Day</div>
                <div className="text-purple-200 text-sm">Money Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">10,000+</div>
                <div className="text-purple-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">2.3s</div>
                <div className="text-purple-200 text-sm">Average Build Time</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <div className="text-purple-200 text-sm">Uptime Guarantee</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white border-white/30">No Credit Card Required</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Cancel Anytime</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Full Data Export</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
