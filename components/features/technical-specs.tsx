"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Lock, Smartphone, CheckCircle, Zap } from "lucide-react";

const technicalFeatures = [
	{
		category: "AI App Generation",
		icon: Code,
		specs: [
			{ label: "Code Generation Model", value: "GPT-4 Based" },
			{ label: "UI Pattern Recognition", value: "250+ Components" },
			{ label: "Native Code Engine", value: "Platform Specific" },
			{ label: "Generation Time", value: "< 5 minutes" },
			{ label: "Code Quality Score", value: "98.5%" },
		],
	},
	{
		category: "Native Performance",
		icon: CheckCircle,
		specs: [
			{ label: "iOS Performance", value: "Apple Guidelines" },
			{ label: "Android Performance", value: "Material Design 3" },
			{ label: "Frame Rate", value: "60 FPS Target" },
			{ label: "App Size", value: "Optimized < 20MB" },
			{ label: "Battery Impact", value: "Low Power Mode" },
		],
	},
	{
		category: "Platform Features",
		icon: Smartphone,
		specs: [
			{ label: "UI Framework", value: "React Native/Flutter" },
			{ label: "State Management", value: "Redux/MobX" },
			{ label: "API Integration", value: "RESTful/GraphQL" },
			{ label: "Offline Support", value: "Built-in" },
			{ label: "Push Notifications", value: "Cross-Platform" },
		],
	},
	{
		category: "Security & Compliance",
		icon: Lock,
		specs: [
			{ label: "Data Encryption", value: "AES-256" },
			{ label: "App Store Ready", value: "iOS & Android" },
			{ label: "Authentication", value: "Biometric Support" },
			{ label: "Data Storage", value: "Secure Enclave" },
			{ label: "Security Scans", value: "Automated" },
		],
	},
];

const supportedFeatures = [
	{ name: "iOS Apps", description: "Native iPhone & iPad" },
	{ name: "Android Apps", description: "Native Android support" },
	{ name: "Cross-Platform", description: "Single codebase" },
	{ name: "Backend APIs", description: "REST & GraphQL" },
	{ name: "Cloud Services", description: "AWS & Firebase" },
	{ name: "CI/CD", description: "Automated deployment" },
];

export function TechnicalSpecs() {
	return (
		<section className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<Badge className='inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8'>
						<Smartphone className='w-4 h-4 mr-2' />
						Technical Capabilities
					</Badge>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>
						Enterprise-Grade Mobile Development
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Our AI platform generates production-ready mobile apps using the latest
						native technologies and best practices for iOS and Android.
					</p>
				</div>

				{/* Technical Specs Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{technicalFeatures.map((feature, index) => (
						<Card key={index} className='shadow-lg border-0'>
							<CardHeader>
								<CardTitle className='flex items-center text-lg'>
									<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3'>
										<feature.icon className='w-5 h-5 text-blue-600' />
									</div>
									{feature.category}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									{feature.specs.map((spec, specIndex) => (
										<div
											key={specIndex}
											className='flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0'
										>
											<span className='text-gray-700 font-medium'>
												{spec.label}
											</span>
											<Badge
												variant='outline'
												className='bg-blue-50 text-blue-700 border-blue-200'
											>
												{spec.value}
											</Badge>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Supported Export Formats */}
				<div className='mb-16'>
					<div className='text-center mb-12'>
						<h3 className='text-3xl font-bold text-gray-900 mb-4'>
							Supported Export Formats
						</h3>
						<p className='text-gray-600 max-w-2xl mx-auto'>
							Export your AI-generated mobile apps in multiple formats to suit
							any hosting platform or development workflow.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{supportedFeatures.map((format, index) => (
							<Card
								key={index}
								className='text-center hover:shadow-lg transition-shadow'
							>
								<CardContent className='p-6'>
									<div className='w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
										<Code className='w-6 h-6 text-purple-600' />
									</div>
									<h4 className='font-semibold text-gray-900 mb-2'>
										{format.name}
									</h4>
									<p className='text-sm text-gray-600'>
										{format.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* API & Integration */}
				<Card className='shadow-xl border-0 bg-gradient-to-r from-purple-50 to-blue-50'>
					<CardContent className='p-12 text-center'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6'>
							<Zap className='w-8 h-8 text-purple-600' />
						</div>
						<h3 className='text-3xl font-bold text-gray-900 mb-4'>
							Developer API Coming Soon
						</h3>
						<p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
							Integrate our AI mobile app generation capabilities directly into
							your applications with our RESTful API. Perfect for agencies, SaaS
							platforms, and enterprise solutions.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Badge className='bg-purple-600 text-white px-6 py-2 text-sm'>
								RESTful API
							</Badge>
							<Badge className='bg-blue-600 text-white px-6 py-2 text-sm'>
								WebSocket Support
							</Badge>
							<Badge className='bg-green-600 text-white px-6 py-2 text-sm'>
								Webhook Integration
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
