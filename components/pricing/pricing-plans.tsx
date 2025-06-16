"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Users, Building, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
	{
		id: "starter",
		name: "Starter",
		icon: Zap,
		tagline: "Perfect for trying out AI web building",
		monthlyPrice: 0,
		yearlyPrice: 0,
		popular: false,
		features: [
			"AI Assistant",
			"App Generation with Code",
			"Community support",
			"BuildAIWeb watermark",
			"Export to HTML/CSS",
		],
		limitations: [
			"No AI-powered content suggestions",
			"No one-click deployment",
			"No custom domains",
			"No real-time collaboration",
			"No API integrations",
			"No analytics dashboard",
			"Basic support only",
			"Limited to 3 builds/month",
			"Watermark on mobile apps",
		],
		cta: "Start Free",
    link:"/dashboard",

		description: "Great for personal projects and testing our AI capabilities",
	},
	{
		id: "pro",
		name: "Pro",
		icon: Users,
		tagline: "For professionals and small businesses",
		monthlyPrice: 19,
		yearlyPrice: 190,
		popular: true,
		features: [
			"AI Assistant",
			"App Generation with Code",
			"AI-Powered Content Suggestions",
			"One-click Deployment",
			"Premium templates library",
			"Mobile responsive design",
			"Advanced customization",
			"Priority email support",
			"No watermarks",
			"Export to HTML/CSS/React",
			"Custom domains",
			"SEO Optimization Tools",
			"API Integrations",
			"Real-time Collaboration",
		],
		limitations: [
			"No version history & rollback",
			"No analytics dashboard",
			"No advanced business features",
		],
		cta: "Start Pro Trial",
    link:"/dashboard",

		description: "Perfect for freelancers, agencies, and growing businesses",
	},
	{
		id: "business",
		name: "Business",
		icon: Building,
		tagline: "For teams and growing companies",
		monthlyPrice: 49,
		yearlyPrice: 490,
		popular: false,
		features: [
			"Everything in Pro",
			"Team collaboration (5 users)",
			"White-label solutions",
			"API Integrations",
			"Custom AI training",
			"Advanced integrations",
			"Priority phone support",
			"Custom templates",
			"Brand kit management",
			"Advanced analytics",
			"A/B testing tools",
			"Custom export formats",
			"Version History & Rollback",
			"Analytics Dashboard",
			"Custom Domain Integration",
		],
		limitations: [
			"No unlimited team members",
			"No dedicated account manager",
			"No on-premise deployment",
			"No custom SLA",
		],
		cta: "Start Business Trial",
    link:"/dashboard",
		description:
			"Ideal for teams, agencies, and businesses with multiple projects",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		icon: Crown,
		tagline: "For large organizations",
		monthlyPrice: null,
		yearlyPrice: null,
		popular: false,
		features: [
			"Everything in Business",
			"Unlimited team members",
			"Custom AI model training",
			"Dedicated account manager",
			"24/7 phone support",
			"Custom integrations",
			"On-premise deployment",
			"Advanced security features",
			"Custom SLA",
			"Training & onboarding",
			"Custom development",
			"Priority feature requests",
		],
		limitations: [],
		cta: "Contact Sales",
    link: "/contact",
		description: "Tailored solutions for enterprise-level requirements",
	},
];

