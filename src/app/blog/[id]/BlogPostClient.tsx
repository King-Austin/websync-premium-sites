"use client";

import { useRouter } from 'next/navigation';
import { BlogPost, allBlogPosts } from '@/data/blogData';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const router = useRouter();

  // Get related posts (same category, excluding current)
  const relatedPosts = allBlogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-20 bg-[#050505] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors duration-300 mb-12 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:-translate-x-1">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Back to Insights</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest">
                  {post.category}
                </span>
                <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  {post.readTime || '5 min read'}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium leading-[1.2] md:leading-[1.1] mb-8 md:mb-12">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=040404&color=fff&bold=true`} 
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-medium text-lg">{post.author}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {post.authorRole || 'Contributor'} • {post.date}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 md:-mt-16 z-20 px-4 md:px-0">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[21/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900"
          >
            <Image 
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="prose prose-lg md:prose-xl prose-zinc max-w-none 
              prose-headings:font-display prose-headings:font-medium prose-headings:text-black prose-headings:tracking-tight
              prose-p:font-body prose-p:text-black/80 prose-p:leading-[1.8] prose-p:mb-6 md:mb-8
              prose-li:font-body prose-li:text-black/80 prose-li:mb-2 md:mb-3
              prose-strong:text-black prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline decoration-primary/30 underline-offset-4
              prose-img:rounded-2xl md:prose-img:rounded-3xl prose-img:shadow-xl md:prose-img:shadow-2xl prose-img:border prose-img:border-black/5
              /* Lead paragraph styling */
              [&>p:first-of-type]:text-xl md:[&>p:first-of-type]:text-2xl [&>p:first-of-type]:text-black [&>p:first-of-type]:leading-[1.6] [&>p:first-of-type]:font-medium [&>p:first-of-type]:mb-10 md:[&>p:first-of-type]:mb-12 [&>p:first-of-type]:tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-20 pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Share:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Twitter', 'LinkedIn', 'Copy Link'].map(platform => (
                  <button key={platform} className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => router.push('/blog')}
              className="px-10 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300"
            >
              Back to All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-16 px-1">
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Recommended</span>
                <h2 className="text-3xl md:text-4xl font-display font-medium">Continue Reading</h2>
              </div>
              <Link href="/blog" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedPosts.map((rPost) => (
                <Link key={rPost.id} href={`/blog/${rPost.id}`} className="group">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                    <Image src={rPost.image} alt={rPost.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-display font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {rPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-custom">
          <div className="bg-[#050505] text-white rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
             
             <div className="max-w-2xl mx-auto relative z-10">
               <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 leading-tight">
                 Scale your business with <br />
                 <span className="text-primary italic">WebSync Insights</span>
               </h2>
               <p className="text-white/60 font-body mb-12 text-lg">
                 Join 500+ Nigerian founders who receive our weekly digital blueprint.
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="flex-1 px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-body"
                  />
                  <button className="px-10 py-5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
                    Subscribe
                  </button>
               </form>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
