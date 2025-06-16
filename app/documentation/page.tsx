"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function DocumentationPage() {
  const docSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Everything you need to begin your journey with BuildAIWeb",
      items: [
        { title: "Quick Start Guide", link: "#", time: "5 min read" },
        { title: "Installation & Setup", link: "#", time: "10 min read" },
        { title: "Basic Concepts", link: "#", time: "15 min read" },
        { title: "First Project", link: "#", time: "20 min read" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Complete documentation of our API endpoints and features",
      items: [
        { title: "Authentication", link: "#", time: "8 min read" },
        { title: "REST API Overview", link: "#", time: "12 min read" },
        { title: "WebSocket API", link: "#", time: "10 min read" },
        { title: "Rate Limits", link: "#", time: "5 min read" },
      ],
    },
    {
      id: "tutorials",
      title: "Tutorials & Guides",
      description: "Learn through practical examples and step-by-step guides",
      items: [
        {
          title: "Building Your First AI Web App",
          link: "#",
          time: "30 min read",
        },
        { title: "Advanced AI Features", link: "#", time: "25 min read" },
        { title: "Integration Examples", link: "#", time: "20 min read" },
        { title: "Best Practices", link: "#", time: "15 min read" },
      ],
    },
    {
      id: "faq",
      title: "FAQ & Troubleshooting",
      description: "Common questions and solutions to frequent challenges",
      items: [
        { title: "Common Issues", link: "#", time: "10 min read" },
        { title: "Performance Tips", link: "#", time: "8 min read" },
        { title: "Security Guidelines", link: "#", time: "12 min read" },
        { title: "Deployment Guide", link: "#", time: "15 min read" },
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-6xl mx-auto px-4'>
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8'>
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            Documentation
          </h1>
          <p className='text-gray-600 text-lg max-w-3xl'>
            Explore our comprehensive guides, API references, and tutorials to
            help you build amazing AI-powered websites with BuildAIWeb.com
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {docSections.map((section) => (
            <div
              key={section.id}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200'
            >
              <h2 className='text-2xl font-bold mb-3 text-gray-800'>
                {section.title}
              </h2>
              <p className='text-gray-600 mb-6'>{section.description}</p>
              <div className='space-y-4'>
                {section.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                  >
                    <span className='text-gray-700 group-hover:text-blue-600'>
                      {item.title}
                    </span>
                    <span className='text-sm text-gray-400 group-hover:text-blue-500'>
                      {item.time}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 bg-blue-50 rounded-lg p-6 text-center'>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            Need Help?
          </h2>
          <p className='text-gray-600 mb-4'>
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <a
            href='mailto:support@buildaiweb.com'
            className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Contact Support
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
