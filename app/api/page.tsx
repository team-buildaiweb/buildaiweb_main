"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function APIPage() {
  const upcomingFeatures = [
    {
      id: "rest-api",
      title: "RESTful API",
      description:
        "Access all BuildAIWeb features programmatically through our comprehensive REST API",
      status: "In Development",
    },
    {
      id: "websocket",
      title: "WebSocket API",
      description:
        "Real-time updates and live collaboration features through WebSocket connections",
      status: "Planning",
    },
    {
      id: "sdks",
      title: "Official SDKs",
      description:
        "Native SDKs for popular programming languages including JavaScript, Python, and Java",
      status: "Planning",
    },
  ];

  const highlights = [
    "Authentication and Authorization",
    "Rate Limiting and Usage Quotas",
    "Comprehensive Documentation",
    "Interactive API Explorer",
    "Webhooks Integration",
    "Multiple API Versions Support",
  ];

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 pt-16 max-w-4xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-8'>
            <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
            <span className='font-medium'>Coming Soon</span>
          </div>

          <h1 className='text-4xl font-bold mb-4'>Public API</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            We're building a powerful API to help you integrate BuildAIWeb's
            features directly into your applications.
          </p>
        </div>

        <div className='mb-16'>
          <h2 className='text-2xl font-bold mb-8 text-center'>
            Upcoming Features
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {upcomingFeatures.map((feature) => (
              <div
                key={feature.id}
                className='bg-white rounded-lg shadow-sm border border-gray-100 p-6'
              >
                <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <span className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8'>
          <h2 className='text-2xl font-bold mb-8 text-center'>
            What to Expect
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className='flex items-center space-x-3 bg-white/50 rounded-lg p-4'
              >
                <svg
                  className='w-5 h-5 text-blue-500 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span className='text-gray-800'>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center bg-white rounded-lg shadow-sm border border-gray-100 p-8'>
          <h2 className='text-2xl font-bold mb-4'>Want Early Access?</h2>
          <p className='text-gray-600 mb-6'>
            Join our API beta testing program and help shape the future of
            BuildAIWeb's API.
          </p>
          <a
            href='#'
            className='inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Join Beta Program
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
