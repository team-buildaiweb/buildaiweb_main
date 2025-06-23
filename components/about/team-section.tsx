"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github } from "lucide-react";
import { SiX } from "react-icons/si";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    x?: string;
    github?: string;
  };
}

export function TeamSection() {
  const leadership: TeamMember[] = [
    {
      name: "Nimali Jayawardena",
      role: "CEO & Co-Founder",
      bio: "Former Google AI researcher with 10+ years in machine learning. Passionate about making AI accessible to everyone.",
      image: "/images/Nimali.svg",
      skills: ["AI Strategy", "Product Vision", "Team Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/nimalijayawardena",
        x: "https://x.com/nimalijayawardena",
      },
    },
    {
      name: "Sahan Perera",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect who's built scalable systems at Meta and Stripe. Believes in the power of AI to transform development.",
      image: "/images/Sahan.svg",
      skills: ["System Architecture", "AI Engineering", "Web Technologies"],
      social: {
        linkedin: "https://linkedin.com/in/sahanperera",
        github: "https://github.com/sahanperera",
      },
    },
    {
      name: "Dr. Anushka Fernando",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from Stanford. Leading our research into next-generation AI models for mobile app development.",
      image: "/images/Anushka.svg",
      skills: ["Machine Learning", "NLP", "Research"],
      social: {
        linkedin: "https://linkedin.com/in/anushkafernando",
        x: "https://x.com/anushkafernando",
      },
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Kasun Silva",
      role: "AI Engineer",
      bio: "Expert in deploying AI solutions at scale, with a focus on performance and efficiency.",
      image: "/images/Kasun.svg",
      skills: ["TensorFlow", "Model Optimization", "Cloud AI"],
      social: {
        linkedin: "https://linkedin.com/in/kasunsilva",
        github: "https://github.com/kasunsilva",
      },
    },
    {
      name: "Nadeesha Ranasinghe",
      role: "Data Scientist",
      bio: "Passionate about extracting insights from data and turning them into actionable strategies.",
      image: "/images/Nadeesha.svg",
      skills: ["Data Analysis", "Statistical Modeling", "Python"],
      social: {
        linkedin: "https://linkedin.com/in/nadeesharanasinghe",
        x: "https://x.com/nadeesharanasinghe",
      },
    },
    {
      name: "Tharindu Jayasuriya",
      role: "Machine Learning Engineer",
      bio: "Specializes in building and deploying machine learning models for real-world applications.",
      image: "/images/Tharindu.svg",
      skills: ["Scikit-learn", "Model Deployment", "API Development"],
      social: {
        linkedin: "https://linkedin.com/in/tharindujayasuriya",
        github: "https://github.com/tharindujayasuriya",
      },
    },
    {
      name: "Ishara Wijesinghe",
      role: "Frontend Developer",
      bio: "Loves creating interactive and dynamic web applications that provide great user experiences.",
      image: "/images/Ishara.svg",
      skills: ["React", "JavaScript", "CSS"],
      social: {
        linkedin: "https://linkedin.com/in/isharawijesinghe",
        x: "https://x.com/isharawijesinghe",
      },
    },
    {
      name: "Janith Gunasekara",
      role: "Backend Developer",
      bio: "Focused on building robust and scalable server-side applications and APIs.",
      image: "/images/Janith.svg",
      skills: ["Node.js", "Express", "Database Management"],
      social: {
        linkedin: "https://linkedin.com/in/janithgunasekara",
        github: "https://github.com/janithgunasekara",
      },
    },
    {
      name: "Dilani Samarasinghe",
      role: "UI/UX Designer",
      bio: "Aims to create intuitive and user-friendly interfaces that enhance user satisfaction.",
      image: "/images/Dilani.svg",
      skills: ["Figma", "Sketch", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/dilanisamarasinghe",
        x: "https://x.com/dilanisamarasinghe",
      },
    },
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <Card className='group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden'>
      <CardContent className='p-0'>
        <div className='aspect-square overflow-hidden'>
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className='w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300'
          />
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-semibold text-gray-900 mb-1'>
            {member.name}
          </h3>
          <p className='text-purple-600 font-medium mb-3'>{member.role}</p>
          <p className='text-gray-600 text-sm leading-relaxed mb-4'>
            {member.bio}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {member.skills.map((skill, index) => (
              <Badge key={index} variant='secondary' className='text-xs'>
                {skill}
              </Badge>
            ))}
          </div>

          <div className='flex space-x-3'>
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-600 transition-colors'
              >
                <Linkedin className='h-4 w-4' />
              </a>
            )}
            {member.social.x && (
              <a
                href={member.social.x}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-400 transition-colors'
              >
                <SiX className='h-4 w-4' />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-gray-900 transition-colors'
              >
                <Github className='h-4 w-4' />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Meet Our Team
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            The brilliant minds behind BuildAIWeb, working together to
            democratize mobile app development
          </p>
        </div>

        {/* Leadership Team */}
        <div className='mb-20'>
          <h3 className='text-2xl font-bold text-gray-900 text-center mb-12'>
            Leadership Team
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {leadership.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h3 className='text-2xl font-bold text-gray-900 text-center mb-12'>
            Core Team
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className='mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl font-bold text-purple-600 mb-2'>50+</div>
              <div className='text-gray-600'>Team Members</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-gray-600'>Countries</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-green-600 mb-2'>24/7</div>
              <div className='text-gray-600'>Global Support</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-orange-600 mb-2'>
                100%
              </div>
              <div className='text-gray-600'>Remote-First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
