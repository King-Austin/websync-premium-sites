import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/pricing',
          '/work',
          '/contact',
          '/blog',
          '/west',
        ],
        disallow: [
          '/private/',
          '/api/',
          '/_next/',
        ],
      },
      // Explicitly invite Googlebot for maximum crawl priority
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: 'https://www.websyncdigital.com.ng/sitemap.xml',
    host: 'https://www.websyncdigital.com.ng',
  };
}
