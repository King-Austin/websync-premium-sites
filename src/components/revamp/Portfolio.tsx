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
  rail = false,
}: {
  featured?: boolean;
  rail?: boolean;
}) {
  const [category, setCategory] = useState<ProjectCategory>("All work");
  const visible = featured
    ? featuredProjects.map((slug) => projects.find((p) => p.slug === slug)!)
    : projects.filter(
        (p) => category === "All work" || p.category === category,
      );
  return (
    <>
      {!featured && !rail && (
        <>
          <div
            className="ws-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="ws-result" role="status">
            Showing {visible.length} of {projects.length} projects
          </p>
        </>
      )}
      <div
        className={`ws-projects ${rail ? "ha-project-rail" : "ha-project-grid"}`}
        tabIndex={rail ? 0 : undefined}
        aria-label={
          rail ? "Client projects. Scroll horizontally to explore." : undefined
        }
      >
        {visible.map((p, index) => (
          <article key={p.slug} className="ws-project">
            <a
              href={`https://www.${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.name} (opens in a new tab)`}
              className="ws-project-image"
            >
              <span className="ha-live-badge">
                <i /> Live website
              </span>
              <div className="ws-capture">
                <Image
                  src={`/projects/${p.slug}.jpg`}
                  alt={`${p.name} homepage screenshot`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 650px) 90vw, (max-width: 1000px) 50vw, 40vw"
                />
              </div>
            </a>
            <div className="ws-project-copy">
              <div className="ha-project-meta">
                <span>
                  {String(index + 1).padStart(2, "0")}{" "}
                  <small>/ {visible.length}</small>
                </span>
                <b>Client project · {p.sector}</b>
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="ha-project-tags">
                <span>{p.category}</span>
                <span>{p.domain}</span>
              </div>
              <a
                className="ws-button ws-button-outline"
                href={`https://www.${p.domain}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site <ArrowUpRight size={16} />
                <span className="sr-only">
                  {" "}
                  for {p.name} (opens in a new tab)
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
      {rail && (
        <p className="ha-scroll-hint">← Scroll to explore all 19 projects →</p>
      )}
    </>
  );
}
