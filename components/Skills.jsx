"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories, proficiencies } from "@/data/portfolio";

function getIconForCategory(iconType) {
  const icons = {
    monitor: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    server: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="1" ry="1"></rect>
        <rect x="2" y="14" width="20" height="8" rx="1" ry="1"></rect>
        <line x1="6" y1="6" x2="6" y2="6.01"></line>
        <line x1="6" y1="18" x2="6" y2="18.01"></line>
      </svg>
    ),
    database: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
        <path d="M3 12a9 3 0 0 0 18 0"></path>
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-icon lucide-cloud">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
),
    microsoft: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="8" height="8" fill="#F25022"></rect>
        <rect x="14" y="2" width="8" height="8" fill="#7FBA00"></rect>
        <rect x="2" y="14" width="8" height="8" fill="#00A4EF"></rect>
        <rect x="14" y="14" width="8" height="8" fill="#FFB900"></rect>
      </svg>
    ),
    sparkles: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  };
  return icons[iconType] || null;
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          title="Technical Expertise"
          description="Technologies refined through practical experience in backend development, microservices and modern web applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent">{getIconForCategory(cat.icon)}</div>
                <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded bg-card text-muted-foreground border border-border transition-all duration-200 hover:border-sky-500 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Core Proficiencies</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {proficiencies.map((prof, i) => (
            <motion.div
              key={prof.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground/90">{prof.name}</span>
                <span className="text-muted">{prof.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${prof.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
