import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* Background grid + image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.8) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14]/30 via-[#0a0e14]/70 to-[#0a0e14]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Glow blob */}
        <div className="absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#e2f331]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#e2f331]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#e2f331]">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-[14vw] font-light leading-[0.92] tracking-tight text-white sm:text-[10vw] lg:text-[140px]"
        >
          <span className="block italic">{t.hero.title_l1}</span>
          <span className="mt-2 block">
            <span className="text-white/30">AI is new </span>
            <span className="bg-gradient-to-r from-[#e2f331] via-[#e2f331] to-[#00ffa3] bg-clip-text text-transparent">
              electricity.
            </span>
          </span>
        </motion.h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            data-testid="hero-lede"
          >
            {t.hero.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur"
          >
            <p className="font-display text-lg italic leading-snug text-white/85">
              {t.hero.quote}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#e2f331]">
              {t.hero.quoteAuthor}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#all-in-one"
            data-testid="hero-cta-primary"
            className="group inline-flex items-center gap-3 rounded-full bg-[#e2f331] px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#cde010]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#algorithms"
            data-testid="hero-cta-secondary"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-[#e2f331] hover:text-[#e2f331]"
          >
            {t.hero.ctaSecondary}
            <ChevronDown size={16} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:max-w-2xl"
        >
          {t.hero.stats.map((s, i) => (
            <div
              key={i}
              data-testid={`hero-stat-${i}`}
              className="bg-[#0e141b] p-5 sm:p-6"
            >
              <div className="font-mono text-3xl font-bold text-[#e2f331] sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-24 overflow-hidden border-y border-white/[0.07] bg-black/40 py-4">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              <span>BTCUSDT 64,212.50 ▲</span>
              <span className="text-[#e2f331]">/</span>
              <span>SPX 5,712.18 ▼</span>
              <span className="text-[#e2f331]">/</span>
              <span>ETHUSDT 3,418.20 ▲</span>
              <span className="text-[#e2f331]">/</span>
              <span>NVDA 142.04 ▲</span>
              <span className="text-[#e2f331]">/</span>
              <span>EURUSD 1.0742 ▼</span>
              <span className="text-[#e2f331]">/</span>
              <span>SOL 164.21 ▲</span>
              <span className="text-[#e2f331]">/</span>
              <span>SMART MONEY FLOW · LIVE</span>
              <span className="text-[#e2f331]">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
