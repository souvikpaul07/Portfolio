"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, techTags, stats, industries } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="pt-20 pb-12 md:pt-32 lg:pt-36 md:pb-20 lg:pb-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-badge-border bg-badge-bg text-sm text-muted mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          {site.availability}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              {site.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted mb-6">{site.title}</p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-8 max-w-xl">
            1+ years of experience in the field of software development. I have a strong background in{" "}
              <strong className="text-foreground font-medium">Java Backend Development</strong>,{" "}
              <strong className="text-foreground font-medium">SpringBoot</strong>,{" "}
              <strong className="text-foreground font-medium">Microservices</strong>,{" "}
              <strong className="text-foreground font-medium">MySQL</strong> and {""}
              <strong className="text-foreground font-medium">DBeaver</strong>.{" "}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-md bg-card border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-card-hover transition-colors"
              >
                Get in Touch
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-card-hover transition-colors inline-flex items-center gap-2"
              >
                <DownloadIcon />
                Resume
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-card-hover transition-colors"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-40 h-52 sm:w-48 md:w-56 md:h-64 lg:w-[218px] lg:h-[258px] mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden border border-border bg-card">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={218}
                height={258}
                priority
                className="object-cover object-top"
                sizes="218px"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-overlay to-transparent z-10">
                <p className="text-sm text-white flex items-center gap-1.5">
                  <LocationIcon />
                  {site.location}
                </p>
              </div>
            </div>

            <div className="w-40 sm:w-48 md:w-56 lg:w-[218px] mx-auto lg:ml-auto lg:mr-0 p-4 rounded-xl border border-border bg-card flex items-center gap-4">
              {/* Swap logo: <WiproLogo /> or <MicrosoftLogo /> */}
              <WiproLogo />
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Project Engineer Wipro
                </p>
                <p className="text-xs text-muted flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active · 2025-Present
                </p>
              </div>
            </div>

            <div className="w-40 sm:w-48 md:w-56 lg:w-[218px] mx-auto lg:ml-auto lg:mr-0">
              <p className="text-xs text-muted uppercase tracking-wider mb-3">
                Industries & domains
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-2.5 py-1 text-xs rounded-md bg-card text-muted border border-border"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 text-center ${i % 2 > 0 ? "border-l border-border" : ""}  ${i > 1 ? "border-t border-border sm:border-t-0" : ""}`}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WiproLogo() {
  return (
    <Image
      src={site.employerLogo}
      alt="Wipro"
      width={32}
      height={32}
      className="w-8 h-8 shrink-0 object-contain"
    />
  );
}

// MicrosoftLogo function removed - not used in component
//       <div className="bg-[#00a4ef]" />
//       <div className="bg-[#ffb900]" />
//     </motion.div>
//   );
// }
