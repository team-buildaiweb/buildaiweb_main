"use client"

import { Navigation } from "@/components/navigation"
import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingComparison } from "@/components/pricing/pricing-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingTestimonials } from "@/components/pricing/pricing-testimonials"
import { PricingCTA } from "@/components/pricing/pricing-cta"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <PricingHeader />
        <PricingPlans />
        <PricingComparison />
        <PricingTestimonials />
        <PricingFAQ />
        <PricingCTA />
      </div>
      <Footer />
    </div>
  )
}
