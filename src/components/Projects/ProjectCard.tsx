import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (id: string) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="group glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent-light/50 transition-colors duration-300">
      <div className="aspect-[16/10] bg-surface flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="font-display text-3xl text-ink-faint">{project.name.charAt(0)}</span>
        )}
        <span
          className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-mono ${
            project.status === "Live"
              ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30"
              : "bg-yellow-400/10 text-yellow-300 border border-yellow-400/30"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-medium text-ink mb-1.5">{project.name}</h3>
        <p className="text-sm text-ink-dim leading-relaxed flex-1">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-surface border border-border text-ink-faint"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => onOpen(project.id)}
            className="text-sm text-cyan-glow hover:text-accent-light transition-colors focus-ring"
          >
            View details
          </button>
          <div className="ml-auto flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="p-2 rounded-lg border border-border text-ink-dim hover:text-ink hover:border-accent-light/50 transition-colors focus-ring"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="p-2 rounded-lg border border-border text-ink-dim hover:text-ink hover:border-accent-light/50 transition-colors focus-ring"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
