import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const NAV_ITEMS = [
  { key: "algorithms", href: "#algorithms" },
  { key: "pack", href: "#all-in-one" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.07] bg-[#0a0e14]/80 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <a
          href="#top"
          data-testid="logo-link"
          className="flex items-center gap-2.5 group"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-[#e2f331]/40 bg-[#e2f331]/10 font-heading text-[#e2f331] text-sm font-black">
            nF
          </span>
          <span className="font-heading text-sm font-semibold tracking-[0.2em] text-white uppercase">
            PriVYAlgo<span className="text-[#e2f331]">/</span> TW Indicators
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              data-testid={`nav-link-${item.key}`}
              className="font-mono text-xs uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#e2f331]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            data-testid="lang-toggle"
            role="group"
            aria-label="Language toggle"
            className="hidden items-center rounded-full border border-white/10 bg-white/[0.02] p-0.5 font-mono text-[11px] sm:flex"
          >
            <button
              type="button"
              data-testid="lang-toggle-tr"
              onClick={() => setLang("tr")}
              className={[
                "rounded-full px-3 py-1 uppercase tracking-[0.15em] transition-all",
                lang === "tr"
                  ? "bg-[#e2f331] text-black"
                  : "text-white/60 hover:text-white",
              ].join(" ")}
            >
              TR
            </button>
            <button
              type="button"
              data-testid="lang-toggle-en"
              onClick={() => setLang("en")}
              className={[
                "rounded-full px-3 py-1 uppercase tracking-[0.15em] transition-all",
                lang === "en"
                  ? "bg-[#e2f331] text-black"
                  : "text-white/60 hover:text-white",
              ].join(" ")}
            >
              EN
            </button>
          </div>

          <a
            href="#all-in-one"
            data-testid="header-cta"
            className="hidden rounded-full bg-[#e2f331] px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-[#cde010] md:inline-flex"
          >
            {t.nav.cta} →
          </a>

          <button
            type="button"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.07] bg-[#0a0e14]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${item.key}`}
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/80"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 font-mono text-[11px]">
              <button
                type="button"
                data-testid="mobile-lang-tr"
                onClick={() => setLang("tr")}
                className={`rounded-full px-3 py-1 uppercase tracking-[0.15em] ${
                  lang === "tr" ? "bg-[#e2f331] text-black" : "border border-white/10 text-white/70"
                }`}
              >
                TR
              </button>
              <button
                type="button"
                data-testid="mobile-lang-en"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 uppercase tracking-[0.15em] ${
                  lang === "en" ? "bg-[#e2f331] text-black" : "border border-white/10 text-white/70"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
