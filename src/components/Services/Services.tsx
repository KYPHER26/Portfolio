import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/services";
import { serviceIconMap } from "./iconMap";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === active);

  return (
    <section id="services" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading title="Services" description="What I can help you build." />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <div className="group glass rounded-2xl p-6 h-full flex flex-col hover:border-accent-light/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent-dim/40 flex items-center justify-center mb-4">
                    {Icon && <Icon size={19} className="text-accent-light" />}
                  </div>
                  <h3 className="font-medium text-ink mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-dim leading-relaxed flex-1">{service.description}</p>
                  <button
                    onClick={() => setActive(service.id)}
                    className="mt-5 text-sm text-cyan-glow hover:text-accent-light transition-colors self-start focus-ring"
                  >
                    Learn More
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/80 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-ink-dim hover:text-ink focus-ring"
              >
                <X size={18} />
              </button>
              <h3 className="font-display text-xl text-ink mb-3">{activeService.title}</h3>
              <p className="text-ink-dim leading-relaxed">{activeService.description}</p>
              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-colors focus-ring"
              >
                Discuss this project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
