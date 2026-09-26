import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading title="Education" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((entry, i) => {
            const filled = entry.institution || entry.program || entry.year;
            return (
              <Reveal key={entry.id} delay={i * 0.06}>
                <div className="glass rounded-2xl p-6 h-full">
                  <p className="text-xs font-mono text-accent-light mb-2">{entry.level}</p>
                  {filled ? (
                    <>
                      <h3 className="font-medium text-ink">{entry.institution}</h3>
                      <p className="text-sm text-ink-dim mt-1">{entry.program}</p>
                      <p className="text-xs text-ink-faint mt-2">{entry.year}</p>
                      {entry.description && (
                        <p className="text-sm text-ink-dim leading-relaxed mt-3">
                          {entry.description}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-ink-faint italic">To be added.</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
