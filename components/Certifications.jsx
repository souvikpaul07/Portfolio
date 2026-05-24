"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, site } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          title="Credentials & Badges"
          description="Credentials showcasing expertise in Java, AI tools and modern development workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 md:mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-5 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
            >
              <span className="text-xs font-mono text-accent mb-3 block">
                {cert.code}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-muted mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted/80">{cert.period}</p>
              {cert.earned && (
                <span className="inline-block mt-3 text-xs text-emerald-500 dark:text-emerald-400">
                  Certificate Earned
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {site.learnProfile && (
          <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-blue-500/10 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                
              </h3>
              <p className="text-sm text-muted">
                Credentials showcasing expertise in Java, AI tools and modern development workflows.
              </p>
            </div>
            <a
              href={site.learnProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 text-sm border border-border rounded-lg text-foreground hover:bg-card-hover transition-colors"
            >
              Microsoft Learn Profile ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
