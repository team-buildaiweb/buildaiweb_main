"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Users, Code, Zap } from "lucide-react";

type FeatureKeys =
  | "AI Mobile app Generation"
  | "Natural Language Input"
  | "Instant Preview"
  | "Code Export"
  | "Responsive Design"
  | "SEO Optimization"
  | "Custom Domains"
  | "No Coding Required"
  | "Template Library"
  | "Drag & Drop"
  | "Learning Curve"
  | "Generation Time"
  | "Customization Level"
  | "Technical Support";

type Features = {
  "AI Mobile app Generation": boolean;
  "Natural Language Input": boolean;
  "Instant Preview": boolean;
  "Code Export": boolean;
  "Responsive Design": boolean;
  "SEO Optimization": boolean;
  "Custom Domains": boolean;
  "No Coding Required": boolean;
  "Template Library": boolean;
  "Drag & Drop": boolean;
  "Learning Curve": string;
  "Generation Time": string;
  "Customization Level": string;
  "Technical Support": string;
};

type Competitor = {
  name: string;
  logo: string;
  tagline: string;
  pricing: string;
  highlight: boolean;
  features: Features;
};

const competitors: Competitor[] = [
  {
    name: "BuildAIWeb",
    logo: "🤖",
    tagline: "AI-Powered Web Builder",
    pricing: "Free - $20/mo",
    highlight: true,
    features: {
      "AI Mobile app Generation": true,
      "Natural Language Input": true,
      "Instant Preview": true,
      "Code Export": true,
      "Responsive Design": true,
      "SEO Optimization": true,
      "Custom Domains": true,
      "No Coding Required": true,
      "Template Library": true,
      "Drag & Drop": false,
      "Learning Curve": "None",
      "Generation Time": "2-5 minutes",
      "Customization Level": "High",
      "Technical Support": "24/7 AI + Human",
    },
  },
  {
    name: "Wix",
    logo: "🎨",
    tagline: "Drag & Drop Builder",
    pricing: "Free - $49/mo",
    highlight: false,
    features: {
      "AI Mobile app Generation": false,
      "Natural Language Input": false,
      "Instant Preview": true,
      "Code Export": false,
      "Responsive Design": true,
      "SEO Optimization": true,
      "Custom Domains": true,
      "No Coding Required": true,
      "Template Library": true,
      "Drag & Drop": true,
      "Learning Curve": "Moderate",
      "Generation Time": "Hours to days",
      "Customization Level": "Medium",
      "Technical Support": "Business hours",
    },
  },
  {
    name: "Squarespace",
    logo: "⬜",
    tagline: "Design-Focused Builder",
    pricing: "$12 - $40/mo",
    highlight: false,
    features: {
      "AI Mobile app Generation": false,
      "Natural Language Input": false,
      "Instant Preview": true,
      "Code Export": false,
      "Responsive Design": true,
      "SEO Optimization": true,
      "Custom Domains": true,
      "No Coding Required": true,
      "Template Library": true,
      "Drag & Drop": true,
      "Learning Curve": "Steep",
      "Generation Time": "Days to weeks",
      "Customization Level": "Low",
      "Technical Support": "Email only",
    },
  },
  {
    name: "WordPress.com",
    logo: "📝",
    tagline: "Flexible CMS",
    pricing: "Free - $45/mo",
    highlight: false,
    features: {
      "AI Mobile app Generation": false,
      "Natural Language Input": false,
      "Instant Preview": true,
      "Code Export": true,
      "Responsive Design": true,
      "SEO Optimization": true,
      "Custom Domains": true,
      "No Coding Required": false,
      "Template Library": true,
      "Drag & Drop": false,
      "Learning Curve": "Very Steep",
      "Generation Time": "Weeks",
      "Customization Level": "Very High",
      "Technical Support": "Community",
    },
  },
];

const keyFeatures = [
  "AI Mobile app Generation",
  "Natural Language Input",
  "Instant Preview",
  "Code Export",
  "Responsive Design",
  "SEO Optimization",
  "No Coding Required",
];

export function ComparisonSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Badge className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
            <Star className='w-4 h-4 mr-2' />
            Platform Comparison
          </Badge>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Why Choose BuildAIWeb?
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            See how our AI-powered approach compares to traditional mobile app
            builders and content management systems.
          </p>
        </div>

        {/* Comparison Table */}
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {competitors.map((competitor) => (
                <Card
                  key={competitor.name}
                  className={
                    competitor.highlight ? "border-purple-500 shadow-lg" : ""
                  }
                >
                  <CardContent className='p-6'>
                    {/* Header */}
                    <div className='text-center mb-6'>
                      <div className='text-4xl mb-2'>{competitor.logo}</div>
                      <h3 className='text-xl font-bold text-gray-900 mb-1'>
                        {competitor.name}
                      </h3>
                      <p className='text-sm text-gray-600 mb-3'>
                        {competitor.tagline}
                      </p>
                      <div
                        className={`text-lg font-semibold ${
                          competitor.highlight
                            ? "text-purple-600"
                            : "text-gray-900"
                        }`}
                      >
                        {competitor.pricing}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className='space-y-3 mb-6'>
                      {keyFeatures.map((feature) => (
                        <div
                          key={feature}
                          className='flex items-center justify-between'
                        >
                          <span className='text-sm text-gray-700'>
                            {feature}
                          </span>
                          {competitor.features[feature as keyof Features] ? (
                            <Check className='w-4 h-4 text-green-500' />
                          ) : (
                            <X className='w-4 h-4 text-red-400' />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Additional Stats */}
                    <div className='space-y-2 text-xs text-gray-600 mb-6'>
                      <div className='flex justify-between'>
                        <span>Learning Curve:</span>
                        <span className='font-medium'>
                          {competitor.features["Learning Curve"]}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Setup Time:</span>
                        <span className='font-medium'>
                          {competitor.features["Generation Time"]}
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Customization:</span>
                        <span className='font-medium'>
                          {competitor.features["Customization Level"]}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full ${
                        competitor.highlight
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                      disabled={!competitor.highlight}
                    >
                      {competitor.highlight ? "Try Free Now" : "External Site"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Key Advantages */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4'>
              <Zap className='w-6 h-6 text-green-600' />
            </div>
            <h3 className='font-semibold text-gray-900 mb-2'>10x Faster</h3>
            <p className='text-sm text-gray-600'>
              Build mobile apps in minutes, not weeks
            </p>
          </Card>

          <Card className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4'>
              <Users className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='font-semibold text-gray-900 mb-2'>
              No Learning Curve
            </h3>
            <p className='text-sm text-gray-600'>
              Just describe what you want in plain English
            </p>
          </Card>

          <Card className='text-center p-6'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4'>
              <Code className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Full Code Control
            </h3>
            <p className='text-sm text-gray-600'>
              Export clean code and host anywhere
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
