"use client"

import { Navigation } from "@/components/navigation"
import { FeaturesHeader } from "@/components/features/features-header"
import { InteractiveDemo } from "@/components/features/interactive-demo"
import { AICapabilities } from "@/components/features/ai-capabilities"
import { ComparisonSection } from "@/components/features/comparison-section"
import { TechnicalSpecs } from "@/components/features/technical-specs"
import { PerformanceMetrics } from "@/components/features/performance-metrics"
import { FeatureShowcase } from "@/components/features/feature-showcase"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <FeaturesHeader />
        <InteractiveDemo />
        <AICapabilities />
        <FeatureShowcase />
        <ComparisonSection />
        <TechnicalSpecs />
        <PerformanceMetrics />
      </div>
      <Footer />
    </div>
  )
}
