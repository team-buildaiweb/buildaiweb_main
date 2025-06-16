"use client";

import { MessageSquare, Zap, Users, Clock } from "lucide-react";

export function ContactHeader() {
  return (
    <section className='bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
          <MessageSquare className='w-4 h-4 mr-2' />
          Get in Touch
        </div>

        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
          Let's Build Something
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
            Amazing Together
          </span>
        </h1>

        <p className='text-xl text-gray-600 mb-12 max-w-3xl mx-auto'>
          Have a mobile app idea? Questions about our AI platform? Want to
          explore partnership opportunities? We're here to help you bring your
          vision to life.
        </p>

        {/* Contact Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4'>
              <Zap className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              &lt; 2 Hours
            </h3>
            <p className='text-gray-600'>Average Response Time</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
              <Users className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>10,000+</h3>
            <p className='text-gray-600'>Happy Customers</p>
          </div>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
              <Clock className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>24/7</h3>
            <p className='text-gray-600'>AI Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
