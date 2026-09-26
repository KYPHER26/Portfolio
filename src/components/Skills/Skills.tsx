import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/data/skills";
import { SkillCategory, SkillLevel } from "@/types";

const categories: SkillCategory[] = ["Frontend", "Backend", "Tools", "Cybersecurity"];

const levelWidth: Record<SkillLevel, string> = {
  Learning: "35%",
  Comfortable: "70%",
  Advanced: "95%",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Skills"
            description="Tools and technologies I use regularly, grouped by area."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, ci) => {
            const items = skills.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <Reveal key={category} delay={ci * 0.06}>
                <div className="glass rounded-2xl p-6 h-full">
                  <h3 className="font-display font-medium text-lg text-ink mb-5">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-ink-dim">{skill.name}</span>
                          <span className="text-xs font-mono text-ink-faint">{skill.level}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-glow transition-all duration-700"
                            style={{ width: levelWidth[skill.level] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
