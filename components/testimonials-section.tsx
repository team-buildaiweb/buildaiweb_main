"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Suresh Bandara",
    role: "Freelance Designer",
    company: "Design Studio",
    plan: "Pro",
    content:
      "The Pro plan has transformed my workflow. I can now deliver mobile apps to clients in hours instead of weeks. The unlimited builds and premium templates are worth every penny.",
    rating: 5,
    avatar: "/images/Suresh.svg",
    savings: "Saves 20+ hours per project",
  },
  {
    name: "Nirosha Senanayake",
    role: "Agency Owner",
    company: "Digital Solutions Co",
    plan: "Business",
    content:
      "The Business plan's team collaboration and white-label features are perfect for our agency. We've increased our project capacity by 300% while maintaining quality.",
    rating: 5,
    avatar: "/images/Nirosha.svg",
    savings: "3x more projects delivered",
  },
  {
    name: "Harshini Abeywickrama",
    role: "Startup Founder",
    company: "TechFlow",
    plan: "Pro",
    content:
      "Started with the free plan to test the waters, upgraded to Pro within a week. The AI quality and export options are incredible for the price point.",
    rating: 5,
    avatar: "/images/Harshini.svg",
    savings: "Reduced development costs by 80%",
  },
];

export function TestimonialsSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Loved by app creators
            <span className='block text-purple-600'>worldwide</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Join thousands of entrepreneurs, designers, and developers who are
            building mobile apps faster with AI-powered development.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <CardContent className='p-8'>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
                <p className='text-gray-700 mb-6 leading-relaxed'>
                  "{testimonial.content}"
                </p>
                <div className='flex items-center'>
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <div className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-gray-600'>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
