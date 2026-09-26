import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = certificates.find((c) => c.id === openId);

  return (
    <section id="certificates" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading title="Certificates" />
        </Reveal>

        {certificates.length === 0 ? (
          <Reveal>
            <div className="glass rounded-2xl p-8 text-ink-faint text-sm">
              No certificates listed yet — this section will grow as new ones are earned.
            </div>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.05}>
                <button
                  onClick={() => setOpenId(cert.id)}
                  className="glass rounded-2xl p-6 text-left w-full hover:border-accent-light/50 transition-colors focus-ring"
                >
                  <Award size={18} className="text-accent-light mb-3" />
                  <h3 className="font-medium text-ink">{cert.title}</h3>
                  <p className="text-sm text-ink-dim mt-1">{cert.issuer}</p>
                  <p className="text-xs text-ink-faint mt-2">{cert.date}</p>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/80 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setOpenId(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-ink-dim hover:text-ink focus-ring"
              >
                <X size={18} />
              </button>
              {active.image && (
                <img
                  src={active.image}
                  alt={`${active.title} certificate`}
                  className="rounded-lg mb-4 w-full"
                />
              )}
              <h3 className="font-display text-xl text-ink mb-1">{active.title}</h3>
              <p className="text-sm text-ink-dim">{active.issuer}</p>
              <p className="text-xs text-ink-faint mt-1">{active.date}</p>
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-glow hover:text-accent-light"
                >
                  Verify <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
