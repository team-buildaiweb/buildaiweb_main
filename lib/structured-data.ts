export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuildAIWeb",
    url: "https://buildaiweb.com",
    logo: "https://buildaiweb.com/logo.webp",
    sameAs: [
      "https://x.com/buildaiweb",
      "https://www.pinterest.com/BuildAIWeb",
      "https://www.youtube.com/@BuildAIWeb",
      "https://www.facebook.com/profile.php?id=61577628031714",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "customer service",
      email: "hello@buildaiweb.com",
      availableLanguage: ["English"],
    },
  };
};

export const generateSoftwareApplicationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BuildAIWeb Mobile App Builder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };
};

export const generateFAQSchema = (
  faqs: { question: string; answer: string }[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "BuildAIWeb",
      logo: {
        "@type": "ImageObject",
        url: "https://buildaiweb.com/logo.webp",
      },
    },
  };
};
