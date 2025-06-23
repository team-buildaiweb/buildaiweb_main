"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Clock,
  Users,
  Smartphone,
  Zap,
  Award,
  Battery,
  Cpu,
} from "lucide-react";

const metrics = [
  {
    icon: Clock,
    label: "App Generation Time",
    value: "5",
    unit: "minutes",
    trend: "90% faster than traditional development",
    color: "blue",
  },
  {
    icon: Users,
    label: "Apps Published",
    value: "2,047",
    unit: "total",
    trend: "+82 this week",
    color: "green",
  },
  {
    icon: TrendingUp,
    label: "App Store Rating",
    value: "4.8",
    unit: "stars",
    trend: "Average user rating",
    color: "purple",
  },
  {
    icon: Battery,
    label: "Battery Efficiency",
    value: "95",
    unit: "% optimized",
    trend: "Low power impact",
    color: "orange",
  },
  {
    icon: Cpu,
    label: "Native Performance",
    value: "99",
    unit: "/100",
    trend: "Platform benchmark score",
    color: "yellow",
  },
  {
    icon: Award,
    label: "Code Quality",
    value: "A+",
    unit: "grade",
    trend: "Platform standards",
    color: "red",
  },
];

const benchmarks = [
  {
    metric: "App Launch Time",
    buildaiweb: "0.8s",
    industry: "2.1s",
    improvement: "62% faster",
  },
  {
    metric: "Memory Usage",
    buildaiweb: "45MB",
    industry: "85MB",
    improvement: "47% more efficient",
  },
  {
    metric: "Frame Rate",
    buildaiweb: "60fps",
    industry: "45fps",
    improvement: "33% smoother",
  },
  {
    metric: "Battery Impact",
    buildaiweb: "2%/hr",
    industry: "5%/hr",
    improvement: "60% more efficient",
  },
];

export function PerformanceMetrics() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Badge className='inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8'>
            <Smartphone className='w-4 h-4 mr-2' />
            App Performance
          </Badge>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Native Performance at AI Speed
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our AI platform generates high-performance native mobile apps that
            match or exceed traditionally developed applications across all key
            metrics.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className='relative overflow-hidden hover:shadow-lg transition-shadow'
            >
              <CardContent className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}
                  >
                    <metric.icon
                      className={`w-6 h-6 text-${metric.color}-600`}
                    />
                  </div>
                  <Badge
                    variant='outline'
                    className='text-xs bg-green-50 text-green-700 border-green-200'
                  >
                    Live
                  </Badge>
                </div>

                <div className='mb-2'>
                  <div className='flex items-baseline'>
                    <span className='text-3xl font-bold text-gray-900'>
                      {metric.value}
                    </span>
                    <span className='text-sm text-gray-500 ml-1'>
                      {metric.unit}
                    </span>
                  </div>
                </div>

                <div className='text-sm font-medium text-gray-700 mb-2'>
                  {metric.label}
                </div>
                <div className='text-xs text-green-600'>{metric.trend}</div>

                {/* Progress indicator */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-100'>
                  <div
                    className={`h-full bg-${metric.color}-500 transition-all duration-1000`}
                    style={{
                      width: `${Math.min(
                        Number.parseFloat(metric.value),
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Benchmarks */}
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Industry Benchmarks
            </h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              See how mobile apps generated by our AI perform compared to
              industry standards across critical metrics.
            </p>
          </div>

          <Card className='shadow-lg'>
            <CardContent className='p-8'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b border-gray-200'>
                      <th className='text-left py-4 px-2 font-semibold text-gray-900'>
                        Metric
                      </th>
                      <th className='text-center py-4 px-2 font-semibold text-purple-600'>
                        BuildAIWeb
                      </th>
                      <th className='text-center py-4 px-2 font-semibold text-gray-600'>
                        Industry Average
                      </th>
                      <th className='text-center py-4 px-2 font-semibold text-green-600'>
                        Improvement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.map((benchmark, index) => (
                      <tr
                        key={index}
                        className='border-b border-gray-100 hover:bg-gray-50'
                      >
                        <td className='py-4 px-2 font-medium text-gray-900'>
                          {benchmark.metric}
                        </td>
                        <td className='py-4 px-2 text-center'>
                          <Badge className='bg-purple-100 text-purple-800 font-bold'>
                            {benchmark.buildaiweb}
                          </Badge>
                        </td>
                        <td className='py-4 px-2 text-center text-gray-600'>
                          {benchmark.industry}
                        </td>
                        <td className='py-4 px-2 text-center'>
                          <Badge className='bg-green-100 text-green-800'>
                            {benchmark.improvement}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className='bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
          <CardContent className='p-12 text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Ready to Experience These Results?
            </h3>
            <p className='text-purple-100 mb-8 max-w-2xl mx-auto text-lg'>
              Join thousands of businesses already benefiting from AI-powered
              mobile app development. Start building your high-performance
              mobile app today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-purple-600 hover:bg-gray-100'
              >
                Start Free Trial
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white bg-transparent text-white hover:bg-white hover:text-purple-600'
              >
                View Live Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
