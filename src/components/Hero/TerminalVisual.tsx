import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Terminal } from "lucide-react";

const LINES = [
  { text: "$ whoami", color: "text-ink-dim" },
  { text: "kypher — software developer", color: "text-ink" },
  { text: "$ status --check", color: "text-ink-dim" },
  { text: "> systems secure, builds passing", color: "text-cyan-glow" },
  { text: "$ focus", color: "text-ink-dim" },
  { text: "> software development & cybersecurity", color: "text-accent-light" },
];

export default function TerminalVisual() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-glow-sm z-10"
      >
        <ShieldCheck size={16} className="text-cyan-glow" />
        <span className="text-xs font-mono text-ink-dim">secure by default</span>
      </motion.div>

      <div className="glass rounded-2xl shadow-glow overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 flex items-center gap-1.5 text-xs text-ink-faint font-mono">
            <Terminal size={12} /> kypher@dev
          </span>
        </div>
        <div className="p-6 font-mono text-sm space-y-2 min-h-[220px]">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={line.color}
            >
              {line.text}
            </motion.p>
          ))}
          {visibleLines < LINES.length && (
            <span className="inline-block w-2 h-4 bg-cyan-glow/70 animate-pulse-dot" />
          )}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-5 -left-5 glass rounded-xl px-3 py-2 text-xs font-mono text-ink-dim shadow-glow-sm"
      >
        React · TypeScript · Firebase
      </motion.div>
    </div>
  );
}
