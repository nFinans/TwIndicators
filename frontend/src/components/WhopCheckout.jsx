import { useEffect, useRef, useState } from "react";

// Loads the Whop loader (already preloaded in index.html) and renders the
// inline checkout div. The Whop loader watches DOM for elements with
// data-whop-checkout-plan-id and mounts the iframe automatically.
// We expose an imperative re-mount via window.whopCheckout?.refresh()
// if available, otherwise we rely on the loader's MutationObserver.

export default function WhopCheckout({ planId, testId }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Give the loader a tick to detect the new node.
    const t = setTimeout(() => setReady(true), 50);
    // Try to nudge any global mount API the loader might expose.
    if (typeof window !== "undefined") {
      const w = /** @type {any} */ (window);
      if (w.whopCheckout?.refresh) {
        try {
          w.whopCheckout.refresh();
        } catch (_) {
          /* noop */
        }
      }
    }
    return () => clearTimeout(t);
  }, [planId]);

  return (
    <div
      ref={ref}
      data-testid={testId}
      className="mt-4 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]"
      style={{ minHeight: 620 }}
    >
      <div
        data-whop-checkout-plan-id={planId}
        data-whop-checkout-theme="dark"
        style={{ width: "100%", minHeight: 600 }}
      />
      {!ready && (
        <div className="flex h-[600px] w-full items-center justify-center text-[#8b949e] font-mono text-xs">
          Whop checkout yükleniyor…
        </div>
      )}
    </div>
  );
}
