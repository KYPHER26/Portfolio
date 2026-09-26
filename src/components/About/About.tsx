import { Code2, Target, Compass } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/config";

const pillars = [
  {
    icon: Code2,
    title: "Interests",
    body: "Web development, automation, and understanding how systems can be built more securely from the ground up.",
  },
  {
    icon: Compass,
    title: "Development Philosophy",
    body: "Clean, maintainable code beats clever code. I'd rather ship something simple that works than something impressive that breaks.",
  },
  {
    icon: Target,
    title: "Career Goals",
    body: "Growing into a well-rounded developer who can build a product end-to-end and reason seriously about its security.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <Reveal>
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl glass shadow-glow overflow-hidden flex items-center justify-center">
                {/* TODO: replace with a real profile photo, e.g. /profile.jpg in /public */}
                <span className="font-display text-6xl text-accent-light">K</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-ink-dim leading-relaxed text-lg">{siteConfig.bio}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-mono text-cyan-glow">
                Currently focused on: {siteConfig.focus}
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="glass rounded-xl p-5 h-full">
                    <p.icon size={18} className="text-accent-light mb-3" />
                    <h3 className="font-medium text-ink mb-1.5">{p.title}</h3>
                    <p className="text-sm text-ink-dim leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs text-ink-faint mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
