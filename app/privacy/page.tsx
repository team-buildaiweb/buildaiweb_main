"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Smartphone,
  Globe,
  Lock,
  UserCheck,
  Eye,
  Share2,
  Server,
  Bell,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "app-data",
      icon: Smartphone,
      title: "Mobile App Data Collection",
      content:
        "We collect essential information to provide our mobile app development services, including:",
      points: [
        "App preferences and settings",
        "Development environment configurations",
        "Generated app analytics",
        "User interaction patterns with AI features",
      ],
    },
    {
      id: "usage",
      icon: Eye,
      title: "How We Use Your Information",
      content:
        "Your information helps us improve our AI-powered app development platform by:",
      points: [
        "Training our AI models to better understand app requirements",
        "Improving code generation accuracy",
        "Personalizing your development experience",
        "Enhancing platform features based on usage patterns",
      ],
    },
    {
      id: "data-processing",
      icon: Server,
      title: "Data Processing & Storage",
      content:
        "We maintain strict standards for processing and storing your data:",
      points: [
        "End-to-end encryption for all generated code",
        "Secure cloud storage with AWS and Azure",
        "Regular security audits and penetration testing",
        "Automatic data backup and disaster recovery",
      ],
    },
    {
      id: "sharing",
      icon: Share2,
      title: "Information Sharing",
      content: "We maintain strict control over your information:",
      points: [
        "No selling of personal data or generated code",
        "Limited sharing with essential service providers",
        "Anonymous analytics for platform improvement",
        "Developer community features are opt-in only",
      ],
    },
    {
      id: "security",
      icon: Lock,
      title: "App Security",
      content: "We implement industry-leading security measures:",
      points: [
        "SSL/TLS encryption for all data transfers",
        "Regular security patches and updates",
        "Multi-factor authentication options",
        "Compliance with mobile app security standards",
      ],
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "Your Rights & Controls",
      content: "You have complete control over your data:",
      points: [
        "Download or delete your generated apps",
        "Manage AI training preferences",
        "Control data sharing settings",
        "Request data export or deletion",
      ],
    },
    {
      id: "updates",
      icon: Bell,
      title: "Policy Updates",
      content: "We keep you informed about our privacy practices:",
      points: [
        "Email notifications for major changes",
        "30-day notice for material updates",
        "Change log maintained on our website",
        "Option to review previous versions",
      ],
    },
    {
      id: "retention",
      icon: Clock,
      title: "Data Retention",
      content: "We maintain clear data retention policies:",
      points: [
        "Generated apps stored for 90 days",
        "Account data retained while active",
        "Backup data kept for 30 days",
        "Analytics data anonymized after 12 months",
      ],
    },
  ];

  const quickLinks = [
    { id: "app-data", label: "App Data" },
    { id: "security", label: "Security" },
    { id: "rights", label: "Your Rights" },
    { id: "updates", label: "Updates" },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 max-w-7xl mx-auto px-4 py-16'>
        {/* Header */}
        <div className='bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl p-8 mb-12 text-center'>
          <Badge className='mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium'>
            <Shield className='w-4 h-4 mr-2' />
            Privacy & Security
          </Badge>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Privacy Policy
          </h1>
          <p className='text-gray-600 mb-6 text-lg'>
            Protecting your data while building amazing mobile apps
          </p>
          <p className='text-sm text-gray-500'>Last updated: June 16, 2025</p>
        </div>

        {/* Quick Navigation */}
        <div className='mb-12'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className='px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-sm text-gray-600 transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none mb-12'>
          <div className='bg-blue-50 rounded-xl p-6'>
            <p className='text-gray-700 leading-relaxed'>
              At BuildAIWeb.com, we understand the importance of privacy in
              mobile app development. Our AI-powered platform is built with
              security and data protection at its core. This Privacy Policy
              explains how we handle your information throughout the app
              development process, from initial generation to deployment.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className='bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200'
            >
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4'>
                  <section.icon className='w-6 h-6 text-purple-600' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-800'>
                  {section.title}
                </h2>
              </div>
              <p className='text-gray-600 leading-relaxed mb-4'>
                {section.content}
              </p>
              <ul className='space-y-3'>
                {section.points.map((point, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5'>
                      <svg
                        className='w-3 h-3 text-green-600'
                        fill='none'
                        strokeWidth='3'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <span className='text-gray-600'>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className='mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 text-center'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
            Questions About Our Privacy Policy?
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Our privacy team is here to help you understand how we protect your
            data throughout the mobile app development process.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
                <Globe className='w-4 h-4 mr-2' />
                Contact Privacy Team
              </Button>
            </Link>
            <a
              href='mailto:hello@buildaiweb.com'
              className='inline-flex items-center justify-center px-6 py-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors'
            >
              hello@buildaiweb.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
