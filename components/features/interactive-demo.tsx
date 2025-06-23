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
  Smartphone,
} from "lucide-react";
import { LoadingSpinner } from "@/components/loading/loading-spinner";
import { PulseLoader } from "@/components/loading/pulse-loader";

const demoPrompts = [
  "Create a social media app with photo sharing and user profiles",
  "Build a food delivery app with real-time order tracking",
  "Design a fitness tracking app with workout plans and progress charts",
  "Make a travel planning app with itinerary management",
  "Create an e-learning app with video courses and quizzes",
];

const generatedLayouts = {
  socialApp: `// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// FeedScreen.tsx
import { View, FlatList, Image } from 'react-native';

function FeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
}`,
  deliveryApp: `// App.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsList} />
        <Stack.Screen name="Menu" component={RestaurantMenu} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
        <Stack.Screen name="Tracking" component={OrderTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// OrderTracking.tsx
import MapView, { Marker } from 'react-native-maps';

function OrderTracking() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={driverLocation} />
        <Marker coordinate={destinationLocation} />
      </MapView>
      <View style={styles.status}>
        <Text style={styles.eta}>Estimated Delivery: 15 mins</Text>
        <Text style={styles.driver}>John is on the way</Text>
      </View>
    </View>
  );
}`,
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
    let selectedLayout = generatedLayouts.socialApp;

    if (lowerPrompt.includes("delivery") || lowerPrompt.includes("food")) {
      selectedLayout = generatedLayouts.deliveryApp;
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
    "Create a social media app with photo sharing and user profiles",
    "Build a food delivery app with real-time order tracking",
    "Design a fitness tracking app with workout plans and progress charts",
    "Make a travel planning app with itinerary management",
    "Create an e-learning app with video courses and quizzes",
  ];

  const generatedLayouts = {
    socialApp: `// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// FeedScreen.tsx
import { View, FlatList, Image } from 'react-native';

function FeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
}`,
    deliveryApp: `// App.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsList} />
        <Stack.Screen name="Menu" component={RestaurantMenu} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
        <Stack.Screen name="Tracking" component={OrderTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// OrderTracking.tsx
import MapView, { Marker } from 'react-native-maps';

function OrderTracking() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={driverLocation} />
        <Marker coordinate={destinationLocation} />
      </MapView>
      <View style={styles.status}>
        <Text style={styles.eta}>Estimated Delivery: 15 mins</Text>
        <Text style={styles.driver}>John is on the way</Text>
      </View>
    </View>
  );
}`,
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
