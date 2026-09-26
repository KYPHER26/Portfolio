import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | undefined;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-void/80 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 max-w-lg w-full relative max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink-dim hover:text-ink focus-ring"
            >
              <X size={18} />
            </button>

            <span
              className={`inline-block text-xs px-2.5 py-1 rounded-full font-mono mb-3 ${
                project.status === "Live"
                  ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30"
                  : "bg-yellow-400/10 text-yellow-300 border border-yellow-400/30"
              }`}
            >
              {project.status}
            </span>

            <h3 className="font-display text-2xl text-ink mb-3">{project.name}</h3>
            <p className="text-ink-dim leading-relaxed">
              {project.longDescription ?? project.description}
            </p>

            {project.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
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

            <div className="mt-7 flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-accent-light text-sm text-ink transition-colors focus-ring"
                >
                  <Github size={15} /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-colors focus-ring"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <p className="text-sm text-ink-faint italic">Links coming soon.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
