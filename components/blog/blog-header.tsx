"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";

export function BlogHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className='bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
          <BookOpen className='w-4 h-4 mr-2' />
          Knowledge Base
        </div>

        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
          Learn AI-Powered
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
            Mobile app development
          </span>
        </h1>

        <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
          Discover insights, tutorials, and best practices for building mobile
          apps with artificial intelligence. Stay ahead of the curve with expert
          knowledge and real-world case studies.
        </p>

        {/* Search Bar */}
        <div className='max-w-2xl mx-auto mb-8'>
          <div className='relative'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <Input
              type='text'
              placeholder='Search articles, tutorials, and guides...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-12 pr-4 py-6 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500'
            />
            <Button
              className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700'
              size='sm'
            >
              Search
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600'>
          <div className='flex items-center'>
            <Sparkles className='w-4 h-4 mr-2 text-purple-600' />
            <span>50+ AI Development Articles</span>
          </div>
          <div className='flex items-center'>
            <div className='w-4 h-4 mr-2 bg-green-500 rounded-full'></div>
            <span>Updated Weekly</span>
          </div>
          <div className='flex items-center'>
            <div className='w-4 h-4 mr-2 bg-blue-500 rounded-full'></div>
            <span>Expert Contributors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
