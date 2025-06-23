"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Sparkles,
  CheckCircle,
  User,
  Mail,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { PulseLoader } from "@/components/loading/pulse-loader";

interface FormData {
  name: string;
  email: string;
  company: string;
  siteIdea: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    siteIdea: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const projectTypes = [
    "Landing Page",
    "E-commerce Store",
    "Portfolio Mobile app",
    "Business Mobile app",
    "Blog/Content Site",
    "SaaS Platform",
    "Other",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Not Sure",
  ];

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months",
    "Flexible",
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Generate AI suggestions based on site idea
    if (field === "siteIdea" && value.length > 10) {
      const suggestions = generateAISuggestions(value);
      setAiSuggestions(suggestions);
    }
  };

  const generateAISuggestions = (idea: string): string[] => {
    const lowerIdea = idea.toLowerCase();
    const suggestions: string[] = [];

    if (lowerIdea.includes("restaurant") || lowerIdea.includes("food")) {
      suggestions.push(
        "Add online ordering system",
        "Include menu showcase",
        "Integrate reservation booking"
      );
    } else if (
      lowerIdea.includes("portfolio") ||
      lowerIdea.includes("creative")
    ) {
      suggestions.push(
        "Add image gallery",
        "Include client testimonials",
        "Create contact form"
      );
    } else if (lowerIdea.includes("ecommerce") || lowerIdea.includes("store")) {
      suggestions.push(
        "Add shopping cart",
        "Include payment processing",
        "Create product catalog"
      );
    } else if (lowerIdea.includes("saas") || lowerIdea.includes("software")) {
      suggestions.push(
        "Add pricing tiers",
        "Include feature comparison",
        "Create user dashboard"
      );
    } else {
      suggestions.push(
        "Add contact form",
        "Include social media links",
        "Create responsive design"
      );
    }

    return suggestions.slice(0, 3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className='border-green-200 bg-green-50'>
        <CardContent className='p-8 text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6'>
            <CheckCircle className='w-8 h-8 text-green-600' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Message Sent Successfully!
          </h3>
          <p className='text-gray-600 mb-6'>
            Thank you for reaching out! Our AI has analyzed your request and our
            team will get back to you within 2 hours with a personalized
            response.
          </p>
          <div className='bg-white rounded-lg p-4 mb-6'>
            <h4 className='font-semibold text-gray-900 mb-2'>
              What happens next?
            </h4>
            <ul className='text-sm text-gray-600 space-y-1 text-left'>
              <li>• Our AI will analyze your project requirements</li>
              <li>• A specialist will review your site idea</li>
              <li>• You'll receive a personalized proposal</li>
              <li>• We'll schedule a demo call if needed</li>
            </ul>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                siteIdea: "",
                projectType: "",
                budget: "",
                timeline: "",
                message: "",
              });
            }}
            variant='outline'
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='shadow-xl border-0'>
      <CardHeader className='bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg'>
        <CardTitle className='flex items-center text-xl'>
          <Sparkles className='w-6 h-6 mr-2' />
          AI-Powered Contact Form
        </CardTitle>
        <p className='text-purple-100'>
          Our AI will analyze your request and help us provide the best possible
          response
        </p>
      </CardHeader>
      <CardContent className='p-8'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Personal Information */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <User className='w-4 h-4 inline mr-1' />
                Full Name *
              </label>
              <Input
                type='text'
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder='Enter your full name'
                className='border-2 focus:border-purple-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Mail className='w-4 h-4 inline mr-1' />
                Email Address *
              </label>
              <Input
                type='email'
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder='Enter your email'
                className='border-2 focus:border-purple-500'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Company/Organization
            </label>
            <Input
              type='text'
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder='Enter your company name (optional)'
              className='border-2 focus:border-purple-500'
            />
          </div>

          {/* Site Idea */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <Lightbulb className='w-4 h-4 inline mr-1' />
              Describe Your Mobile app Idea *
            </label>
            <Textarea
              required
              value={formData.siteIdea}
              onChange={(e) => handleInputChange("siteIdea", e.target.value)}
              placeholder="Tell us about your mobile app vision. What kind of site do you want to build? What's its purpose?"
              className='border-2 focus:border-purple-500 min-h-[100px]'
            />
            {aiSuggestions.length > 0 && (
              <div className='mt-3'>
                <p className='text-sm font-medium text-purple-700 mb-2'>
                  <Sparkles className='w-4 h-4 inline mr-1' />
                  AI Suggestions for your project:
                </p>
                <div className='flex flex-wrap gap-2'>
                  {aiSuggestions.map((suggestion, index) => (
                    <Badge
                      key={index}
                      variant='outline'
                      className='bg-purple-50 text-purple-700 border-purple-200'
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  handleInputChange("projectType", e.target.value)
                }
                className='w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none'
              >
                <option value=''>Select type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className='w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none'
              >
                <option value=''>Select budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                className='w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none'
              >
                <option value=''>Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <MessageSquare className='w-4 h-4 inline mr-1' />
              Additional Details
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Any additional information, specific requirements, or questions you'd like to share?"
              className='border-2 focus:border-purple-500 min-h-[80px]'
            />
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold'
          >
            {isSubmitting ? (
              <div className='flex items-center justify-center'>
                <PulseLoader size='sm' color='purple' className='mr-3' />
                <div className='text-left'>
                  <div>AI is Analyzing Your Request...</div>
                  <div className='text-sm opacity-75'>
                    Processing requirements
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Send className='w-5 h-5 mr-2' />
                Submit for AI to Build
              </>
            )}
          </Button>

          <p className='text-sm text-gray-500 text-center'>
            By submitting this form, you agree to our Terms of Service and
            Privacy Policy. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
