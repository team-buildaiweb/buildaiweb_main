"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { docSections } from "@/lib/docs-data";

// Enable static generation
export const dynamic = "force-static";

export default function DocumentationPage() {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <Navigation />
      <main className='flex-1 max-w-7xl mx-auto px-4 py-16'>
        {/* Header */}
        <div className='bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl p-8 mb-12 text-center'>
          <Badge className='mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium'>
            <Book className='w-4 h-4 mr-2' />
            Documentation
          </Badge>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Mobile App Development Guides
          </h1>
          <p className='text-gray-600 mb-8 text-lg max-w-3xl mx-auto'>
            Learn how to build amazing mobile apps with our AI-powered platform.
            From quick starts to advanced features, we've got you covered.
          </p>
          <div className='max-w-2xl mx-auto'>
            <div className='relative'>
              <Search className='absolute left-4 top-3.5 h-5 w-5 text-gray-400' />
              <input
                type='text'
                placeholder='Search documentation...'
                className='w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
          {[
            {
              title: "Quick Start",
              description: "Build your first app in 5 minutes",
              link: "/documentation/quick-start",
            },
            {
              title: "API Reference",
              description: "Detailed API documentation",
              link: "/documentation/api-reference",
            },
            {
              title: "Examples",
              description: "Real-world app examples",
              link: "/documentation/examples",
            },
          ].map((item) => (
            <Link href={item.link} key={item.title}>
              <div className='p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white cursor-pointer'>
                <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className='grid md:grid-cols-2 gap-8'>
          {docSections.map((section) => (
            <div
              key={section.id}
              className='bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200'
            >
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4'>
                  <section.icon className='w-6 h-6 text-purple-600' />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800'>
                    {section.title}
                  </h2>
                  <p className='text-gray-600'>{section.description}</p>
                </div>
              </div>
              <div className='space-y-4'>
                {section.items.map((item) => (
                  <Link key={item.slug} href={`/documentation/${item.slug}`}>
                    <div className='flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100'>
                      <div className='flex items-center space-x-3'>
                        <item.icon className='w-5 h-5 text-gray-400 group-hover:text-purple-600' />
                        <div>
                          <h3 className='font-medium text-gray-900 group-hover:text-purple-600'>
                            {item.title}
                          </h3>
                          <p className='text-sm text-gray-500'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <span className='text-sm text-gray-400'>
                          {item.time}
                        </span>
                        <ArrowRight className='w-4 h-4 text-gray-400 group-hover:text-purple-600' />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className='mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 text-center'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
            Need More Help?
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Can't find what you're looking for? Our support team is here to help
            you build amazing mobile apps with AI.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
              Contact Support
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-purple-600 text-purple-600 hover:bg-purple-50'
            >
              Join Community
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
