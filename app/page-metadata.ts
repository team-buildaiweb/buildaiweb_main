export const pagesMetadata = {
  home: {
    title: "Transform Ideas into Mobile Apps with AI",
    description:
      "Create powerful native mobile applications in minutes using AI. No coding required. Transform your ideas into reality with our intuitive development platform.",
    schema: {
      "@type": "WebSite",
      name: "BuildAIWeb",
      description: "AI-Powered Mobile App Development Platform",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://buildaiweb.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
  features: {
    title: "Features - AI-Powered Mobile App Development Tools",
    description:
      "Discover the powerful features of BuildAIWeb's AI-driven mobile app development platform. From instant UI generation to native code export, explore how we make app creation effortless.",
    schema: {
      "@type": "WebPage",
      name: "BuildAIWeb Features",
      description:
        "Comprehensive features of the BuildAIWeb AI-powered mobile app development platform",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI-Powered App Generation",
            description:
              "Create complete mobile apps using natural language descriptions",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Native Code Export",
            description:
              "Export clean, production-ready native code for iOS and Android",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Real-time Preview",
            description:
              "See your app updates in real-time as you make changes",
          },
        ],
      },
    },
  },
  pricing: {
    title: "Pricing - Flexible Plans for Every Developer",
    description:
      "Choose the perfect plan for your mobile app development needs. From free starter plans to full-featured professional options with unlimited builds.",
    schema: {
      "@type": "WebPage",
      name: "BuildAIWeb Pricing Plans",
      description:
        "Pricing plans for BuildAIWeb's AI mobile app development platform",
      mainEntity: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: "0",
        minPrice: "0",
        maxPrice: "99",
        validFrom: "2025-01-01",
        validThrough: "2025-12-31",
      },
    },
  },
  blog: {
    title: "Blog - Mobile App Development Insights",
    description:
      "Stay updated with the latest in AI-powered mobile app development. Expert insights, tutorials, and best practices for modern app creation.",
    schema: {
      "@type": "Blog",
      name: "BuildAIWeb Blog",
      description:
        "Expert insights and tutorials on AI-powered mobile app development",
    },
  },
  docs: {
    title: "Documentation - Getting Started with BuildAIWeb",
    description:
      "Comprehensive documentation for BuildAIWeb's AI mobile app development platform. Learn how to create, customize, and deploy your applications.",
    schema: {
      "@type": "TechArticle",
      name: "BuildAIWeb Documentation",
      description: "Technical documentation and guides for BuildAIWeb platform",
      proficiencyLevel: "Beginner to Advanced",
    },
  },
  contact: {
    title: "Contact Us - Get Support and Information",
    description:
      "Get in touch with our team for support, inquiries, or partnership opportunities. We're here to help you succeed with your mobile app development.",
    schema: {
      "@type": "ContactPage",
      name: "Contact BuildAIWeb",
      description: "Contact information and support for BuildAIWeb platform",
      mainEntity: {
        "@type": "Organization",
        name: "BuildAIWeb Support",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "",
          contactType: "customer service",
          email: "support@buildaiweb.com",
          availableLanguage: ["English"],
        },
      },
    },
  },
} as const;
