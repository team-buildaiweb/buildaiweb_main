import {
  BookOpen,
  Rocket,
  Code,
  Lightbulb,
  Smartphone,
  Server,
  Shield,
  Settings,
} from "lucide-react";

export type GuideType = {
  slug: string;
  title: string;
  description: string;
  time: string;
  category: string;
  icon: any;
  content: string;
};

export type DocSectionType = {
  id: string;
  title: string;
  description: string;
  icon: any;
  items: GuideType[];
};

export const docSections: DocSectionType[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Start your journey building AI-powered mobile apps",
    icon: Rocket,
    items: [
      {
        slug: "quick-start",
        title: "Quick Start Guide",
        description: "Create your first mobile app in minutes",
        time: "5 min read",
        category: "getting-started",
        icon: BookOpen,
        content: `# Quick Start Guide

## Introduction
Welcome to BuildAIWeb's mobile app development platform! This guide will help you create your first AI-powered mobile app in minutes.

## Prerequisites
- A BuildAIWeb account
- Basic understanding of what you want to build
- No coding experience required!

## Steps to Create Your First App

### 1. Project Setup
1. Log in to your BuildAIWeb dashboard
2. Click "New Project"
3. Select "Mobile App" as your project type

### 2. Describe Your App
Simply describe your app in plain English. For example:
"Create a fitness tracking app with workout plans, progress charts, and social features"

### 3. Customize and Preview
- Review the generated app structure
- Customize colors and branding
- Test on virtual devices

### 4. Deploy and Publish
- One-click deployment
- Generate store assets
- Submit to app stores

## Next Steps
- Explore advanced features
- Add backend services
- Implement user authentication`,
      },
      {
        slug: "installation-setup",
        title: "Installation & Setup",
        description: "Set up your development environment",
        time: "10 min read",
        category: "getting-started",
        icon: Settings,
        content: `# Installation & Setup

## System Requirements
- Modern web browser
- Internet connection
- No local development environment needed

## Account Setup
1. Create your account
2. Verify your email
3. Set up 2FA (recommended)

## Development Environment
All development happens in our cloud environment:
- Real-time preview
- Cross-platform testing
- Automatic updates`,
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Learn about building native mobile apps with AI",
    icon: Smartphone,
    items: [
      {
        slug: "native-features",
        title: "Native App Features",
        description: "Implement platform-specific features",
        time: "15 min read",
        category: "app-development",
        icon: Code,
        content: `# Native App Features

## Available Features
- Camera access
- GPS and location services
- Push notifications
- Biometric authentication
- Local storage
- Background tasks

## Implementation
Our AI automatically implements native features based on your requirements.`,
      },
      {
        slug: "ui-components",
        title: "UI Components",
        description: "Available UI components and customization",
        time: "12 min read",
        category: "app-development",
        icon: Lightbulb,
        content: `# UI Components

## Component Library
- Material Design support
- iOS Human Interface
- Custom components
- Responsive layouts

## Customization
Easily customize:
- Colors and themes
- Typography
- Animations
- Layout`,
      },
    ],
  },
  {
    id: "backend-services",
    title: "Backend Services",
    description: "Integrate powerful backend services",
    icon: Server,
    items: [
      {
        slug: "authentication",
        title: "User Authentication",
        description: "Implement secure user authentication",
        time: "10 min read",
        category: "backend-services",
        icon: Shield,
        content: `# User Authentication

## Available Methods
- Email/Password
- Social login
- Phone authentication
- Biometric authentication

## Security Features
- JWT tokens
- Refresh tokens
- Session management
- Rate limiting`,
      },
    ],
  },
];

export const getAllGuides = () => {
  return docSections.flatMap((section) => section.items);
};

export const getGuideBySlug = (slug: string) => {
  return getAllGuides().find((guide) => guide.slug === slug);
};

export const getGuidePaths = () => {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
};
