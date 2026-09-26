import { ArrowUp, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/data/config";

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, whatsapp: MessageCircle };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-14 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
          <div>
            <p className="font-display font-semibold text-lg text-ink">{siteConfig.name}</p>
            <p className="text-sm text-ink-dim mt-1">Building technology. Creating possibilities.</p>
            <div className="inline-flex items-center gap-2 mt-4 text-xs text-ink-faint">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Available for opportunities
            </div>
          </div>

          <div className="flex gap-12">
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-dim hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-ink-dim hover:text-cyan-glow transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          <p className="text-xs text-ink-faint">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="p-2.5 rounded-lg border border-border text-ink-dim hover:text-ink hover:border-accent-light/50 transition-colors focus-ring"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
