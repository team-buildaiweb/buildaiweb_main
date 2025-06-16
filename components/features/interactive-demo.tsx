"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Play,
  RefreshCw,
  Copy,
  Check,
  Code,
  Eye,
  Loader2,
  Sparkles,
} from "lucide-react";
import { LoadingSpinner } from "@/components/loading/loading-spinner";
import { PulseLoader } from "@/components/loading/pulse-loader";

const demoPrompts = [
  "Create a modern SaaS landing page with pricing tiers and testimonials",
  "Build a photography portfolio with dark theme and image gallery",
  "Design a restaurant mobile app with menu and online ordering",
  "Make an e-commerce store for handmade jewelry with product showcase",
  "Create a consulting firm mobile app with team profiles and case studies",
];

const generatedLayouts = {
  saas: `<div class="min-h-screen bg-white">
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-gray-900">SaaSify</h1>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
  </nav>
  
  <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">
        Streamline Your Workflow with AI
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Automate repetitive tasks and boost productivity with our intelligent platform
      </p>
      <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
        Start Free Trial
      </button>
    </div>
  </section>
</div>`,
  portfolio: `<div class="min-h-screen bg-gray-900 text-white">
  <nav class="bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-light">Alex Chen Photography</h1>
      <div class="space-x-6">
        <a href="#" class="hover:text-gray-300">Portfolio</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </div>
    </div>
  </nav>
  
  <section class="py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-6xl font-light mb-6">Capturing Moments</h1>
      <p class="text-xl text-gray-300 mb-12">Professional photography services</p>
      <div class="grid grid-cols-3 gap-4">
        <div class="aspect-square bg-gray-700 rounded"></div>
        <div class="aspect-square bg-gray-700 rounded"></div>
        <div class="aspect-square bg-gray-700 rounded"></div>
      </div>
    </div>
  </section>
</div>`,
};

