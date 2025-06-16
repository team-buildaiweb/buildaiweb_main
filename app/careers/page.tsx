"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { JoinUsSection } from "@/components/about/join-us-section";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Zap, Heart, Puzzle } from "lucide-react";

export default function CareersPage() {
  const perks = [
    {
      icon: <MapPin className='w-6 h-6' />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our distributed team",
    },
    {
      icon: <Clock className='w-6 h-6' />,
      title: "Flexible Hours",
      description: "Balance your work and life with flexible scheduling",
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Inclusive Environment",
      description: "Join a diverse team that values every perspective",
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: "Latest Technology",
      description: "Work with cutting-edge AI and development tools",
    },
    {
      icon: <Heart className='w-6 h-6' />,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision, 401(k), and more",
    },
    {
      icon: <Puzzle className='w-6 h-6' />,
      title: "Growth Opportunities",
      description: "Regular learning and development programs",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We push boundaries and embrace new technologies to solve complex problems.",
    },
    {
      title: "User-Centric",
      description:
        "Everything we build starts with understanding our users' needs.",
    },
    {
      title: "Collaboration",
      description: "Great ideas come from diverse teams working together.",
    },
    {
      title: "Continuous Learning",
      description: "We're always learning, growing, and sharing knowledge.",
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1'>
        {/* Hero Section */}{" "}
        <div className='pt-16 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <div className='inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-8'>
              <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
              <span className='font-medium'>We're Hiring!</span>
            </div>
            <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
              Build the Future of AI-Powered Web Development
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Join our innovative team and help shape how developers around the
              world harness the power of AI to build amazing web applications.
            </p>
            <Button
              size='lg'
              className='bg-blue-600 text-white hover:bg-blue-700'
              onClick={() => {
                const element = document.getElementById("open-positions");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Open Positions
            </Button>
          </div>
        </div>
        {/* Company Values */}
        <section className='py-16 bg-white'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-12'>Our Values</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {values.map((value, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
                >
                  <h3 className='text-xl font-semibold mb-3'>{value.title}</h3>
                  <p className='text-gray-600'>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Perks and Benefits */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Perks & Benefits
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
                >
                  <div className='text-blue-600 mb-4'>{perk.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>{perk.title}</h3>
                  <p className='text-gray-600'>{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* Job Openings Section */}
        <div id='open-positions'>
          <JoinUsSection />
        </div>{" "}
        {/* CTA Section */}
        <section className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Don't See Your Perfect Role?
            </h2>
            <p className='text-gray-600 mb-8'>
              We're always looking for talented individuals who are passionate
              about AI and web development. If you don't see a role that matches
              your skills, send us an open application.
            </p>
            <div className='flex items-center justify-center space-x-4'>
              <Button
                size='lg'
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50'
              >
                Send Open Application
              </Button>
              <Button
                size='lg'
                variant='ghost'
                className='text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Recruiting Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