export function PricingPlans() {
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
		"monthly"
	);

	const getPrice = (plan: (typeof plans)[0]) => {
		if (plan.monthlyPrice === null) return "Custom";
		if (plan.monthlyPrice === 0) return "Free";

		const price =
			billingCycle === "monthly"
				? plan.monthlyPrice
				: Math.round(plan.yearlyPrice / 12);
		return `$${price}`;
	};

	const getSavings = (plan: (typeof plans)[0]) => {
		if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return null;
		const monthlyCost = plan.monthlyPrice * 12;
		const savings = monthlyCost - plan.yearlyPrice;
		return Math.round((savings / monthlyCost) * 100);
	};

	return (
		<section className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>
						Choose Your Plan
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
						Start with our free plan and upgrade as your needs grow. All plans
						include our core AI mobile app generation.
					</p>

					{/* Billing Toggle */}
					<div className='inline-flex items-center bg-white rounded-lg p-1 shadow-sm border border-gray-200'>
						<button
							onClick={() => setBillingCycle("monthly")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
								billingCycle === "monthly"
									? "bg-purple-600 text-white shadow-sm"
									: "text-gray-600 hover:text-gray-900"
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setBillingCycle("yearly")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
								billingCycle === "yearly"
									? "bg-purple-600 text-white shadow-sm"
									: "text-gray-600 hover:text-gray-900"
							}`}
						>
							Yearly
							<Badge className='ml-2 bg-green-100 text-green-800 text-xs'>
								Save 20%
							</Badge>
						</button>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{plans.map((plan) => (
						<Card
							key={plan.id}
							className={`relative ${
								plan.popular
									? "border-2 border-purple-500 shadow-2xl scale-105"
									: "border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
							}`}
						>
							{plan.popular && (
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
									<Badge className='bg-purple-600 text-white px-4 py-1'>
										<Star className='w-3 h-3 mr-1' />
										Most Popular
									</Badge>
								</div>
							)}

							<CardHeader className='text-center pb-4'>
								<div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4'>
									<plan.icon className='w-6 h-6 text-purple-600' />
								</div>
								<CardTitle className='text-xl font-bold text-gray-900'>
									{plan.name}
								</CardTitle>
								<p className='text-sm text-gray-600 mt-2'>{plan.tagline}</p>

								<div className='mt-4'>
									<div className='flex items-baseline justify-center'>
										<span className='text-4xl font-bold text-gray-900'>
											{getPrice(plan)}
										</span>
										{plan.monthlyPrice !== null &&
											plan.monthlyPrice > 0 && (
												<span className='text-gray-600 ml-1'>/month</span>
											)}
									</div>
									{billingCycle === "yearly" && getSavings(plan) && (
										<Badge className='mt-2 bg-green-100 text-green-800'>
											Save {getSavings(plan)}%
										</Badge>
									)}
									{billingCycle === "yearly" && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
										<p className='text-sm text-gray-500 mt-1'>
											Billed annually (${plan.yearlyPrice}/year)
										</p>
									)}
								</div>
							</CardHeader>

							<CardContent className='pt-0'>
								<p className='text-sm text-gray-600 mb-6 text-center'>
									{plan.description}
								</p>
                  <Link href={plan.link} >
								<Button
									className={`w-full mb-6 ${
										plan.popular
											? "bg-purple-600 hover:bg-purple-700"
											: plan.id === "enterprise"
											? "bg-gray-900 hover:bg-gray-800"
											: "bg-gray-600 hover:bg-gray-700"
									}`}
								>
									{plan.cta}
								</Button>
                </Link>

								<div className='space-y-3'>
									<h4 className='font-semibold text-gray-900 text-sm'>
										Features included:
									</h4>
									{plan.features.map((feature, index) => (
										<div key={index} className='flex items-start'>
											<Check className='w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
											<span className='text-sm text-gray-700'>{feature}</span>
										</div>
									))}
								</div>

								{plan.limitations.length > 0 && (
									<div className='mt-6 pt-4 border-t border-gray-200'>
										<h4 className='font-semibold text-gray-900 text-sm mb-3'>
											Limitations:
										</h4>
										<div className='space-y-2'>
											{plan.limitations.map((limitation, index) => (
												<div key={index} className='flex items-start'>
													<div className='w-4 h-4 border border-gray-300 rounded mr-2 mt-0.5 flex-shrink-0'></div>
													<span className='text-sm text-gray-600'>
														{limitation}
													</span>
												</div>
											))}
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</div>

				{/* Money Back Guarantee */}
				<div className='text-center mt-16'>
					<div className='inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-lg'>
						<Check className='w-5 h-5 text-green-600 mr-2' />
						<span className='text-green-800 font-medium'>
							30-day money-back guarantee on all paid plans
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
