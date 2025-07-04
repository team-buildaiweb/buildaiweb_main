"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Brain, Rocket, Smartphone } from "lucide-react";
import Link from "next/link";

export function FeaturesHeader() {
  return (
    <section className='bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <Badge className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
          <Smartphone className='w-4 h-4 mr-2' />
          AI-Powered Mobile Apps
        </Badge>

        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
          Build Native Mobile Apps
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
            With AI in Minutes
          </span>
        </h1>

        <p className='text-xl text-gray-600 mb-12 max-w-3xl mx-auto'>
          Transform your app idea into reality with our AI-powered platform.
          Create native iOS and Android apps from simple descriptions, complete
          with stunning UI and powerful features.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
          <Link href='/dashboard'>
            <Button
              size='lg'
              className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg'
            >
              <Sparkles className='mr-2 h-5 w-5' />
              Create Your App
            </Button>
          </Link>
          <Button
            size='lg'
            variant='outline'
            className='px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
          >
            <Zap className='mr-2 h-5 w-5' />
            Watch Demo
          </Button>
        </div>

        {/* Feature Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4'>
              <Rocket className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>5 min</h3>
            <p className='text-gray-600'>Average App Creation Time</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
              <Brain className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>100%</h3>
            <p className='text-gray-600'>iOS & Android Support</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
              <Zap className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>100%</h3>
            <p className='text-gray-600'>Native Performance</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4'>
              <Sparkles className='w-8 h-8 text-orange-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>5k+</h3>
            <p className='text-gray-600'>Mobile apps Generated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
