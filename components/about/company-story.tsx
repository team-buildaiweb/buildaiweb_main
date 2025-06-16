"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, Users } from "lucide-react";

export function CompanyStory() {
  const storyPoints = [
    {
      icon: Lightbulb,
      title: "The Spark",
      description:
        "It started with a simple observation: building mobile apps shouldn't require years of coding experience. Our founders, frustrated by the complexity of mobile app development, envisioned a world where anyone could create professional mobile apps with just their ideas.",
    },
    {
      icon: Code,
      title: "The Innovation",
      description:
        "We pioneered the use of advanced AI models specifically trained for mobile app development. Our breakthrough came when we realized AI could not only generate code but understand design principles, user experience, and business requirements.",
    },
    {
      icon: Users,
      title: "The Community",
      description:
        "What started as a tool for ourselves quickly became a platform for thousands of creators, entrepreneurs, and businesses. Our community drives our innovation, constantly pushing us to make AI mobile app development more powerful and accessible.",
    },
    {
      icon: Rocket,
      title: "The Future",
      description:
        "Today, we're not just building mobile apps – we're building the future of digital creation. Our AI continues to evolve, learning from every interaction to make mobile app development faster, smarter, and more intuitive than ever before.",
    },
  ];

  return (
    <section id='company-story' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Story</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            From a simple idea to revolutionizing how the world builds mobile
            apps
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {storyPoints.map((point, index) => (
            <Card
              key={index}
              className='group hover:shadow-xl transition-all duration-300 border-0 shadow-lg'
            >
              <CardContent className='p-8'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <point.icon className='h-6 w-6 text-white' />
                    </div>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      {point.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
