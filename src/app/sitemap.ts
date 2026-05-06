import { MetadataRoute } from 'next';
import { allBlogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.websyncdigital.com.ng';
  const now = new Date();

  // Helper to escape XML-illegal characters in URLs (specifically ampersands in Unsplash queries)
  const escapeUrl = (url: string) => url.replace(/&/g, '&amp;');

  // Individual blog posts — auto-mapped with their cover images
  const blogPosts = allBlogPosts.map((post) => {
    const imageUrl = post.image.startsWith('http') 
      ? post.image 
      : `${baseUrl}${post.image.startsWith('/') ? '' : '/'}${post.image}`;
      
    return {
      url: escapeUrl(`${baseUrl}/blog/${post.id}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: post.image ? [escapeUrl(imageUrl)] : [],
    };
  });

  return [
    // ── Tier 1: Homepage (critical anchor)
    {
      url: escapeUrl(baseUrl),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        escapeUrl(`${baseUrl}/icon.png`),
        escapeUrl(`${baseUrl}/assets/hero-image.jpg`),
        escapeUrl(`${baseUrl}/assets/paystack-logo.jpg`),
      ],
    },

    // ── Tier 2: Core commercial pages (sitelink targets)
    {
      url: escapeUrl(`${baseUrl}/pricing`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: escapeUrl(`${baseUrl}/work`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: escapeUrl(`${baseUrl}/contact`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Tier 3: Authority pages
    {
      url: escapeUrl(`${baseUrl}/west`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [escapeUrl(`${baseUrl}/assets/west_profile_updated.jpg`)],
    },
    {
      url: escapeUrl(`${baseUrl}/about`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: escapeUrl(`${baseUrl}/blog`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Tier 4: Blog posts
    ...blogPosts,

    // ── Tier 5: Legal / utility (minimal crawl budget)
    {
      url: escapeUrl(`${baseUrl}/terms`),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: escapeUrl(`${baseUrl}/privacy`),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}