export function InteractiveDemo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [activeView, setActiveView] = useState<"preview" | "code">("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Determine which layout to show based on prompt
    const lowerPrompt = prompt.toLowerCase();
    let selectedLayout = generatedLayouts.saas;

    if (
      lowerPrompt.includes("portfolio") ||
      lowerPrompt.includes("photographer")
    ) {
      selectedLayout = generatedLayouts.portfolio;
    }

    setGeneratedCode(selectedLayout);
    setIsGenerating(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const demoPrompts = [
    "Create a modern SaaS landing page with pricing tiers and testimonials",
    "Build a photography portfolio with dark theme and image gallery",
    "Design a restaurant mobile app with menu and online ordering",
    "Make an e-commerce store for handmade jewelry with product showcase",
    "Create a consulting firm mobile app with team profiles and case studies",
  ];

  const generatedLayouts = {
    saas: `<div class="min-h-screen bg-white">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">SaaSify</h1>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
    
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">
          Streamline Your Workflow with AI
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automate repetitive tasks and boost productivity with our intelligent platform
        </p>
        <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
          Start Free Trial
        </button>
      </div>
    </section>
  </div>`,
    portfolio: `<div class="min-h-screen bg-gray-900 text-white">
    <nav class="bg-gray-900 p-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-light">Alex Chen Photography</h1>
        <div class="space-x-6">
          <a href="#" class="hover:text-gray-300">Portfolio</a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
    
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-6xl font-light mb-6">Capturing Moments</h1>
        <p class="text-xl text-gray-300 mb-12">Professional photography services</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="aspect-square bg-gray-700 rounded"></div>
          <div class="aspect-square bg-gray-700 rounded"></div>
          <div class="aspect-square bg-gray-700 rounded"></div>
        </div>
      </div>
    </section>
  </div>`,
  };

  const usePrompt = (demoPrompt: string) => {
    setPrompt(demoPrompt);
  };

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Try Our AI Live Demo
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Experience the magic of AI mobile app development. Type a
            description and watch as our AI creates a complete mobile app in
            seconds.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Input Panel */}
          <div>
            <Card className='shadow-xl'>
              <CardContent className='p-8'>
                <div className='flex items-center mb-6'>
                  <Sparkles className='w-6 h-6 text-purple-600 mr-2' />
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Describe Your Mobile app
                  </h3>
                </div>

                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='Describe the mobile app you want to build...'
                  className='min-h-[120px] mb-6 border-2 focus:border-purple-500'
                />

                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className='w-full bg-purple-600 hover:bg-purple-700 mb-6'
                  size='lg'
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                      AI is Building...
                    </>
                  ) : (
                    <>
                      <Play className='w-5 h-5 mr-2' />
                      Generate Mobile app
                    </>
                  )}
                </Button>

                {/* Demo Prompts */}
                <div>
                  <p className='text-sm font-medium text-gray-700 mb-3'>
                    Or try these examples:
                  </p>
                  <div className='space-y-2'>
                    {demoPrompts.map((demoPrompt, index) => (
                      <button
                        key={index}
                        onClick={() => setPrompt(demoPrompt)}
                        className='w-full text-left text-sm bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-700 px-3 py-2 rounded-lg transition-colors'
                      >
                        {demoPrompt}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div>
            <Card className='shadow-xl h-full'>
              <CardContent className='p-0 h-full flex flex-col'>
                {/* Tabs */}
                <div className='flex border-b border-gray-200'>
                  <button
                    onClick={() => setActiveView("preview")}
                    className={`flex-1 px-6 py-4 text-sm font-medium ${
                      activeView === "preview"
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Eye className='w-4 h-4 inline mr-2' />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveView("code")}
                    className={`flex-1 px-6 py-4 text-sm font-medium ${
                      activeView === "code"
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Code className='w-4 h-4 inline mr-2' />
                    Code
                  </button>
                </div>

                {/* Content */}
                <div className='flex-1 overflow-hidden'>
                  {isGenerating ? (
                    <div className='h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50'>
                      <div className='text-center max-w-sm'>
                        <div className='relative mb-6'>
                          <div className='w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto'>
                            <Sparkles className='w-10 h-10 text-purple-600 animate-pulse' />
                          </div>
                          <div className='absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center'>
                            <LoadingSpinner size='sm' className='text-white' />
                          </div>
                        </div>

                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                          AI is building your mobile app...
                        </h3>
                        <p className='text-gray-600 mb-6'>
                          Creating something amazing for you
                        </p>

                        {/* Enhanced progress indicators */}
                        <div className='space-y-3 text-sm'>
                          <div className='flex items-center justify-center space-x-2 text-green-600'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span>Analyzing requirements</span>
                          </div>
                          <div className='flex items-center justify-center space-x-2 text-green-600'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span>Selecting layout</span>
                          </div>
                          <div className='flex items-center justify-center space-x-2 text-yellow-600'>
                            <PulseLoader size='sm' color='purple' />
                            <span>Generating code</span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className='mt-4 bg-gray-200 rounded-full h-2 overflow-hidden'>
                          <div
                            className='h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse'
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : generatedCode ? (
                    <div className='h-full'>
                      {activeView === "preview" ? (
                        <div className='h-full overflow-auto bg-white'>
                          <div className='p-4'>
                            <div className='mb-4 flex items-center justify-between'>
                              <Badge
                                variant='secondary'
                                className='bg-green-100 text-green-800'
                              >
                                ✓ Generated Successfully
                              </Badge>
                              <Button variant='outline' size='sm'>
                                <RefreshCw className='w-4 h-4 mr-2' />
                                Regenerate
                              </Button>
                            </div>
                            <div
                              className='border rounded-lg overflow-hidden shadow-sm'
                              dangerouslySetInnerHTML={{
                                __html: generatedCode,
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className='h-full bg-gray-900 text-gray-100'>
                          <div className='p-4 border-b border-gray-700 flex items-center justify-between'>
                            <span className='text-sm font-medium'>
                              Generated HTML
                            </span>
                            <Button
                              variant='outline'
                              size='sm'
                              onClick={handleCopyCode}
                              className='border-gray-600 text-gray-300 hover:bg-gray-800'
                            >
                              {copySuccess ? (
                                <>
                                  <Check className='w-4 h-4 mr-2' />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className='w-4 h-4 mr-2' />
                                  Copy Code
                                </>
                              )}
                            </Button>
                          </div>
                          <pre className='p-4 text-sm overflow-auto h-full'>
                            <code>{generatedCode}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className='h-full flex items-center justify-center bg-gray-50'>
                      <div className='text-center max-w-sm'>
                        <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                          <Sparkles className='w-12 h-12 text-gray-400' />
                        </div>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                          Ready to Generate
                        </h3>
                        <p className='text-gray-600'>
                          Enter a description of your mobile app and watch our
                          AI create it in real-time.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
