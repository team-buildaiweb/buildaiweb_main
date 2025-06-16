"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Zap, TrendingUp } from "lucide-react";

export function PricingHeader() {
  return (
    <section className='bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <Badge className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
          <DollarSign className='w-4 h-4 mr-2' />
          Simple, Transparent Pricing
        </Badge>

        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
          Choose Your
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
            AI Building Plan
          </span>
        </h1>

        <p className='text-xl text-gray-600 mb-12 max-w-3xl mx-auto'>
          Start free and scale as you grow. No hidden fees, no surprises. Cancel
          anytime with full data export.
        </p>

        {/* Pricing Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
              <Users className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>10,000+</h3>
            <p className='text-gray-600'>Active Users</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
              <Zap className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>50,000+</h3>
            <p className='text-gray-600'>Mobile apps Built</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4'>
              <TrendingUp className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>98.5%</h3>
            <p className='text-gray-600'>Satisfaction Rate</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            size='lg'
            className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg'
          >
            Start Free Trial
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
          >
            View All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
