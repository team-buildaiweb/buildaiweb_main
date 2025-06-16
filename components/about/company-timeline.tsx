"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Rocket, Users, Award, Globe, Zap } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  type: "milestone" | "product" | "team" | "recognition";
  details?: string[];
}

export function CompanyTimeline() {
  const events: TimelineEvent[] = [
    {
      date: "January 2022",
      title: "The Beginning",
      description:
        "BuildAIWeb was founded with a vision to democratize mobile app development through AI.",
      icon: Rocket,
      type: "milestone",
      details: [
        "Founded by Sarah Chen and Marcus Rodriguez",
        "Initial seed funding secured",
        "First AI prototype developed",
      ],
    },
    {
      date: "June 2022",
      title: "Alpha Launch",
      description:
        "Released our first AI mobile app builder to a select group of beta testers.",
      icon: Zap,
      type: "product",
      details: [
        "100 beta users",
        "First AI-generated mobile apps",
        "Core algorithm development",
      ],
    },
    {
      date: "December 2022",
      title: "Series A Funding",
      description:
        "Raised $10M Series A to accelerate AI research and product development.",
      icon: Award,
      type: "milestone",
      details: [
        "$10M Series A round",
        "Team expansion to 25 members",
        "Advanced AI model training",
      ],
    },
    {
      date: "March 2023",
      title: "Public Beta",
      description:
        "Opened our platform to the public with enhanced AI capabilities.",
      icon: Users,
      type: "product",
      details: [
        "10,000+ users in first month",
        "Multi-language support",
        "Template library launch",
      ],
    },
    {
      date: "August 2023",
      title: "AI Breakthrough",
      description:
        "Achieved major breakthrough in AI understanding of design principles.",
      icon: Zap,
      type: "product",
      details: [
        "Advanced design AI",
        "Context-aware generation",
        "50% faster build times",
      ],
    },
    {
      date: "January 2024",
      title: "Global Expansion",
      description:
        "Expanded to serve users in 50+ countries with localized AI models.",
      icon: Globe,
      type: "milestone",
      details: [
        "50+ countries supported",
        "Localized AI models",
        "24/7 global support",
      ],
    },
    {
      date: "June 2024",
      title: "100K Users",
      description:
        "Reached 100,000 active users creating amazing mobile apps with AI.",
      icon: Users,
      type: "milestone",
      details: [
        "100,000+ active users",
        "500,000+ mobile apps created",
        "Enterprise partnerships",
      ],
    },
    {
      date: "Present",
      title: "The Future",
      description:
        "Continuing to push the boundaries of AI-powered mobile app development.",
      icon: Rocket,
      type: "milestone",
      details: [
        "Advanced AI features",
        "Mobile app development",
        "API platform launch",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "bg-purple-100 text-purple-800";
      case "product":
        return "bg-blue-100 text-blue-800";
      case "team":
        return "bg-green-100 text-green-800";
      case "recognition":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "text-purple-600";
      case "product":
        return "text-blue-600";
      case "team":
        return "text-green-600";
      case "recognition":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Journey</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            From a simple idea to revolutionizing mobile app development with AI
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block'></div>

          <div className='space-y-12'>
            {events.map((event, index) => (
              <div key={index} className='relative flex items-start space-x-8'>
                {/* Timeline dot */}
                <div className='hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-purple-500 flex-shrink-0'>
                  <event.icon
                    className={`h-6 w-6 ${getIconColor(event.type)}`}
                  />
                </div>

                {/* Content */}
                <Card className='flex-1 hover:shadow-xl transition-all duration-300 border-0 shadow-lg'>
                  <CardContent className='p-8'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                      <div className='flex items-center space-x-4 mb-4 md:mb-0'>
                        <div className='md:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg'>
                          <event.icon className='h-6 w-6 text-white' />
                        </div>
                        <div>
                          <h3 className='text-2xl font-bold text-gray-900'>
                            {event.title}
                          </h3>
                          <div className='flex items-center text-gray-500 mt-1'>
                            <Calendar className='h-4 w-4 mr-2' />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </Badge>
                    </div>

                    <p className='text-gray-600 text-lg leading-relaxed mb-4'>
                      {event.description}
                    </p>

                    {event.details && (
                      <ul className='space-y-2'>
                        {event.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className='flex items-center text-gray-600'
                          >
                            <div className='w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0'></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
