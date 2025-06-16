"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Users } from "lucide-react"

interface JobOpening {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

export function JoinUsSection() {
  const openings: JobOpening[] = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Help us build the next generation of AI models for web development. Work with cutting-edge ML technologies.",
      requirements: ["5+ years ML experience", "Python/PyTorch", "LLM experience", "Web technologies"],
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design beautiful, intuitive interfaces that make AI web development accessible to everyone.",
      requirements: ["4+ years product design", "Figma expert", "Design systems", "User research"],
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build responsive, performant web applications using React, TypeScript, and modern web technologies.",
      requirements: ["3+ years React", "TypeScript", "Modern CSS", "Performance optimization"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description:
        "Scale our AI infrastructure to serve millions of users. Work with Kubernetes, AWS, and ML pipelines.",
      requirements: ["AWS/GCP experience", "Kubernetes", "CI/CD", "ML infrastructure"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Help us democratize web development and shape the future of AI-powered creativity
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Impact at Scale</h3>
            <p className="text-purple-100">Your work will directly impact millions of creators worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
            <p className="text-purple-100">Work with the latest AI technologies and web development tools</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Growth Opportunity</h3>
            <p className="text-purple-100">Rapid career growth in a fast-scaling AI company</p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                      <p className="text-purple-200">{job.department}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-white/20 text-white border-white/30 mb-1">{job.type}</Badge>
                      <div className="flex items-center text-sm text-purple-200">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-purple-100 mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Requirements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="border-purple-300 text-purple-200 text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-white text-purple-900 hover:bg-purple-50"
                    onClick={() =>
                      window.open("mailto:careers@buildaiweb.com?subject=Application for " + job.title, "_blank")
                    }
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to
            our mission.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-50"
            onClick={() => window.open("mailto:careers@buildaiweb.com?subject=General Application", "_blank")}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
