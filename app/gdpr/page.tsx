"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  UserCheck,
  FileText,
  Trash2,
  Lock,
  Download,
  XCircle,
  RefreshCw,
  Globe,
  Smartphone,
  Server,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function GDPRPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const quickLinks = [
    { id: "rights", label: "Your Rights" },
    { id: "processing", label: "Data Processing" },
    { id: "measures", label: "Protection Measures" },
    { id: "compliance", label: "App Compliance" },
  ];

  const rights = [
    {
      id: "access",
      icon: FileText,
      title: "Right to Access",
      description: "Access your mobile app data and development history",
      details: [
        "Download your generated app code",
        "View AI model interaction history",
        "Access deployment logs",
        "Review app analytics data",
      ],
    },
    {
      id: "rectification",
      icon: RefreshCw,
      title: "Right to Rectification",
      description: "Update or correct your app-related information",
      details: [
        "Modify app configurations",
        "Update development preferences",
        "Correct personal information",
        "Adjust AI training data",
      ],
    },
    {
      id: "erasure",
      icon: Trash2,
      title: "Right to Erasure",
      description: "Request deletion of your app data and personal information",
      details: [
        "Delete generated apps",
        "Remove development history",
        "Clear AI training data",
        "Erase account information",
      ],
    },
    {
      id: "restrict",
      icon: Lock,
      title: "Right to Restrict Processing",
      description: "Limit how we process your app development data",
      details: [
        "Pause AI learning from your data",
        "Limit data collection",
        "Control analytics sharing",
        "Manage processing preferences",
      ],
    },
    {
      id: "portability",
      icon: Download,
      title: "Right to Data Portability",
      description: "Transfer your app data to other platforms",
      details: [
        "Export app source code",
        "Download app assets",
        "Transfer configuration files",
        "Export development settings",
      ],
    },
    {
      id: "object",
      icon: XCircle,
      title: "Right to Object",
      description: "Object to certain types of data processing",
      details: [
        "Opt-out of AI training",
        "Disable analytics collection",
        "Control marketing communications",
        "Manage data sharing",
      ],
    },
  ];

  const protectionMeasures = [
    {
      category: "App Development",
      icon: Smartphone,
      measures: [
        "End-to-end encryption for app code",
        "Secure build processes",
        "Protected development environments",
        "Automated security scanning",
      ],
    },
    {
      category: "Data Storage",
      icon: Server,
      measures: [
        "EU-based data centers",
        "Encrypted cloud storage",
        "Regular security audits",
        "Automated backups",
      ],
    },
    {
      category: "Access Control",
      icon: Lock,
      measures: [
        "Multi-factor authentication",
        "Role-based access control",
        "Session management",
        "Activity logging",
      ],
    },
    {
      category: "International Transfer",
      icon: Globe,
      measures: [
        "Standard contractual clauses",
        "Privacy Shield compliance",
        "Data transfer impact assessments",
        "Regional data residency options",
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 max-w-7xl mx-auto px-4 py-16'>
        {/* Header */}
        <div className='bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl p-8 mb-12 text-center'>
          <Badge className='mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium'>
            <Shield className='w-4 h-4 mr-2' />
            GDPR Compliance
          </Badge>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Data Protection & Privacy
          </h1>
          <p className='text-gray-600 mb-6 text-lg'>
            Ensuring your rights and protecting your data in mobile app
            development
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
              At BuildAIWeb.com, we take GDPR compliance seriously in our
              AI-powered mobile app development platform. We ensure transparency
              in how we collect, process, and protect your data throughout the
              entire app development lifecycle. Learn about your rights and how
              we safeguard your information.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div id='rights' className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Your Rights Under GDPR
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {rights.map((right) => (
              <div
                key={right.id}
                className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
              >
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3'>
                    <right.icon className='w-5 h-5 text-purple-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>
                    {right.title}
                  </h3>
                </div>
                <p className='text-gray-600 mb-4'>{right.description}</p>
                <ul className='space-y-2'>
                  {right.details.map((detail, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-1'>
                        <svg
                          className='w-2.5 h-2.5 text-green-600'
                          fill='none'
                          strokeWidth='3'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <span className='text-sm text-gray-600'>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Measures Section */}
        <div id='measures' className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Data Protection Measures
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {protectionMeasures.map((category, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
              >
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3'>
                    <category.icon className='w-5 h-5 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>
                    {category.category}
                  </h3>
                </div>
                <ul className='space-y-2'>
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className='flex items-start'>
                      <div className='w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-1'>
                        <svg
                          className='w-2.5 h-2.5 text-blue-600'
                          fill='none'
                          strokeWidth='3'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <span className='text-sm text-gray-600'>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 text-center'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
            Questions About GDPR Compliance?
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Our Data Protection Officer is here to help you understand your
            rights and how we protect your data in our mobile app development
            platform.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
                <AlertCircle className='w-4 h-4 mr-2' />
                Contact
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
