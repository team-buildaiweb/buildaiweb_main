import { MetadataRoute } from "next";

// Add these exports for static generation
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildaiweb.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/blog",
    "/careers",
    "/community",
    "/contact",
    "/features",
    "/gdpr",
    "/pricing",
    "/privacy",
    "/status",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts would be added dynamically here
  // Example:
  // const posts = await getBlogPosts()
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...routes];
}
