import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WorkflowSection } from "@/components/workflow-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <WorkflowSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
