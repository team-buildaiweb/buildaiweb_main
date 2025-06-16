"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export function TeamSection() {
  const leadership: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google AI researcher with 10+ years in machine learning. Passionate about making AI accessible to everyone.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AI Strategy", "Product Vision", "Team Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect who's built scalable systems at Meta and Stripe. Believes in the power of AI to transform development.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["System Architecture", "AI Engineering", "Web Technologies"],
      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        github: "https://github.com/marcusrodriguez",
      },
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from Stanford. Leading our research into next-generation AI models for web development.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Machine Learning", "NLP", "Research"],
      social: {
        linkedin: "https://linkedin.com/in/aishapatel",
        twitter: "https://twitter.com/aishapatel",
      },
    },
  ]

  const team: TeamMember[] = [
    {
      name: "David Kim",
      role: "Lead Frontend Engineer",
      bio: "React expert with a passion for creating beautiful, accessible user interfaces.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "TypeScript", "UI/UX"],
      social: {
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim",
      },
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      bio: "Award-winning designer who believes great design should be accessible to everyone.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Product Design", "Design Systems", "User Research"],
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      bio: "Infrastructure wizard ensuring our AI models run smoothly at scale.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AWS", "Kubernetes", "MLOps"],
      social: {
        github: "https://github.com/alexthompson",
        linkedin: "https://linkedin.com/in/alexthompson",
      },
    },
    {
      name: "Lisa Zhang",
      role: "Product Manager",
      bio: "User advocate who ensures every feature solves real problems for our community.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Product Strategy", "User Research", "Analytics"],
      social: {
        linkedin: "https://linkedin.com/in/lisazhang",
        twitter: "https://twitter.com/lisazhang",
      },
    },
    {
      name: "James Wilson",
      role: "AI Engineer",
      bio: "Specializes in training and fine-tuning models for web development tasks.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["PyTorch", "Model Training", "MLOps"],
      social: {
        github: "https://github.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      name: "Maria Gonzalez",
      role: "Customer Success Lead",
      bio: "Dedicated to helping our users succeed and grow their businesses with AI.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Customer Success", "Community Building", "Support"],
      social: {
        linkedin: "https://linkedin.com/in/mariagonzalez",
        twitter: "https://twitter.com/mariagonzalez",
      },
    },
  ]

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-purple-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind BuildAIWeb, working together to democratize web development
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Remote-First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
