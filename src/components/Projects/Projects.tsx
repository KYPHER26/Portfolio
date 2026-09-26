import { useMemo, useState } from "react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "React",
  "Firebase",
  "Cybersecurity",
  "Other",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  const activeProject = projects.find((p) => p.id === openId);

  return (
    <section id="projects" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Projects"
            description="A mix of client work, tools and things I've built to learn."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors focus-ring ${
                  filter === f
                    ? "bg-accent border-accent text-white"
                    : "border-border text-ink-dim hover:text-ink hover:border-accent-light/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.05, 0.3)}>
              <ProjectCard project={project} onOpen={setOpenId} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-ink-faint text-sm">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />
    </section>
  );
}
