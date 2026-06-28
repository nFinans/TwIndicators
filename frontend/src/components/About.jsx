import { motion } from "framer-motion";
import { LineChart, Brain, Activity } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const ICONS = [LineChart, Brain, Activity];

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative border-t border-white/[0.07] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-white/40">06</span>
              <span className="h-px w-8 bg-[#e2f331]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e2f331]">
                {t.about.kicker}
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.02] tracking-tight text-white sm:text-5xl">
              {t.about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              {t.about.body}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.about.pillars.map((p, i) => {
                const Icon = ICONS[i];
                return (
                  <div
                    key={p.title}
                    data-testid={`about-pillar-${i}`}
                    className="group rounded-2xl border border-white/[0.07] bg-[#0e141b] p-5 transition-all hover:border-[#e2f331]/40 hover:-translate-y-1"
                  >
                    <Icon className="text-[#e2f331]" size={20} />
                    <h3 className="mt-3 font-heading text-base font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
