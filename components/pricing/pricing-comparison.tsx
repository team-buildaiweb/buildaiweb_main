"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    category: "AI Generation",
    items: [
      {
        feature: "Monthly AI Builds",
        starter: "3 builds",
        pro: "Unlimited",
        business: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        feature: "AI Model Quality",
        starter: "Standard",
        pro: "Advanced",
        business: "Advanced",
        enterprise: "Custom Trained",
      },
      {
        feature: "Generation Speed",
        starter: "Standard",
        pro: "Priority",
        business: "Priority",
        enterprise: "Dedicated",
      },
      {
        feature: "Custom AI Training",
        starter: false,
        pro: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Design & Customization",
    items: [
      {
        feature: "Template Library",
        starter: "Basic (50+)",
        pro: "Premium (200+)",
        business: "Premium (200+)",
        enterprise: "Custom",
      },
      {
        feature: "Custom Branding",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "White Label",
        starter: false,
        pro: false,
        business: true,
        enterprise: true,
      },
      {
        feature: "Brand Kit Management",
        starter: false,
        pro: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Export & Hosting",
    items: [
      {
        feature: "Export Formats",
        starter: "HTML/CSS",
        pro: "HTML/CSS/React",
        business: "All Formats",
        enterprise: "Custom",
      },
      {
        feature: "Custom Domains",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        feature: "Hosting Included",
        starter: false,
        pro: "Basic",
        business: "Advanced",
        enterprise: "Enterprise",
      },
      {
        feature: "CDN & SSL",
        starter: false,
        pro: true,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Collaboration & Support",
    items: [
      {
        feature: "Team Members",
        starter: "1",
        pro: "1",
        business: "5",
        enterprise: "Unlimited",
      },
      {
        feature: "Support Level",
        starter: "Community",
        pro: "Email",
        business: "Phone + Email",
        enterprise: "Dedicated Manager",
      },
      {
        feature: "Response Time",
        starter: "Best effort",
        pro: "24 hours",
        business: "4 hours",
        enterprise: "1 hour",
      },
      {
        feature: "Training & Onboarding",
        starter: false,
        pro: false,
        business: false,
        enterprise: true,
      },
    ],
  },
];

export function PricingComparison() {
  const renderFeatureValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className='w-5 h-5 text-green-500 mx-auto' />
      ) : (
        <X className='w-5 h-5 text-gray-300 mx-auto' />
      );
    }
    return <span className='text-sm text-gray-900 font-medium'>{value}</span>;
  };

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Feature Comparison
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Compare all features across our plans to find the perfect fit for
            your needs.
          </p>
        </div>

        <Card className='shadow-xl border-0'>
          <CardContent className='p-0'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b border-gray-200 bg-gray-50'>
                    <th className='text-left py-4 px-6 font-semibold text-gray-900'>
                      Features
                    </th>
                    <th className='text-center py-4 px-6 font-semibold text-gray-900'>
                      <div className='flex flex-col items-center'>
                        <span>Starter</span>
                        <Badge variant='outline' className='mt-1 text-xs'>
                          Free
                        </Badge>
                      </div>
                    </th>
                    <th className='text-center py-4 px-6 font-semibold text-purple-600'>
                      <div className='flex flex-col items-center'>
                        <span>Pro</span>
                        <Badge className='mt-1 text-xs bg-purple-600'>
                          Popular
                        </Badge>
                      </div>
                    </th>
                    <th className='text-center py-4 px-6 font-semibold text-gray-900'>
                      <div className='flex flex-col items-center'>
                        <span>Business</span>
                        <Badge variant='outline' className='mt-1 text-xs'>
                          Teams
                        </Badge>
                      </div>
                    </th>
                    <th className='text-center py-4 px-6 font-semibold text-gray-900'>
                      <div className='flex flex-col items-center'>
                        <span>Enterprise</span>
                        <Badge variant='outline' className='mt-1 text-xs'>
                          Custom
                        </Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <div key={`category-${categoryIndex}`}>
                      <tr className='bg-gray-50'>
                        <td colSpan={5} className='py-3 px-6'>
                          <div className='flex items-center'>
                            <Info className='w-4 h-4 text-gray-500 mr-2' />
                            <span className='font-semibold text-gray-900'>
                              {category.category}
                            </span>
                          </div>
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr
                          key={`${categoryIndex}-${itemIndex}`}
                          className='border-b border-gray-100 hover:bg-gray-50'
                        >
                          <td className='py-4 px-6 font-medium text-gray-900'>
                            {item.feature}
                          </td>
                          <td className='py-4 px-6 text-center'>
                            {renderFeatureValue(item.starter)}
                          </td>
                          <td className='py-4 px-6 text-center bg-purple-50'>
                            {renderFeatureValue(item.pro)}
                          </td>
                          <td className='py-4 px-6 text-center'>
                            {renderFeatureValue(item.business)}
                          </td>
                          <td className='py-4 px-6 text-center'>
                            {renderFeatureValue(item.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className='text-center mt-12'>
          <p className='text-gray-600 mb-6'>
            Need help choosing the right plan?
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors'
            >
              Talk to Sales
            </a>
            <a
              href='/dashboard'
              className='inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
            >
              Try Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
