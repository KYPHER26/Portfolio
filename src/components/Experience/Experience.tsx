import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading title="Experience" />
        </Reveal>

        {experience.length === 0 ? (
          <Reveal>
            <div className="glass rounded-2xl p-8 text-ink-faint text-sm">
              No formal experience listed yet — check back soon, or see{" "}
              <a href="#projects" className="text-cyan-glow hover:text-accent-light">
                Projects
              </a>{" "}
              for hands-on work.
            </div>
          </Reveal>
        ) : (
          <div className="relative pl-8 border-l border-border space-y-10">
            {experience.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-light shadow-glow-sm" />
                  <p className="text-xs font-mono text-ink-faint mb-1">{entry.date}</p>
                  <h3 className="font-medium text-ink">{entry.position}</h3>
                  <p className="text-sm text-accent-light mb-2">{entry.organization}</p>
                  <p className="text-sm text-ink-dim leading-relaxed">{entry.description}</p>
                  {entry.technologies && entry.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-surface border border-border text-ink-faint"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
