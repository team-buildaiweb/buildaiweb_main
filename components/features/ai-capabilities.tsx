"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Layout,
  Smartphone,
  Code,
  Zap,
  CheckCircle,
  Database,
  Shield,
} from "lucide-react";

const capabilities = [
  {
    id: "native",
    icon: Smartphone,
    title: "Native App Generation",
    description:
      "AI generates high-performance native mobile apps for iOS and Android",
    features: [
      "Native UI components",
      "Platform-specific features",
      "Hardware integration",
      "App store ready",
    ],
    demo: "native-demo",
  },
  {
    id: "architecture",
    icon: Layout,
    title: "Smart App Architecture",
    description:
      "Automatically creates scalable and maintainable app architecture",
    features: [
      "State management",
      "Navigation flows",
      "Data persistence",
      "API integration",
    ],
    demo: "architecture-demo",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    description: "Built-in optimizations for smooth mobile experience",
    features: [
      "Memory management",
      "Battery efficiency",
      "Offline support",
      "Fast load times",
    ],
    demo: "performance-demo",
  },
  {
    id: "code",
    icon: Code,
    title: "Native Code Generation",
    description:
      "Produces clean, efficient code optimized for mobile platforms",
    features: [
      "Platform-specific code",
      "Native APIs usage",
      "Clean architecture",
      "Testing support",
    ],
    demo: "code-demo",
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend Integration",
    description:
      "Seamlessly connects your app with cloud services and databases",
    features: [
      "API management",
      "Data sync",
      "Cloud storage",
      "Real-time updates",
    ],
    demo: "backend-demo",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security features built into your app",
    features: [
      "Data encryption",
      "Secure authentication",
      "Privacy compliance",
      "Safe storage",
    ],
    demo: "security-demo",
  },
];

export function AICapabilities() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const handleDemoClick = (demoId: string) => {
    setActiveDemo(activeDemo === demoId ? null : demoId);
  };

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Badge className='inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8'>
            <Brain className='w-4 h-4 mr-2' />
            AI Capabilities
          </Badge>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Powered by Advanced AI Technology
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our AI engine combines multiple specialized models to create mobile
            apps that are not just beautiful, but intelligent, fast, and
            optimized for success.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {capabilities.map((capability) => (
            <Card
              key={capability.id}
              className='group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200'
              onClick={() => handleDemoClick(capability.demo)}
            >
              <CardContent className='p-8'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors'>
                    <capability.icon className='w-6 h-6 text-purple-600 group-hover:text-white' />
                  </div>
                  <Badge
                    variant='outline'
                    className='opacity-0 group-hover:opacity-100 transition-opacity'
                  >
                    Try Demo
                  </Badge>
                </div>

                <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors'>
                  {capability.title}
                </h3>

                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {capability.description}
                </p>

                <div className='space-y-2'>
                  {capability.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                      {feature}
                    </div>
                  ))}
                </div>

                {activeDemo === capability.demo && (
                  <div className='mt-6 p-4 bg-gray-50 rounded-lg border-2 border-purple-200'>
                    <div className='text-center'>
                      <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <capability.icon className='w-4 h-4 text-white' />
                      </div>
                      <p className='text-sm text-purple-700 font-medium mb-2'>
                        Interactive Demo: {capability.title}
                      </p>
                      <p className='text-xs text-gray-600 mb-3'>
                        This feature analyzes your input and demonstrates real
                        AI capabilities
                      </p>
                      <Button
                        size='sm'
                        className='bg-purple-600 hover:bg-purple-700'
                      >
                        Launch Full Demo
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Process Flow */}
        <div className='mt-20'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              How Our AI Works
            </h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Behind every generated mobile app is a sophisticated AI pipeline
              that processes your input through multiple specialized models.
            </p>
          </div>

          <div className='relative'>
            <div className='absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 transform -translate-y-1/2 hidden lg:block'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  step: 1,
                  title: "Natural Language Processing",
                  desc: "AI understands your description",
                },
                {
                  step: 2,
                  title: "Intent Recognition",
                  desc: "Identifies mobile app type and goals",
                },
                {
                  step: 3,
                  title: "Design Generation",
                  desc: "Creates layout and visual elements",
                },
                {
                  step: 4,
                  title: "Code Production",
                  desc: "Outputs clean, production code",
                },
              ].map((process, index) => (
                <div key={index} className='relative text-center'>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-xl font-bold mb-4 relative z-10'>
                    {process.step}
                  </div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    {process.title}
                  </h4>
                  <p className='text-sm text-gray-600'>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
