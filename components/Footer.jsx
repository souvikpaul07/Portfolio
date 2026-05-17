import { site } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 md:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
