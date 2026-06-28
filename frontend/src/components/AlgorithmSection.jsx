import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import PricingCard from "@/components/PricingCard";

export default function AlgorithmSection({ algo, index }) {
  const { lang, t } = useLang();
  const reversed = index % 2 === 1;

  return (
    <section
      id={`algo-${algo.id}`}
      data-testid={`algo-section-${algo.id}`}
      className="relative border-t border-white/[0.07] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* Sticky numbering column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[110px] font-light leading-none text-white/15 sm:text-[140px]">
                {algo.number}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e2f331]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e2f331]">
                {algo.eyebrow}
              </span>
            </div>
            <h2
              className="mt-5 font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl"
              data-testid={`algo-title-${algo.id}`}
            >
              {algo.title[lang]}
            </h2>
            <p className="mt-4 font-display text-lg italic leading-snug text-white/70">
              {algo.tagline[lang]}
            </p>

            <a
              href={algo.tradingViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`algo-tv-link-${algo.id}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:border-[#e2f331] hover:text-[#e2f331]"
            >
              {t.plans.detailButton}
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Right content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={[
                "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e141b]",
                reversed ? "lg:rotate-[-0.35deg]" : "lg:rotate-[0.35deg]",
              ].join(" ")}
            >
              <img
                src={algo.image}
                alt={algo.title[lang]}
                className="aspect-[16/9] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a0e14]/85 via-transparent to-[#e2f331]/[0.08]" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[#e2f331]/40 bg-[#0a0e14]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#e2f331] backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e2f331]" />
                Pine Script v5
              </div>
            </motion.div>

            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-white/65 sm:text-base">
              {algo.description[lang]}
            </p>

            {/* Pricing grid */}
            <div className="mt-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                {t.sectionLabels.pricingTitle}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {algo.plans.map((p) => (
                  <PricingCard key={p.planId} algoId={algo.id} plan={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
