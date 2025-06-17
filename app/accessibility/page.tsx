"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Eye,
  Keyboard,
  Monitor,
  MousePointer2,
  Smartphone,
  Volume2,
  ChevronRight,
} from "lucide-react";

export default function AccessibilityPage() {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description:
        "High contrast ratios, readable fonts, and clear visual hierarchy for better readability.",
      guidelines: [
        "WCAG 2.1 AA compliant color contrast",
        "Scalable text up to 200%",
        "Clear focus indicators",
        "Alternative text for images",
      ],
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description:
        "Full keyboard accessibility ensuring all features can be accessed without a mouse.",
      guidelines: [
        "Logical tab order",
        "Visible focus states",
        "Skip navigation links",
        "Keyboard shortcuts",
      ],
    },
    {
      icon: Volume2, // Changed from VolumeTwo
      title: "Screen Readers",
      description:
        "Optimized for popular screen readers with proper ARIA labels and semantic HTML.",
      guidelines: [
        "ARIA landmarks and labels",
        "Semantic HTML structure",
        "Descriptive headings",
        "Form input labels",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Fully responsive layout that adapts to different devices and zoom levels.",
      guidelines: [
        "Mobile-friendly interface",
        "Flexible layout",
        "Touch-friendly targets",
        "Consistent navigation",
      ],
    },
  ];

  const standards = [
    "WCAG 2.1 Level AA compliance",
    "Section 508 compliance",
    "Regular accessibility audits",
    "Ongoing accessibility improvements",
    "User feedback integration",
    "Staff accessibility training",
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 py-16'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-purple-50 via-white to-purple-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent'>
              Accessibility Statement
            </h1>
            <p className='text-xl text-gray-600 text-center max-w-3xl mx-auto'>
              We are committed to ensuring our platform is accessible to
              everyone, regardless of ability or technology.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid md:grid-cols-2 gap-8'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow'
              >
                <feature.icon className='w-12 h-12 text-purple-600 mb-4 stroke-current' />
                <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <ul className='space-y-2'>
                  {feature.guidelines.map((guideline) => (
                    <li
                      key={guideline}
                      className='flex items-start gap-2 text-sm text-gray-600'
                    >
                      <ChevronRight className='w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 stroke-current' />
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Section */}
        <div className='bg-gradient-to-r from-purple-50 via-white to-purple-50 py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-center mb-12'>
              Our Accessibility Standards
            </h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {standards.map((standard) => (
                <div
                  key={standard}
                  className='bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-100 flex items-center gap-3'
                >
                  <Monitor className='w-5 h-5 text-purple-600 flex-shrink-0 stroke-current' />
                  <span className='text-gray-700'>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Need Assistance?</h2>
          <p className='text-gray-600 mb-6'>
            If you experience any accessibility issues or have suggestions for
            improvement, please contact our accessibility team.
          </p>
          <a
            href='mailto:accessibility@buildaiweb.com'
            className='inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
          >
            Contact Accessibility Team
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
