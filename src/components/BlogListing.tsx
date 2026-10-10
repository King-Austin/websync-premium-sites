"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogPosts } from "@/data/blogData";
import Shell from "@/components/revamp/Shell";
import { FinalCTA } from "@/components/revamp/Sections";
export default function BlogListing() {
  const [category, setCategory] = useState("All stories");
  const categories = [
    "All stories",
    ...new Set(allBlogPosts.map((p) => p.category)),
  ];
  const visible = allBlogPosts.filter(
    (p) => category === "All stories" || p.category === category,
  );
  return (
    <Shell>
      <section className="ws-section ws-container ws-page-intro">
        <span className="ws-eyebrow">THE WEBSYNC JOURNAL</span>
        <h1>
          Ideas for your
          <br />
          <em>next digital move.</em>
        </h1>
        <p>
          Our existing guides on websites, design, security and business
          technology.
        </p>
      </section>
      <section className="ws-section ws-container ws-work-collection">
        <div className="ws-filters" role="group" aria-label="Filter articles">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p role="status" className="ws-result">
          {visible.length} articles
        </p>
        <div className="ha-blog-grid">
          {visible.map((p) => (
            <article key={p.id}>
              <Link href={`/blog/${p.id}`}>
                <Image src={p.image} alt={p.title} width={700} height={440} />
              </Link>
              <div>
                <span className="ws-eyebrow">{p.category}</span>
                <h3>
                  <Link href={`/blog/${p.id}`}>{p.title}</Link>
                </h3>
                <p>{p.description}</p>
                <small>
                  {p.date} · {p.readTime || "Read article"}
                </small>
                <Link href={`/blog/${p.id}`} className="ws-text-link">
                  Read story ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </Shell>
  );
}
