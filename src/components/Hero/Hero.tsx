import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import TerminalVisual from "./TerminalVisual";

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, whatsapp: MessageCircle };

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid bg-radial-glow"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-ink-dim mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gradient">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-ink-dim font-mono">{siteConfig.tagline}</p>

          <p className="mt-6 max-w-xl text-ink-dim leading-relaxed">
            I build modern digital experiences — websites, applications and technology
            solutions — with clean code and a security-conscious eye.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-colors shadow-glow focus-ring"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent-light text-ink transition-colors focus-ring"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {siteConfig.socials
              .filter((s) => s.icon !== "mail")
              .map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-lg border border-border text-ink-dim hover:text-cyan-glow hover:border-cyan-glow/50 transition-colors focus-ring"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="hidden sm:block"
        >
          <TerminalVisual />
        </motion.div>
      </div>
    </section>
  );
}
