export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const isAnalyticsEnabled = Boolean(GA_MEASUREMENT_ID);

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export function pageview(url: string) {
  if (!isAnalyticsEnabled || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!isAnalyticsEnabled || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", name, params);
}

export type PurchaseItem = {
  item_id: string;
  item_name: string;
  quantity: number;
  price: number;
};

export function trackPurchase(input: {
  transactionId: string;
  value: number;
  shipping?: number;
  currency?: string;
  items: PurchaseItem[];
}) {
  trackEvent("purchase", {
    transaction_id: input.transactionId,
    value: input.value,
    shipping: input.shipping ?? 0,
    currency: input.currency ?? "JPY",
    items: input.items
  });
}
