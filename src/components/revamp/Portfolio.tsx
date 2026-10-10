"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  projects,
  projectCategories,
  featuredProjects,
  type ProjectCategory,
} from "@/data/projects";

export default function Portfolio({
  featured = false,
}: {
  featured?: boolean;
}) {
  const [category, setCategory] = useState<ProjectCategory>("All work");
  const visible = featured
    ? featuredProjects.map((slug) => projects.find((p) => p.slug === slug)!)
    : projects.filter(
        (p) => category === "All work" || p.category === category,
      );
  return (
    <>
      {!featured && (
        <div
          className="ws-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      {!featured && (
        <p className="ws-result" role="status">
          Showing {visible.length} of {projects.length} projects
        </p>
      )}
      <div className="ws-projects">
        {visible.map((p) => (
          <article key={p.slug} className="ws-project">
            <a
              href={`https://www.${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name} (opens in a new tab)`}
              className="ws-project-image"
            >
              <div className="ws-browserbar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{p.domain}</span>
                <ArrowUpRight size={13} />
              </div>
              <div className="ws-capture">
                <Image
                  src={`/projects/${p.slug}.jpg`}
                  alt={`${p.name} homepage screenshot`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </div>
            </a>
            <div className="ws-project-copy">
              <span className="ws-tag">{p.sector}</span>
              <h3>
                <a
                  href={`https://www.${p.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.name}
                  <ArrowUpRight size={20} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <p>{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
