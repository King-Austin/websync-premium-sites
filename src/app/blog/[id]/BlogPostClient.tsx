import type { BlogPost } from "@/data/blogData";
import { allBlogPosts } from "@/data/blogData";
import Link from "next/link";
import Image from "next/image";
import Shell from "@/components/revamp/Shell";
export default function BlogPostClient({ post }: { post: BlogPost }) {
  const related = allBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  return (
    <Shell>
      <article className="ha-article ws-container">
        <header>
          <Link href="/blog" className="ws-text-link">
            ← Back to the journal
          </Link>
          <span className="ws-eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <small>
            {post.author} · {post.date} · {post.readTime}
          </small>
        </header>
        <Image src={post.image} alt={post.title} width={1100} height={650} />
        <div
          className="ha-article-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="ha-related">
          <h2>Keep exploring.</h2>
          {related.map((p) => (
            <Link href={`/blog/${p.id}`} key={p.id}>
              {p.title} ↗
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  );
}
