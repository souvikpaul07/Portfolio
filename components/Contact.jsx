"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { site } from "@/data/portfolio";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-input-bg border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject") || "Portfolio inquiry";
    const message = data.get("message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="06"
          title="Let's Work Together"
          description="Interested in building impactful software and contributing to modern engineering teams."
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/5">
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                Available for new roles
              </p>
              <p className="text-sm text-muted">
                Open to backend, full-stack and application development opportunities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard label="Email" value={site.email} href={`mailto:${site.email}`} />
              <InfoCard label="Location" value={site.location} />
              <InfoCard label="Timezone" value={site.timezone} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3">
                <ConnectLink
                  label="LinkedIn"
                  sub="linkedin.com/in/paul-souvik"
                  href={site.linkedin}
                />
                <ConnectLink
                  label="GitHub"
                  sub="github.com/souvikpaul07"
                  href={site.github}
                />
                {site.learnProfile && (
                  <ConnectLink
                    label="Microsoft Learn"
                    sub="Microsoft Certified Profile"
                    href={site.learnProfile}
                  />
                )}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4"
          >
            <FormField label="Name *" name="name" required placeholder="Your full name" />
            <FormField
              label="Email *"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
            />
            <FormField
              label="Subject"
              name="subject"
              placeholder="What's this about?"
            />
            <div>
              <label className="block text-xs text-muted mb-1.5">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, role, or opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-foreground text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {status === "sent" ? "Opening email client…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value, href }) {
  const content = (
    <p className="text-sm text-foreground font-medium break-all">{value}</p>
  );
  return (
    <div className="p-4 rounded-xl border border-border bg-card">
      <p className="text-xs text-muted mb-1">{label}</p>
      {href ? (
        <a href={href} className="hover:text-accent transition-colors">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function ConnectLink({ label, sub, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors group"
    >
      <div>
        <p className="text-sm font-medium text-foreground group-hover:text-accent">
          {label}
        </p>
        <p className="text-xs text-muted">{sub}</p>
      </div>
      <span className="text-muted group-hover:text-foreground">↗</span>
    </a>
  );
}

function FormField({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="block text-xs text-muted mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
