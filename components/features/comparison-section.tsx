"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Users, Code, Zap } from "lucide-react";

type FeatureKeys =
  | "AI Code Generation"
  | "Native Performance"
  | "Cross-Platform"
  | "Real-time Preview"
  | "App Store Ready"
  | "Custom UI/UX"
  | "Backend Integration"
  | "Push Notifications"
  | "Offline Support"
  | "Visual Editor"
  | "Learning Curve"
  | "Development Time"
  | "Customization Level"
  | "Technical Support";

type Features = {
  "AI Code Generation": boolean;
  "Native Performance": boolean;
  "Cross-Platform": boolean;
  "Real-time Preview": boolean;
  "App Store Ready": boolean;
  "Custom UI/UX": boolean;
  "Backend Integration": boolean;
  "Push Notifications": boolean;
  "Offline Support": boolean;
  "Visual Editor": boolean;
  "Learning Curve": string;
  "Development Time": string;
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
    tagline: "AI-Powered Mobile App Builder",
    pricing: "Free - $29/mo",
    highlight: true,
    features: {
      "AI Code Generation": true,
      "Native Performance": true,
      "Cross-Platform": true,
      "Real-time Preview": true,
      "App Store Ready": true,
      "Custom UI/UX": true,
      "Backend Integration": true,
      "Push Notifications": true,
      "Offline Support": true,
      "Visual Editor": false,
      "Learning Curve": "None",
      "Development Time": "Minutes",
      "Customization Level": "High",
      "Technical Support": "24/7 AI + Human",
    },
  },
  {
    name: "Flutter Flow",
    logo: "📱",
    tagline: "Visual App Builder",
    pricing: "$30 - $100/mo",
    highlight: false,
    features: {
      "AI Code Generation": false,
      "Native Performance": true,
      "Cross-Platform": true,
      "Real-time Preview": true,
      "App Store Ready": true,
      "Custom UI/UX": true,
      "Backend Integration": true,
      "Push Notifications": true,
      "Offline Support": true,
      "Visual Editor": true,
      "Learning Curve": "Moderate",
      "Development Time": "Days",
      "Customization Level": "Medium",
      "Technical Support": "Business hours",
    },
  },
  {
    name: "React Native Builder",
    logo: "⚛️",
    tagline: "Code-Based Development",
    pricing: "$49 - $199/mo",
    highlight: false,
    features: {
      "AI Code Generation": false,
      "Native Performance": true,
      "Cross-Platform": true,
      "Real-time Preview": true,
      "App Store Ready": true,
      "Custom UI/UX": true,
      "Backend Integration": true,
      "Push Notifications": true,
      "Offline Support": true,
      "Visual Editor": false,
      "Learning Curve": "High",
      "Development Time": "Weeks",
      "Customization Level": "High",
      "Technical Support": "Community",
    },
  },
  {
    name: "Expo",
    logo: "🚀",
    tagline: "Universal App Platform",
    pricing: "Free - $99/mo",
    highlight: false,
    features: {
      "AI Code Generation": false,
      "Native Performance": true,
      "Cross-Platform": true,
      "Real-time Preview": true,
      "App Store Ready": true,
      "Custom UI/UX": true,
      "Backend Integration": true,
      "Push Notifications": true,
      "Offline Support": true,
      "Visual Editor": false,
      "Learning Curve": "High",
      "Development Time": "Weeks",
      "Customization Level": "High",
      "Technical Support": "Community + Business",
    },
  },
];

const keyFeatures = [
  "AI Code Generation",
  "Native Performance",
  "Cross-Platform",
  "Real-time Preview",
  "App Store Ready",
  "Custom UI/UX",
  "Backend Integration",
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
                          {competitor.features["Development Time"]}
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
