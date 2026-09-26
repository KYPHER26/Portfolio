import { techMarquee } from "@/data/techMarquee";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="py-10 border-y border-border overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-6 sm:mx-8 text-lg sm:text-xl font-display text-ink-faint whitespace-nowrap select-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
