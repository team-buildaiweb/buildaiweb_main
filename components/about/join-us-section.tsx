"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export function JoinUsSection() {
  const openings: JobOpening[] = [
    {
      title: "Senior Mobile AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead the integration of advanced AI models into next-gen mobile apps. Collaborate with cross-functional teams to deliver intelligent, user-centric mobile experiences.",
      requirements: [
        "5+ years mobile development (iOS/Android)",
        "Experience with TensorFlow Lite/Core ML",
        "AI/ML model deployment on mobile",
        "Kotlin/Swift expertise",
      ],
    },
    {
      title: "Mobile Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Design intuitive, beautiful mobile interfaces that leverage AI to delight users. Shape the look and feel of our flagship AI-powered mobile apps.",
      requirements: [
        "4+ years mobile UI/UX design",
        "Figma/Sketch proficiency",
        "Portfolio of mobile apps",
        "User research & prototyping",
      ],
    },
    {
      title: "React Native Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build performant cross-platform mobile apps using React Native. Work closely with AI engineers to bring intelligent features to life on mobile.",
      requirements: [
        "3+ years React Native",
        "TypeScript/JavaScript",
        "Mobile performance optimization",
        "Experience with native modules",
      ],
    },
    {
      title: "Mobile DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description:
        "Automate and scale our mobile CI/CD pipelines. Ensure seamless delivery and monitoring of AI-powered mobile applications.",
      requirements: [
        "CI/CD for mobile (Fastlane, Bitrise, etc.)",
        "App Store/Play Store deployment",
        "Mobile analytics & monitoring",
        "Cloud services (Firebase, AWS, Azure)",
      ],
    },
  ];

  return (
    <section className='py-24 bg-gradient-to-br from-purple-900 to-blue-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>
            Join Our Mobile AI Revolution
          </h2>
          <p className='text-xl text-purple-100 max-w-3xl mx-auto'>
            Help us redefine mobile experiences by building intelligent,
            AI-powered applications for millions of users worldwide.
          </p>
        </div>

        {/* Why Join Us */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Users className='h-8 w-8 text-purple-300' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>
              Impact on Mobile Users
            </h3>
            <p className='text-purple-100'>
              Your work will shape how millions interact with AI-driven mobile
              apps every day.
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4'>
              <ArrowRight className='h-8 w-8 text-blue-300' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>
              AI at Your Fingertips
            </h3>
            <p className='text-purple-100'>
              Work with the latest in mobile AI, from on-device ML to real-time
              personalization.
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Clock className='h-8 w-8 text-green-300' />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Grow With Us</h3>
            <p className='text-purple-100'>
              Accelerate your career in a fast-growing company at the
              intersection of AI and mobile.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-center mb-12'>
            Open Positions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {openings.map((job, index) => (
              <Card
                key={index}
                className='bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300'
              >
                <CardContent className='p-6'>
                  <div className='flex justify-between items-start mb-4'>
                    <div>
                      <h4 className='text-xl font-semibold text-white mb-1'>
                        {job.title}
                      </h4>
                      <p className='text-purple-200'>{job.department}</p>
                    </div>
                    <div className='text-right'>
                      <Badge className='bg-white/20 text-white border-white/30 mb-1'>
                        {job.type}
                      </Badge>
                      <div className='flex items-center text-sm text-purple-200'>
                        <MapPin className='h-3 w-3 mr-1' />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <p className='text-purple-100 mb-4 leading-relaxed'>
                    {job.description}
                  </p>

                  <div className='mb-4'>
                    <h5 className='text-sm font-semibold text-white mb-2'>
                      Key Requirements:
                    </h5>
                    <div className='flex flex-wrap gap-2'>
                      {job.requirements.map((req, reqIndex) => (
                        <Badge
                          key={reqIndex}
                          variant='outline'
                          className='border-purple-300 text-purple-200 text-xs'
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className='w-full bg-white text-purple-900 hover:bg-purple-50'
                    onClick={() =>
                      window.open(
                        "mailto:careers@buildaiweb.com?subject=Application for " +
                          job.title,
                        "_blank"
                      )
                    }
                  >
                    Apply Now
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12'>
          <h3 className='text-2xl font-bold mb-4'>Don't See Your Role?</h3>
          <p className='text-purple-100 mb-6 max-w-2xl mx-auto'>
            We're always looking for exceptional talent in mobile AI. Send us
            your resume and tell us how you'd like to help shape the future of
            intelligent mobile apps.
          </p>
          <Button
            size='lg'
            className='bg-white text-purple-900 hover:bg-purple-50'
            onClick={() =>
              window.open(
                "mailto:careers@buildaiweb.com?subject=General Application",
                "_blank"
              )
            }
          >
            Get in Touch
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  );
}
