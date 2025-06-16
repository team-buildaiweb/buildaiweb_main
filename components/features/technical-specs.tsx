"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Lock, Zap, CheckCircle } from "lucide-react"

const technicalFeatures = [
  {
    category: "AI Technology",
    icon: Code,
    specs: [
      { label: "Natural Language Model", value: "GPT-4 Based" },
      { label: "Design Pattern Recognition", value: "100+ Templates" },
      { label: "Code Generation Engine", value: "Custom Neural Network" },
      { label: "Response Time", value: "< 3 seconds" },
      { label: "Accuracy Rate", value: "95.2%" },
    ],
  },
  {
    category: "Generated Code Quality",
    icon: CheckCircle,
    specs: [
      { label: "HTML Validation", value: "W3C Compliant" },
      { label: "CSS Framework", value: "Tailwind CSS" },
      { label: "JavaScript", value: "Vanilla JS (minimal)" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Performance Score", value: "95+ Lighthouse" },
    ],
  },
  {
    category: "Platform & Hosting",
    icon: Globe,
    specs: [
      { label: "Infrastructure", value: "AWS/Vercel" },
      { label: "CDN", value: "Global Edge Network" },
      { label: "SSL Certificate", value: "Auto-provisioned" },
      { label: "Uptime Guarantee", value: "99.9%" },
      { label: "Backup Frequency", value: "Real-time" },
    ],
  },
  {
    category: "Security & Privacy",
    icon: Lock,
    specs: [
      { label: "Data Encryption", value: "AES-256" },
      { label: "Privacy Compliance", value: "GDPR, CCPA" },
      { label: "Authentication", value: "OAuth 2.0" },
      { label: "Data Retention", value: "User-controlled" },
      { label: "Security Audits", value: "Quarterly" },
    ],
  },
]

const supportedFormats = [
  { name: "HTML5", description: "Clean, semantic markup" },
  { name: "CSS3", description: "Modern styling with Tailwind" },
  { name: "React JSX", description: "Component-based architecture" },
  { name: "Vue.js", description: "Progressive framework support" },
  { name: "Static Site", description: "JAMstack compatible" },
  { name: "WordPress", description: "Theme-ready exports" },
]

export function TechnicalSpecs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Database className="w-4 h-4 mr-2" />
            Technical Specifications
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built on Enterprise-Grade Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI models with robust infrastructure to deliver professional-quality
            websites at scale.
          </p>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  {feature.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feature.specs.map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700 font-medium">{spec.label}</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {spec.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Export Formats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Supported Export Formats</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Export your AI-generated websites in multiple formats to suit any hosting platform or development
              workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedFormats.map((format, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{format.name}</h4>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* API & Integration */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Developer API Coming Soon</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Integrate our AI website generation capabilities directly into your applications with our RESTful API.
              Perfect for agencies, SaaS platforms, and enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-purple-600 text-white px-6 py-2 text-sm">RESTful API</Badge>
              <Badge className="bg-blue-600 text-white px-6 py-2 text-sm">WebSocket Support</Badge>
              <Badge className="bg-green-600 text-white px-6 py-2 text-sm">Webhook Integration</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
