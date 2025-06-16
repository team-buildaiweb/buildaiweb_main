"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Download, ExternalLink } from "lucide-react"
import { LoadingSpinner } from "@/components/loading/loading-spinner"

interface CodePreviewProps {
  app: any
  isGenerating: boolean
}

const sampleCode = {
  reactnative: `import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function FitTrackerApp() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FitTracker Pro</Text>
        <Text style={styles.headerSubtitle}>Your fitness journey starts here</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2,847</Text>
            <Text style={styles.statLabel}>Steps Today</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>420</Text>
            <Text style={styles.statLabel}>Calories Burned</Text>
          </View>
        </View>

        <View style={styles.workoutSection}>
          <Text style={styles.sectionTitle}>Today's Workout</Text>
          <TouchableOpacity style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>Upper Body Strength</Text>
            <Text style={styles.workoutDuration}>45 minutes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'home' && styles.activeTab]}
          onPress={() => setActiveTab('home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'workouts' && styles.activeTab]}
          onPress={() => setActiveTab('workouts')}
        >
          <Text style={styles.tabText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'progress' && styles.activeTab]}
          onPress={() => setActiveTab('progress')}
        >
          <Text style={styles.tabText}>Progress</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#6366f1',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  workoutSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  workoutCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  workoutDuration: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#f3f4f6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
});`,
  flutter: `import 'package:flutter/material.dart';

void main() {
  runApp(FitTrackerApp());
}

class FitTrackerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitTracker Pro',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('FitTracker Pro'),
        backgroundColor: Colors.indigo,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Stats Cards
            Row(
              children: [
                Expanded(
                  child: _buildStatCard('2,847', 'Steps Today', Colors.blue),
                ),
                SizedBox(width: 16),
                Expanded(
                  child: _buildStatCard('420', 'Calories', Colors.orange),
                ),
              ],
            ),
            SizedBox(height: 24),
            
            // Workout Section
            Text(
              'Today\\'s Workout',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 12),
            _buildWorkoutCard(),
            
            SizedBox(height: 24),
            
            // Progress Section
            Text(
              'Weekly Progress',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 12),
            _buildProgressChart(),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) => setState(() => _selectedIndex = index),
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.fitness_center),
            label: 'Workouts',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.trending_up),
            label: 'Progress',
          ),
        ],
      ),
    );
  }

  Widget _buildStatCard(String number, String label, Color color) {
    return Container(
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            spreadRadius: 1,
            blurRadius: 4,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          Text(
            number,
            style: TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
              color: color,
            ),
          ),
          SizedBox(height: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey[600],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildWorkoutCard() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            spreadRadius: 1,
            blurRadius: 4,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Upper Body Strength',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w600,
            ),
          ),
          SizedBox(height: 4),
          Text(
            '45 minutes',
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey[600],
            ),
          ),
          SizedBox(height: 12),
          ElevatedButton(
            onPressed: () {},
            child: Text('Start Workout'),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.indigo,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildProgressChart() {
    return Container(
      height: 200,
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            spreadRadius: 1,
            blurRadius: 4,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Center(
        child: Text(
          'Progress Chart Placeholder',
          style: TextStyle(
            fontSize: 16,
            color: Colors.grey[600],
          ),
        ),
      ),
    );
  }
}`,
}

export function CodePreview({ app, isGenerating }: CodePreviewProps) {
  const [selectedFramework, setSelectedFramework] = useState<"reactnative" | "flutter" | "swift" | "kotlin">(
    "reactnative",
  )

  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <LoadingSpinner size="lg" className="text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating mobile app code...</h3>
          <p className="text-gray-600 mb-4">Creating production-ready code for multiple platforms</p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>App architecture created</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>React Native components generated</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Optimizing for mobile platforms...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!app) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No code generated yet</h3>
          <p className="text-gray-600">Generate a mobile app first to see the source code.</p>
        </div>
      </div>
    )
  }

  const frameworks = [
    { id: "reactnative", name: "React Native", color: "bg-blue-100 text-blue-700" },
    { id: "flutter", name: "Flutter", color: "bg-cyan-100 text-cyan-700" },
    { id: "swift", name: "Swift (iOS)", color: "bg-orange-100 text-orange-700" },
    { id: "kotlin", name: "Kotlin (Android)", color: "bg-purple-100 text-purple-700" },
  ]

  const getCurrentCode = () => {
    if (selectedFramework === "reactnative") return sampleCode.reactnative
    if (selectedFramework === "flutter") return sampleCode.flutter
    return "// Code generation for this framework is coming soon..."
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Code Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="font-semibold text-gray-900">{app.name} - Source Code</h3>
            <Badge variant="secondary">{app.type}</Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Project
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Deploy to App Store
            </Button>
          </div>
        </div>

        {/* Framework Selection */}
        <div className="flex space-x-2 mt-4">
          {frameworks.map((framework) => (
            <button
              key={framework.id}
              onClick={() => setSelectedFramework(framework.id as any)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedFramework === framework.id ? framework.color : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {framework.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Content */}
      <div className="flex-1 overflow-hidden">
        <pre className="h-full overflow-auto p-6 text-sm bg-gray-900 text-gray-100 font-mono">
          <code>{getCurrentCode()}</code>
        </pre>
      </div>

      {/* Code Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Framework: {frameworks.find((f) => f.id === selectedFramework)?.name}</span>
            <span>Lines: {getCurrentCode().split("\n").length}</span>
            <span>Size: {Math.round(getCurrentCode().length / 1024)}KB</span>
          </div>
          <span className="text-green-600">✓ Production Ready</span>
        </div>
      </div>
    </div>
  )
}
