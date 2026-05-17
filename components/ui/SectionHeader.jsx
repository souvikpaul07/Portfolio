"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <p className="text-sm text-muted mb-3 font-mono tracking-wide">
        <span className="text-muted/80">{number}</span> / {title.toLowerCase()}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
