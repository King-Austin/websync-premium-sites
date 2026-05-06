import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogPosts } from '@/data/blogData';
import BlogPostClient from './BlogPostClient';
import Script from 'next/script';

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = allBlogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: 'Post Not Found | WebSync Digital',
    };
  }

  const baseUrl = 'https://www.websyncdigital.com.ng';
  const postUrl = `${baseUrl}/blog/${post.id}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;

  return {
    title: `${post.title} | Digital Growth by WebSync Digital`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "WebSync Digital",
      locale: "en_NG",
      type: "article",
      publishedTime: post.date,
      authors: ["West Taylor"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = allBlogPosts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }

  const baseUrl = 'https://www.websyncdigital.com.ng';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "@id": `${baseUrl}/blog/${post.id}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "WebSync Digital",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "WebSync Digital",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.id}`
    }
  };

  return (
    <>
      <Script
        id={`breadcrumb-schema-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`article-schema-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
