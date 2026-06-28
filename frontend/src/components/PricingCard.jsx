import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import WhopCheckout from "@/components/WhopCheckout";

const TIER_LABEL_KEY = {
  "3m": "3m",
  "6m": "6m",
  "12m": "12m",
  lifetime: "lifetime",
};

export default function PricingCard({ algoId, plan }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);

  const popular = !!plan.popular;
  const lifetime = plan.tier === "lifetime";
  const planLabel = t.plans[TIER_LABEL_KEY[plan.tier]];
  const testIdBase = `${algoId}-${plan.tier}`;

  return (
    <div
      data-testid={`pricing-card-${testIdBase}`}
      className={[
        "relative flex flex-col rounded-2xl border bg-[#0e141b] p-6 transition-all duration-300",
        popular
          ? "border-[#e2f331] shadow-[0_0_60px_-15px_rgba(226,243,49,0.45)]"
          : "border-white/10 hover:border-white/25",
        expanded ? "ring-1 ring-[#e2f331]/40" : "",
      ].join(" ")}
    >
      {popular && (
        <span
          data-testid={`pricing-badge-popular-${testIdBase}`}
          className="absolute -top-3 left-6 rounded-full bg-[#e2f331] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black"
        >
          ★ {t.plans.mostPopular}
        </span>
      )}
      {lifetime && !popular && (
        <span className="absolute -top-3 left-6 rounded-full border border-[#00ffa3]/40 bg-[#0a0e14] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#00ffa3]">
          ∞ {t.plans.lifetimeBadge}
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-base font-semibold text-white/90">
          {planLabel}
        </h3>
        <span
          data-testid={`pricing-discount-${testIdBase}`}
          className="rounded-md border border-[#00ffa3]/30 bg-[#00ffa3]/5 px-2 py-0.5 font-mono text-[10px] font-bold text-[#00ffa3]"
        >
          %{plan.discount} {t.plans.discount}
        </span>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-mono text-4xl font-bold tracking-tight text-[#e2f331]">
          ${plan.price}
        </span>
      </div>

      <button
        type="button"
        data-testid={`pricing-select-btn-${testIdBase}`}
        onClick={() => setExpanded((v) => !v)}
        className={[
          "mt-6 w-full rounded-xl px-5 py-3 font-heading text-sm font-bold uppercase tracking-[0.14em] transition-all duration-200",
          popular
            ? "bg-[#e2f331] text-black hover:bg-[#cde010]"
            : "border border-white/15 bg-white/[0.02] text-white hover:border-[#e2f331] hover:bg-[#e2f331] hover:text-black",
        ].join(" ")}
      >
        {expanded ? "✕  Kapat / Close" : popular ? t.plans.ctaPopular : t.plans.cta}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="whop"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <WhopCheckout
              planId={plan.planId}
              testId={`whop-checkout-iframe-${testIdBase}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
