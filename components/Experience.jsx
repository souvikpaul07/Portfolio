"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="04"
          title="Work History"
          description="Hands-on experience in building and maintaining enterprise backend systems and modern applications."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.title + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="p-5 sm:p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-muted mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted">{job.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 text-xs rounded border mb-1 text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10">
                    {job.type}
                  </span>
                  <p className="text-xs text-muted">{job.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 ml-6 sm:ml-10">
                {job.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex gap-2">
                    <span className="text-accent shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 ml-6 sm:ml-10">
                {job.tech.map((t) => (
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
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-sm text-muted mb-1">{edu.school}</p>
                <p className="text-xs text-muted">{edu.detail}</p>
                {edu.note && (
                  <p className="text-xs text-accent mt-2">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
