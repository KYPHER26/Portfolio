import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/config";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
            <SectionHeading title="GitHub Activity" />
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors focus-ring"
            >
              <Github size={16} /> @{siteConfig.githubUsername}
            </a>
          </div>
        </Reveal>

        {error && (
          <p className="text-ink-faint text-sm">
            Couldn't load repositories right now — visit the{" "}
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-glow hover:text-accent-light"
            >
              GitHub profile
            </a>{" "}
            directly.
          </p>
        )}

        {!error && !repos && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6 h-36 animate-pulse" />
            ))}
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.05}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass rounded-2xl p-6 h-full flex flex-col hover:border-accent-light/50 transition-colors focus-ring"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-ink break-all">{repo.name}</h3>
                    <ExternalLink
                      size={14}
                      className="text-ink-faint group-hover:text-cyan-glow transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-ink-dim mt-2 flex-1 line-clamp-3">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint font-mono">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {repos && repos.length === 0 && (
          <p className="text-ink-faint text-sm">No public repositories found.</p>
        )}
      </div>
    </section>
  );
}
