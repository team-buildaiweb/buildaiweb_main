"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Code, Smartphone, Zap } from "lucide-react";

const showcaseFeatures = [
  {
    id: "app-generation",
    icon: "Zap",
    title: "AI App Generation",
    traditional: {
      title: "Traditional App Development",
      time: "3-6 months",
      process: [
        "Requirements gathering",
        "UI/UX design",
        "Native code development",
        "Backend integration",
        "Testing on devices",
        "App store submission",
      ],
      cost: "$30,000 - $150,000",
    },
    ai: {
      title: "AI-Powered BuildAIWeb",
      time: "5-15 minutes",
      process: [
        "Describe your app features",
        "AI generates native code",
        "Preview on all devices",
        "One-click deployment",
      ],
      cost: "From $29/month",
    },
  },
  {
    id: "cross-platform",
    icon: "Smartphone",
    title: "Cross-Platform Apps",
    traditional: {
      title: "Manual Platform Support",
      time: "2-3 months per platform",
      process: [
        "Separate iOS development",
        "Separate Android development",
        "Platform-specific UI",
        "Multiple codebases",
        "Individual testing",
        "Separate deployments",
      ],
      cost: "2x development cost",
    },
    ai: {
      title: "AI Cross-Platform Magic",
      time: "Built-in",
      process: [
        "Single app definition",
        "Native performance",
        "Unified codebase",
        "Automatic optimization",
      ],
      cost: "Included in all plans",
    },
  },
  {
    id: "code-quality",
    icon: "Code",
    title: "Native Performance",
    traditional: {
      title: "Manual Code Optimization",
      time: "2-4 weeks",
      process: [
        "Performance profiling",
        "Memory optimization",
        "Native API integration",
        "Code refactoring",
        "Performance testing",
        "Platform compliance",
      ],
      cost: "$10,000 - $30,000",
    },
    ai: {
      title: "AI Performance Engine",
      time: "Automatic",
      process: [
        "Native code generation",
        "Smart resource management",
        "Platform-specific optimizations",
        "Automated compliance",
      ],
      cost: "Built-in feature",
    },
  },
];

const iconMap = {
  Zap,
  Smartphone,
  Code,
};

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap];
  };

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Transform App Development with AI
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Compare traditional mobile app development with our AI-powered
            platform. Build native apps in minutes, not months.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {showcaseFeatures.map((feature, index) => {
            const IconComponent = getIcon(feature.icon);
            return (
              <Button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                variant={activeFeature === index ? "default" : "outline"}
                className={`${
                  activeFeature === index
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                <IconComponent className='w-4 h-4 mr-2' />
                {feature.title}
              </Button>
            );
          })}
        </div>

        {/* Active Feature Comparison */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* Traditional Way */}
          <Card className='shadow-lg'>
            <CardContent className='p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4'>
                  <Clock className='w-6 h-6 text-gray-600' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {showcaseFeatures[activeFeature].traditional.title}
                  </h3>
                  <Badge variant='outline' className='mt-1'>
                    Time:
                    {showcaseFeatures[activeFeature].traditional.time}
                  </Badge>
                </div>
              </div>

              <div className='space-y-4 mb-6'>
                {showcaseFeatures[activeFeature].traditional.process.map(
                  (step, index) => (
                    <div key={index} className='flex items-center'>
                      <div className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-3'>
                        {index + 1}
                      </div>
                      <span className='text-gray-700'>{step}</span>
                    </div>
                  )
                )}
              </div>

              <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                <div className='text-red-800 font-semibold mb-2'>
                  Total Investment:
                </div>
                <div className='text-red-900 text-lg font-bold'>
                  {showcaseFeatures[activeFeature].traditional.cost}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Way */}
          <Card className='shadow-lg border-2 border-purple-200'>
            <CardContent className='p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4'>
                  {(() => {
                    const IconComponent = getIcon(
                      showcaseFeatures[activeFeature].icon
                    );
                    return (
                      <IconComponent className='w-6 h-6 text-purple-600' />
                    );
                  })()}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {showcaseFeatures[activeFeature].ai.title}
                  </h3>
                  <Badge className='mt-1 bg-green-100 text-green-800'>
                    Time: {showcaseFeatures[activeFeature].ai.time}
                  </Badge>
                </div>
              </div>

              <div className='space-y-4 mb-6'>
                {showcaseFeatures[activeFeature].ai.process.map(
                  (step, index) => (
                    <div key={index} className='flex items-center'>
                      <div className='w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3'>
                        {index + 1}
                      </div>
                      <span className='text-gray-700'>{step}</span>
                    </div>
                  )
                )}
              </div>

              <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                <div className='text-green-800 font-semibold mb-2'>
                  Total Investment:
                </div>
                <div className='text-green-900 text-lg font-bold'>
                  {showcaseFeatures[activeFeature].ai.cost}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6'>
            <ArrowRight className='w-8 h-8 text-purple-600' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Ready to Build Your Mobile App?
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Join innovative businesses building native mobile apps in minutes
            with AI. No coding required.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
              Create Your First App
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-purple-600 text-purple-600 hover:bg-purple-50'
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
