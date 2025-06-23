"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

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

export function PricingTestimonials() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            See how businesses of all sizes are saving time and money with
            BuildAIWeb.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='shadow-lg border-0 hover:shadow-xl transition-shadow'
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

                <div className='mb-6'>
                  <Quote className='w-8 h-8 text-purple-200 mb-4' />
                  <p className='text-gray-700 leading-relaxed'>
                    "{testimonial.content}"
                  </p>
                </div>

                <div className='flex items-center mb-4'>
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

                <div className='flex items-center justify-between'>
                  <Badge className='bg-purple-100 text-purple-800'>
                    {testimonial.plan} Plan
                  </Badge>
                  <div className='text-sm text-green-600 font-medium'>
                    {testimonial.savings}
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
