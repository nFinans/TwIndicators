import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { ALL_IN_ONE } from "@/data/algorithms";
import WhopCheckout from "@/components/WhopCheckout";

const CTA_KEY = {
  "3m": "cta3",
  "6m": "cta6",
  "12m": "cta12",
  lifetime: "ctaLifetime",
};

export default function AllInOnePack() {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="all-in-one"
      data-testid="all-in-one-section"
      className="relative isolate overflow-hidden border-y border-[#e2f331]/20 py-28 sm:py-36"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,243,49,0.12),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e2f331]/40 bg-[#e2f331]/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e2f331]">
            <Sparkles size={12} />
            {t.allInOne.banner}
          </span>
          <h2
            data-testid="all-in-one-title"
            className="max-w-4xl font-display text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-7xl"
          >
            {t.allInOne.title}
          </h2>
          <p className="max-w-xl text-white/65">{t.allInOne.kicker}</p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ALL_IN_ONE.plans.map((plan) => {
            const popular = plan.popular;
            const isOpen = expanded === plan.planId;
            return (
              <div
                key={plan.planId}
                data-testid={`aio-card-${plan.tier}`}
                className={[
                  "relative flex flex-col rounded-3xl border bg-[#0e141b] p-7 transition-all duration-300",
                  popular
                    ? "border-[#e2f331] shadow-[0_0_80px_-20px_rgba(226,243,49,0.55)]"
                    : "border-white/10 hover:border-white/25",
                ].join(" ")}
              >
                {popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#e2f331] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                    ★ {t.plans.mostPopular}
                  </span>
                )}
                {plan.tier === "lifetime" && !popular && (
                  <span className="absolute -top-3 left-7 rounded-full border border-[#00ffa3]/40 bg-[#0a0e14] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#00ffa3]">
                    ∞ {t.plans.lifetimeBadge}
                  </span>
                )}

                <p className="font-mono text-xs text-white/40 line-through">
                  ${plan.original} {t.allInOne.original}
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold tracking-tight text-white">
                    ${plan.price}
                  </span>
                </div>
                <span className="mt-2 self-start rounded-md border border-[#00ffa3]/30 bg-[#00ffa3]/5 px-2 py-0.5 font-mono text-[10px] font-bold text-[#00ffa3]">
                  %{plan.discount} {t.plans.discount}
                </span>

                <button
                  type="button"
                  data-testid={`aio-select-btn-${plan.tier}`}
                  onClick={() =>
                    setExpanded(isOpen ? null : plan.planId)
                  }
                  className={[
                    "mt-6 w-full rounded-xl px-5 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200",
                    popular
                      ? "bg-[#e2f331] text-black hover:bg-[#cde010]"
                      : "border border-white/15 bg-white/[0.02] text-white hover:border-[#e2f331] hover:bg-[#e2f331] hover:text-black",
                  ].join(" ")}
                >
                  {isOpen ? "✕  Kapat / Close" : t.allInOne[CTA_KEY[plan.tier]]}
                </button>

                <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5 text-sm text-white/70">
                  {ALL_IN_ONE.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={14} className="mt-1 shrink-0 text-[#e2f331]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <WhopCheckout
                        planId={plan.planId}
                        testId={`aio-whop-iframe-${plan.tier}`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
