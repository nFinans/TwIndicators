import { useLang } from "@/contexts/LangContext";

export default function AlgorithmsIntro() {
  const { t } = useLang();
  return (
    <section
      id="algorithms"
      data-testid="algorithms-intro"
      className="relative pt-20 pb-4"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">/01—05</span>
            <span className="h-px w-8 bg-[#e2f331]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e2f331]">
              {t.sectionLabels.algorithms}
            </span>
          </div>
          <p className="max-w-xl font-display text-2xl font-light italic leading-snug text-white/85 sm:text-3xl">
            {t.sectionLabels.algorithmsKicker}
          </p>
        </div>
      </div>
    </section>
  );
}
