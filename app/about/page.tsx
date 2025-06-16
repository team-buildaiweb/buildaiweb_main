import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { MissionValues } from "@/components/about/mission-values"
import { TeamSection } from "@/components/about/team-section"
import { CompanyTimeline } from "@/components/about/company-timeline"
import { CompanyStats } from "@/components/about/company-stats"
import { CultureSection } from "@/components/about/culture-section"
import { JoinUsSection } from "@/components/about/join-us-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionValues />
        <CompanyStats />
        <TeamSection />
        <CompanyTimeline />
        <CultureSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  )
}
