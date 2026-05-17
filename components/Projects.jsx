"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, projectFilters } from "@/data/portfolio";

const INITIAL_COUNT = 6;

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const remaining = filtered.length - INITIAL_COUNT;

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          title="What I've Built"
          description="Hands-on projects in backend development, microservices and application modernization within enterprise environments."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted border-border hover:border-border hover:text-foreground hover:bg-card-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-border hover:bg-card-hover transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs text-accent font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted">{project.period}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-card text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 text-sm border border-border rounded-lg text-muted hover:text-foreground hover:border-border transition-colors"
            >
              {showAll
                ? "Show Less"
                : `Load More Projects (${remaining} remaining)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
