import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { COMPANY } from "@/data/algorithms";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      id="contact"
      data-testid="site-footer"
      className="relative border-t border-white/[0.07] bg-[#080b11] pt-20 pb-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-[#e2f331]/40 bg-[#e2f331]/10 font-heading text-[#e2f331] text-sm font-black">
                nF
              </span>
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white">
                nFinans <span className="text-[#e2f331]">/</span> PremiumAlgo
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              {t.footer.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-white/80 transition-colors hover:border-[#e2f331] hover:text-[#e2f331]"
              >
                <MessageCircle size={13} /> {COMPANY.whatsappDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                data-testid="footer-email"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-white/80 transition-colors hover:border-[#e2f331] hover:text-[#e2f331]"
              >
                <Mail size={13} /> {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Company legal */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e2f331]">
              {t.footer.company}
            </h4>
            <dl className="mt-5 space-y-3 text-xs text-white/70">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {t.footer.legalLabel}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-white/80">
                  {COMPANY.legalName}
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {t.footer.taxLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-xs text-white/80">
                    {COMPANY.taxOffice} / {COMPANY.vkn}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {t.footer.mersisLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-xs text-white/80">
                    {COMPANY.mersis}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e2f331]">
              {t.footer.addressLabel}
            </h4>
            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/70">
              <MapPin size={14} className="mt-1 shrink-0 text-[#e2f331]" />
              {COMPANY.address}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-3 border-t border-white/[0.07] pt-6 font-mono text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} nFinans Premium Algo — {t.footer.rights}
          </p>
          <p>
            <span className="text-[#e2f331]">●</span> Live · Order Flow · Pine Script v5
          </p>
        </div>
      </div>
    </footer>
  );
}
