import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import WhopCheckout from "@/components/WhopCheckout";

export default function WhopCheckoutModal({
  open,
  onOpenChange,
  planId,
  title,
  subtitle,
  testId,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid={testId}
        className="max-w-2xl border border-white/10 bg-[#0a0e14] p-0 text-white sm:rounded-2xl"
      >
        <div className="border-b border-white/[0.07] px-6 py-4">
          <DialogTitle className="font-heading text-base font-semibold uppercase tracking-[0.16em] text-white">
            {title}
          </DialogTitle>
          {subtitle && (
            <DialogDescription className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#e2f331]">
              {subtitle}
            </DialogDescription>
          )}
        </div>
        <div className="max-h-[75vh] overflow-y-auto p-4">
          {open && (
            <WhopCheckout
              planId={planId}
              testId={`whop-checkout-iframe-${planId}`}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
